import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>4 Patrick Campble Chambersburgh Guilford Town^p^ Merch^t^</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th></th><th>y<sup><u>rs</u></sup> of ages</th></tr></thead><tbody><tr><td>13</td><td>Cunk a Negroe Boy aged about X</td><td>12</td></tr><tr><td>Aug<sup><u>t</u></sup> 24<sup><u>th</u></sup> 1780</td><td></td><td></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0004_registration.md";
				const url = "/markdown/registrations/doc_cumb0004_registration";
				function rawContent() {
					return "﻿4 Patrick Campble Chambersburgh Guilford Town^p^ Merch^t^\n|  |  |y<sup><u>rs</sup></u> of ages\n|--|--|--|\n|13|Cunk a Negroe Boy aged about X | 12\nAug<sup><u>t</u></sup> 24<sup><u>th</u></sup> 1780 \n";
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
