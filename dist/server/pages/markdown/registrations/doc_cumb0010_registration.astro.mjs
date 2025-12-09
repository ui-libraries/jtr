import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>10 John Williams Allen Township Framer</th><th>Age</th></tr></thead><tbody><tr><td>48 Sarah</td><td>A Negroe aged about X</td><td>30</td></tr><tr><td>49 Nance</td><td>A Mullatoe Slave X</td><td>11</td></tr><tr><td>50 Alek</td><td>A Negroe aged about X</td><td>11</td></tr></tbody></table>\n<p>25^th^ Aug^t^ 1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0010_registration.md";
				const url = "/markdown/registrations/doc_cumb0010_registration";
				function rawContent() {
					return "﻿||10 John Williams Allen Township Framer  |Age|\n|--|--|--|\n|  48 Sarah| A Negroe aged about X | 30\n|  49 Nance| A Mullatoe Slave X |11\n|  50 Alek| A Negroe aged about X | 11\n\n25^th^ Aug^t^ 1780\n";
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
