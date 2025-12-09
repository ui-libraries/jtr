import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>1780 Aug^t^ 25<sup><u>th</u></sup></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Names</th><th>11 Benjamin Chambers Guilford Gent</th><th>Age</th></tr></thead><tbody><tr><td>51 Dinah</td><td>a Negroe Slave X</td><td>30</td></tr><tr><td>52 Nell</td><td>a Mullatoe Slave X</td><td>15</td></tr><tr><td>53 Pegg</td><td>a Negroe Slave X</td><td>12</td></tr><tr><td>54 Fanny</td><td>a Mullatoe Slave X</td><td>7</td></tr><tr><td>55 Phebee</td><td>a Mullatoe Slave X</td><td>4</td></tr><tr><td>56 Tom</td><td>a Mullatoe Slave X</td><td>10 m<sup><u>s</u></sup></td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0011a_registration.md";
				const url = "/markdown/registrations/doc_cumb0011a_registration";
				function rawContent() {
					return "﻿1780 Aug^t^ 25<sup><u>th</sup></u> \n\n    \n|Names| 11 Benjamin Chambers Guilford Gent |Age\n|------|--|--|\n|  51 Dinah | a Negroe Slave X |30\n|  52 Nell| a Mullatoe Slave X |15\n|  53 Pegg| a Negroe Slave X |12\n|  54 Fanny| a Mullatoe Slave X |7\n|  55 Phebee| a Mullatoe Slave X |4\n|  56 Tom| a Mullatoe Slave X |10 m<sup><u>s</sup></u> \n\n\n\n\n";
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
