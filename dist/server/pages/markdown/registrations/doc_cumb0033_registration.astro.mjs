import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>30^th^ Sep<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>37 Andrew Holmes Middleton Farm<sup><u>r</u></sup></th><th>y<sup><u>rs</u></sup></th></tr></thead><tbody><tr><td>126 Arthur</td><td>a Negro Slave aged  X</td><td>37</td></tr><tr><td>127 Tim</td><td>a Negro Slave X</td><td>26</td></tr><tr><td>128 Jude</td><td>a Negro Slave X</td><td>30</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0033_registration.md";
				const url = "/markdown/registrations/doc_cumb0033_registration";
				function rawContent() {
					return "﻿30^th^ Sep<sup><u>r</u></sup>\n\n|  | 37 Andrew Holmes Middleton Farm<sup><u>r</sup></u> |y<sup><u>rs</sup></u>|\n|--|--|--|\n| 126 Arthur |a Negro Slave aged  X  |37\n| 127 Tim|a Negro Slave X  |26\n| 128 Jude|a Negro Slave X  |30\n\n\n";
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
