import { c as createComponent, j as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
import { $ as $$PersonResult } from '../chunks/PersonResult_xqUylXSt.mjs';
import { e as getTags, f as getPersonsWithTag } from '../chunks/functions_DbdMD4Pp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const url = Astro2.url;
  const idParam = url.searchParams.get("id");
  const id = idParam ? idParam : "0";
  const tagData = await getTags(id);
  const tag = tagData[0];
  const persons = await getPersonsWithTag(tag.tag_id);
  const pageTitle = "A Just and True Return";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Tag: ${tag.name}</h1> <p>${persons.length} result(s) found.</p> ${persons.map((person) => renderTemplate`${renderComponent($$result2, "PersonResult", $$PersonResult, { "person": person })}`)}` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/tag.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/tag.astro";
const $$url = "/tag";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tag,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
