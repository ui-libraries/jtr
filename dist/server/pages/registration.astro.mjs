import { A as AstroError, x as UnknownContentCollectionError, y as RenderUndefinedEntryError, c as createComponent, u as unescapeHTML, a as renderTemplate, z as renderUniqueStylesheet, B as renderScriptElement, C as createHeadAndContent, r as renderComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, w as Fragment } from '../chunks/astro/server_BpCxJEyC.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_WHd-3bpK.mjs';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import { z } from 'zod';
import { b as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_BD1S9hBe.mjs';
import { b as VALID_INPUT_FORMATS } from '../chunks/consts_HRoi08cg.mjs';
import * as devalue from 'devalue';
import { $ as $$PersonLink } from '../chunks/PersonLink_CM5FUoO2.mjs';
import 'clsx';
import { c as getRegistrationsByRegid } from '../chunks/functions_DbdMD4Pp.mjs';
export { renderers } from '../renderers.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_DZc1PiJ1.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_Bfs5UujW.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const $$Astro$4 = createAstro();
const $$Transcript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Transcript;
  const { transcript } = Astro2.props;
  const entry = await getEntry("docs", transcript);
  if (!entry) {
    throw new Error(`Entry not found for transcript: ${transcript}`);
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`${maybeRenderHead()}<div class="transcript container"> <div class="row"> <div class="col-md-4 border">
Scanned image goes here
</div> <div class="col-md-8"> <div> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/Transcript.astro", void 0);

const $$Astro$3 = createAstro();
const $$RegisteredPerson = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RegisteredPerson;
  const { person } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="registered-person container"> <h3><a${addAttribute(`/person?pid=${person.registered_pid}`, "href")}>${person.name_as_recorded}</a></h3> <p><strong>Date of Birth:</strong> ${person.dob}</p> <p><strong>Sex:</strong> ${person.sex}</p> <p><strong>Race:</strong> ${person.race}</p> <p><strong>Status:</strong> ${person.status}</p> <p><strong>Mother's name:</strong> ${person.mother_pid != null && String(person.mother_pid).trim() !== "" && String(person.mother_pid).trim() !== "0" ? renderTemplate`${renderComponent($$result, "PersonLink", $$PersonLink, { "pid": person.mother_pid, "name": person.mother_name })}` : person.mother_name?.trim() ? person.mother_name : "Not Listed"} </p> ${person.mother_race?.trim() && renderTemplate`<p><strong>Race of mother:</strong> ${person.mother_race}</p>`} ${person.mother_status?.trim() && renderTemplate`<p><strong>Status of mother:</strong> ${person.mother_status}</p>`} ${person.mother_description?.trim() && renderTemplate`<p><strong>Description of mother:</strong> ${person.mother_description}</p>`} </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/RegisteredPerson.astro", void 0);

const $$Astro$2 = createAstro();
const $$Enslaver = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Enslaver;
  const { person } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="enslaver container"> <h3><a${addAttribute(`/person?pid=${person.enslaver_pid}`, "href")}>${person.name}</a></h3> <p><strong>Occupation:</strong> ${person.occupation_ar}</p> <p><strong>Relation to registrant:</strong> ${person.registrant_relation}</p> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/Enslaver.astro", void 0);

const $$Astro$1 = createAstro();
const $$RegistrationFull = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RegistrationFull;
  const { registration } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="registration" class="container-fluid mt-5"> <h1>${registration.old_regid}</h1> <div id="registration-details" class="sidestripe-left"> <h2>Registration Details</h2> <p><strong>Date:</strong> ${registration.date}</p> <p><strong>Registrant:</strong> ${renderComponent($$result, "PersonLink", $$PersonLink, { "name": registration.registrant_name, "pid": registration.registrant_pid })} ${registration.registrant2_pid != null && String(registration.registrant2_pid).trim() !== "" && String(registration.registrant2_pid) !== "0" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`
, ${renderComponent($$result2, "PersonLink", $$PersonLink, { "name": registration.registrant2_name, "pid": registration.registrant2_pid })} ` })}`} </p> <p><strong>County:</strong> ${registration.county}</p> <p><strong>County (modern):</strong> ${registration.modern_county}</p> <p><strong>Residence:</strong> ${registration.residence}</p> <!-- <p><strong>Tags:</strong>     {tags.map((tag: { tag_id: unknown; }) => (
              tag.tag_id !== null ? <TagLink tag={tag.tag_id} /> : null
            ))} </p>--> </div> <div id="registered-persons" class="sidestripe-left"> <h2>Registered Individual(s)</h2> <p><i>Details given are as recorded in the registration.</i></p> ${(registration.registered || []).map((person) => renderTemplate`${renderComponent($$result, "RegisteredPerson", $$RegisteredPerson, { "person": person })}`)} </div> <div id="enslavers" class="sidestripe-left"> <h2>Enslaver(s)</h2> <p><i>Details given are as recorded in the registration.</i></p> ${(registration.enslaving || []).map((person) => renderTemplate`${renderComponent($$result, "Enslaver", $$Enslaver, { "person": person })}`)} </div> ${registration.registration_md != null && renderTemplate`<div id="registration-transcript" class="sidestripe-left"> <h2>Registration Transcript</h2> ${renderComponent($$result, "Transcript", $$Transcript, { "transcript": "registrations/" + registration.registration_md })} </div>`} ${registration.return_md != null && renderTemplate`<div id="return-transcript" class="sidestripe-left"> <h2>Return Transcript</h2> ${renderComponent($$result, "Transcript", $$Transcript, { "transcript": "returns/" + registration.return_md })} </div>`} <div id="sources" class="sidestripe-left"> <h2>Sources</h2> <p><strong>Registry Sources</strong></p> <ul> ${registration.registry_sources.split(";").map((source) => renderTemplate`<li>${source.trim()}</li>`)} </ul> ${registration.ext_primary_sources && String(registration.ext_primary_sources).trim() !== "" && renderTemplate`<p><strong>Additional Primary Sources</strong>: ${registration.ext_primary_sources}</p>`} ${registration.secondary_sources && String(registration.secondary_sources).trim() !== "" && renderTemplate`<p><strong>Secondary Sources</strong>: ${registration.secondary_sources}</p>`} </div> </div>`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/components/registration/RegistrationFull.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Registration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Registration;
  const url = Astro2.url;
  const regidParam = url.searchParams.get("regid");
  const regid = regidParam ? regidParam : "0";
  const data = await getRegistrationsByRegid(regid);
  const registration = data[0];
  const pageTitle = "A Just and True Return";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "RegistrationFull", $$RegistrationFull, { "registration": registration })} ` })}`;
}, "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/registration.astro", void 0);

const $$file = "C:/Users/ndudley/OneDrive - University of Iowa/Desktop/astrotest/jtr/src/pages/registration.astro";
const $$url = "/registration";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registration,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
