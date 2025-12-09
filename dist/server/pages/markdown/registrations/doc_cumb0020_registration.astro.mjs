import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>14^th^ Sep<sup><u>r</u></sup> 1780</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>N^o^</th><th>24 M^r^ George Brown Antrim Town^p^ Farmer</th><th></th></tr></thead><tbody><tr><td>80 Jack</td><td>a Negro aged about X</td><td>35</td></tr><tr><td>81 Dick</td><td>a Negro Male Slave X</td><td>25</td></tr><tr><td>82 Sampson</td><td>a Mullattoe d<sup><u>o</u></sup> X</td><td>17</td></tr><tr><td>83 Silvey</td><td>Mullattoe d<sup><u>o</u></sup> X</td><td>35</td></tr><tr><td>84 Judey</td><td>a Negroe d<sup><u>o</u></sup> X</td><td>25</td></tr><tr><td>85 Phillis</td><td>a Negroe d<sup><u>o</u></sup> X</td><td>13</td></tr><tr><td>86 Minto</td><td>a Mullattoe d<sup><u>o</u></sup> X</td><td>11</td></tr><tr><td>87 David</td><td>a Mullattoe d<sup><u>o</u></sup> X</td><td>8</td></tr><tr><td>88 Peter</td><td>a Mullattoe d<sup><u>o</u></sup> X</td><td>5</td></tr><tr><td>89 Phillip</td><td>a Negroe d<sup><u>o</u></sup> X</td><td>4</td></tr><tr><td>90 Doll</td><td>a Negroe d<sup><u>o</u></sup> X</td><td>2</td></tr></tbody></table>";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0020_registration.md";
				const url = "/markdown/registrations/doc_cumb0020_registration";
				function rawContent() {
					return "﻿14^th^ Sep<SUP><U>r</SUP></U> 1780\n\n| N^o^ | 24 M^r^ George Brown Antrim Town^p^ Farmer ||\n|--|--|--|\n|  80 Jack | a Negro aged about X |35\n|81 Dick | a Negro Male Slave X |25\n| 82 Sampson| a Mullattoe d<SUP><U>o</SUP></U> X |17\n| 83 Silvey |Mullattoe d<SUP><U>o</SUP></U> X |35\n| 84 Judey|a Negroe d<SUP><U>o</SUP></U> X |25\n| 85 Phillis|a Negroe d<SUP><U>o</SUP></U> X |13\n| 86 Minto|a Mullattoe d<SUP><U>o</SUP></U> X |11\n| 87 David |a Mullattoe d<SUP><U>o</SUP></U> X |8\n| 88 Peter |a Mullattoe d<SUP><U>o</SUP></U> X |5\n| 89 Phillip|a Negroe d<SUP><U>o</SUP></U> X |4\n| 90 Doll|a Negroe d<SUP><U>o</SUP></U> X |2\n";
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
