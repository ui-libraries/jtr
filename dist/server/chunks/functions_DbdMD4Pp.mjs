import Fuse from 'fuse.js';

// jtr/src/scripts/functions.js


/* Given a query string, fetch data from the AJTR API and return the records array */
async function getApiData(query) {
    const apiBase = 'https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/';
    const url = `${apiBase}${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.records;

}


/*******************************************************************************************
 *    County-related functions   */

// Get county select options for search forms.
async function getCountySelectOptions(version='historic') {
    const counties = await getAllCounties(version);
    const field = version === 'historic' ? 'county' : 'modern_county';
    const names = counties
        .map(record => record[field])
        .filter(name => name && name.trim() !== '')
        .map(name => name.trim());
    const unique = Array.from(new Set(names)).sort((a, b) => a.localeCompare(b));
    const options = unique.map(name => ({ label: name, value: name }));
    return options;

}


// Not checked yet!!!
// Get counts of registrations per county.
async function getCountyCounts(version='modern') {
    const counties = await getAllCounties(version);
    const field = version === 'historic' ? 'county' : 'modern_county';

    const counts = counties
        .map(r => r[field])
        .filter(name => name && name.trim() !== '')
        .map(name => name.trim())
        .reduce((acc, name) => {
            acc[name] = (acc[name] || 0) + 1;
            return acc;
        }, {});
    const result = Object.keys(counts)
        .map(county => ({ county, count: counts[county] }))
        .sort((a, b) => a.county.localeCompare(b.county));
    return result;
}

// Helper: fetch all county names.
async function getAllCounties(version='historic') {
    const field = version === 'historic' ? 'county' : 'modern_county';
    const records = await getApiData(`registrations?include=${field}`);
    return records;
}

/*******************************************************************************************
 *    Dashboard functions  */

async function getDashInfo() {

    let dashInfo = {};

    //get counts for people, registrations, counties
    const people = await getApiData('persons');
    dashInfo.totalPersons = people.length;

    const regs = await getApiData('registrations?include=regid,iso_date,modern_county,registration_md');
    dashInfo.totalRegistrations = regs.length;

    const countiesSet = new Set();
    regs.forEach(reg => {
        if (reg.modern_county && reg.modern_county.trim() !== '') {     
            countiesSet.add(reg.modern_county.trim());
        }   
    });
    dashInfo.totalCounties = countiesSet.size;

    dashInfo.transcriptions = regs.filter(r => r.registration_md && r.registration_md.trim() !== '').length;

    //transform registrations per year for chart

    const years = regs
                .map(r => r.iso_date ? new Date(r.iso_date).getFullYear() : null)
                .filter(y => y !== null && !isNaN(y));

    const yearCounts = Array.from(
        years.reduce((acc, year) => {
            acc.set(year, (acc.get(year) || 0) + 1);
            return acc;
        }, new Map())
    ).sort((a, b) => a[0] - b[0]);

    dashInfo.regsPerYear = yearCounts;

    return dashInfo;

}

/*******************************************************************************************
 *   Functions for getting registration data  */

// Get related registrations for a person by their role.
async function getRelatedRegistrations(id, role) {
    if (!id) throw new Error('id is required');

    let rids = [];
    if (role === "Enslaver" || role === "Registrant") {
        const recRegistrant = await getApiData(`persons?filter=pid,eq,${id}&join=registrations`);
        const regsR = recRegistrant[0].registrations;
        const recEnslaver = await getApiData(`persons?filter=pid,eq,${id}&join=enslaving`);
        const regsE = recEnslaver[0].enslaving;
        for (let r of regsR) {
            const current = {};
            current.regid = r.regid;
            current.role = (r.registrant_pid === id) ? "Registrant" : "Enslaver";
            rids.push(current);
        }
        for (let r of regsE) {
            const current = {};
            current.regid = r.regid;
            current.role = (r.enslaver_pid === id) ? "Enslaver" : "Registrant";
            rids.push(current);
        }

        // merge duplicates by regid, combining roles (unique, comma-separated)
        const mergedMap = new Map();
        for (const item of rids) {
            const key = String(item.regid);
            if (!mergedMap.has(key)) {
                mergedMap.set(key, { ...item, role: String(item.role).trim() });
            } else {
                const existing = mergedMap.get(key);
                const roles = new Set(existing.role.split(',').map(s => s.trim()).filter(Boolean));
                roles.add(String(item.role).trim());
                existing.role = Array.from(roles).join(', ');
            }
        }
        rids = Array.from(mergedMap.values());
    } else if (role === "Registered Person" || role === "Mother of Registered Person") {
        const records = await getApiData(`persons?filter=pid,eq,${id}&join=registered`);
        const regs = records[0].registered;

        for (let r of regs) {
            const current = {};
            current.regid = r.regid;
            current.role = (r.registered_pid === id) ? "Registered Person" : "Mother of Registered Person";
            rids.push(current);
        }

        // remove duplicates by regid, keep the first occurrence and do NOT merge roles
        const mergedMap = new Map();
        for (const item of rids) {
            const key = String(item.regid);
            if (!mergedMap.has(key)) {
            mergedMap.set(key, { ...item, role: String(item.role).trim() });
            }
        }
        
        rids = Array.from(mergedMap.values());
    } else {
        throw new Error('Invalid role provided: ' + role);
    }

    // fetch full registration records and attach role
    const detailedRegs = await Promise.all(rids.map(async (item) => {
        try {
            const data = await getRegistrationsByRegid(item.regid);
            const record = Array.isArray(data) ? data[0] || { regid: item.regid } : (data || { regid: item.regid });
            return { ...record, role: item.role };
        } catch (e) {
            console.error('Error fetching registration', item.regid, e);
            return { regid: item.regid, role: item.role };
        }
    }));
    return detailedRegs;
}

// Fetch registration(s) records by regid.
async function getRegistrationsByRegid(id) {
   const data = await getApiData(`registrations?filter=regid,eq,${id}&join=registered&join=enslaving`);

     return data;
}

/*******************************************************************************************
 *   Search functions  */

// Search persons by name (partial match).
async function runSearch(params) {
   let query = params.query + "?";

   const paramOps = [
        { field: 'registered_name', value: params.registered_name, operator: 'ma' },
        { field: 'enslaver_name', value: params.enslaver_name, operator: 'ma' },
        { field: 'iso_date', value: params.after_date, operator: 'gt' },
        { field: 'iso_date', value: params.before_date, operator: 'lt' },
        { field: 'county', value: params.county, operator: 'eq' },
        { field: 'modern_county', value: params.modern_county, operator: 'eq' },
        { field: 'name', value: params.name, operator: 'ma' },
        { field: 'imp_sex', value: params.imp_sex, operator: 'eq' },
        { field: 'norm_race', value: params.norm_race, operator: 'eq' },
        { field: 'role', value: params.role, operator: 'eq' }
   ];

    for (const op of paramOps) {
        const val = op.value;
        if (val !== undefined && val !== null && val !== '') {
            query += `&filter=${op.field},${op.operator},${encodeURIComponent(val)}`;
        }
    }
    const results = await getApiData(query);

    //if a name is provided, sort by relevancy 
    if (params.registered_name || params.enslaver_name || params.name) {
        const labels = [
            { label: 'registered_name', value: params.registered_name },
            { label: 'enslaver_name', value: params.enslaver_name },
            { label: 'name', value: params.name }
        ].filter(item => item.value && item.value.trim() !== '');

        const rankedResults = await relevancySort(results, labels);
        return rankedResults;
    }
   return results;
}
//Sort records by relevancy to search term (not implemented yet)
async function relevancySort(records, terms) {
    const fuseOptions = {
        useExtendedSearch: true,
        ignoreDiacritics: true,
        threshold: 0.9
    };

    const results = [];

    for (const { label, value } of terms) {
        if (!value || !value.trim()) continue;

        const fuse = new Fuse(records, { ...fuseOptions, keys: [label] });
        const searchResults = fuse.search(value).map(result => result.item);

        // Add results to the final list, avoiding duplicates
        for (const item of searchResults) {
            if (!results.includes(item)) {
                results.push(item);
            }
        }
    }

    return results;
}

/*******************************************************************************************
 *   Related persons functions  */

// Get family list for a person.
async function getFamilyList(pid, data) {

    if (!Array.isArray(data)) return [];

    const results = [];

    for (const record of data) {

        if (pid !== record.pid1 && pid !== record.pid2) return null; // skip non-matching records

        const id = pid === record.pid1 ? record.pid2 : record.pid1;
        var role = pid === record.pid1 ? record.role2 : record.role1;
        role = cap(role);
        const name = await fetchPersonName(id);

        results.push({ role, name, id });

    }

    return results;
}

// Helper: fetch a person's name by id.
async function fetchPersonName(id) {

    const res = await fetch(`https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/persons?filter=pid,eq,${id}`);
    if (!res.ok) throw new Error('Failed to fetch person');

    const data = await res.json();
    const person = data.records[0];
    return person.name;

}

// Helper: Capitalize first letter of a string.
function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*******************************************************************************************
 *   Tag functions  */

// Get tag by ID. Get all tags if no ID provided.
async function getTags(id = '') {
    let query = 'tags';
    if (id !== '') {
        query += `?filter=tag_id,eq,${id}`;
    } 
    const data = await getApiData(query);
    return data;
} 

// Get all tags related to a person.
async function getTagsForPerson(id) {
    
    let query = `taglink?filter=entity_id,eq,${id}&join=tags`;
    const data = await getApiData(query);
    return data;

}

// Get all people with a given tag.
async function getPersonsWithTag(id){
    let query = `taglink?filter=tag_id,eq,${id}`;
    const personids = await getApiData(query); 
    let persons = [];
    let promises = [];

    personids.forEach(personid => {
        const promise = getApiData(`persons?filter=pid,eq,${personid.entity_id}`).then(result => {
            persons.push(result[0]);
        });
        promises.push(promise);
    });

    await Promise.all(promises);        
    return persons;
}

export { getRelatedRegistrations as a, getTagsForPerson as b, getRegistrationsByRegid as c, getCountySelectOptions as d, getTags as e, getPersonsWithTag as f, getFamilyList as g, getDashInfo as h, getCountyCounts as i, runSearch as r };
