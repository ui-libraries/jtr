import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>6^th^ October</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>48 Cap<sup><u>t</u></sup> William Rippy A D Q M<sup><u>r</u></sup> Lurgan</th><th></th></tr></thead><tbody><tr><td>155 Dick</td><td>a Negro Slave aged X</td><td>30</td></tr><tr><td>156 James</td><td>a Mullatto Slave aged X</td><td>20</td></tr><tr><td>157 Reaner</td><td>a Female Negro Slave for Life X</td><td>25</td></tr><tr><td>158 Dinah</td><td>a Female Negro Slave for Life X</td><td>10</td></tr><tr><td>159 Mattes</td><td>a Male Negro Slave for Life X</td><td>10</td></tr><tr><td>160 Tom</td><td>a Male Mullato for Life X</td><td>11</td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTM4MTA0MzYwMiwtODQ3MzEwNjAxXX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0043a_registration.md";
				const url = "/markdown/registrations/doc_cumb0043a_registration";
				function rawContent() {
					return "6^th^ October\n|  | 48 Cap<sup><u>t</sup></u> William Rippy A D Q M<sup><u>r</sup></u> Lurgan ||\n|--|--|--|\n| 155 Dick | a Negro Slave aged X |30\n| 156 James | a Mullatto Slave aged X |20\n| 157 Reaner | a Female Negro Slave for Life X |25\n| 158 Dinah | a Female Negro Slave for Life X |10\n| 159 Mattes | a Male Negro Slave for Life X |10\n| 160 Tom | a Male Mullato for Life X |11\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTM4MTA0MzYwMiwtODQ3MzEwNjAxXX0=\n-->";
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
