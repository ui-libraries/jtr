// /jtr/src/scripts/get_related_registrations.js

// Asynchronous function that calls four APIs in parallel, tags each returned record with a "role",
// and returns a single flattened array of all records.
//
// Adjust the endpoint URLs to match your API.

export default async function getRelatedRegistrations(id) {
    if (!id) throw new Error('id is required');

    console.log("Fetching related registrations for id:", id);

    const apiBase = 'https://s-lib024.lib.uiowa.edu/ajtr/api.php/records';

    const endpoints = [
        { url: `${apiBase}/registered?filter=registered_pid,eq,${id}&join=registrations`, role: 'Registered Person' },
        { url: `${apiBase}/registered?filter=mother_pid,eq,${id}&join=registrations`, role: 'Mother of Registered Person' }
        //{ url: `${apiBase}/api/registrations/${id}/related`, role: 'related' },
        //{ url: `${apiBase}/api/registrations/${id}/dependents`, role: 'dependent' }
    ]; 

    // map each endpoint to a fetch promise that always resolves to an array of records
    const promises = endpoints.map(({ url, role }) =>
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
                return res.json();
            })
            .then(data => {
                // normalize response to an array (supporting either an array or { items: [...] })
                const items = Array.isArray(data) ? data : (Array.isArray(data.items) ? data.items : []);
                return items.map(item => ({ ...item, role }));
            })
            .catch(() => {
                // on any error, return an empty array for that role
                console.log(`Error fetching data from ${url}, returning empty array.`);
                return [];
            })
    );

    const results = await Promise.allSettled(promises);

    console.log("Fetched related registrations:", results);
    // flatten and return
    return results.flat();
}

// Example usage:
// (async () => {
//   const collated = await getRelatedRegistrations('12345');
//   console.log(collated);
// })();