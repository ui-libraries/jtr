import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>30<sup><u>th</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>36 Archebald Irwin Peters Miller &#x26; Farm<sup><u>r</u></sup></th><th>y<sup><u>rs</u></sup></th></tr></thead><tbody><tr><td>123 Thomas</td><td>a Negro Slave X</td><td>35</td></tr><tr><td>124 Eneas</td><td>a Negro Slave X</td><td>27</td></tr><tr><td>125 Hannah</td><td>a Negro Slave X</td><td>12</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0032_registration.md";
				const url = "/markdown/registrations/doc_cumb0032_registration";
				function rawContent() {
					return "﻿30<sup><u>th</sup></u>\n|  | 36 Archebald Irwin Peters Miller & Farm<sup><u>r</sup></u>  |y<sup><u>rs</sup></u> |\n|--|--|--|\n| 123 Thomas |a Negro Slave X  |35\n| 124 Eneas |a Negro Slave X  |27\n| 125 Hannah|a Negro Slave X  |12\n";
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
