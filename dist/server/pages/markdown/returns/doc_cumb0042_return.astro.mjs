import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>47\n6^th^ October 1780\nAlex Blaine</p>\n<p>[back]</p>\n<p>Alexander Blaine of the town of Carlisle\nin the County of Cumberland Commissary of Hues</p>\n<p>Negroe Hanah a femal Slave for life aged about 20 years</p>\n<p>Carlisle 7^th^ Oct,, 1780</p>\n<p>To John Agnew Esq^r^ Clerk\nof the peace of the County of Cumberland</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzc4NjA2NjAyLC0yMDg4NzQ2NjEyXX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0042_return.md";
				const url = "/markdown/returns/doc_cumb0042_return";
				function rawContent() {
					return "\\[front]\n\n47\n6^th^ October 1780\nAlex Blaine\n\n\\[back]\n\nAlexander Blaine of the town of Carlisle \nin the County of Cumberland Commissary of Hues\n\nNegroe Hanah a femal Slave for life aged about 20 years\n\nCarlisle 7^th^ Oct,, 1780\n\nTo John Agnew Esq^r^ Clerk \nof the peace of the County of Cumberland\n\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzc4NjA2NjAyLC0yMDg4NzQ2NjEyXX0=\n-->";
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
