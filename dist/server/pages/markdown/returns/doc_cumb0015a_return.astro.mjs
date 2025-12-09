import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>18. 19\nSep^r^ 6 1780</p>\n<p>John Herron\n&#x26; Jn^o^ Young\nlist of Slaves</p>\n<p>[back]</p>\n<p>A list of Negroe Slaves the property\nof John Herron of Lurgan\nTownship in the County of Cum^d^</p>\n<p>1 Negro man Nam<sup><u>d</u></sup> Jerry Ab<sup><u>t</u></sup><u> 25y<sup><u>rs</u></sup><u>\n1 Negro girl Nam<sup><u>d</u></sup> Sall 12y<sup><u>rs</u></sup></u></u></p><u><u><u>\n<p>6th Sep^r^ 1780\nJohen Herron</p>\n<p><del>A List</del> Return of 1 Negro the\nproperty of John Young of Lurgan\nTownship in the County of Cumb^d^\nviz</p>\n<p>1 Negro Wench Nam^d^ Pegg 17</p>\n<p>6th Sep^r^ 1780\nJohen Young</p></u></u></u>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0015a_return.md";
				const url = "/markdown/returns/doc_cumb0015a_return";
				function rawContent() {
					return "﻿\\[front] \n\n18\\. 19\nSep^r^ 6 1780\n\nJohn Herron\n& Jn^o^ Young\nlist of Slaves\n\n\\[back]\n\nA list of Negroe Slaves the property\nof John Herron of Lurgan\nTownship in the County of Cum^d^\n\n1 Negro man Nam<sup><u>d</sup></u> Jerry Ab<sup><u>t</sup> 25y<sup><u>rs</sup>\n1 Negro girl Nam<sup><u>d</sup></u> Sall 12y<sup><u>rs</sup>\n\n6th Sep^r^ 1780 \nJohen Herron\n\n~~A List~~ Return of 1 Negro the\nproperty of John Young of Lurgan\nTownship in the County of Cumb^d^\nviz\n\n1 Negro Wench Nam^d^ Pegg 17\n\n6th Sep^r^ 1780\nJohen Young\n";
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
