
// jtr/src/scripts/db_helpers.js


/* Given a query string, fetch data from the AJTR API and return the records array */
export default async function getApiData(query) {
    const apiBase = 'https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/';
    const url = `${apiBase}${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.records;

}