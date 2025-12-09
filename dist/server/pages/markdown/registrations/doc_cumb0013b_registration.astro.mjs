import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>5 Septem<u><sup>r</sup></u></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>15 William McCrackan Newton T Keeper</th><th>age</th></tr></thead><tbody><tr><td>61 Jonathan</td><td>a Negro Slave</td><td>9</td></tr><tr><td>62 Phebe</td><td>a Negro Slave</td><td>14</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0013b_registration.md";
				const url = "/markdown/registrations/doc_cumb0013b_registration";
				function rawContent() {
					return "﻿5 Septem<u><sup>r</u></sup>\n| | 15 William McCrackan Newton T Keeper | age\n|--|--|--|\n| 61 Jonathan | a Negro Slave  | 9\n| 62 Phebe | a Negro Slave  | 14\n";
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
