import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>26\n21^st^ Sep<sup><u>r</u></sup> 1780\nJohn Davidson\nWest Penns^o^\nreturn of 1 Negro</p>\n<p>[back]</p>\n<p>In Pursuance of the Act for the gradual\nAbolition of Slavery: John Davison of the\nTownship of Westpennsborough in the County\nof Cumberland Farmer doth hereby Enter with\nthe Clark of the Sessions of the said County</p>\n<p>Bill a Negro Man aged 25 <del>y<sup><u>rs</u></sup></del>\nyears or there Abouts whom he owns as\nA Slave During his Life</p>\n<p>To John Agnew Esqu<sup><u>r</u></sup>\nClerk of the Peace in\nfor the County of\nCumberland</p>\n<p>Sept<sup><u>r</u></sup> 21<sup><u>st</u></sup> 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0022_return.md";
				const url = "/markdown/returns/doc_cumb0022_return";
				function rawContent() {
					return "﻿\n\\[front]\n\n26\n21^st^ Sep<sup><u>r</sup></u> 1780\nJohn Davidson\nWest Penns^o^\nreturn of 1 Negro\n\n\\[back]\n\nIn Pursuance of the Act for the gradual \nAbolition of Slavery: John Davison of the \nTownship of Westpennsborough in the County \nof Cumberland Farmer doth hereby Enter with \nthe Clark of the Sessions of the said County\n\nBill a Negro Man aged 25 ~~y<sup><u>rs</sup></u>~~ \nyears or there Abouts whom he owns as \nA Slave During his Life\n\nTo John Agnew Esqu<sup><u>r</sup></u>\nClerk of the Peace in \nfor the County of \nCumberland\n\nSept<sup><u>r</sup></u> 21<sup><u>st</sup></u> 1780\n\n";
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
