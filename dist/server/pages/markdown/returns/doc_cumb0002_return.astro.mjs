import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>N2<br>\n22<sup><u>d</u></sup> Aug<sup>t</sup>. 1780<br>\nRobert Gibson\nReturn of Slaves</p>\n<p>[back]</p>\n<p>Robert Gibson of Carlisle in the County of Cumberland\npencilvania Came before one John Agnew Justice of the\npeace for said County and Delivered to me the names and\nage of all his sleaves and desires the same be recorded\nas such\nphillis a Mullato sleave for Life blind     of both Eyes\naged about 25 or 26 <del>years of age</del>\npoll a Mustee sleave for life aged 3 years old and\none month\n22 August 1780           Robert Gibson Carpenter</p>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0002_return.md";
				const url = "/markdown/returns/doc_cumb0002_return";
				function rawContent() {
					return "﻿\\[front]\n\nN2  \n22<sup><u>d</u></sup> Aug<sup>t</sup>. 1780  \nRobert Gibson\nReturn of Slaves\n\n\\[back]\n\nRobert Gibson of Carlisle in the County of Cumberland\npencilvania Came before one John Agnew Justice of the\npeace for said County and Delivered to me the names and \nage of all his sleaves and desires the same be recorded\nas such\nphillis a Mullato sleave for Life blind &nbsp; &nbsp; of both Eyes\naged about 25 or 26 ~~years of age~~\npoll a Mustee sleave for life aged 3 years old and\none month\n22 August 1780 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Robert Gibson Carpenter\n";
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
