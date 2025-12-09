import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>39\n30^th^ Sep<sup><u>r</u></sup> 1780\nCap<sup><u>t</u></sup> W<sup><u>m</u></sup> Patterson</p>\n<p>[back]</p>\n<p>1 Negro Man Named Catto\nAged 60 Years</p>\n<p>W<sup><u>m</u></sup> Patterson\n30<sup><u>th</u></sup> Septem<sup><u>r</u></sup> 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0034_return.md";
				const url = "/markdown/returns/doc_cumb0034_return";
				function rawContent() {
					return "﻿\\[front]\n\n39\n30^th^ Sep<sup><u>r</u></sup> 1780\nCap<sup><u>t</sup></u> W<sup><u>m</sup></u> Patterson\n\n\\[back]\n\n1 Negro Man Named Catto \nAged 60 Years\n\nW<sup><u>m</sup></u> Patterson\n30<sup><u>th</u></sup> Septem<sup><u>r</u></sup> 1780\n";
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
