import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>7\n24^th^ Aug<sup><u>t</u></sup> 1780\nJohn Allison Esq<sup><u>r</u></sup>\nList of Slaves</p>\n<p>[back]</p>\n<p>A List of Negro &#x26; Mullatta Slaves, with their names\n&#x26; ages, the property of the subscriber of Antrim Township\nCum^d^ County, in as follower Viz</p>\n<p>Negro Cezar aged about thirty five Years\nNegro Milly aged about Eighteen years\nMullatta Liddy aged about twenty\nMullatta Ned aged foreteen Months</p>\n<p>Jn<u><sup>o</sup> Allison</u><br>\n21^st^ August 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0007_return.md";
				const url = "/markdown/returns/doc_cumb0007_return";
				function rawContent() {
					return "﻿\\[front]\n\n7\n24^th^ Aug<sup><u>t</sup></u> 1780\nJohn Allison Esq<sup><u>r</sup></u>\nList of Slaves\n\n\\[back]\n\nA List of Negro & Mullatta Slaves, with their names\n& ages, the property of the subscriber of Antrim Township \nCum^d^ County, in as follower Viz\n\nNegro Cezar aged about thirty five Years\nNegro Milly aged about Eighteen years\nMullatta Liddy aged about twenty\nMullatta Ned aged foreteen Months\n\nJn<u><sup>o</sup> Allison</u>  \n21^st^ August 1780\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
