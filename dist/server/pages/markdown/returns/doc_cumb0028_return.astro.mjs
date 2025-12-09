import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>32\n26^th^ Sep<sup><u>r</u></sup> 1780\nJn^o^ Montgomery Esq<sup><u>r</u></sup></p>\n<p>[back]</p>\n<p>Carlisle Sepbr 26^th^ 1780\na return of negroes belonging to John Montgomery</p>\n<p>a Winch call^d^ Dinia about 36 years of ^ ^of^ age\nVinia a child about 8 years old\nVinius Ditto 6 Ditto\nTom a boy about 4 Ditto\nDick Ditto 1 1/2 Ditto\na winch nam^d^ Jean about 22 years old\nhir child Belindia Born in maryland about\n23 months old Juba a boy about 13 years old</p>\n<p>John Montgomery</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0028_return.md";
				const url = "/markdown/returns/doc_cumb0028_return";
				function rawContent() {
					return "﻿\\[front]\n\n32\n26^th^ Sep<sup><u>r</u></sup> 1780\nJn^o^ Montgomery Esq<sup><u>r</sup></u>\n\n\\[back]\n\nCarlisle Sepbr 26^th^ 1780\na return of negroes belonging to John Montgomery\n\na Winch call^d^ Dinia about 36 years of ^ ^of^ age\nVinia a child about 8 years old\nVinius Ditto 6 Ditto \nTom a boy about 4 Ditto\nDick Ditto 1 1/2 Ditto\na winch nam^d^ Jean about 22 years old\nhir child Belindia Born in maryland about \n23 months old Juba a boy about 13 years old \n\nJohn Montgomery \n\n\n";
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
