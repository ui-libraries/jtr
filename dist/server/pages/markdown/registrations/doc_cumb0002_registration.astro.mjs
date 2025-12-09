import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>Robert Gibson of Carlisle in the County\nof Cumberland Carpenter</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th></th><th>Y^rs^ of ages</th></tr></thead><tbody><tr><td>9</td><td>Phillis a Mulatto Slave for Life blind of both eyes x</td><td>25 or 26</td></tr><tr><td>10</td><td>Poll a Mestoe Slave for Life about x</td><td>3</td></tr><tr><td>Aug^t^. 22^d^ 1780</td><td></td><td></td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzkxNzEyMzMxLDE0ODUxNTA0MzldfQ==\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0002_registration.md";
				const url = "/markdown/registrations/doc_cumb0002_registration";
				function rawContent() {
					return "﻿\nRobert Gibson of Carlisle in the County\nof Cumberland Carpenter\n|  |  | Y^rs^ of ages |\n|--|--|--|\n|9| Phillis a Mulatto Slave for Life blind of both eyes x | 25 or 26 |\n|10| Poll a Mestoe Slave for Life about x|3|\nAug^t^. 22^d^ 1780\n<!--stackedit_data:\neyJoaXN0b3J5IjpbNzkxNzEyMzMxLDE0ODUxNTA0MzldfQ==\n-->";
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
