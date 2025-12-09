import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>5 Septem<u><sup>r</sup></u></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>14 James Calhoone Hopewell Tavern Keeper</th><th>age</th></tr></thead><tbody><tr><td>60 Sall</td><td>a Negroe Slave X</td><td>31</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0013a_registration.md";
				const url = "/markdown/registrations/doc_cumb0013a_registration";
				function rawContent() {
					return "﻿5 Septem<u><sup>r</u></sup>\n|| 14 James Calhoone Hopewell Tavern Keeper |age\n|--|--|--|\n| 60 Sall| a Negroe Slave X |31\n\n";
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
