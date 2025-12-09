import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>22^d^ Sep<sup><u>r</u></sup> 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>N<sup><u>o</u></sup></th><th>29 Robert Miller Carlisle Tanner</th><th>age</th></tr></thead><tbody><tr><td>100 Darby</td><td>a Negro Slave X</td><td>40</td></tr><tr><td>101 Violet</td><td>a Negro Slave X</td><td>40</td></tr><tr><td>102 Toby</td><td>a Negro Slave X</td><td>40</td></tr><tr><td>103 Abraham</td><td>a Negro Slave X</td><td>4</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0025_registration.md";
				const url = "/markdown/registrations/doc_cumb0025_registration";
				function rawContent() {
					return "﻿22^d^ Sep<sup><u>r</u></sup> 1780\n\n| N<sup><u>o</sup></u> |29 Robert Miller Carlisle Tanner |age|\n|--|--|--|\n|100 Darby| a Negro Slave X |40\n|101 Violet| a Negro Slave X |40\n|102 Toby| a Negro Slave X |40\n|103 Abraham| a Negro Slave X |4\n\n\n";
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
