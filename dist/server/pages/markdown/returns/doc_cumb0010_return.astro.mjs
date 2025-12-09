import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>(10)\n26^th^ August 1780</p>\n<p>John Williams\nList of Slaves</p>\n<p>[back]</p>\n<p>A list of Negro and Mullattoe Slaves the property of\nthe subscriber living in <del>Buff</del> Allen Township Cumb^d^\nCounty Farmer viz<u><sup>t</sup></u></p>\n<p>Sarah a Negro aged about 30 years\nNance a Mullatoe Slave 11 years\nAlek a Negroe Slave about 11y<sup><u>rs</u></sup></p>\n<p>John Williams\n26<sup><u>th</u></sup> August 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0010_return.md";
				const url = "/markdown/returns/doc_cumb0010_return";
				function rawContent() {
					return "﻿\\[front]\n\n(10)\n26^th^ August 1780\n\nJohn Williams\nList of Slaves\n\n\\[back]\n\nA list of Negro and Mullattoe Slaves the property of\nthe subscriber living in ~~Buff~~ Allen Township Cumb^d^ \nCounty Farmer viz<u><sup>t</sup></u>\n\nSarah a Negro aged about 30 years\nNance a Mullatoe Slave 11 years\nAlek a Negroe Slave about 11y<sup><u>rs</sup></u>\n\nJohn Williams\n26<sup><u>th</sup></u> August 1780\n\n\n";
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
