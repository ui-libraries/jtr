import { c as createComponent, m as maybeRenderHead, a as renderTemplate, j as createAstro, r as renderComponent, p as renderSlot } from './astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Ck7qvX2C.mjs';
import 'clsx';

const $$NarrowBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container-fluid mt-5"> <div class="banner text-left d-flex flex-column" style="background-image: url('../BannerNarrow.jpg'); background-size: cover; background-position: center; height: 200px;"></div></div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/NarrowBanner.astro", void 0);

const $$Astro = createAstro();
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NarrowBanner", $$NarrowBanner, {})} ${maybeRenderHead()}<div class="container mt-5"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
