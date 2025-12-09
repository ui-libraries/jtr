import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>7<sup><u>th</u></sup> October</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>47 Alexander Blaine Com^y^ of Issues</th><th></th></tr></thead><tbody><tr><td>154 Hannah</td><td>a Negro Slave X</td><td>20</td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTkxMTIxNTM3OSwyMTQwMDg1Njk3LC0xNT\nI2NTM4NTk5LDIxNDAwODU2OTcsMTM2NjYwNTc0M119\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0042_registration.md";
				const url = "/markdown/registrations/doc_cumb0042_registration";
				function rawContent() {
					return "7<sup><u>th</sup></u> October\n|  |47 Alexander Blaine Com^y^ of Issues ||\n|--|--|--|\n|154 Hannah | a Negro Slave X |20\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTkxMTIxNTM3OSwyMTQwMDg1Njk3LC0xNT\nI2NTM4NTk5LDIxNDAwODU2OTcsMTM2NjYwNTc0M119\n-->";
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
