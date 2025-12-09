import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>44\n4<sup><u>th</u></sup> October 1780\nJohn Hunter</p>\n<p>[back]</p>\n<p>Carlisle 4<sup><u>th</u></sup> October 1780</p>\n<p>One Negro Slave Tom aged 9 years\nthe property of</p>\n<p>John Hunter TK<sup><u>r</u></sup></p>\n<p>To John Agnew Clk</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTE2NDMyNTY3ODNdfQ==\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0039_return.md";
				const url = "/markdown/returns/doc_cumb0039_return";
				function rawContent() {
					return "\\[front]\n\n44\n4<sup><u>th</sup></u> October 1780\nJohn Hunter\n\n\\[back]\n\nCarlisle 4<sup><u>th</sup></u> October 1780\n\nOne Negro Slave Tom aged 9 years\nthe property of\n\nJohn Hunter TK<sup><u>r</sup></u>\n\nTo John Agnew Clk\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTE2NDMyNTY3ODNdfQ==\n-->\n";
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
