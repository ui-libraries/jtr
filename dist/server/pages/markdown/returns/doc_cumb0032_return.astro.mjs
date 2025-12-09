import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>36\n29^th^ Sep<sup><u>r</u></sup> 1780\nArch<sup><u>d</u></sup> Irwin</p>\n<p>[back]</p>\n<p>A list of Negro Slaves returned to John Agnew clk\nthe property of Arch<sup><u>d</u></sup> Irwin Peters Township Cumb<sup><u>d</u></sup>\nCounty 29<sup><u>th</u></sup> Sep<sup><u>r</u></sup> 1780 Arch<sup><u>d</u></sup> Irwin</p>\n<p>viz\nThomas a  Negro Slave aged about 35 y<sup><u>rs</u></sup>\nEneas a Negro Slave 27\nHannah a Negro Slave 12</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0032_return.md";
				const url = "/markdown/returns/doc_cumb0032_return";
				function rawContent() {
					return "﻿\\[front]\n\n36\n29^th^ Sep<sup><u>r</u></sup> 1780\nArch<sup><u>d</sup></u> Irwin\n\n\\[back]\n\nA list of Negro Slaves returned to John Agnew clk \nthe property of Arch<sup><u>d</sup></u> Irwin Peters Township Cumb<sup><u>d</u></sup> \nCounty 29<sup><u>th</sup></u> Sep<sup><u>r</u></sup> 1780 Arch<sup><u>d</u></sup> Irwin\n\nviz\nThomas a  Negro Slave aged about 35 y<sup><u>rs</sup></u>\nEneas a Negro Slave 27\nHannah a Negro Slave 12\n";
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
