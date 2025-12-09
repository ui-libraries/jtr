import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>12^th^ Sep^r^\n|  | 23 James Pollock Carlisle Tavernk<sup><u>r</u></sup>||\n|—|—|—|—|\n| 74 Joe |a Negro X  |45\n| 75 Venus |a Negro X  |35\n| 76 Jude|a Negro X  |9\n| 77 Jack|a Negro X  |8\n| 78 Violet|a Negro X  |6\n| 79 Romeo|a Negro X  |3</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0019_registration.md";
				const url = "/markdown/registrations/doc_cumb0019_registration";
				function rawContent() {
					return "﻿\n12^th^ Sep^r^ \n|  | 23 James Pollock Carlisle Tavernk<sup><u>r</sup></u>||\n|--|--|--|--|\n| 74 Joe |a Negro X  |45\n| 75 Venus |a Negro X  |35\n| 76 Jude|a Negro X  |9\n| 77 Jack|a Negro X  |8\n| 78 Violet|a Negro X  |6\n| 79 Romeo|a Negro X  |3\n\n\n\n\n";
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
