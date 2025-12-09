import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>3<sup><u>d</u></sup> Octob<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>41 George Stuart Millford Sub Lieu<sup><u>t</u></sup></th><th>years</th></tr></thead><tbody><tr><td>139 Tyrone</td><td>a Negro Slave aged X</td><td>22</td></tr><tr><td>140 Will</td><td>a Negro Slave X</td><td>19</td></tr><tr><td>139 Jack</td><td>a Negro Slave  X</td><td>14</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0036_registration.md";
				const url = "/markdown/registrations/doc_cumb0036_registration";
				function rawContent() {
					return "﻿3<sup><u>d</u></sup> Octob<sup><u>r</u></sup>\n|  |41 George Stuart Millford Sub Lieu<sup><u>t</u></sup>  |years|\n|--|--|--|\n| 139 Tyrone | a Negro Slave aged X |22\n| 140 Will| a Negro Slave X |19\n| 139 Jack| a Negro Slave  X |14\n\n\n";
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
