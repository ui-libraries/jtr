import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>21^st^ Sep<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>27 Stephen Duncan Carlisle Merch<sup><u>t</u></sup></th><th></th></tr></thead><tbody><tr><td>98 Frank</td><td>a Negro Slave during life X</td><td>22</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0023_registration.md";
				const url = "/markdown/registrations/doc_cumb0023_registration";
				function rawContent() {
					return "﻿21^st^ Sep<sup><u>r</sup></u>\n\n|  |27 Stephen Duncan Carlisle Merch<sup><u>t</sup></u>  ||\n|--|--|--|\n| 98 Frank | a Negro Slave during life X |22\n\n\n\n\n";
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
