import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
export { renderers } from '../renderers.mjs';

const $$Essays = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "A Just and True Return: Essays";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Essays</h1>  ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/essays.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/essays.astro";
const $$url = "/essays";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Essays,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
