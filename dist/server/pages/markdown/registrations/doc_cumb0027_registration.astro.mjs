import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>22^d^ Sep<sup><u>r</u></sup> 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>N^o^</th><th>31 James Finlay Letterkenny Farmer</th><th>age</th></tr></thead><tbody><tr><td>105 Samson</td><td>a Negro Slave X</td><td>30</td></tr><tr><td>106 Will</td><td>a Negro Slave X</td><td>24</td></tr><tr><td>107 Cuff</td><td>a Negro Slave X</td><td>16</td></tr><tr><td>108 Bill</td><td>a Mullato Slave during Life X</td><td>15</td></tr><tr><td>109 Beck</td><td>a Mullato Slave during life X</td><td>5</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0027_registration.md";
				const url = "/markdown/registrations/doc_cumb0027_registration";
				function rawContent() {
					return "﻿22^d^ Sep<sup><u>r</u></sup> 1780\n\n| N^o^ | 31 James Finlay Letterkenny Farmer |age|\n|--|--|--|\n| 105 Samson | a Negro Slave X |30\n| 106 Will| a Negro Slave X |24\n| 107 Cuff| a Negro Slave X |16\n| 108 Bill| a Mullato Slave during Life X |15\n| 109 Beck| a Mullato Slave during life X |5\n\n";
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
