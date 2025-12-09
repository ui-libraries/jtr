import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>13\nAug^t^ 31 1780\nMatthew Laird\nList of Slaves</p>\n<p>[back]</p>\n<p>Cumberland County Middleton Township 31<sup><u>st</u></sup> Aug<sup><u>t</u></sup>\nA Return of my Negroes with Names &#x26; Ages as follows\nViz George A Mullatoe Slave Aged 18. Years\nDave A Negroe Slave Aged 12. Years</p>\n<p>Matthew Laird\nTo John Agnew Esq.</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0012_return.md";
				const url = "/markdown/returns/doc_cumb0012_return";
				function rawContent() {
					return "﻿\\[front]\n\n13\nAug^t^ 31 1780\nMatthew Laird\nList of Slaves\n\n\\[back]\n\nCumberland County Middleton Township 31<sup><u>st</sup></u> Aug<sup><u>t</sup></u>\nA Return of my Negroes with Names & Ages as follows \nViz George A Mullatoe Slave Aged 18. Years\nDave A Negroe Slave Aged 12. Years\n\nMatthew Laird\nTo John Agnew Esq.\n\n";
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
