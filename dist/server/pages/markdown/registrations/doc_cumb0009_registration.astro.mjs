import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Names</th><th>9 Thomas Johnston Antrim Township Farmer</th><th>years</th></tr></thead><tbody><tr><td>45 Dick</td><td>A Negroe Slave aged about X</td><td>28</td></tr><tr><td>46 Will</td><td>aged about X</td><td>19</td></tr><tr><td>47 Charles</td><td>aged about X</td><td>18 M<sup><u>s</u></sup></td></tr></tbody></table>\n<p>25 August 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0009_registration.md";
				const url = "/markdown/registrations/doc_cumb0009_registration";
				function rawContent() {
					return "﻿|Names |9 Thomas Johnston Antrim Township Farmer  |years\n|--|--|--|\n|45 Dick  |A Negroe Slave aged about X  |28\n|46 Will|aged about X  |19\n|47 Charles| aged about X  |18 M<sup><u>s</sup></u>\n\n25 August 1780\n\n\n";
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
