import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>35\n29^th^ Sep<sup><u>r</u></sup> 1780\nSam^l^ Brice</p>\n<p>[back]</p>\n<p>Sam<sup><u>l</u></sup> Brice of Westpennsbro’ Township Cumberland County Farmer returns</p>\n<p>York a Mullatoe Slave aged 12 <sup><u>ys</u></sup> for life</p>\n<p>To J. Agnew Esq<sup><u>r</u></sup></p>\n<p>Sam<sup><u>l</u></sup> Brice</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0031_return.md";
				const url = "/markdown/returns/doc_cumb0031_return";
				function rawContent() {
					return "﻿\\[front]\n\n35\n29^th^ Sep<sup><u>r</u></sup> 1780\nSam^l^ Brice\n\n\\[back]\n\nSam<sup><u>l</sup></u> Brice of Westpennsbro' Township Cumberland County Farmer returns \n\nYork a Mullatoe Slave aged 12 <sup><u>ys</sup></u> for life\n\nTo J. Agnew Esq<sup><u>r</sup></u>\n\nSam<sup><u>l</sup></u> Brice\n";
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
