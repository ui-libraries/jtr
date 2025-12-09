import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>43\n3<sup><u>d</u></sup> Oct<sup><u>r</u></sup> 1780\nJohn Harris Esq<sup><u>r</u></sup>\nFermanagh</p>\n<p>[back]</p>\n<p>S<sup><u>r</u></sup> according to the Law for the\ngradual abolition ^ ^of^ Slavery all Negro\nand mulato Slaves are to be <del>Registr^ated^</del>\nRegistered Before the first of Nov<sup><u>r</u></sup>\nnext I have got two they are\nBoth famels the oldest about 14\nyears of ages her name is Meela\nthe other about II her name is\nAmee you will please Register\n^ ^them^ <del>names</del> as the Law Directs\nI am S<sup><u>r</u></sup>  your most obe^dt^ ser^t^</p>\n<p>John Harris</p>\n<p>Oct^r^ 2<sup><u>d</u></sup>  1780</p>\n<blockquote>\n<p>Editor’s Note. The address “M<sup><u>r</u></sup> W<sup><u>m</u></sup> Lyon, Carlisle” is included perpendicular to the left the main text.</p>\n</blockquote>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0038_return.md";
				const url = "/markdown/returns/doc_cumb0038_return";
				function rawContent() {
					return "﻿\\[front]\n\n43\n3<sup><u>d</sup></u> Oct<sup><u>r</sup></u> 1780\nJohn Harris Esq<sup><u>r</sup></u> \nFermanagh\n\n\\[back]\n\nS<sup><u>r</sup></u> according to the Law for the \ngradual abolition ^ ^of^ Slavery all Negro \nand mulato Slaves are to be ~~Registr^ated^~~ \nRegistered Before the first of Nov<sup><u>r</sup></u>\nnext I have got two they are \nBoth famels the oldest about 14\nyears of ages her name is Meela\nthe other about II her name is \nAmee you will please Register\n^ ^them^ ~~names~~ as the Law Directs\nI am S<sup><u>r</sup></u>  your most obe^dt^ ser^t^\n\nJohn Harris\n\nOct^r^ 2<sup><u>d</sup></u>  1780\n>Editor's Note. The address \"M<sup><u>r</u></sup> W<sup><u>m</u></sup> Lyon, Carlisle\" is included perpendicular to the left the main text.\n\n";
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
