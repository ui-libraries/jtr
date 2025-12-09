import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>37\n30^th^ Sep<sup><u>r</u></sup> 1780\nAndrew Holmes</p>\n<p>[back]</p>\n<p>Arthur Negro aged 37 years\nTim d^o^ 26\nJude d<sup><u>o</u></sup> 30</p>\n<p>The above with Names &#x26; ages of Negro Slaves the\nproperty of</p>\n<p>And<sup><u>w</u></sup> Holmes</p>\n<p>Carlisle 30<sup><u>th</u></sup> Sep^r^ 1780\nTo John Agnew Clk</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0033_return.md";
				const url = "/markdown/returns/doc_cumb0033_return";
				function rawContent() {
					return "﻿\\[front]\n\n37\n30^th^ Sep<sup><u>r</u></sup> 1780\nAndrew Holmes\n\n\\[back]\n\nArthur Negro aged 37 years\nTim d^o^ 26\nJude d<sup><u>o</sup></u> 30 \n\nThe above with Names & ages of Negro Slaves the \nproperty of\n\nAnd<sup><u>w</sup></u> Holmes\n\nCarlisle 30<sup><u>th</sup></u> Sep^r^ 1780\nTo John Agnew Clk\n\n";
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
