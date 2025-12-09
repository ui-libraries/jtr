import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>21^st^ Sep<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>26 John Davidson West Pennsburgh Farmer</th><th></th></tr></thead><tbody><tr><td>97 Bill</td><td>a Negro Slave for life X</td><td>25</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0022_registration.md";
				const url = "/markdown/registrations/doc_cumb0022_registration";
				function rawContent() {
					return "﻿21^st^ Sep<sup><u>r</sup></u> \n\n|  | 26 John Davidson West Pennsburgh Farmer ||\n|--|--|--|\n|97 Bill  | a Negro Slave for life X |25\n\n\n";
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
