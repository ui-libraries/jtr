import { c as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, a as renderTemplate } from './astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$PersonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PersonLink;
  const { name, pid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`../person?pid=${pid}`, "href")}>${name}</a>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/person/PersonLink.astro", void 0);

export { $$PersonLink as $ };
