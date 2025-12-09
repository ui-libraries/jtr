import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Names</th><th>8 James Poe Antrim Township Farmer</th><th></th><th>years</th></tr></thead><tbody><tr><td>37 Mocky</td><td>A Negroe aged about X</td><td></td><td>35</td></tr><tr><td>38 Nan</td><td>A Mullattoe aged about X</td><td>)</td><td>30</td></tr><tr><td>39 Peter</td><td>aged about X</td><td>)</td><td>20</td></tr><tr><td>40 Pady</td><td>aged about X</td><td>)</td><td>15</td></tr><tr><td>41 Jacob</td><td>aged about X</td><td>)</td><td>5 y<sup><u>rs</u></sup> &#x26; 9 m<sup><u>s</u></sup></td></tr><tr><td>42 Joe</td><td>aged about X</td><td>} 31 years</td><td>2 y<sup><u>rs</u></sup> &#x26; 10 m<sup><u>s</u></sup></td></tr><tr><td>43 Fabbey</td><td>aged about X</td><td>)</td><td>4 m<sup><u>s</u></sup></td></tr><tr><td>44 Haddy</td><td>aged about  X</td><td>)</td><td>7 y<sup><u>rs</u></sup> &#x26; 6 m<sup><u>s</u></sup></td></tr></tbody></table>\n<p>24^th^ Aug^t^ 1780</p>\n<blockquote>\n<p>Editor’s Note. The third column of this transcription represents a bracket extending from Nan to Haddy that denoted their status as bound until the age of thirty-one as opposed to being enslaved for life.</p>\n</blockquote>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTQ0ODU4NTE3OSwtMTU3MTgxNjczNywtND\nM2ODUxOTc5XX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0008_registration.md";
				const url = "/markdown/registrations/doc_cumb0008_registration";
				function rawContent() {
					return "﻿|Names| 8 James Poe Antrim Township Farmer  ||years\n|--|--|--|--|\n| 37 Mocky|  A Negroe aged about X||35\n| 38 Nan|  A Mullattoe aged about X|)|30\n| 39 Peter| aged about X |) |20\n| 40 Pady| aged about X|)  |15\n| 41 Jacob| aged about X |) |5 y<sup><u>rs</sup></u> & 9 m<sup><u>s</sup></u>\n| 42 Joe| aged about X|} 31 years|2 y<sup><u>rs</sup></u> & 10 m<sup><u>s</sup></u>\n| 43 Fabbey| aged about X|) |4 m<sup><u>s</sup></u>\n| 44 Haddy| aged about  X|)|7 y<sup><u>rs</sup></u> & 6 m<sup><u>s</sup></u>\n\n24^th^ Aug^t^ 1780\n\n> Editor's Note. The third column of this transcription represents a bracket extending from Nan to Haddy that denoted their status as bound until the age of thirty-one as opposed to being enslaved for life.\n\n<!--stackedit_data:\neyJoaXN0b3J5IjpbLTQ0ODU4NTE3OSwtMTU3MTgxNjczNywtND\nM2ODUxOTc5XX0=\n-->";
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
