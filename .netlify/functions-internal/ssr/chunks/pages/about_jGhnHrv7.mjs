/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, F as Fragment } from '../astro_DOl1Ms3Q.mjs';
import 'kleur/colors';
import { g as getCollection } from './_slug__WmIFgdCN.mjs';
import { a as $$Container, $ as $$Layout } from './404_3VryZwDP.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })} ${maybeRenderHead()}<div class="mx-auto mt-16 flex max-w-4xl flex-col gap-3"> <h2 class="text-3xl font-bold text-gray-800">Empowering the world with Astro.</h2> <p class="text-lg leading-relaxed text-slate-500">
We're a multi-cultural team from around the world! We come from diverse backgrounds,
				bringing different personalities, experiences and skills to the job. This is what makes our
				team so special.
</p> </div> <div class="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-3"> ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group"> <div class="aspect-square w-full"> <getImage${addAttribute(teamMemberEntry.data.avatar.src, "src")}${addAttribute(teamMemberEntry.data.avatar.alt, "alt")} sizes="(max-width: 800px) 100vw, 400px"${addAttribute([200, 400], "widths")} aspectRatio="1:1" background="#ffffff" fit="cover" position="center" class="w-full rounded rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl"></getImage> </div> <div class="mt-4 text-center"> <h2 class="text-lg text-gray-800">${teamMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500">${teamMemberEntry.data.title}</h3> </div> </div>`)} </div> ` })} ` })}`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/pages/about.astro", void 0);

const $$file = "C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };
