import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>28 Sep<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>33 Robert Semple Westpenns^o^ Tavernkeeper</th><th></th></tr></thead><tbody><tr><td>118 Solomon</td><td>a Negro Slave X</td><td>24</td></tr><tr><td>119 Pomp</td><td>a Negro Slave X</td><td>14</td></tr><tr><td>120 Phillis</td><td>a Mullatoe Slave X</td><td>10</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0029_registration.md";
				const url = "/markdown/registrations/doc_cumb0029_registration";
				function rawContent() {
					return "﻿28 Sep<sup><u>r</sup></u>\n\n|  | 33 Robert Semple Westpenns^o^ Tavernkeeper ||\n|--|--|--|\n| 118 Solomon | a Negro Slave X |24\n| 119 Pomp| a Negro Slave X |14\n| 120 Phillis| a Mullatoe Slave X |10\n\n\n";
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
