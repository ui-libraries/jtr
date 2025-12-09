import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>3<sup><u>d</u></sup> Octob<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>44 John Hunter Carlisle Tavern Keep<sup><u>d</u></sup></th><th>years</th></tr></thead><tbody><tr><td>145 Thom</td><td>a Negro Slave X</td><td>9</td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTAzMzcwMDMwMywtMTE5NDk4NjQ2N119\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0039_registration.md";
				const url = "/markdown/registrations/doc_cumb0039_registration";
				function rawContent() {
					return "\n3<sup><u>d</sup></u> Octob<sup><u>r</sup></u>\n||44 John Hunter Carlisle Tavern Keep<sup><u>d</sup></u>|years|\n|--|--|--|\n|145 Thom|a Negro Slave X|9\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTAzMzcwMDMwMywtMTE5NDk4NjQ2N119\n-->";
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
