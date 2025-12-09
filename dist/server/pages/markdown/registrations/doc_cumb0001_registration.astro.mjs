import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from '../../../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const html = () => "<p>Francis West of Tyrone Township in Cumberland\nCounty and State of Pennsylvania Esquire hath\nthis ^ <ins>day</ins> delivered in writing the names of all his\nNegroe and Mullattoe Slaves viz:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>No</th><th></th><th>age years</th></tr></thead><tbody><tr><td>1</td><td>Sligo a Negroe man aged about x</td><td>50</td></tr><tr><td>2</td><td>Jacob a Mullatoe Slave for life x</td><td>34</td></tr><tr><td>3</td><td>Poll a Negroe Woman x</td><td>23</td></tr><tr><td>4</td><td>Chamont a Mullatoe Slave for Life x</td><td>9</td></tr><tr><td>5</td><td>Mila a Mullatto Girl Slave for Life x</td><td>3</td></tr><tr><td>6</td><td>Lewis a Mestoe male Child slave for Life x<br>Born 10<sup>th</sup> November 1779 aged 1 y<sup>r</sup> 10<sup>th</sup> Nov</td><td>9m12d</td></tr><tr><td>7</td><td>John a Negro man x</td><td>29</td></tr><tr><td>8</td><td>Debby a Negro woman x</td><td>50</td></tr><tr><td>August 22<sup><u>d</u></sup> 1780</td><td></td><td></td></tr></tbody></table>\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMjAwMzUxMjc0OCwxMDYzOTA3NDYyXX0=\n-->";

				const frontmatter = {};
				const file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/markdown/registrations/doc_cumb0001_registration.md";
				const url = "/markdown/registrations/doc_cumb0001_registration";
				function rawContent() {
					return "Francis West of Tyrone Township in Cumberland\nCounty and State of Pennsylvania Esquire hath\nthis ^ <ins>day</ins> delivered in writing the names of all his\nNegroe and Mullattoe Slaves viz: \n\n| No  |                                                                                                                            | age years |\n| --- | -------------------------------------------------------------------------------------------------------------------------- | --------- |\n| 1   | Sligo a Negroe man aged about x                                                                                            | 50        |\n| 2   | Jacob a Mullatoe Slave for life x                                                                                          | 34        |\n| 3   | Poll a Negroe Woman x                                                                                                      | 23        |\n| 4   | Chamont a Mullatoe Slave for Life x                                                                                        | 9         |\n| 5   | Mila a Mullatto Girl Slave for Life x                                                                                      | 3         |\n| 6   | Lewis a Mestoe male Child slave for Life x<br>Born 10<sup>th</sup> November 1779 aged 1 y<sup>r</sup> 10<sup>th</sup> Nov | 9m12d     |\n| 7   | John a Negro man x                                                                                                         | 29        |\n| 8   | Debby a Negro woman x                                                                                                      | 50        |\nAugust 22<sup><u>d</u></sup> 1780\n<!--stackedit_data:\neyJoaXN0b3J5IjpbMjAwMzUxMjc0OCwxMDYzOTA3NDYyXX0=\n-->";
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
