import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>6/\n24^th^ Augst 1780\nW<sup><u>m</u></sup> Allison\nList of Slaves</p>\n<p>[back]</p>\n<p>A List of all the Negroe Slaves with their names\n&#x26; ages the Property of the subscriber in Antrim\nTownship Cumb<sup><u>d</u></sup> County as follows Viz</p>\n<p>George aged about Thirty Four\nTom aged about Sixteen Years\nVenus aged about Forty Six\nSilvia aged about Twenty Two\nLucia aged about Eight</p>\n<p>Will<sup><u>m</u></sup><u><u> Allison</u>\nAug<sup><u>t</u></sup> 23^d^ 1780</u></p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0006_return.md";
				const url = "/markdown/returns/doc_cumb0006_return";
				function rawContent() {
					return "﻿\\[front]\n\n6/ \n24^th^ Augst 1780\nW<sup><u>m</sup></u> Allison\nList of Slaves\n\n\\[back]\n\nA List of all the Negroe Slaves with their names \n& ages the Property of the subscriber in Antrim \nTownship Cumb<sup><u>d</sup></u> County as follows Viz\n\nGeorge aged about Thirty Four\nTom aged about Sixteen Years\nVenus aged about Forty Six\nSilvia aged about Twenty Two\nLucia aged about Eight\n\nWill<sup><u>m</sup><u> Allison</u>\nAug<sup><u>t</sup></u> 23^d^ 1780\n";
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
