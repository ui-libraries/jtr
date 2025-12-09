import { c as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, a as renderTemplate, r as renderComponent, w as Fragment } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
import 'clsx';
import { $ as $$PersonLink } from '../chunks/PersonLink_CM5FUoO2.mjs';
import { $ as $$TagLink } from '../chunks/TagLink_B_ak34iG.mjs';
import { g as getFamilyList, a as getRelatedRegistrations, b as getTagsForPerson } from '../chunks/functions_DbdMD4Pp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Family = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Family;
  const { role, name, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p><strong>${role}:</strong> <a${addAttribute(`/person?pid=${id}`, "href")}>${name}</a></p>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/person/Family.astro", void 0);

const $$Astro$2 = createAstro();
const $$RegOnPerson = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RegOnPerson;
  const { registration } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="registration-stub container"> <h3><a${addAttribute(`../registration?regid=${registration.regid}`, "href")}> ${registration.old_regid}</a></h3> <p><strong>Role on Registration:</strong> ${registration.role}</p> <p><strong>Registered Individual(s):</strong> ${registration.registered?.map((person, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${i > 0 && ", "}${renderComponent($$result2, "PersonLink", $$PersonLink, { "name": person.name_as_recorded, "pid": person.registered_pid })} ` })}`)} </p> <p><strong>Registered Enslaver(s):</strong> ${registration.enslaving?.map((person, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${i > 0 && ", "}${renderComponent($$result2, "PersonLink", $$PersonLink, { "name": person.name, "pid": person.enslaver_pid })} ` })}`)} </p> <p><strong>Date:</strong> ${registration.date}</p> <p><strong>County (Historical):</strong> ${registration.county}</p> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/RegOnPerson.astro", void 0);

const $$Astro$1 = createAstro();
const $$PersonProfile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PersonProfile;
  const { person } = Astro2.props;
  const familyList = await getFamilyList(person.pid, person.family);
  const registrations = await getRelatedRegistrations(person.pid, person.role);
  const tags = await getTagsForPerson(person.pid);
  console.log("Tags for person", person.pid, tags);
  return renderTemplate`${maybeRenderHead()}<div id="person-profile" class="container-fluid mt-5"> <h1>${person.name}</h1> <div id="personal-details" class="sidestripe-left"> <h2>Personal Details</h2> <p><strong>Role:</strong> ${person.role}</p> <p><strong>Imputed Sex:</strong> ${person.imp_sex}</p> <p><strong>Imputed Race:</strong> ${person.norm_race}</p> <p><strong>Date of Birth:</strong> ${person.dob}</p> ${tags && tags.length > 0 && renderTemplate`<div id="tags"> <h2>Tags</h2> ${tags.map((tag) => tag.tag_id !== null ? renderTemplate`${renderComponent($$result, "TagLink", $$TagLink, { "tag": tag.tag_id })}` : null)} </div>`} </div> <div id="family" class="sidestripe-left"> <h2>Family</h2> ${familyList && familyList.length > 0 ? familyList.map((member) => renderTemplate`${renderComponent($$result, "Family", $$Family, { "name": member.name, "role": member.role, "id": member.id })}`) : renderTemplate`<p>No family records found.</p>`} </div> <div id="person-registrations" class="sidestripe-left"> <h2>Registration(s)</h2> ${(registrations || []).map((reg) => renderTemplate`${renderComponent($$result, "RegOnPerson", $$RegOnPerson, { "registration": reg })}`)} </div> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/person/PersonProfile.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Person = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Person;
  const pageTitle = "A Just and True Return";
  const url = Astro2.url;
  const pidParam = url.searchParams.get("pid");
  const pid = pidParam ? pidParam : "0";
  const response = await fetch(`https://s-lib024.lib.uiowa.edu/ajtr/api.php/records/persons?filter=pid,eq,${pid}&join=family`);
  const data = await response.json();
  const person = data.records[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PersonProfile", $$PersonProfile, { "person": person })} ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/person.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/person.astro";
const $$url = "/person";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Person,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
