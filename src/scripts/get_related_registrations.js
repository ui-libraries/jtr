// /jtr/src/scripts/get_related_registrations.js

// Asynchronous function that calls four APIs in parallel, tags each returned record with a "role",
// and returns a single flattened array of all records.
//


export default async function getRelatedRegistrations(id, role) {
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
    } else if (role === "Registered Person" || role === "Registered Person's Mother") {
        const records = await getApiData(`persons?filter=pid,eq,${id}&join=registered`);
        const regs = records[0].registered;

        for (let r of regs) {
            const current = {};
            current.regid = r.regid;
            current.role = (r.registered_pid === id) ? "Registered Person" : "Registered Person's Mother";
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

export async function getRegistrationsByRegid(id) {
   const data = await getApiData(`registrations?filter=regid,eq,${id}&join=registered&join=enslaving`);

     return data;
}

async function getApiData(query) {
    const apiBase = 'https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/';
    const url = `${apiBase}${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.records;

}

/*async function fetchAndTag(id, join) {
    const apiBase = `https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/persons?filter=pid,eq,${id}&join=`;
    const url = apiBase + join;
    const response = await fetch(url);
    const data = await response.json();
    const registrations = data.records[0].registered;

    let results = [];

    for (let r of registrations) {
        let current = {};
        current.regid = r.regid.regid;
        current.old_regid = r.regid.old_regid;
        if (current.registered_pid === id) current.role = "Registered Person's Mother" || "Registered Person";
        current.name_recorded = r.name_as_recorded;
        current.race_recorded = r.race;
        current.mother_name = r.mother_name;
        current.mother_race = r.mother_race;
    }


        //Name as recorded
        //Race as recorded
        // Registered enslaver
        //date
        //county
        results.push(current);

    }*/


