// /jtr/src/scripts/get_tags.js

// Functions to get tags from the API.

import { getApiData } from './db_helpers.js';
import { getRegViewByRegid } from './get_related_registrations.js';

// Get tag by ID. Get all tags if no ID provided.
export async function getTags(id = '') {
    let query = 'tags';
    if (id !== '') {
        query += `?filter=tag_id,eq,${id}`;
    } 
    const data = await getApiData(query);
    return data;
} 


// Get all tags related to a registration.
export async function getTagsForRegistration(rid) {
    console.log(rid);
    
    let query = `taglink?filter=entity_id,eq,${rid}&join=tags`;
    const data = await getApiData(query);
    console.log(data);
    return data;

}

// Get all registrations with a given tag. 
export async function getRegsWithTag(id){
    let query = `taglink?filter=tag_id,eq,${id}`;
    const regids = await getApiData(query);

    let registrations = [];
    let promises = [];

    regids.forEach(regid => {
        const promise = getRegViewByRegid(regid.entity_id).then(result => {
            registrations.push(result[0]);
        });
        promises.push(promise);
    });

    await Promise.all(promises);

    return registrations;
}