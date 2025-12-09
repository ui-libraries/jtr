import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>11-12\n25 Aug^t^ 1780</p>\n<p>Benj. Chambers\nD<sup><u>r</u></sup> Jn<sup><u>o</u></sup> Colhoone\nlist of Slaves</p>\n<p>[back]</p>\n<p>Cumberland County, Guilford Township</p>\n<p>A Return of my negroes, with them names &#x26;\nages in as follows Viz</p>\n<p>Dina ages 30 years a slave <em>Negroes</em>\nNell  aged 15 D^o^ a Slave\nPegg aged 12 D^o^ a Slave <em>Negroes</em>\nFanny aged 7 D^o^ a Slave\nPhebee aged 4 D^o^ a Slave\nTom aged 10 months <del>D^o^</del></p>\n<p>To Jn^o^ Agnew Esq^r^\nBenj<sup><u>a</u></sup> Chambers</p>\n<p>D<sup><u>r</u></sup> Jn^o^ Calhoon returns one negro ^ ^female^ slave Named Pheb aged 25 years</p>\n<p>Jn^o^ Colhoon\nChambersbg 24^th^ Aug^th^ 1780</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzU0NTk0Mzk4LDIxMjQyMzkyMTYsNzU0NT\nk0Mzk4XX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0011a_return.md";
				const url = "/markdown/returns/doc_cumb0011a_return";
				function rawContent() {
					return "﻿\\[front]\n\n11-12\n25 Aug^t^ 1780\n\nBenj. Chambers\nD<sup><u>r</sup></u> Jn<sup><u>o</sup></u> Colhoone\nlist of Slaves\n\n\\[back]\n\nCumberland County, Guilford Township\n\nA Return of my negroes, with them names & \nages in as follows Viz\n\nDina ages 30 years a slave *Negroes*\nNell  aged 15 D^o^ a Slave \nPegg aged 12 D^o^ a Slave *Negroes*\nFanny aged 7 D^o^ a Slave \nPhebee aged 4 D^o^ a Slave \nTom aged 10 months ~~D^o^~~ \n\nTo Jn^o^ Agnew Esq^r^\nBenj<sup><u>a</sup></u> Chambers\n\nD<sup><u>r</sup></u> Jn^o^ Calhoon returns one negro ^ ^female^ slave Named Pheb aged 25 years\n\nJn^o^ Colhoon\nChambersbg 24^th^ Aug^th^ 1780\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzU0NTk0Mzk4LDIxMjQyMzkyMTYsNzU0NT\nk0Mzk4XX0=\n-->";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
