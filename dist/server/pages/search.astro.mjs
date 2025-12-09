import { c as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
import 'clsx';
/* empty css                                  */
import { d as getCountySelectOptions, r as runSearch } from '../chunks/functions_DbdMD4Pp.mjs';
import { $ as $$PersonResult } from '../chunks/PersonResult_xqUylXSt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro();
const $$TextField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TextField;
  const { label, name, type = "text", value = "", placeholder = "", required = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-field"> <label${addAttribute(name, "for")}><strong>${label}</strong></label> <br> <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(value, "value")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/formElements/TextField.astro", void 0);

const $$Astro$5 = createAstro();
const $$SelectField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SelectField;
  const {
    label,
    name,
    options = [],
    value = "",
    placeholder = "Select...",
    required = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-field"> <label${addAttribute(name, "for")}><strong>${label}</strong></label><br> <select${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(required, "required")}> ${placeholder ? renderTemplate`<option value="" disabled${addAttribute(value === "", "selected")}>${placeholder}</option>` : null} ${options.map((opt) => renderTemplate`<option${addAttribute(opt.value, "value")}${addAttribute(opt.value === value, "selected")}>${opt.label}</option>`)} </select> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/formElements/SelectField.astro", void 0);

const $$FormActions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="form-actions"> <button type="submit" class="primary">Search</button> <button type="reset" class="reverse">Reset</button> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/formElements/FormActions.astro", void 0);

const $$Astro$4 = createAstro();
const $$PersonSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PersonSearch;
  const sex = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Unknown", value: "Unknown" },
    { label: "Unspecified", value: "Unspecified" }
  ];
  const race = [
    { label: "Black", value: "Black" },
    { label: "Multiracial", value: "Multiracial" },
    { label: "Indigenous", value: "Indigenous" },
    { label: "White", value: "White" },
    { label: "Unknown", value: "Unknown" }
  ];
  const role = [
    { label: "Registered Person", value: "Registered Person" },
    { label: "Enslaver", value: "Enslaver" },
    { label: "Registrant", value: "Registrant" }
  ];
  const { params } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="form-person" class="search-form"> <input type="hidden" name="query" value="persons"> <div class="form-row"> ${renderComponent($$result, "TextField", $$TextField, { "name": "name", "label": "Name", "placeholder": "Full or partial name", "value": params && params.name ? params.name : "" })} </div> <div class="form-row"> ${renderComponent($$result, "SelectField", $$SelectField, { "name": "role", "label": "Role", "options": role, "placeholder": "Select Role", "value": params && params.role ? params.role : "" })} </div> <div class="form-row"> ${renderComponent($$result, "SelectField", $$SelectField, { "name": "imp_sex", "label": "Imputed Sex", "options": sex, "placeholder": "Select Sex", "value": params && params.imp_sex ? params.imp_sex : "" })} </div> <div class="form-row"> ${renderComponent($$result, "SelectField", $$SelectField, { "name": "norm_race", "label": "Normalized Race", "options": race, "placeholder": "Select Race", "value": params && params.norm_race ? params.norm_race : "" })} </div> ${renderComponent($$result, "FormActions", $$FormActions, {})} </form>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/PersonSearch.astro", void 0);

const $$Astro$3 = createAstro();
const $$DateField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DateField;
  const {
    name = "date",
    id,
    label,
    value,
    required = false,
    min,
    max,
    error,
    help,
    disabled = false,
    autofocus = false,
    class: className = ""
  } = Astro2.props;
  const fmt = (v) => {
    if (!v) return void 0;
    if (v instanceof Date && !isNaN(v.getTime())) {
      const y = v.getFullYear();
      const m = String(v.getMonth() + 1).padStart(2, "0");
      const d = String(v.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    if (typeof v === "string") {
      const maybe = v.split("T")[0];
      return maybe;
    }
    return void 0;
  };
  const inputId = id ?? `${name}-${Math.random().toString(36).slice(2, 8)}`;
  const describedBy = help || error ? `${inputId}-help` : void 0;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`date-field ${className} ${error ? "has-error" : ""}`, "class")} data-astro-cid-hogwagzl> ${label ? renderTemplate`<label${addAttribute(inputId, "for")} class="date-label" data-astro-cid-hogwagzl><strong data-astro-cid-hogwagzl> ${label}${required ? renderTemplate`<span aria-hidden="true" class="required-star" data-astro-cid-hogwagzl> *</span>` : null} </strong></label>` : null} <input class="date-input" type="date"${addAttribute(inputId, "id")}${addAttribute(name, "name")}${addAttribute(fmt(value), "value")}${addAttribute(fmt(min), "min")}${addAttribute(fmt(max), "max")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(autofocus, "autofocus")}${addAttribute(error ? "true" : "false", "aria-invalid")}${addAttribute(describedBy, "aria-describedby")} data-astro-cid-hogwagzl> ${help ? renderTemplate`<div${addAttribute(`${inputId}-help`, "id")} class="date-help" data-astro-cid-hogwagzl>${help}</div>` : null} ${error ? renderTemplate`<div${addAttribute(`${inputId}-error`, "id")} class="date-error" role="alert" data-astro-cid-hogwagzl>${error}</div>` : null} </div> `;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/formElements/DateField.astro", void 0);

const $$Astro$2 = createAstro();
const $$RegistrationSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RegistrationSearch;
  const { params } = Astro2.props;
  const minDate = /* @__PURE__ */ new Date("1750-01-01");
  const maxDate = /* @__PURE__ */ new Date("1865-12-31");
  const counties = await getCountySelectOptions();
  const modernCounties = await getCountySelectOptions("modern");
  return renderTemplate`${maybeRenderHead()}<form id="form-registration" class="search-form"> <input type="hidden" name="query" value="full_registration"> <div class="form-row"> ${renderComponent($$result, "TextField", $$TextField, { "name": "registered_name", "label": "Name of registered person", "placeholder": "Full or partial name", "value": params?.registered_name ?? "" })} </div> <div class="form-row"> ${renderComponent($$result, "TextField", $$TextField, { "name": "enslaver_name", "label": "Name of enslaver", "placeholder": "Full or partial name", "value": params?.enslaver_name ?? "" })} </div> <div class="form-row"> ${renderComponent($$result, "DateField", $$DateField, { "name": "before_date", "label": "Before Date", "min": minDate, "max": maxDate, "value": params?.before_date ?? "" })} ${renderComponent($$result, "DateField", $$DateField, { "name": "after_date", "label": "After Date", "min": minDate, "max": maxDate, "value": params?.after_date ?? "" })} </div> <div class="form-row"> ${renderComponent($$result, "SelectField", $$SelectField, { "name": "county", "label": "County", "options": counties, "placeholder": "Select County", "value": params?.county ?? "" })} ${renderComponent($$result, "SelectField", $$SelectField, { "name": "modern_county", "label": "Modern County", "options": modernCounties, "placeholder": "Select Modern County", "value": params?.modern_county ?? "" })} </div> ${renderComponent($$result, "FormActions", $$FormActions, {})} </form>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/RegistrationSearch.astro", void 0);

const $$Astro$1 = createAstro();
const $$RegistrationResult = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RegistrationResult;
  const { registration } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="registration-result search-result sidestripe-left"> <h3><a${addAttribute(`../registration?regid=${registration.regid}`, "href")}>${registration.old_regid}</a></h3> <p><strong>Registration of ${registration.registered_name}</strong></p> <p><strong>Enslaver:</strong> ${registration.enslaver_name}</p> <p><strong>Date of Registration:</strong> ${registration.registration_date}</p> <p><strong>County:</strong> ${registration.county} (historical), ${registration.modern_county} (modern)</p> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/RegistrationResult.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = typeof Astro2 !== "undefined" && Astro2?.request ? new URL(Astro2.request.url) : null;
  const paramsObj = url ? Object.fromEntries(url.searchParams.entries()) : {};
  const searchParams = Object.keys(paramsObj).length ? paramsObj : {};
  const runSearchOnLoad = Object.keys(searchParams).length > 0;
  let searchResults = null;
  let resultCount = 0;
  if (runSearchOnLoad) {
    try {
      searchResults = await runSearch(searchParams);
      resultCount = searchResults && Array.isArray(searchResults) ? searchResults.length : 0;
    } catch (err) {
      console.log("Search error:", err);
    }
  }
  const pageTitle = "A Just and True Return: Search";
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
    // Tab switching
    const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          const panel = document.getElementById(t.getAttribute('aria-controls'));
          const selected = t === tab;
          t.setAttribute('aria-selected', String(selected));
          if (panel) {
            panel.setAttribute('aria-hidden', String(!selected));
          }
        });
      });
    });

    function collectFormData(form) {
      const fd = new FormData(form);
      const obj = {};
      for (const [k, v] of fd.entries()) {
        if (v !== '') obj[k] = v;
      }
      return obj;
    }


    // Submit handlers: collect form data and reload page with GET params
    ['form-person', 'form-registration'].forEach((id) => {
      const form = document.getElementById(id);
      if (!form) return;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = collectFormData(e.currentTarget);
        const params = new URLSearchParams();
        Object.entries(data).forEach(([k, v]) => {
          // handle simple values; FormData helper already omits empty values
          params.append(k, String(v));
        });
        const newUrl = location.pathname + (params.toString() ? '?' + params.toString() : '');
        location.href = newUrl;
      });
    });

  <\/script>`])), renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Search</h1> <section class="tabbed-search"> <div role="tablist" class="tabs" aria-label="Search mode"> <button id="tab-registration" role="tab" aria-controls="panel-registration"${addAttribute(searchParams?.query === "persons" ? "false" : "true", "aria-selected")}>Registrations</button> <button id="tab-person" role="tab" aria-controls="panel-person"${addAttribute(searchParams?.query === "persons" ? "true" : "false", "aria-selected")}>People</button> </div> <div id="panel-registration" class="tab-panel" role="tabpanel" aria-labelledby="tab-registration"${addAttribute(searchParams?.query === "persons" ? "true" : "false", "aria-hidden")}> ${renderComponent($$result2, "RegistrationSearch", $$RegistrationSearch, { "params": searchParams?.query === "full_registration" ? searchParams : {} })} </div> <div id="panel-person" class="tab-panel" role="tabpanel" aria-labelledby="tab-person"${addAttribute(searchParams?.query === "persons" ? "false" : "true", "aria-hidden")}> ${renderComponent($$result2, "PersonSearch", $$PersonSearch, { "params": searchParams?.query === "persons" ? searchParams : {} })} </div> </section> ${runSearchOnLoad && renderTemplate`<div id="search-results" class="container-fluid mt-5"> <h2>Search Results: ${resultCount}</h2> ${searchResults && searchResults.length > 0 ? searchParams?.query === "persons" ? searchResults.map((person) => renderTemplate`${renderComponent($$result2, "PersonResult", $$PersonResult, { "person": person })}`) : searchResults.map((registration) => renderTemplate`${renderComponent($$result2, "RegistrationResult", $$RegistrationResult, { "registration": registration })}`) : renderTemplate`<p>No results found.</p>`} </div>`}` }));
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/search.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
