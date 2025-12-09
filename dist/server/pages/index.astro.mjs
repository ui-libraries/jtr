import { c as createComponent, m as maybeRenderHead, a as renderTemplate, j as createAstro, r as renderComponent, p as renderSlot, l as addAttribute, G as defineScriptVars } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Ck7qvX2C.mjs';
import 'clsx';
import { h as getDashInfo, i as getCountyCounts } from '../chunks/functions_DbdMD4Pp.mjs';
export { renderers } from '../renderers.mjs';

const $$HomeBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container-fluid"> <div class="banner text-left d-flex flex-column" style="background-image: url('../BannerFull.jpg'); background-size: cover; background-position: bottom; height: 400px;"> <div id="banner-overlay"> <p>A Database of Pennsylvania's Surviving Slave County Registries</p> </div> </div> <div id="banner-caption"> <p>A Ferry Scene on the Susquehanna at Wright's Ferry, near Havre de Grace. Pavel Petrovich Svinin, 1811-ca. 1813. <a href="https://metmuseum.org/art/collection/search/12719">metmuseum.org/art/collection/search/12719</a></p> </div></div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/HomeBanner.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeBanner", $$HomeBanner, {})} ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/layouts/HomeLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$DashboardBigNumber = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DashboardBigNumber;
  const { divId, label, number } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(divId, "id")} class="text-center big-number-container"> <p class="big-number">${number}</p> <p class="dash-label">${label}</p> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/DashboardBigNumber.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const dashInfo = await getDashInfo();
  const data = dashInfo.regsPerYear;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="overview-dashboard" class="w-100 p-3"> <div class="d-flex justify-content-between mb-3 bn-row"> ', " ", " ", " ", ' </div> <div id="bars-container"> <div id="registration-bars"></div> <p class="dash-label">Registrations by year</p> </div> </div> <script type="module" src="https://d3js.org/d3.v7.min.js"><\/script> <script>(function(){', '\n    //set dimensions and margins for the chart\n\n    document.addEventListener("DOMContentLoaded", () => {\n        const margin = {top: 20, right: 20, bottom: 40, left: 20},\n            width = 1000 - margin.left - margin.right,\n            height = 220 - margin.top - margin.bottom;\n\n       const svgBars = d3.select("#registration-bars")\n            .append("svg")\n            .attr("width", width + margin.left + margin.right)\n            .attr("height", height + margin.top + margin.bottom)\n            .append("g")\n            .attr("transform", `translate(${margin.left},${margin.top})`);\n\n            // Set up scales\n        const x = d3.scaleBand()\n            .domain(data.map((d) => d[0]))\n            .range([0, width])\n            .padding(0.1);\n\n        const y = d3.scaleLinear()\n            //.domain([0, d3.max(data, (d) => d[1])])\n            .domain([0, d3.max(data, (d) => d[1])])\n            .nice()\n            .range([height, 0]);\n\n        // Add x-axis with a tick every ten years\n        svgBars.append("g")\n            .attr("transform", `translate(0,${height})`)\n            .call(d3.axisBottom(x)\n                .tickValues(data.map((d) => d[0]).filter((year) => year % 5 === 0)));\n\n        svgBars.selectAll(".tick text")\n            .style("font-size", "14px");\n\n        \n            // draw bars\n        svgBars.selectAll(".bar")\n            .data(data)\n            .enter()\n            .append("rect")\n            .attr("class", "bar")\n            .attr("x", (d) => x(d[0]))\n            .attr("y", (d) => y(d[1]))\n            .attr("width", x.bandwidth())\n            .attr("height", (d) => height - y(d[1]))\n            .attr("fill", "#536B76");\n    });\n            \n})();<\/script>'], ["", '<div id="overview-dashboard" class="w-100 p-3"> <div class="d-flex justify-content-between mb-3 bn-row"> ', " ", " ", " ", ' </div> <div id="bars-container"> <div id="registration-bars"></div> <p class="dash-label">Registrations by year</p> </div> </div> <script type="module" src="https://d3js.org/d3.v7.min.js"><\/script> <script>(function(){', '\n    //set dimensions and margins for the chart\n\n    document.addEventListener("DOMContentLoaded", () => {\n        const margin = {top: 20, right: 20, bottom: 40, left: 20},\n            width = 1000 - margin.left - margin.right,\n            height = 220 - margin.top - margin.bottom;\n\n       const svgBars = d3.select("#registration-bars")\n            .append("svg")\n            .attr("width", width + margin.left + margin.right)\n            .attr("height", height + margin.top + margin.bottom)\n            .append("g")\n            .attr("transform", \\`translate(\\${margin.left},\\${margin.top})\\`);\n\n            // Set up scales\n        const x = d3.scaleBand()\n            .domain(data.map((d) => d[0]))\n            .range([0, width])\n            .padding(0.1);\n\n        const y = d3.scaleLinear()\n            //.domain([0, d3.max(data, (d) => d[1])])\n            .domain([0, d3.max(data, (d) => d[1])])\n            .nice()\n            .range([height, 0]);\n\n        // Add x-axis with a tick every ten years\n        svgBars.append("g")\n            .attr("transform", \\`translate(0,\\${height})\\`)\n            .call(d3.axisBottom(x)\n                .tickValues(data.map((d) => d[0]).filter((year) => year % 5 === 0)));\n\n        svgBars.selectAll(".tick text")\n            .style("font-size", "14px");\n\n        \n            // draw bars\n        svgBars.selectAll(".bar")\n            .data(data)\n            .enter()\n            .append("rect")\n            .attr("class", "bar")\n            .attr("x", (d) => x(d[0]))\n            .attr("y", (d) => y(d[1]))\n            .attr("width", x.bandwidth())\n            .attr("height", (d) => height - y(d[1]))\n            .attr("fill", "#536B76");\n    });\n            \n})();<\/script>'])), maybeRenderHead(), renderComponent($$result, "DashboardBigNumber", $$DashboardBigNumber, { "divId": "registration-count", "label": "Registrations", "number": dashInfo.totalRegistrations }), renderComponent($$result, "DashboardBigNumber", $$DashboardBigNumber, { "divId": "people-count", "label": "People", "number": dashInfo.totalPersons }), renderComponent($$result, "DashboardBigNumber", $$DashboardBigNumber, { "divId": "county-rep-count", "label": "Counties Represented", "number": dashInfo.totalCounties }), renderComponent($$result, "DashboardBigNumber", $$DashboardBigNumber, { "divId": "transcription-count", "label": "Registrations Transcribed", "number": dashInfo.transcriptions }), defineScriptVars({ data }));
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Dashboard.astro", void 0);

const $$Astro = createAstro();
const $$Tile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tile;
  const { href, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-md-4"> <a${addAttribute(href, "href")}> <div class="nav-tile d-flex align-items-center"> <p class="mb-0">${title}</p> </div> </a> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Tile.astro", void 0);

const $$NavTiles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-100 p-3"> <div class="row g-3"> ${renderComponent($$result, "Tile", $$Tile, { "href": "search.html", "title": "Find People and Registrations" })} ${renderComponent($$result, "Tile", $$Tile, { "href": "history.html", "title": "Historical Context" })} ${renderComponent($$result, "Tile", $$Tile, { "href": "essays.html", "title": "Essays" })} </div> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/NavTiles.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  let counts = await getCountyCounts();
  return renderTemplate(_a || (_a = __template(["", '<div id="county-map"></div> <script>(function(){', `
 document.addEventListener("DOMContentLoaded", () => {   

    fetch("https://gist.githubusercontent.com/sdwfrost/d1c73f91dd9d175998ed166eb216994a/raw/e89c35f308cee7e2e5a784e1d3afc5d449e9e4bb/counties.geojson")
        .then(response => response.json())
        .then(data => {
            const paFeatures = data.features.filter(feature => feature.properties.STATEFP === "42"); // "42" is the FIPS code for Pennsylvania

            // Add the counts to their corresponding counties in paFeatures
            paFeatures.forEach(feature => {
                const countyData = counts.find(county => county.county === feature.properties.NAME);
                feature.properties.REGS = countyData ? countyData.count : 0; // Add REGS property or default to 0
            });

            console.log('PA Features with counts:', paFeatures);

            console.log('County Counts after dom load:', counts);
    const colorScale = d3.scaleSequential(d3.interpolatePuBuGn)
        .domain([0, Math.pow(d3.max(counts, d => d.count), 0.5)]);
        
    // Create a map projection
    const projection = d3.geoMercator()
        .center([-77.8, 41.0]) // Center on Pennsylvania
        .scale(8000) // Adjust scale as needed
        .translate([400, 300]); // Adjust translation as needed

    // Create a path generator
    const path = d3.geoPath().projection(projection);

    // Create an SVG element to hold the map
    const svg = d3.select("#county-map")
        .append("svg")
        .attr("width", 900)
        .attr("height", 620);

    // Filter the data to include only features for Pennsylvania
  //  const paFeatures = data.features.filter(feature => feature.properties.STATEFP === "42"); // "42" is the FIPS code for Pennsylvania

    // Add the counts to their corresponding counties in paFeatures
    paFeatures.forEach(feature => {
        const countyData = counts.find(county => county.county === feature.properties.NAME);
        feature.properties.REGS = countyData ? countyData.count : 0; // Add REGS property or default to 0
    });

    // Draw the counties
    svg.selectAll("path")
        .data(paFeatures)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", d => colorScale(d.properties.REGS))
        .attr("stroke", "#fff")
        .on("mouseover", function(event, d) {
            d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).darker(0.5));
        })
        .on("mouseout", function(event, d) {
            d3.select(this).attr("fill", colorScale(d.properties.REGS));
        })
        .on("click", function(event, d) {
            const countyName = d.properties.NAME; // Adjust based on your GeoJSON properties
            window.location.href = \`search.html?query=full_registration&modern_county=\${countyName}\`; // Redirect to county page with query parameter
        });

        // Add labels for each county
        svg.selectAll("text")
            .data(paFeatures)
            .enter()
            .append("text")
            .attr("x", d => projection(d3.geoCentroid(d))[0])
            .attr("y", d => projection(d3.geoCentroid(d))[1])
            .attr("text-anchor", "middle")
            .attr("font-size", "10px")
            .attr("fill", "black")
            .text(d => d.properties.NAME);
        })
        .catch(error => console.error("Error fetching GeoJSON data:", error));

    
});
})();<\/script>`], ["", '<div id="county-map"></div> <script>(function(){', `
 document.addEventListener("DOMContentLoaded", () => {   

    fetch("https://gist.githubusercontent.com/sdwfrost/d1c73f91dd9d175998ed166eb216994a/raw/e89c35f308cee7e2e5a784e1d3afc5d449e9e4bb/counties.geojson")
        .then(response => response.json())
        .then(data => {
            const paFeatures = data.features.filter(feature => feature.properties.STATEFP === "42"); // "42" is the FIPS code for Pennsylvania

            // Add the counts to their corresponding counties in paFeatures
            paFeatures.forEach(feature => {
                const countyData = counts.find(county => county.county === feature.properties.NAME);
                feature.properties.REGS = countyData ? countyData.count : 0; // Add REGS property or default to 0
            });

            console.log('PA Features with counts:', paFeatures);

            console.log('County Counts after dom load:', counts);
    const colorScale = d3.scaleSequential(d3.interpolatePuBuGn)
        .domain([0, Math.pow(d3.max(counts, d => d.count), 0.5)]);
        
    // Create a map projection
    const projection = d3.geoMercator()
        .center([-77.8, 41.0]) // Center on Pennsylvania
        .scale(8000) // Adjust scale as needed
        .translate([400, 300]); // Adjust translation as needed

    // Create a path generator
    const path = d3.geoPath().projection(projection);

    // Create an SVG element to hold the map
    const svg = d3.select("#county-map")
        .append("svg")
        .attr("width", 900)
        .attr("height", 620);

    // Filter the data to include only features for Pennsylvania
  //  const paFeatures = data.features.filter(feature => feature.properties.STATEFP === "42"); // "42" is the FIPS code for Pennsylvania

    // Add the counts to their corresponding counties in paFeatures
    paFeatures.forEach(feature => {
        const countyData = counts.find(county => county.county === feature.properties.NAME);
        feature.properties.REGS = countyData ? countyData.count : 0; // Add REGS property or default to 0
    });

    // Draw the counties
    svg.selectAll("path")
        .data(paFeatures)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", d => colorScale(d.properties.REGS))
        .attr("stroke", "#fff")
        .on("mouseover", function(event, d) {
            d3.select(this).attr("fill", d3.color(d3.select(this).attr("fill")).darker(0.5));
        })
        .on("mouseout", function(event, d) {
            d3.select(this).attr("fill", colorScale(d.properties.REGS));
        })
        .on("click", function(event, d) {
            const countyName = d.properties.NAME; // Adjust based on your GeoJSON properties
            window.location.href = \\\`search.html?query=full_registration&modern_county=\\\${countyName}\\\`; // Redirect to county page with query parameter
        });

        // Add labels for each county
        svg.selectAll("text")
            .data(paFeatures)
            .enter()
            .append("text")
            .attr("x", d => projection(d3.geoCentroid(d))[0])
            .attr("y", d => projection(d3.geoCentroid(d))[1])
            .attr("text-anchor", "middle")
            .attr("font-size", "10px")
            .attr("fill", "black")
            .text(d => d.properties.NAME);
        })
        .catch(error => console.error("Error fetching GeoJSON data:", error));

    
});
})();<\/script>`])), maybeRenderHead(), defineScriptVars({ counts }));
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Map.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "A Just and True Return";
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid"> <p><strong>A Just and True Return (JTR)</strong> intro text to go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, link to <a href="/about/">About</a> page.</p> <hr> ${renderComponent($$result2, "Dashboard", $$Dashboard, {})} <hr> ${renderComponent($$result2, "NavTiles", $$NavTiles, {})} <hr> <!-- Map --> <h2>Map</h2> <p>Browse registrations by selecting a county.</p> ${renderComponent($$result2, "Map", $$Map, {})} <hr> <!-- Essay preview? --> <h2>Featured Essay</h2> </div> ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/index.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
