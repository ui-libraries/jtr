import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>9/25 Aug^t^ 1780\nThomas Johnston\nList of Slaves</p>\n<p>[back]</p>\n<p>A list of the Negroe Slaves With theire Names and Ages as follows\nthe Property of the Subscriber of the County of Cumberland</p>\n<p>Dick Aged Twenty Eight years\nWill Aged Nineteen years\nCharles aged one years and half <del>year</del></p>\n<p>Th<sup><u>o</u></sup> Johnston</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0009_return.md";
				const url = "/markdown/returns/doc_cumb0009_return";
				function rawContent() {
					return "﻿\\[front]\n\n9/25 Aug^t^ 1780\nThomas Johnston\nList of Slaves\n\n\\[back]\n\nA list of the Negroe Slaves With theire Names and Ages as follows \nthe Property of the Subscriber of the County of Cumberland\n\nDick Aged Twenty Eight years\nWill Aged Nineteen years\nCharles aged one years and half ~~year~~\n\nTh<sup><u>o</sup></u> Johnston\n";
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
