import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Names</th><th>6 William Allison of Antrim Township Farmer</th><th>Age</th></tr></thead><tbody><tr><td>28 George</td><td>A Negroe aged about X</td><td>34</td></tr><tr><td>29 Tom</td><td>aged about X</td><td>16</td></tr><tr><td>30 Venus</td><td>aged about X</td><td>46</td></tr><tr><td>31 Silvia</td><td>aged about X</td><td>22</td></tr><tr><td>32 Lucia</td><td>aged about X</td><td>8</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0006_registration.md";
				const url = "/markdown/registrations/doc_cumb0006_registration";
				function rawContent() {
					return "﻿|Names | 6 William Allison of Antrim Township Farmer |Age\n|--|--|--|\n|28 George  | A Negroe aged about X |34\n|29 Tom | aged about X |16\n|30 Venus  | aged about X |46\n|31 Silvia  | aged about X |22\n|32 Lucia | aged about X |8\n\n\n";
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
