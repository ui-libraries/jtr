import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>25\n14^th^ Sept^r^ 1780\nDavid Mahan\nList of Negroes</p>\n<p>[back]</p>\n<p>A list of Negroes the property of David Mahan of <del>Lurgan</del> Hopewell\nTownship in the County of Cumberland 15^th^ Sep<sup><u>r</u></sup> 1780</p>\n<p>David Mahan</p>\n<p>viz\nCodge a Negroe Slave aged about 24 years\nSilvey 23\nIsaac about 18\nTom about 12\nNell about 12\nJim about 1</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0021_return.md";
				const url = "/markdown/returns/doc_cumb0021_return";
				function rawContent() {
					return "﻿\\[front]\n\n25\n14^th^ Sept^r^ 1780\nDavid Mahan\nList of Negroes\n\n\\[back]\n\nA list of Negroes the property of David Mahan of ~~Lurgan~~ Hopewell\nTownship in the County of Cumberland 15^th^ Sep<sup><u>r</sup></u> 1780\n\nDavid Mahan\n\nviz\nCodge a Negroe Slave aged about 24 years\nSilvey 23\nIsaac about 18\nTom about 12\nNell about 12\nJim about 1\n\n";
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
