import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_f8gBO3pR.mjs';
import { manifest } from './manifest_CeR1tEHS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/essays.astro.mjs');
const _page3 = () => import('./pages/history.astro.mjs');
const _page4 = () => import('./pages/markdown/registrations/doc_cumb0001_registration.astro.mjs');
const _page5 = () => import('./pages/markdown/registrations/doc_cumb0002_registration.astro.mjs');
const _page6 = () => import('./pages/markdown/registrations/doc_cumb0003_registration.astro.mjs');
const _page7 = () => import('./pages/markdown/registrations/doc_cumb0004_registration.astro.mjs');
const _page8 = () => import('./pages/markdown/registrations/doc_cumb0005_registration.astro.mjs');
const _page9 = () => import('./pages/markdown/registrations/doc_cumb0006_registration.astro.mjs');
const _page10 = () => import('./pages/markdown/registrations/doc_cumb0007_registration.astro.mjs');
const _page11 = () => import('./pages/markdown/registrations/doc_cumb0008_registration.astro.mjs');
const _page12 = () => import('./pages/markdown/registrations/doc_cumb0009_registration.astro.mjs');
const _page13 = () => import('./pages/markdown/registrations/doc_cumb0010_registration.astro.mjs');
const _page14 = () => import('./pages/markdown/registrations/doc_cumb0011a_registration.astro.mjs');
const _page15 = () => import('./pages/markdown/registrations/doc_cumb0011b_registration.astro.mjs');
const _page16 = () => import('./pages/markdown/registrations/doc_cumb0012_registration.astro.mjs');
const _page17 = () => import('./pages/markdown/registrations/doc_cumb0013a_registration.astro.mjs');
const _page18 = () => import('./pages/markdown/registrations/doc_cumb0013b_registration.astro.mjs');
const _page19 = () => import('./pages/markdown/registrations/doc_cumb0014a_registration.astro.mjs');
const _page20 = () => import('./pages/markdown/registrations/doc_cumb0014b_registration.astro.mjs');
const _page21 = () => import('./pages/markdown/registrations/doc_cumb0015a_registration.astro.mjs');
const _page22 = () => import('./pages/markdown/registrations/doc_cumb0015b_registration.astro.mjs');
const _page23 = () => import('./pages/markdown/registrations/doc_cumb0016_registration.astro.mjs');
const _page24 = () => import('./pages/markdown/registrations/doc_cumb0017_registration.astro.mjs');
const _page25 = () => import('./pages/markdown/registrations/doc_cumb0018_registration.astro.mjs');
const _page26 = () => import('./pages/markdown/registrations/doc_cumb0019_registration.astro.mjs');
const _page27 = () => import('./pages/markdown/registrations/doc_cumb0020_registration.astro.mjs');
const _page28 = () => import('./pages/markdown/registrations/doc_cumb0021_registration.astro.mjs');
const _page29 = () => import('./pages/markdown/registrations/doc_cumb0022_registration.astro.mjs');
const _page30 = () => import('./pages/markdown/registrations/doc_cumb0023_registration.astro.mjs');
const _page31 = () => import('./pages/markdown/registrations/doc_cumb0024_registration.astro.mjs');
const _page32 = () => import('./pages/markdown/registrations/doc_cumb0025_registration.astro.mjs');
const _page33 = () => import('./pages/markdown/registrations/doc_cumb0026_registration.astro.mjs');
const _page34 = () => import('./pages/markdown/registrations/doc_cumb0027_registration.astro.mjs');
const _page35 = () => import('./pages/markdown/registrations/doc_cumb0028_registration.astro.mjs');
const _page36 = () => import('./pages/markdown/registrations/doc_cumb0029_registration.astro.mjs');
const _page37 = () => import('./pages/markdown/registrations/doc_cumb0030_registration.astro.mjs');
const _page38 = () => import('./pages/markdown/registrations/doc_cumb0031_registration.astro.mjs');
const _page39 = () => import('./pages/markdown/registrations/doc_cumb0032_registration.astro.mjs');
const _page40 = () => import('./pages/markdown/registrations/doc_cumb0033_registration.astro.mjs');
const _page41 = () => import('./pages/markdown/registrations/doc_cumb0034_registration.astro.mjs');
const _page42 = () => import('./pages/markdown/registrations/doc_cumb0035_registration.astro.mjs');
const _page43 = () => import('./pages/markdown/registrations/doc_cumb0036_registration.astro.mjs');
const _page44 = () => import('./pages/markdown/registrations/doc_cumb0037_registration.astro.mjs');
const _page45 = () => import('./pages/markdown/registrations/doc_cumb0038_registration.astro.mjs');
const _page46 = () => import('./pages/markdown/registrations/doc_cumb0039_registration.astro.mjs');
const _page47 = () => import('./pages/markdown/registrations/doc_cumb0040_registration.astro.mjs');
const _page48 = () => import('./pages/markdown/registrations/doc_cumb0041_registration.astro.mjs');
const _page49 = () => import('./pages/markdown/registrations/doc_cumb0042_registration.astro.mjs');
const _page50 = () => import('./pages/markdown/registrations/doc_cumb0043a_registration.astro.mjs');
const _page51 = () => import('./pages/markdown/returns/doc_cumb0001_return.astro.mjs');
const _page52 = () => import('./pages/markdown/returns/doc_cumb0002_return.astro.mjs');
const _page53 = () => import('./pages/markdown/returns/doc_cumb0003_return.astro.mjs');
const _page54 = () => import('./pages/markdown/returns/doc_cumb0004_return.astro.mjs');
const _page55 = () => import('./pages/markdown/returns/doc_cumb0005_return.astro.mjs');
const _page56 = () => import('./pages/markdown/returns/doc_cumb0006_return.astro.mjs');
const _page57 = () => import('./pages/markdown/returns/doc_cumb0007_return.astro.mjs');
const _page58 = () => import('./pages/markdown/returns/doc_cumb0008_return.astro.mjs');
const _page59 = () => import('./pages/markdown/returns/doc_cumb0009_return.astro.mjs');
const _page60 = () => import('./pages/markdown/returns/doc_cumb0010_return.astro.mjs');
const _page61 = () => import('./pages/markdown/returns/doc_cumb0011a_return.astro.mjs');
const _page62 = () => import('./pages/markdown/returns/doc_cumb0011b_return.astro.mjs');
const _page63 = () => import('./pages/markdown/returns/doc_cumb0012_return.astro.mjs');
const _page64 = () => import('./pages/markdown/returns/doc_cumb0013a_return.astro.mjs');
const _page65 = () => import('./pages/markdown/returns/doc_cumb0013b_return.astro.mjs');
const _page66 = () => import('./pages/markdown/returns/doc_cumb0014a_return.astro.mjs');
const _page67 = () => import('./pages/markdown/returns/doc_cumb0014b_return.astro.mjs');
const _page68 = () => import('./pages/markdown/returns/doc_cumb0015a_return.astro.mjs');
const _page69 = () => import('./pages/markdown/returns/doc_cumb0015b_return.astro.mjs');
const _page70 = () => import('./pages/markdown/returns/doc_cumb0016_return.astro.mjs');
const _page71 = () => import('./pages/markdown/returns/doc_cumb0017_return.astro.mjs');
const _page72 = () => import('./pages/markdown/returns/doc_cumb0018_return.astro.mjs');
const _page73 = () => import('./pages/markdown/returns/doc_cumb0020_return.astro.mjs');
const _page74 = () => import('./pages/markdown/returns/doc_cumb0021_return.astro.mjs');
const _page75 = () => import('./pages/markdown/returns/doc_cumb0022_return.astro.mjs');
const _page76 = () => import('./pages/markdown/returns/doc_cumb0023_return.astro.mjs');
const _page77 = () => import('./pages/markdown/returns/doc_cumb0024_return.astro.mjs');
const _page78 = () => import('./pages/markdown/returns/doc_cumb0025_return.astro.mjs');
const _page79 = () => import('./pages/markdown/returns/doc_cumb0026_return.astro.mjs');
const _page80 = () => import('./pages/markdown/returns/doc_cumb0027_return.astro.mjs');
const _page81 = () => import('./pages/markdown/returns/doc_cumb0028_return.astro.mjs');
const _page82 = () => import('./pages/markdown/returns/doc_cumb0029_return.astro.mjs');
const _page83 = () => import('./pages/markdown/returns/doc_cumb0031_return.astro.mjs');
const _page84 = () => import('./pages/markdown/returns/doc_cumb0032_return.astro.mjs');
const _page85 = () => import('./pages/markdown/returns/doc_cumb0033_return.astro.mjs');
const _page86 = () => import('./pages/markdown/returns/doc_cumb0034_return.astro.mjs');
const _page87 = () => import('./pages/markdown/returns/doc_cumb0035_return.astro.mjs');
const _page88 = () => import('./pages/markdown/returns/doc_cumb0038_return.astro.mjs');
const _page89 = () => import('./pages/markdown/returns/doc_cumb0039_return.astro.mjs');
const _page90 = () => import('./pages/markdown/returns/doc_cumb0041_return.astro.mjs');
const _page91 = () => import('./pages/markdown/returns/doc_cumb0042_return.astro.mjs');
const _page92 = () => import('./pages/markdown/returns/doc_cumb0043a_return.astro.mjs');
const _page93 = () => import('./pages/person.astro.mjs');
const _page94 = () => import('./pages/registration.astro.mjs');
const _page95 = () => import('./pages/search.astro.mjs');
const _page96 = () => import('./pages/tag.astro.mjs');
const _page97 = () => import('./pages/tags.astro.mjs');
const _page98 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/essays.astro", _page2],
    ["src/pages/history.astro", _page3],
    ["src/pages/markdown/registrations/doc_cumb0001_registration.md", _page4],
    ["src/pages/markdown/registrations/doc_cumb0002_registration.md", _page5],
    ["src/pages/markdown/registrations/doc_cumb0003_registration.md", _page6],
    ["src/pages/markdown/registrations/doc_cumb0004_registration.md", _page7],
    ["src/pages/markdown/registrations/doc_cumb0005_registration.md", _page8],
    ["src/pages/markdown/registrations/doc_cumb0006_registration.md", _page9],
    ["src/pages/markdown/registrations/doc_cumb0007_registration.md", _page10],
    ["src/pages/markdown/registrations/doc_cumb0008_registration.md", _page11],
    ["src/pages/markdown/registrations/doc_cumb0009_registration.md", _page12],
    ["src/pages/markdown/registrations/doc_cumb0010_registration.md", _page13],
    ["src/pages/markdown/registrations/doc_cumb0011a_registration.md", _page14],
    ["src/pages/markdown/registrations/doc_cumb0011b_registration.md", _page15],
    ["src/pages/markdown/registrations/doc_cumb0012_registration.md", _page16],
    ["src/pages/markdown/registrations/doc_cumb0013a_registration.md", _page17],
    ["src/pages/markdown/registrations/doc_cumb0013b_registration.md", _page18],
    ["src/pages/markdown/registrations/doc_cumb0014a_registration.md", _page19],
    ["src/pages/markdown/registrations/doc_cumb0014b_registration.md", _page20],
    ["src/pages/markdown/registrations/doc_cumb0015a_registration.md", _page21],
    ["src/pages/markdown/registrations/doc_cumb0015b_registration.md", _page22],
    ["src/pages/markdown/registrations/doc_cumb0016_registration.md", _page23],
    ["src/pages/markdown/registrations/doc_cumb0017_registration.md", _page24],
    ["src/pages/markdown/registrations/doc_cumb0018_registration.md", _page25],
    ["src/pages/markdown/registrations/doc_cumb0019_registration.md", _page26],
    ["src/pages/markdown/registrations/doc_cumb0020_registration.md", _page27],
    ["src/pages/markdown/registrations/doc_cumb0021_registration.md", _page28],
    ["src/pages/markdown/registrations/doc_cumb0022_registration.md", _page29],
    ["src/pages/markdown/registrations/doc_cumb0023_registration.md", _page30],
    ["src/pages/markdown/registrations/doc_cumb0024_registration.md", _page31],
    ["src/pages/markdown/registrations/doc_cumb0025_registration.md", _page32],
    ["src/pages/markdown/registrations/doc_cumb0026_registration.md", _page33],
    ["src/pages/markdown/registrations/doc_cumb0027_registration.md", _page34],
    ["src/pages/markdown/registrations/doc_cumb0028_registration.md", _page35],
    ["src/pages/markdown/registrations/doc_cumb0029_registration.md", _page36],
    ["src/pages/markdown/registrations/doc_cumb0030_registration.md", _page37],
    ["src/pages/markdown/registrations/doc_cumb0031_registration.md", _page38],
    ["src/pages/markdown/registrations/doc_cumb0032_registration.md", _page39],
    ["src/pages/markdown/registrations/doc_cumb0033_registration.md", _page40],
    ["src/pages/markdown/registrations/doc_cumb0034_registration.md", _page41],
    ["src/pages/markdown/registrations/doc_cumb0035_registration.md", _page42],
    ["src/pages/markdown/registrations/doc_cumb0036_registration.md", _page43],
    ["src/pages/markdown/registrations/doc_cumb0037_registration.md", _page44],
    ["src/pages/markdown/registrations/doc_cumb0038_registration.md", _page45],
    ["src/pages/markdown/registrations/doc_cumb0039_registration.md", _page46],
    ["src/pages/markdown/registrations/doc_cumb0040_registration.md", _page47],
    ["src/pages/markdown/registrations/doc_cumb0041_registration.md", _page48],
    ["src/pages/markdown/registrations/doc_cumb0042_registration.md", _page49],
    ["src/pages/markdown/registrations/doc_cumb0043a_registration.md", _page50],
    ["src/pages/markdown/returns/doc_cumb0001_return.md", _page51],
    ["src/pages/markdown/returns/doc_cumb0002_return.md", _page52],
    ["src/pages/markdown/returns/doc_cumb0003_return.md", _page53],
    ["src/pages/markdown/returns/doc_cumb0004_return.md", _page54],
    ["src/pages/markdown/returns/doc_cumb0005_return.md", _page55],
    ["src/pages/markdown/returns/doc_cumb0006_return.md", _page56],
    ["src/pages/markdown/returns/doc_cumb0007_return.md", _page57],
    ["src/pages/markdown/returns/doc_cumb0008_return.md", _page58],
    ["src/pages/markdown/returns/doc_cumb0009_return.md", _page59],
    ["src/pages/markdown/returns/doc_cumb0010_return.md", _page60],
    ["src/pages/markdown/returns/doc_cumb0011a_return.md", _page61],
    ["src/pages/markdown/returns/doc_cumb0011b_return.md", _page62],
    ["src/pages/markdown/returns/doc_cumb0012_return.md", _page63],
    ["src/pages/markdown/returns/doc_cumb0013a_return.md", _page64],
    ["src/pages/markdown/returns/doc_cumb0013b_return.md", _page65],
    ["src/pages/markdown/returns/doc_cumb0014a_return.md", _page66],
    ["src/pages/markdown/returns/doc_cumb0014b_return.md", _page67],
    ["src/pages/markdown/returns/doc_cumb0015a_return.md", _page68],
    ["src/pages/markdown/returns/doc_cumb0015b_return.md", _page69],
    ["src/pages/markdown/returns/doc_cumb0016_return.md", _page70],
    ["src/pages/markdown/returns/doc_cumb0017_return.md", _page71],
    ["src/pages/markdown/returns/doc_cumb0018_return.md", _page72],
    ["src/pages/markdown/returns/doc_cumb0020_return.md", _page73],
    ["src/pages/markdown/returns/doc_cumb0021_return.md", _page74],
    ["src/pages/markdown/returns/doc_cumb0022_return.md", _page75],
    ["src/pages/markdown/returns/doc_cumb0023_return.md", _page76],
    ["src/pages/markdown/returns/doc_cumb0024_return.md", _page77],
    ["src/pages/markdown/returns/doc_cumb0025_return.md", _page78],
    ["src/pages/markdown/returns/doc_cumb0026_return.md", _page79],
    ["src/pages/markdown/returns/doc_cumb0027_return.md", _page80],
    ["src/pages/markdown/returns/doc_cumb0028_return.md", _page81],
    ["src/pages/markdown/returns/doc_cumb0029_return.md", _page82],
    ["src/pages/markdown/returns/doc_cumb0031_return.md", _page83],
    ["src/pages/markdown/returns/doc_cumb0032_return.md", _page84],
    ["src/pages/markdown/returns/doc_cumb0033_return.md", _page85],
    ["src/pages/markdown/returns/doc_cumb0034_return.md", _page86],
    ["src/pages/markdown/returns/doc_cumb0035_return.md", _page87],
    ["src/pages/markdown/returns/doc_cumb0038_return.md", _page88],
    ["src/pages/markdown/returns/doc_cumb0039_return.md", _page89],
    ["src/pages/markdown/returns/doc_cumb0041_return.md", _page90],
    ["src/pages/markdown/returns/doc_cumb0042_return.md", _page91],
    ["src/pages/markdown/returns/doc_cumb0043a_return.md", _page92],
    ["src/pages/person.astro", _page93],
    ["src/pages/registration.astro", _page94],
    ["src/pages/search.astro", _page95],
    ["src/pages/tag.astro", _page96],
    ["src/pages/tags.astro", _page97],
    ["src/pages/index.astro", _page98]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/ndudley/OneDrive%20-%20University%20of%20Iowa/Desktop/astrotest/jtr/dist/client/",
    "server": "file:///C:/Users/ndudley/OneDrive%20-%20University%20of%20Iowa/Desktop/astrotest/jtr/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
