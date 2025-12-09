import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>6 Sep^r^</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>James Herron Lurgan Farmer</th><th>age</th></tr></thead><tbody><tr><td>64 Rich^d^</td><td>a Negro Slave x</td><td>18</td></tr><tr><td>65 Cuff</td><td>a Negro Slave x</td><td>7</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0014b_registration.md";
				const url = "/markdown/registrations/doc_cumb0014b_registration";
				function rawContent() {
					return "﻿6 Sep^r^\n|  | James Herron Lurgan Farmer |age\n|--|--|--|\n| 64 Rich^d^| a Negro Slave x |18\n| 65 Cuff| a Negro Slave x |7\n";
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
