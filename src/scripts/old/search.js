// jtr/src/scripts/search.js

// Search-related functions

import { getApiData } from './db_helpers.js';
//import Fuse from 'fuse.js';

// Search persons by name (partial match).
export async function runSearch(params) {
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
   return results;
}

async function relevancySort(records, searchTerm) {
    //const term = searchTerm.toLowerCase();
}