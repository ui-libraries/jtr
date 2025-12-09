import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>30\n22^d^ Sep<sup><u>r</u></sup> 1780\nJohn Murdochs\nreturn of 1 Slave</p>\n<p>[back]</p>\n<p>John Murdoch of the Town of Carlisle in the\nCounty of Cumberland Heel-maker returns</p>\n<p>Dinah a Negroe Slave Aged 15 years</p>\n<p>Carlisle 22<sup><u>rd</u></sup> Sept<sup><u>r</u></sup> 1780\nJohn Agnew Esq<sup><u>r</u></sup></p>\n<p>Jno Murdoch</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0026_return.md";
				const url = "/markdown/returns/doc_cumb0026_return";
				function rawContent() {
					return "﻿\\[front]\n\n30 \n22^d^ Sep<sup><u>r</u></sup> 1780\nJohn Murdochs\nreturn of 1 Slave\n\n\\[back]\n\nJohn Murdoch of the Town of Carlisle in the \nCounty of Cumberland Heel-maker returns\n\nDinah a Negroe Slave Aged 15 years\n\nCarlisle 22<sup><u>rd</u></sup> Sept<sup><u>r</u></sup> 1780\nJohn Agnew Esq<sup><u>r</sup></u>\n\nJno Murdoch\n";
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
