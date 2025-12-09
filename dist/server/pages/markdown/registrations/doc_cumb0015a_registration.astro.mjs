import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>Sep^r^ 6 1780</p>\n<p>|| 18 John Herron Lurgan Farmer ||\n|—|—|—|—|\n| 66 Jerry | a Negro Slave X |25\n| 67 Sall | a Negro Slave X |12</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0015a_registration.md";
				const url = "/markdown/registrations/doc_cumb0015a_registration";
				function rawContent() {
					return "﻿Sep^r^ 6 1780\n\n|| 18 John Herron Lurgan Farmer ||\n|--|--|--|--|\n| 66 Jerry | a Negro Slave X |25\n| 67 Sall | a Negro Slave X |12\n";
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
