import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>4<sup><u>th</u></sup> Oct<sup><u>r</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>45 James Young Guilford Farmer</th><th>years</th></tr></thead><tbody><tr><td>146 Sambo</td><td>a Negro Slave aged X</td><td>60</td></tr><tr><td>147 Jo</td><td>a Negro Slave X</td><td>20</td></tr><tr><td>148 George</td><td>a Negro Slave X</td><td>8</td></tr><tr><td>149 Rachel</td><td>a Negro Slave X</td><td>40</td></tr><tr><td>150 Rachel</td><td>a Negro Slave X</td><td>4</td></tr><tr><td>151 Hannah</td><td>a Negro Slave X</td><td>2</td></tr><tr><td>152 Lunnon</td><td>a Negro Slave X</td><td>30</td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMzEyNzk1NjE2LDM0MzIyOTExM119\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0040_registration.md";
				const url = "/markdown/registrations/doc_cumb0040_registration";
				function rawContent() {
					return "4<SUP><U>th</SUP></U> Oct<SUP><U>r</SUP></U> \n||45 James Young Guilford Farmer|years|\n|--|--|--|\n|146 Sambo|a Negro Slave aged X|60|\n|147 Jo|a Negro Slave X|20|\n|148 George|a Negro Slave X|8|\n|149 Rachel|a Negro Slave X|40|\n|150 Rachel|a Negro Slave X|4|\n|151 Hannah|a Negro Slave X|2|\n|152 Lunnon|a Negro Slave X|30|\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMzEyNzk1NjE2LDM0MzIyOTExM119\n-->";
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
