import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>28\n21<sup><u>st</u></sup> Sep<sup><u>r</u></sup> 1780\nJohn Creigh’s return\nof 1 Slave</p>\n<p>[back]</p>\n<p>In Pursuance of the Act for gradual Absolution\nof Slavery John Creigh of the Town of Carlisle\nin the County of Cumberland Storekeeper\ndoth hereby enter with the Clerk of the Sessions\nof the said county, Jean a Negroe Woman\naged about Twenty <del>or</del> whom said John\nowns As a Slave during her Natural\nLife</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0024_return.md";
				const url = "/markdown/returns/doc_cumb0024_return";
				function rawContent() {
					return "﻿\\[front]\n\n28\n21<sup><u>st</u></sup> Sep<sup><u>r</u></sup> 1780\nJohn Creigh's return\nof 1 Slave\n\n\\[back]\n\nIn Pursuance of the Act for gradual Absolution\nof Slavery John Creigh of the Town of Carlisle \nin the County of Cumberland Storekeeper \ndoth hereby enter with the Clerk of the Sessions\n of the said county, Jean a Negroe Woman \n aged about Twenty ~~or~~ whom said John \n owns As a Slave during her Natural \n Life\n";
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
