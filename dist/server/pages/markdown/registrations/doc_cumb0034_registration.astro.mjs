import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>30^th^ Sep<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>39 Cap^t^ William Patterson E Pennsbro</th><th></th></tr></thead><tbody><tr><td>136 Cato</td><td>a Negro Slave  X</td><td>60 y<sup><u>rs</u></sup></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0034_registration.md";
				const url = "/markdown/registrations/doc_cumb0034_registration";
				function rawContent() {
					return "﻿30^th^ Sep<sup><u>r</u></sup>\n\n|  | 39 Cap^t^ William Patterson E Pennsbro ||\n|--|--|--|\n|136 Cato  |a Negro Slave  X| 60 y<sup><u>rs</sup></u>\n\n";
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
