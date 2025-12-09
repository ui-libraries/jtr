import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>2<sup><u>d</u></sup> October</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>40 William Blair Carlisle Cordw<sup><u>n</u></sup></th><th></th></tr></thead><tbody><tr><td>137 Vine</td><td>a Negro Slave X</td><td>25</td></tr><tr><td>138 Phillip</td><td>a Negro Slave X</td><td>8</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0035_registration.md";
				const url = "/markdown/registrations/doc_cumb0035_registration";
				function rawContent() {
					return "﻿2<SUP><U>d</sup></u> October\n|  |40 William Blair Carlisle Cordw<SUP><U>n</sup></u>  ||\n|--|--|--|\n|137 Vine  |a Negro Slave X |25\n|138 Phillip|a Negro Slave X  |8\n\n";
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
