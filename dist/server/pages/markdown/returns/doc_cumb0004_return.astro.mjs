import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>Aug^t^ 24^th^ 1780\n4 Patrick Campble\nChambersburgh\nReturn of a Slave</p>\n<p>[back]</p>\n<p>A Negro Boy belonging to Pat<sup><u>r</u></sup> Campbell Merch^t^\nChamberstown Named Cunk aged: 12 years\nAugust 23<sup><u>d</u></sup> 1780\nPat<sup><u>r</u></sup>  Campbell</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0004_return.md";
				const url = "/markdown/returns/doc_cumb0004_return";
				function rawContent() {
					return "﻿\\[front] \n\nAug^t^ 24^th^ 1780\n4 Patrick Campble\nChambersburgh\nReturn of a Slave\n\n\\[back]\n\nA Negro Boy belonging to Pat<sup><u>r</u></sup> Campbell Merch^t^\nChamberstown Named Cunk aged: 12 years\nAugust 23<sup><u>d</u></sup> 1780 \nPat<sup><u>r</u></sup>  Campbell\n";
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
