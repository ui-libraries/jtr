import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
import { $ as $$TagLink } from '../chunks/TagLink_B_ak34iG.mjs';
import { e as getTags } from '../chunks/functions_DbdMD4Pp.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "A Just and True Return: Tags";
  const tags = await getTags();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Browse by tag</h1> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "TagLink", $$TagLink, { "tag": tag })}`)}` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/tags.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/tags.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tags,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
