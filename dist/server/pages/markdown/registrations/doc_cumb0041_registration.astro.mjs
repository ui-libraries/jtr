import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>6 October</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>46 Col. Frederick Watts Rye Township</th><th>years</th></tr></thead><tbody><tr><td>153 Jemima</td><td>a Mullatto Servant Wench aged 18 y<sup><u>rs</u></sup> 16<sup><u>th</u></sup> Feb^y^ last</td><td></td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTY1Mjc5OTIsMTU0NjYxODAyOCwtMTU0Nj\nM2Mjc1XX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0041_registration.md";
				const url = "/markdown/registrations/doc_cumb0041_registration";
				function rawContent() {
					return "6 October\n||46 Col. Frederick Watts Rye Township|years|\n|--|--|--|\n|153 Jemima| a Mullatto Servant Wench aged 18 y<sup><u>rs</sup></u> 16<sup><u>th</sup></u> Feb^y^ last ||\n\n\n\n\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTY1Mjc5OTIsMTU0NjYxODAyOCwtMTU0Nj\nM2Mjc1XX0=\n-->";
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
