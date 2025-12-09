import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>40\n2^d^ <del>Sep</del> Oct^r^ 1780\nW<sup><u>m</u></sup> Blair</p>\n<p>[back]</p>\n<p>Vine a Negro Slave aged 25 years\nPhillip a Negro Slave d^o^ 8 d^o^</p>\n<p>The property\nW<sup><u>m</u></sup>  Blair Cordwainer\nCarlisle 2<sup><u>d</u></sup> October 1780</p>\n<p>To John Agnew Clk</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0035_return.md";
				const url = "/markdown/returns/doc_cumb0035_return";
				function rawContent() {
					return "﻿\\[front]\n\n40\n2^d^ ~~Sep~~ Oct^r^ 1780\nW<sup><u>m</sup></u> Blair\n\n\\[back]\n\nVine a Negro Slave aged 25 years\nPhillip a Negro Slave d^o^ 8 d^o^\n\nThe property\nW<sup><u>m</sup></u>  Blair Cordwainer\nCarlisle 2<sup><u>d</sup></u> October 1780\n\nTo John Agnew Clk\n";
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
