import { getApiData } from "./db_helpers";  
import * as d3 from "d3";


export default async function getDashInfo() {

    let dashInfo = {};


    //get counts for people, registrations, counties
    const people = await getApiData('persons');
    dashInfo.totalPersons = people.length;

    const regs = await getApiData('registrations?include=regid,iso_date,modern_county');
    dashInfo.totalRegistrations = regs.length;

    const countiesSet = new Set();
    regs.forEach(reg => {
        if (reg.modern_county && reg.modern_county.trim() !== '') {     
            countiesSet.add(reg.modern_county.trim());
        }   
    });
    dashInfo.totalCounties = countiesSet.size;

    //transform registrations per year for chart

    const years = regs
                .map(r => r.iso_date ? new Date(r.iso_date).getFullYear() : null)
                .filter(y => y !== null && !isNaN(y));

    const yearCounts = d3.rollups(
        years,
        v => v.length,
        d => d
    ).sort((a, b) => a[0] - b[0]);

    dashInfo.regsPerYear = yearCounts;

    return dashInfo;

}