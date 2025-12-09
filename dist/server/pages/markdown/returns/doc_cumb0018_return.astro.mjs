import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>22\n6th Aug^t^ 1780\nArch^d^ Mahan</p>\n<p>[back]</p>\n<p>Return of a Neger Slave the\nproperty of Arch^d^ Mahan of\nLurgan Township in Cum^d^ Cou^y^</p>\n<p>1 Negro Girl Nam^d^ Isabella 20</p>\n<p>6 Sep^r^ 1780 Arcbd Mahen</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0018_return.md";
				const url = "/markdown/returns/doc_cumb0018_return";
				function rawContent() {
					return "﻿\\[front]\n\n22\n6th Aug^t^ 1780\nArch^d^ Mahan\n\n\\[back]\n\nReturn of a Neger Slave the\nproperty of Arch^d^ Mahan of\nLurgan Township in Cum^d^ Cou^y^\n\n1 Negro Girl Nam^d^ Isabella 20\n\n6 Sep^r^ 1780 Arcbd Mahen\n\n\n";
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
