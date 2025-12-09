import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Names of Slaves</th><th>5 Henry Pawling of Antrim Township in the County of Cumberland Farmer</th><th>Years</th></tr></thead><tbody><tr><td>14 Cezar</td><td>a Negroe Man aged about X</td><td>56</td></tr><tr><td>15 Sam</td><td>a <del>Negroe</del> Mullatoe Man X</td><td>34</td></tr><tr><td>16 Cate</td><td>aged about X</td><td>32</td></tr><tr><td>17 Jim</td><td>aged about X</td><td>28</td></tr><tr><td>18 Tom ^s^</td><td>aged about X</td><td>26</td></tr><tr><td>19 Tom ^Jun^</td><td>aged about X</td><td>21</td></tr><tr><td>20 Dine</td><td>aged about X</td><td>18</td></tr><tr><td>21 Pegg</td><td>aged about X</td><td>15</td></tr><tr><td>22 Bella</td><td>a Negroe aged about X</td><td>15</td></tr><tr><td>23 Nance</td><td>a Mullatoe aged about X</td><td>12</td></tr><tr><td>24 Jack</td><td>aged about X</td><td>4</td></tr><tr><td>25 Bet</td><td>aged about X</td><td>2</td></tr><tr><td>26 Bob</td><td>aged about X</td><td>1</td></tr><tr><td>27 Prudence</td><td>a Negroe aged about X</td><td>10 M<sup><u>s</u></sup></td></tr></tbody></table>\n<p>Aug<sup><u>t</u></sup><u> 24<sup><u>th</u></sup> 1780</u></p><u>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTM1MTg5OTU2Nl19\n--></u>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0005_registration.md";
				const url = "/markdown/registrations/doc_cumb0005_registration";
				function rawContent() {
					return "﻿| Names of Slaves |5 Henry Pawling of Antrim Township in the County of Cumberland Farmer | Years\n|--|--|--|\n|14 Cezar | a Negroe Man aged about X |56\n|15 Sam |a ~~Negroe~~ Mullatoe Man X|34|\n|16 Cate|aged about X|32|\n|17 Jim|aged about X|28|\n|18 Tom ^s^| aged about X|26|\n|19 Tom ^Jun^| aged about X|21|\n|20 Dine| aged about X|18|\n|21 Pegg| aged about X|15|\n|22 Bella| a Negroe aged about X|15|\n|23 Nance| a Mullatoe aged about X|12|\n|24 Jack| aged about X|4|\n|25 Bet| aged about X|2|\n|26 Bob| aged about X|1|\n|27 Prudence|a Negroe aged about X|10 M<sup><u>s\n\nAug<sup><u>t</sup> 24<sup><u>th</sup></u> 1780\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTM1MTg5OTU2Nl19\n-->";
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
