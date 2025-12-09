import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>[front]</p>\n<p>48 . 49\n6^th^ October 1780\nW<sup><u>m</u></sup> Rippey &#x26;\nTho^s^ Buchanan Sub. L</p>\n<p>[back]</p>\n<p>a List of Negroes the Property of Captain\nWilliam Rippy 6<sup><u>th</u></sup> October 1780</p>\n<p>Dick, Negro Slave aged 30 years\nJemi, Negro Slave aged 20 years\nReaner, Ditto Slave, a wench about 25 years\nDina, Negro Slave about 10 years\nMattes, Negro Boy Slave about 10 years\nTom, Mullato Boy Slave about 11 years</p>\n<p>W<sup><u>m</u></sup> Rippey</p>\n<p>one Negro Boy the property of Tho^s^ Bucha<strong>nan</strong>\n6<sup><u>th</u></sup> October 1780\nCato, Negro Boy Slave aged 16 <sup><u>ys</u></sup></p>\n<p>Tho^s^ Buchanan</p>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTg0NjgyMjY4NiwtMTUxNjgyNTE0M119\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/returns/doc_cumb0043a_return.md";
				const url = "/markdown/returns/doc_cumb0043a_return";
				function rawContent() {
					return "\\[front]\n\n48 . 49\n6^th^ October 1780\nW<sup><u>m</sup></u> Rippey &\nTho^s^ Buchanan Sub. L\n\n\\[back]\n\na List of Negroes the Property of Captain\nWilliam Rippy 6<sup><u>th</sup></u> October 1780\n\nDick, Negro Slave aged 30 years\nJemi, Negro Slave aged 20 years\nReaner, Ditto Slave, a wench about 25 years\nDina, Negro Slave about 10 years\nMattes, Negro Boy Slave about 10 years\nTom, Mullato Boy Slave about 11 years\n\nW<sup><u>m</sup></u> Rippey\n\none Negro Boy the property of Tho^s^ Bucha**nan**\n6<sup><u>th</sup></u> October 1780 \nCato, Negro Boy Slave aged 16 <sup><u>ys</sup></u>\n\nTho^s^ Buchanan\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMTg0NjgyMjY4NiwtMTUxNjgyNTE0M119\n-->";
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
