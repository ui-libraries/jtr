import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>33\n28^th^ Sep<sup><u>r</u></sup> 1780\nRobert Semple</p>\n<p>[back]</p>\n<p>Robert Semple of Westpennsbro Township Cumberland County Returns\nSoloman a Negroe Slave Aged 24 years\nPomp a Negroe Slave Aged 14 years\nPhillis a Mullattoe d^o^ Aged 10 d^o^ Serve during life</p>\n<p>To J Agnew Esqr\nRob^t^ Semple</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0029_return.md";
				const url = "/markdown/returns/doc_cumb0029_return";
				function rawContent() {
					return "﻿\\[front]\n\n33\n28^th^ Sep<sup><u>r</u></sup> 1780\nRobert Semple\n\n\\[back]\n\nRobert Semple of Westpennsbro Township Cumberland County Returns\nSoloman a Negroe Slave Aged 24 years\nPomp a Negroe Slave Aged 14 years\nPhillis a Mullattoe d^o^ Aged 10 d^o^ Serve during life \n\nTo J Agnew Esqr\nRob^t^ Semple\n";
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
