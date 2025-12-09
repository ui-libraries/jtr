import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>27\n21^st^ Sep<sup><u>r</u></sup> 1780\nStephen Duncan\nreturn 1 Slave</p>\n<p>[back]</p>\n<p>In pursuance of the “Act for the gradual\nAbolition of Slavery” Stephen Duncan of the\ntown of Carlisle in the County of Cumberland\nMerchant, doth hereby enter with the Clerk\nof the Sessions of the said County</p>\n<p>Frank a Negro Man aged\nTwenty two years or there about whom he owns as\na Slave during his life</p>\n<p>To John Agnew Esq<sup><u>r</u></sup>\nClerk of the Peace in\n&#x26; for the County of Cumberland</p>\n<p>1780</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0023_return.md";
				const url = "/markdown/returns/doc_cumb0023_return";
				function rawContent() {
					return "﻿\\[front]\n\n27\n21^st^ Sep<sup><u>r</sup></u> 1780\nStephen Duncan\nreturn 1 Slave\n\n\\[back]\n\nIn pursuance of the \"Act for the gradual \nAbolition of Slavery\" Stephen Duncan of the \ntown of Carlisle in the County of Cumberland \nMerchant, doth hereby enter with the Clerk \nof the Sessions of the said County\n\nFrank a Negro Man aged \nTwenty two years or there about whom he owns as \na Slave during his life\n\nTo John Agnew Esq<sup><u>r</sup></u>\nClerk of the Peace in\n& for the County of Cumberland\n\n1780\n";
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
