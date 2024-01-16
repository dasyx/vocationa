/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, F as Fragment, m as maybeRenderHead, e as addAttribute } from '../astro_DOl1Ms3Q.mjs';
import 'kleur/colors';
import { g as getCollection } from './_slug__WmIFgdCN.mjs';
import { a as $$Container, $ as $$Layout } from './404_3VryZwDP.mjs';
import { $ as $$Sectionhead } from './about_jGhnHrv7.mjs';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
We write about building startups and thoughts going on our mind.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Blog` })}` })} ${maybeRenderHead()}<main class="mt-16"> <ul class="mx-auto grid max-w-4xl gap-16"> ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li> <a${addAttribute(`/blog/${blogPostEntry.slug}`, "href")}> <div class="grid items-center gap-5 md:grid-cols-2 md:gap-10"> <getImage${addAttribute(blogPostEntry.data.image.src, "src")}${addAttribute(blogPostEntry.data.image.alt, "alt")} sizes="(max-width: 800px) 100vw, 800px"${addAttribute([200, 400, 800], "widths")} aspectRatio="16:9" background="#ffffff" fit="cover" position="center"${addAttribute(index <= 2 ? "eager" : "lazy", "loading")}${addAttribute(index <= 2 ? "sync" : "async", "decoding")} class="w-full rounded-md"></getImage> <div> <span class="text-sm font-medium uppercase tracking-wider text-blue-400"> ${blogPostEntry.data.category} </span> <h2 class="mt-1 text-3xl font-semibold leading-snug tracking-tight "> ${blogPostEntry.data.title} </h2> <div class="mt-3 flex gap-2"> <span class="text-gray-400">${blogPostEntry.data.author}</span> <span class="text-gray-400">• </span> <time class="text-gray-400"${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}> ${blogPostEntry.data.publishDate.toDateString()} </time> </div> </div> </div> </a> </li>`)} </ul> </main> ` })} ` })}`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/pages/blog.astro", void 0);

const $$file = "C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
