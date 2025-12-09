import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>24\n14^th^ Sep<sup><u>r</u></sup> 1780\nGeeo Brown\nList of Negroes &#x26;c</p>\n<p>[back]</p>\n<p>A list of Negroe &#x26; Mullata Slaves, with their names &#x26;\nages, the property of the subscriber of Cumb^d^ County, in as follows\nViz</p>\n<p>Negro Jack aged about thirty five years\nNegroe Dick aged about twenty five years\nMulatta Sampson aged about seventeen years\nMulatta Silvey aged about thirty five years\nNegroe Judy aged about twenty five years\nNegroe Phillis aged about thirteen years\nMulatta Minto aged seven years\nMulatta Peter aged five years\nNegroe Phillip aged years\nNegroe Doll aged two years</p>\n<p>Geo Brown\nAug^t^ 21^st^ 1780</p>\n<blockquote>\n<p>Editor’s Note. The front page of the document has illegible scribbles to the right of the text.</p>\n</blockquote>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0020_return.md";
				const url = "/markdown/returns/doc_cumb0020_return";
				function rawContent() {
					return "﻿\\[front]\n\n24\n14^th^ Sep<SUP><U>r</SUP></U> 1780\nGeeo Brown\nList of Negroes &c\n\n\\[back]\n\nA list of Negroe & Mullata Slaves, with their names &\nages, the property of the subscriber of Cumb^d^ County, in as follows \nViz\n\nNegro Jack aged about thirty five years\nNegroe Dick aged about twenty five years\nMulatta Sampson aged about seventeen years\nMulatta Silvey aged about thirty five years\nNegroe Judy aged about twenty five years \nNegroe Phillis aged about thirteen years\nMulatta Minto aged seven years\nMulatta Peter aged five years\nNegroe Phillip aged years\nNegroe Doll aged two years\n\nGeo Brown\nAug^t^ 21^st^ 1780\n\n>Editor's Note. The front page of the document has illegible scribbles to the right of the text.\n";
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
