import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>31\n22^d^ Sep<sup><u>r</u></sup> 1780\nJames Finlay\nlist of Slaves</p>\n<p>[back]</p>\n<p>Cumberland County Letterkenny T<sup><u>p</u></sup> a\nreturn of my Negroes with their names\nAges and sexes as follows Viz</p>\n<p>Sampson a Negroe Slave aged 30 y<sup><u>rs</u></sup>\nWill a Nege Slave aged 24 d^o^\nCuff a  d^o^  d^o^ aged 16  d^o^\nDoll a Mullatoe during life 15  d^o^\nBeck a Mullatoe during life 5  d^o^</p>\n<p>Carlisle 22 Sep<sup><u>r</u></sup> 1780\nJn^o^ Agnew Esq<sup><u>r</u></sup>\nJames Finley</p>\n<blockquote>\n<p>Editor’s Note. Towards the bottom of the front page of the document, the phrase “In Pursuance” is written upside-down in a smudged and faded script.</p>\n</blockquote>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0027_return.md";
				const url = "/markdown/returns/doc_cumb0027_return";
				function rawContent() {
					return "﻿\\[front]\n\n31\n22^d^ Sep<sup><u>r</u></sup> 1780\nJames Finlay\nlist of Slaves\n\n\\[back]\n\nCumberland County Letterkenny T<sup><u>p</u></sup> a\nreturn of my Negroes with their names \nAges and sexes as follows Viz\n\nSampson a Negroe Slave aged 30 y<sup><u>rs</sup></u>\nWill a Nege Slave aged 24 d^o^\nCuff a  d^o^  d^o^ aged 16  d^o^\nDoll a Mullatoe during life 15  d^o^\nBeck a Mullatoe during life 5  d^o^\n\nCarlisle 22 Sep<sup><u>r</u></sup> 1780\nJn^o^ Agnew Esq<sup><u>r</sup></u>\nJames Finley\n\n>Editor's Note. Towards the bottom of the front page of the document, the phrase \"In Pursuance\" is written upside-down in a smudged and faded script.\n";
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
