import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>Sep^r^ 6 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>20 Matthew Loudon E Penn^o^ Farmer</th><th></th></tr></thead><tbody><tr><td>69 Dover</td><td>a Negro Slave X</td><td>24</td></tr><tr><td>70 Tyra</td><td>a Negro Female Slave X</td><td>19</td></tr><tr><td>71 Sall</td><td>a Negro Slave X</td><td>9 m<sup><u>s</u></sup></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0016_registration.md";
				const url = "/markdown/registrations/doc_cumb0016_registration";
				function rawContent() {
					return "﻿Sep^r^ 6 1780\n|  | 20 Matthew Loudon E Penn^o^ Farmer ||\n|--|--|--|\n| 69 Dover | a Negro Slave X |24\n| 70 Tyra| a Negro Female Slave X |19\n| 71 Sall| a Negro Slave X |9 m<sup><u>s</sup></u>\n\n";
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
