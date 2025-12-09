// jtr/src/scripts/get_counties.js

import getApiData from './db_helpers.js';


// Get county select options for search forms.
export async function getCountySelectOptions(version='historic') {
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
export async function getCountyCounts(version='modern') {
    console.log('Getting county counts for version:', version);
    const counties = await getAllCounties(version);
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
export async function getAllCounties(version='historic') {
    console.log('in secondary, fetching:', version);
    const field = version === 'historic' ? 'county' : 'modern_county';
    const records = await getApiData(`registrations?include=${field}`);
    return records;
}