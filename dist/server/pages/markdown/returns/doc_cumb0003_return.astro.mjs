import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>N^o^ 3\n22<sup><u>d</u></sup> Aug<sup><u>t</u></sup> 1780</p>\n<p>[back]</p>\n<p>Ralph Starret of Rye Township in Cumberland\nCounty &#x26; State of Pennsylvania Farmer hath this day\ndelivered in writing to the clk of the Peace for s^d^ County\nthe Names of all his Negroe and Mullatoe Slaves viz:\nJacob a Negroe man aged about 21 years\nGrace a Negroe Woman aged about 15 years\nAug<sup><u>t</u></sup> 22<sup><u>d</u></sup> 1780 Ralph Starret</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0003_return.md";
				const url = "/markdown/returns/doc_cumb0003_return";
				function rawContent() {
					return "﻿\\[front]\n\nN^o^ 3\n22<sup><u>d</u></sup> Aug<sup><u>t</u></sup> 1780\n\n\n\\[back]\n\nRalph Starret of Rye Township in Cumberland\nCounty & State of Pennsylvania Farmer hath this day\ndelivered in writing to the clk of the Peace for s^d^ County \nthe Names of all his Negroe and Mullatoe Slaves viz:\nJacob a Negroe man aged about 21 years\nGrace a Negroe Woman aged about 15 years\nAug<sup><u>t</u></sup> 22<sup><u>d</u></sup> 1780 Ralph Starret\n \n";
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
