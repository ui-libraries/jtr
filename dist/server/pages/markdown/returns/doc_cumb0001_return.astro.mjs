import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>N1<br>\n22<sup><u>d</u></sup> Aug<sup>t</sup> 1780<br>\nFrancis West Esqr.<br>\nReturn of Slaves</p>\n<p>[back]</p>\n<p>Francis West of Tyrone Township in Cumberland<br>\nCounty &#x26; State of Pennsylvania Esquire hath<br>\nthis Day delivered in Writing to Clerk of the Peace<br>\nfor the said County the Names of all his<br>\nMullatoe &#x26; Negro Slaves Viz-<br>\nSligoe a Negroe aged about 50 Years<br>\nJacob a mullato for Life ab<sup><u>t</u></sup>. 34 D<sup>o</sup><br>\nPoll a Negro Woman ab<sup><u>t</u></sup>. 23 D<sup>o</sup><br>\nChamont a Mullatoe ab<sup><u>t</u></sup>. 9 D<sup>o</sup> for Life<br>\nMilla a Mullatoe Girle ab<sup>t</sup> 3 D<sup>o</sup> for Life<br>\nLewis a Mestoe male child born November 10<sup>th</sup>. 1779 }<br>\nJohn <del>&#x26; Deb</del> A Negro ab<sup>t</sup> 29 Years <ins>for Life</ins><br>\nDebby about 50 Years a Negro Woman<br>\nAugust 22^d^<br>\nFran<sup>s</sup> West<br>\nEntered</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTg3NzkzNjU0Ml19\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0001_return.md";
				const url = "/markdown/returns/doc_cumb0001_return";
				function rawContent() {
					return "﻿\\[front]  \n\nN1  \n22<sup><u>d</u></sup> Aug<sup>t</sup> 1780  \nFrancis West Esqr.  \nReturn of Slaves\n\n\\[back]  \n\nFrancis West of Tyrone Township in Cumberland  \nCounty & State of Pennsylvania Esquire hath  \nthis Day delivered in Writing to Clerk of the Peace  \nfor the said County the Names of all his  \nMullatoe & Negro Slaves Viz-  \nSligoe a Negroe aged about 50 Years  \nJacob a mullato for Life ab<sup><u>t</u></sup>. 34 D<sup>o</sup>  \nPoll a Negro Woman ab<sup><u>t</u></sup>. 23 D<sup>o</sup>  \nChamont a Mullatoe ab<sup><u>t</u></sup>. 9 D<sup>o</sup> for Life  \nMilla a Mullatoe Girle ab<sup>t</sup> 3 D<sup>o</sup> for Life  \nLewis a Mestoe male child born November 10<sup>th</sup>. 1779 }  \nJohn ~~& Deb~~ A Negro ab<sup>t</sup> 29 Years <ins>for Life</ins>  \nDebby about 50 Years a Negro Woman  \nAugust 22^d^  \nFran<sup>s</sup> West  \nEntered\n\n\n\n\n\n\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTg3NzkzNjU0Ml19\n-->";
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
