import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>26^th^ Sep<sup><u>r</u></sup> 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>32 John Montgomery Esq<sup><u>r</u></sup> Carlisle</th><th></th></tr></thead><tbody><tr><td>110 Dinah</td><td>a Negro Wench X</td><td>36</td></tr><tr><td>111 Venia</td><td>a Negro X</td><td>8</td></tr><tr><td>112 Venus</td><td>a Negro X</td><td>6</td></tr><tr><td>113 Tom</td><td>a Negro X</td><td>4</td></tr><tr><td>114 Dick</td><td>a Negro  X</td><td>1 1/2</td></tr><tr><td>115 Jane</td><td>a Negro  X</td><td>22</td></tr><tr><td>116 Belinda</td><td>a Negro Wench X</td><td>23 m<sup><u>s</u></sup></td></tr><tr><td>117 Juba</td><td>a Negro  X</td><td>13 y<sup><u>rs</u></sup></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0028_registration.md";
				const url = "/markdown/registrations/doc_cumb0028_registration";
				function rawContent() {
					return "﻿26^th^ Sep<sup><u>r</u></sup> 1780\n\n|  | 32 John Montgomery Esq<sup><u>r</sup></u> Carlisle ||\n|--|--|--|\n| 110 Dinah | a Negro Wench X |36\n| 111 Venia | a Negro X |8\n| 112 Venus| a Negro X|6\n| 113 Tom| a Negro X |4\n| 114 Dick| a Negro  X |1 1/2\n| 115 Jane| a Negro  X |22\n| 116 Belinda| a Negro Wench X |23 m<sup><u>s</sup></u>\n| 117 Juba| a Negro  X |13 y<sup><u>rs</sup></u>\n\n\n\n\n\n\n";
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
