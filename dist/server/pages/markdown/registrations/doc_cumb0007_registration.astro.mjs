import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Name</th><th>7 John Allison Esq<sup><u>r</u></sup> Antrim Township</th><th>age</th></tr></thead><tbody><tr><td>33 Cezar</td><td>A Negroe aged about</td><td>35</td></tr><tr><td>34 Milly</td><td>aged about</td><td>18</td></tr><tr><td>35 Liddy</td><td>A Mullattoe aged about</td><td>20</td></tr><tr><td>36 Ned</td><td>aged about</td><td>14 M<sup><u>s</u></sup></td></tr></tbody></table>\n<p>24^th^ Aug<sup><u>t</u></sup> 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0007_registration.md";
				const url = "/markdown/registrations/doc_cumb0007_registration";
				function rawContent() {
					return "﻿|Name| 7 John Allison Esq<sup><u>r</sup></u> Antrim Township |age\n|--|--|--|\n| 33 Cezar |A Negroe aged about|35\n| 34 Milly |aged about |18\n| 35 Liddy |A Mullattoe aged about |20\n| 36 Ned |aged about|14 M<sup><u>s</sup></u>\n\n24^th^ Aug<sup><u>t</sup></u> 1780\n\n";
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
