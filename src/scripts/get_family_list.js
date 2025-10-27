// jtr/src/scripts/get_family_list.js

export default async function getFamilyList(pid, data) {

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