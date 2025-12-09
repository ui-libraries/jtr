import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>21\n6^th^ Sep^r^ 1780\nJn^o^ Carsons\nSlave</p>\n<p>[back]</p>\n<p>A Return of a Negroe Slave\nthe propertyof John Carson of\nCumberland County</p>\n<p>1 Negroe Wench Rachel 14 years old</p>\n<p>Sept<sup><u>r</u></sup> 6th 1780\nJn^o^ Carson</p>\n<blockquote>\n<p>Editor’s Note. The front page of the document contains some arithmetic accounting in the margins.</p>\n</blockquote>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0017_return.md";
				const url = "/markdown/returns/doc_cumb0017_return";
				function rawContent() {
					return "﻿\\[front]\n\n21\n6^th^ Sep^r^ 1780 \nJn^o^ Carsons\nSlave\n\n\\[back]\n\nA Return of a Negroe Slave\nthe propertyof John Carson of\nCumberland County\n\n1 Negroe Wench Rachel 14 years old\n\nSept<sup><u>r</sup></u> 6th 1780 \nJn^o^ Carson\n\n>Editor's Note. The front page of the document contains some arithmetic accounting in the margins.\n";
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
