import { c as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, a as renderTemplate } from './astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$TagLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagLink;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="tag-info badge bg-secondary"><a${addAttribute(`../tag?id=${tag.tag_id}`, "href")}>${tag.name}</a></span>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/TagLink.astro", void 0);

export { $$TagLink as $ };
