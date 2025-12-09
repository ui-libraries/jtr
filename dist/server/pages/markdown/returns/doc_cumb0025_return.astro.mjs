import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>29\n22 Sep^r^ 1780\nRob^t^ Miller\nlist of Slaves</p>\n<p>[back]</p>\n<p>In pursuance of the ‘Act for the gradual\nAbolition of Slavery” Robert Miller of the Town\nof Carlisle in the County of Cumberland Tanner\ndoth hereby enter with the Clerk of the Sessions\nof the said County</p>\n<p>Darby ^ <sup>aged 40 y<sup><u>rs</u></sup></sup> &#x26; Violet <del>his wife</del> ^ ^Slaves^ aged about 40\n1 Toby a slave aged 40 y<sup><u>rs</u></sup><u>\nAbraham a slave 4 years</u></p><u>\n<p>To\nJohn Agnew Esq<sup><u>r</u></sup></p></u>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0025_return.md";
				const url = "/markdown/returns/doc_cumb0025_return";
				function rawContent() {
					return "﻿\\[front]\n\n29\n22 Sep^r^ 1780\nRob^t^ Miller\nlist of Slaves\n\n\\[back]\n\nIn pursuance of the 'Act for the gradual \nAbolition of Slavery\" Robert Miller of the Town \nof Carlisle in the County of Cumberland Tanner \ndoth hereby enter with the Clerk of the Sessions\nof the said County\n\nDarby ^ <sup>aged 40 y<sup><u>rs</sup></u></sup> & Violet ~~his wife~~ ^ ^Slaves^ aged about 40\n1 Toby a slave aged 40 y<sup><u>rs</sup>\nAbraham a slave 4 years \n\nTo\nJohn Agnew Esq<sup><u>r</sup>\n";
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
