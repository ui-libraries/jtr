import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>16-17\nSep<u><sup>r</sup></u> 6 1780\nJam^s^ Herron\nlist of Slaves</p>\n<p>[back]</p>\n<p>Return of Negro the property\nof William Cowen of Shippen.\nburgh [illegible deletion] Blacksmith</p>\n<p>1 Negro Wom^n^ Nam<sup><u>d</u></sup> Alice ab^t^ 30 <sup><u>yrs</u></sup></p>\n<p>[smudge]^th^ Septem<u><sup>r</sup></u> 1780\nW<sup><u>m</u></sup> Cowan</p>\n<p>A list of Negroes the property\nof James Herron Lurgan Towns^p^\nin Cumb^d^ County Farmer</p>\n<p>1 Negro man Nam<sup><u>d</u></sup> Rich^d^ ab<sup><u>t</u></sup> 18 y<sup><u>rs</u></sup>\n1 D^o^ boy Cuff 7 y<sup><u>rs</u></sup></p>\n<p>6^th^ Sep 1780\nJames Herron</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0014a_return.md";
				const url = "/markdown/returns/doc_cumb0014a_return";
				function rawContent() {
					return "﻿\\[front]\n\n16-17\nSep<u><sup>r</sup></u> 6 1780\nJam^s^ Herron\nlist of Slaves\n\n\\[back]\n\nReturn of Negro the property \nof William Cowen of Shippen.\nburgh [illegible deletion] Blacksmith\n\n1 Negro Wom^n^ Nam<sup><u>d</sup></u> Alice ab^t^ 30 <sup><u>yrs</sup></u>\n\n[smudge]^th^ Septem<u><sup>r</sup></u> 1780\nW<sup><u>m</sup></u> Cowan\n\nA list of Negroes the property \nof James Herron Lurgan Towns^p^ \nin Cumb^d^ County Farmer\n\n1 Negro man Nam<sup><u>d</sup></u> Rich^d^ ab<sup><u>t</sup></u> 18 y<sup><u>rs</sup></u>\n1 D^o^ boy Cuff 7 y<sup><u>rs</sup></u>\n\n6^th^ Sep 1780\nJames Herron\n\n";
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
