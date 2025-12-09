import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>3<sup><u>d</u></sup> Octob<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>43 John Harris Esq<sup><u>r</u></sup> Fermanagh</th><th>years</th></tr></thead><tbody><tr><td>143 Meela</td><td>a Female Negro Slave X</td><td>14</td></tr><tr><td>144 Amee</td><td>a Female Negro Slave X</td><td>11</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0038_registration.md";
				const url = "/markdown/registrations/doc_cumb0038_registration";
				function rawContent() {
					return "﻿3<sup><u>d</u></sup> Octob<sup><u>r</u></sup>\n|  | 43 John Harris Esq<sup><u>r</sup></u> Fermanagh |years|\n|--|--|--|\n|143 Meela  |a Female Negro Slave X |14\n|144 Amee| a Female Negro Slave X |\t11\t\n\n";
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
