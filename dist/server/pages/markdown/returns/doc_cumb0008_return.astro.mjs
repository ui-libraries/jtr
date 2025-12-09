import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>(8)\nAug^t^  24^h^ 1780\nJam^s^ Poe\nList of Slaves</p>\n<p>[back]</p>\n<p>A list of Negro &#x26; Mullatto slaves &#x26; Servants with their\n<del>ages</del> Names &#x26; ages, the property of the subscriber of Antrim\nTownship, Cumb^d^ County, in as follows Viz</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>Negro</td><td>Mocky</td><td>aged about</td><td>thirty five years</td></tr><tr><td>Mulatto</td><td>Nan</td><td>aged about</td><td>30 years</td></tr><tr><td>—</td><td>Petter</td><td>age</td><td>20</td></tr><tr><td>—</td><td>Pady</td><td>age</td><td>15</td></tr><tr><td></td><td>Jacob</td><td>age</td><td>5 ^y^ &#x26; 9 m^ths^</td></tr><tr><td></td><td>Joe</td><td>age</td><td>2 10 m^ths^</td></tr><tr><td></td><td>Fabbey</td><td>age</td><td>4 m^ths^</td></tr><tr><td></td><td>Haddy</td><td>age</td><td>7 6 m^ts^</td></tr></tbody></table>\n<p>Ag^t^  23^d^ 1780\nJames Poe</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTYzMDU0NjI0MSwtMTQ4MDQ5NzY4NywxNj\nMwNTQ2MjQxXX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0008_return.md";
				const url = "/markdown/returns/doc_cumb0008_return";
				function rawContent() {
					return "﻿\\[front]\n\n(8)\nAug^t^  24^h^ 1780\nJam^s^ Poe\nList of Slaves\n\n\\[back]\n\nA list of Negro & Mullatto slaves & Servants with their \n~~ages~~ Names & ages, the property of the subscriber of Antrim \nTownship, Cumb^d^ County, in as follows Viz\n\n|||||\n|--|--|--|--|\n|Negro| Mocky | aged about |thirty five years|\n| Mulatto | Nan |aged about |30 years\n|—| Petter|age |20\n|—| Pady|age |15\n|| Jacob|age |5 ^y^ & 9 m^ths^\n|| Joe|age |2 10 m^ths^\n|| Fabbey|age |4 m^ths^\n|| Haddy|age |7 6 m^ts^\n\nAg^t^  23^d^ 1780\nJames Poe\n\n\n\n\n\n\n\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTYzMDU0NjI0MSwtMTQ4MDQ5NzY4NywxNj\nMwNTQ2MjQxXX0=\n-->";
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
