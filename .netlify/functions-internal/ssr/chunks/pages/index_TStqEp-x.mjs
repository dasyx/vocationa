/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_DOl1Ms3Q.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Link, a as $$Container, $ as $$Layout } from './404_3VryZwDP.mjs';
import { $ as $$Icon } from './contact_94csTl9X.mjs';
import { $ as $$Image } from './generic_wAeHK8m0.mjs';

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Build faster websites.
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Pull content from anywhere and serve it fast with Astro's next-gen island
    architecture.
</p> <div class="flex mt-5"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })} </div> </div>`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Bring Your Own Framework",
      description: "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "100% Static HTML, No JS",
      description: "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "On-Demand Components",
      description: "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
      icon: "bx:bxs-data"
    },
    {
      title: "Broad Integration",
      description: "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
      icon: "bx:bxs-bot"
    },
    {
      title: "SEO Enabled",
      description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Community",
      description: "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
Osez entrevoir votre future carrière
</h2> <p class="mt-4 text-lg text-slate-600">
Avec Vocationa, prenez une longueur d'avance en explorant de manière immersive le quotidien de
		divers métiers. Nos aperçus offrent une perspective authentique sur votre carrière potentielle,
		vous aidant ainsi à faire des choix éclairés pour votre futur professionnel.
</p> </div> <div class="mt-16 grid gap-16 sm:grid-cols-2 md:grid-cols-3"> ${features.map((item) => renderTemplate`<div class="flex items-start gap-4"> <div class="mt-1 h-8 w-8  shrink-0 rounded-full bg-black p-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="text-lg font-semibold">${item.title}</h3>${" "} <p class="mt-2 leading-relaxed text-slate-500">${item.description}</p> </div> </div>`)} </div>`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/discover-removebg.7ViTU19N.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/assets/discover-removebg.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid place-items-center pb-8 pt-16 md:pb-24 md:pt-12 lg:grid-cols-2"> <div class="hidden py-6 md:order-1 md:block"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "#": 'aspectRatio="4:3"', "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl font-bold lg:text-6xl lg:tracking-tight xl:text-7xl xl:tracking-tighter">
Explorez le monde professionnel par des expériences immersives
</h1> <p class="mt-4 max-w-xl text-lg text-slate-600">
Découvrez Vocationa, votre passerelle vers le monde professionnel. Explorez une journée
			typique de travail dans des entreprises renommées grâce à nos expériences immersives, conçues
			en étroite collaboration avec des experts de l'industrie.
</p> <p class="mt-4 max-w-xl text-lg text-slate-600">
Avec Vocationa, faites des choix de carrière éclairés et préparez-vous efficacement à votre
			futur emploi.
</p> <div class="mt-6 flex flex-col gap-3 sm:flex-row"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "href": "https://web3templates.com/templates/astroship-starter-website-template-for-astro", "target": "_blank", "class": "flex items-center justify-center gap-1", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-5 w-5 text-white", "name": "ph:magnifying-glass" })}
Découvrir
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://github.com/surjithctly/astroship", "class": "flex items-center justify-center gap-1", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-4 w-4 text-black", "name": "bx:bxl-github" })}
GitHub Repo
` })} </div> </div> </main>`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-500">Works with your technologies</h2> <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:react" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:svelte" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-14", "name": "simple-icons:tailwindcss" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-16", "name": "simple-icons:alpinedotjs" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:vercel" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:astro" })} </div> </div>`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "C:/Users/dasyx/Documents/D\xE9veloppement Web/Projets/vocationa/src/pages/index.astro", void 0);

const $$file = "C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
