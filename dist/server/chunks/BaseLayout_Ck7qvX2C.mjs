import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, j as createAstro, l as addAttribute, q as renderHead, p as renderSlot, v as renderScript } from './astro/server_BpCxJEyC.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="navbar-nav"> <li class="nav-item dropdown"> <button class="btn btn-secondary dropdown-toggle" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Explore</button> <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> <li><a class="dropdown-item" href="/search/">Search</a></li> <li><a class="dropdown-item" href="/tags/">Tags</a></li> </ul> </li> <li class="nav-item"><a class="nav-link" href="/history/">History</a></li> <li class="nav-item"><a class="nav-link" href="/essays/">Essays</a></li> <li class="nav-item"><a class="nav-link" href="/about/">About</a></li> </ul>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Menu.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-md"> <div class="container-fluid"> <div id="nav-centered"> <a class="navbar-brand" href="/">A Just and True Return</a> <div class="collapse navbar-collapse" id="navbarNav"> ${renderComponent($$result, "Menu", $$Menu, {})} </div> </div> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> </div> </nav>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Navigation", $$Navigation, {})} </header>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-center py-4 mt-5" style="position:relative;"> <hr> <div class="container"> <p class="mt-2 mb-0">&copy; 2024 A Just and True Return.</p> </div> </footer>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Bootstrap CSS Bundle CDN --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><title>${pageTitle}</title>${renderHead()}</head> <body> <div class="container"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> <!-- Bootstrap JS Bundle CDN --> ${renderScript($$result, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
