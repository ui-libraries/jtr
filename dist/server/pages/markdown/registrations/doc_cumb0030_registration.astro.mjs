import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>29^th^ Sep^r^ 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>34 James Patterson West Penns^o^ Farmer</th><th>y<sup><u>rs</u></sup></th></tr></thead><tbody><tr><td>121 Eunice</td><td>a Negro Slave</td><td>12</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0030_registration.md";
				const url = "/markdown/registrations/doc_cumb0030_registration";
				function rawContent() {
					return "﻿29^th^ Sep^r^ 1780\n\n|  | 34 James Patterson West Penns^o^ Farmer|y<sup><u>rs</sup></u>|\n|--|--|--|\n| 121 Eunice | a Negro Slave | 12\n\n\n";
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
