import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>3 Ralph Starret of Rye Township Farmer</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th></th><th>y<sup><u>rs</u></sup> of ages</th></tr></thead><tbody><tr><td>11</td><td>Jacob a Negro man X</td><td>21</td></tr><tr><td>12</td><td>Grace a Negro Woman X</td><td>15</td></tr><tr><td>Aug^t^ 22^d^ 1780</td><td></td><td></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0003_registration.md";
				const url = "/markdown/registrations/doc_cumb0003_registration";
				function rawContent() {
					return "﻿3 Ralph Starret of Rye Township Farmer\n||  |y<sup><u>rs</sup></u> of ages|\n|--|--|--|\n| 11 |Jacob a Negro man X |21|\n| 12 |Grace a Negro Woman X |15|\nAug^t^ 22^d^ 1780\n\n\n";
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
