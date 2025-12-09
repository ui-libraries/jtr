import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>21^st^\tSep<sup><u>r</u></sup> 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>N^o^</th><th>28 John Creigh Carlisle Store keeper</th><th></th></tr></thead><tbody><tr><td>99 Jean</td><td>A Negro Slave for life X</td><td>20</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0024_registration.md";
				const url = "/markdown/registrations/doc_cumb0024_registration";
				function rawContent() {
					return "﻿21^st^\tSep<sup><u>r</u></sup> 1780\n\n| N^o^ | 28 John Creigh Carlisle Store keeper ||\n|--|--|--|\n| 99 Jean  | A Negro Slave for life X |20 \n\n";
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
