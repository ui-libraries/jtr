import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>1780 Aug^t^ 31</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>13 Mathew Laird Middleton Miller</th><th>age</th></tr></thead><tbody><tr><td>58 George</td><td>a Mullatoe Slave X</td><td>10</td></tr><tr><td>59 Davey</td><td>a Mullatoe Slave X</td><td>12</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0012_registration.md";
				const url = "/markdown/registrations/doc_cumb0012_registration";
				function rawContent() {
					return "﻿1780 Aug^t^ 31\n\n|| 13 Mathew Laird Middleton Miller |age\n|--|--|--|\n|58 George  | a Mullatoe Slave X | 10\n59 Davey | a Mullatoe Slave X | 12\n\n";
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
