import { c as createComponent, j as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PersonLink } from './PersonLink_CM5FUoO2.mjs';

const $$Astro = createAstro();
const $$PersonResult = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PersonResult;
  const { person } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="person-result search-result sidestripe-left"> <h3>${renderComponent($$result, "PersonLink", $$PersonLink, { "name": person.name, "pid": person.pid })}</h3> <p><strong>Role:</strong> ${person.role}</p> <p><strong>Date of birth:</strong> ${person.dob}</p> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/person/PersonResult.astro", void 0);

export { $$PersonResult as $ };
