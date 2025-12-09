import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>5\nAug<sup><u>\tt</u></sup> 24<sup><u>h</u></sup> 1780\nHenry Pawling\nreturn of Slaves</p>\n<p>[back]</p>\n<p>Return of Negroe &#x26; Mullatoe Slaves and their names\nand ages registered as the property of Henry Pawling of\nthe County of Cumberland</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>Negroe</td><td>Cezar</td><td>aged about Fifty Six Years</td></tr><tr><td></td><td>Sam</td><td>aged about Thirty Four</td></tr><tr><td></td><td>Cate</td><td>aged about Thirty Two</td></tr><tr><td></td><td>Jim</td><td>aged about Twenty Eight</td></tr><tr><td></td><td>Tom ^s^</td><td>aged about Twenty Six</td></tr><tr><td></td><td>Tom ^Jun^</td><td>aged about Twenty One</td></tr><tr><td></td><td>Dina</td><td>aged about Eighteen</td></tr><tr><td></td><td>Pegg</td><td>aged about Fifteen</td></tr><tr><td>Negroe</td><td>Bella</td><td>aged about Fifteen</td></tr><tr><td></td><td>Nance</td><td>aged about Twelve</td></tr><tr><td></td><td>Jack</td><td>aged Four</td></tr><tr><td></td><td>Bet</td><td>aged Two</td></tr><tr><td></td><td>Bob</td><td>aged Twelve Months</td></tr><tr><td>Negroe</td><td>Purdence</td><td>aged Ten Months</td></tr></tbody></table>\n<p>Henry Pawling\nAugust the 23<sup><u>d</u></sup> 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0005_return.md";
				const url = "/markdown/returns/doc_cumb0005_return";
				function rawContent() {
					return "﻿\\[front]\n\n5\nAug<sup><u>\tt</sup></u> 24<sup><u>h</sup></u> 1780\nHenry Pawling\nreturn of Slaves\n\n\\[back]\n\nReturn of Negroe & Mullatoe Slaves and their names \nand ages registered as the property of Henry Pawling of \nthe County of Cumberland\n\n\n| | ||\n|--|--|--|\n| Negroe  | Cezar  |aged about Fifty Six Years|\n| | Sam|aged about Thirty Four|\n| | Cate|aged about Thirty Two|\n| | Jim|aged about Twenty Eight|\n| | Tom ^s^|aged about Twenty Six|\n| | Tom ^Jun^|aged about Twenty One|\n| |Dina|aged about Eighteen|\n| |Pegg|aged about Fifteen |\n|Negroe|Bella|aged about Fifteen|\n| |Nance|aged about Twelve|\n| |Jack|aged Four|\n| |Bet|aged Two|\n| |Bob|aged Twelve Months|\n|Negroe |Purdence|aged Ten Months|\n\nHenry Pawling\nAugust the 23<sup><u>d</sup></u> 1780\n\n";
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
