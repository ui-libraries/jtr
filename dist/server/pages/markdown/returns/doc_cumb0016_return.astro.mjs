import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>(20)\n6^th^ Sep<sup><u>r</u></sup> 1780\nMatthew Loudon\nList of Slaves</p>\n<p>[back]</p>\n<p>Cumberland County 6 Sep<sup><u>r</u></sup>  1780\nA return of My slaves with their Nam^s^\nand ages as follows viz</p>\n<p>1 Negro Man Dover aged 24\n1 Negro Wench Tyra aged 19\n1 Negro Child Sall 9 m<sup><u>s</u></sup></p>\n<p>Matthew Loudon</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0016_return.md";
				const url = "/markdown/returns/doc_cumb0016_return";
				function rawContent() {
					return "﻿\\[front]\n\n(20)\n6^th^ Sep<sup><u>r</sup></u> 1780\nMatthew Loudon\nList of Slaves\n\n\\[back]\n\nCumberland County 6 Sep<sup><u>r</sup></u>  1780\nA return of My slaves with their Nam^s^\nand ages as follows viz\n\n1 Negro Man Dover aged 24\n1 Negro Wench Tyra aged 19\n1 Negro Child Sall 9 m<sup><u>s</sup></u> \n\nMatthew Loudon\n\n\n\n";
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
