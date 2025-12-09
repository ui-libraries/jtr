import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>14-15\n5^th^ Sep<sup><u>r</u></sup> 1780\nJa<sup><u>s</u></sup> Collhoon &#x26;\nW<sup><u>m</u></sup> McCracken\nList of Slaves</p>\n<p>[back]</p>\n<p>Cumberland County Hopewell T<sup><u>p</u></sup> Sept<sup><u>r</u></sup> 5<sup><u>th</u></sup> 1780\na Return of my Negroes with their Names &#x26; Ages as follows</p>\n<p>Viz Sal a Negroe Slave Aged 31 years</p>\n<p>Jn<sup><u>o</u></sup> Agnew Esq.\nJames Calhoon</p>\n<p>W<sup><u>m</u></sup> McCracken of Newton Township Returns</p>\n<p>Jonathan a Negroe Slave aged 9 Years\nPhebe a Neg<sup><u>o</u></sup> Slave aged 14</p>\n<p>Jn<sup><u>o</u></sup> Agnew Esq.\nW<sup><u>m</u></sup> McCracken</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0013a_return.md";
				const url = "/markdown/returns/doc_cumb0013a_return";
				function rawContent() {
					return "﻿\\[front]\n\n14-15\n5^th^ Sep<sup><u>r</sup></u> 1780\nJa<sup><u>s</sup></u> Collhoon &\nW<sup><u>m</sup></u> McCracken\nList of Slaves\n\n\\[back]\n\nCumberland County Hopewell T<sup><u>p</sup></u> Sept<sup><u>r</sup></u> 5<sup><u>th</sup></u> 1780\na Return of my Negroes with their Names & Ages as follows \n\nViz Sal a Negroe Slave Aged 31 years\n\nJn<sup><u>o</sup></u> Agnew Esq.\nJames Calhoon\n\nW<sup><u>m</sup></u> McCracken of Newton Township Returns \n\nJonathan a Negroe Slave aged 9 Years \nPhebe a Neg<sup><u>o</sup></u> Slave aged 14\n\nJn<sup><u>o</sup></u> Agnew Esq.\nW<sup><u>m</sup></u> McCracken\n\n";
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
