import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>15 Sep^r^ 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>N^o^</th><th>25 M<sup><u>r</u></sup> David Mahan Hopewell Farmer</th><th></th></tr></thead><tbody><tr><td>91 Codge</td><td>a Negroe Slave aged about X</td><td>24</td></tr><tr><td>92 Silvey</td><td>a Negroe Wench X</td><td>23</td></tr><tr><td>93 Isaac</td><td>a Negroe X</td><td>18</td></tr><tr><td>94 Tom</td><td>a Negroe X</td><td>12</td></tr><tr><td>95 Nell</td><td>a Negroe X</td><td>12</td></tr><tr><td>96 Jim</td><td>a Negroe X</td><td>1</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0021_registration.md";
				const url = "/markdown/registrations/doc_cumb0021_registration";
				function rawContent() {
					return "﻿15 Sep^r^ 1780\n| N^o^ |25 M<sup><u>r</sup></u> David Mahan Hopewell Farmer  ||\n|--|--|--|\n|  91 Codge | a Negroe Slave aged about X |24\n| 92 Silvey| a Negroe Wench X |23\n| 93 Isaac| a Negroe X |18\n| 94 Tom| a Negroe X |12\n| 95 Nell| a Negroe X |12\n| 96 Jim| a Negroe X |1\n\n";
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
