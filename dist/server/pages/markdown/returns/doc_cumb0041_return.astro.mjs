import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>40\n6^th^ October 1780\nCol. Fred^k^ Watts</p>\n<p>[back]</p>\n<p>To William Lyon Esquire Clerk of the peace for\nthe County of Cumberland</p>\n<p>I the Subscriber of Rye Town Ship Cumberland\nCounty do in conformity to an Act of General Assembly of\nPennsylvania passed the first day of March 1780 for the Gradual\nAbolition of Slavery return in order to be recorded, a Mulatto\nServant Wench named Jemima aged Eighteen years the Sixteenth\nday of February Last Witness my hand this 4^th^ day of <del>October 1780</del>\nOctober 1780</p>\n<p>Frederick Watts</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNDA1MTE1ODAwLC0xNTY1MDY3NzU0XX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0041_return.md";
				const url = "/markdown/returns/doc_cumb0041_return";
				function rawContent() {
					return "\\[front]\n\n40 \n6^th^ October 1780\nCol. Fred^k^ Watts\n\n\\[back]\n\nTo William Lyon Esquire Clerk of the peace for\nthe County of Cumberland\n\nI the Subscriber of Rye Town Ship Cumberland \nCounty do in conformity to an Act of General Assembly of \nPennsylvania passed the first day of March 1780 for the Gradual\nAbolition of Slavery return in order to be recorded, a Mulatto \nServant Wench named Jemima aged Eighteen years the Sixteenth\nday of February Last Witness my hand this 4^th^ day of ~~October 1780~~\nOctober 1780\n\nFrederick Watts\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNDA1MTE1ODAwLC0xNTY1MDY3NzU0XX0=\n-->";
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
