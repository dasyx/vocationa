import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_DOl1Ms3Q.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"},{"type":"inline","content":".invalid-feedback[data-astro-cid-uwnxe3i2],.empty-feedback[data-astro-cid-uwnxe3i2]{display:none}.was-validated[data-astro-cid-uwnxe3i2] :-moz-placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:-moz-placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.is-invalid[data-astro-cid-uwnxe3i2],.was-validated[data-astro-cid-uwnxe3i2] :invalid[data-astro-cid-uwnxe3i2]{border-color:#dc3545}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/pricing","type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ajRcRFiC.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astroship.web3templates.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog.astro":"chunks/pages/blog_xiwN370_.mjs","/src/pages/index.astro":"chunks/pages/index_TStqEp-x.mjs","/src/pages/pricing.astro":"chunks/pages/pricing_qB18mYxy.mjs","\u0000@astrojs-manifest":"manifest_ZFUDiq9O.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Zd4uMKWL.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_j3qbaw-D.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_s7AkUx5E.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"chunks/pricing_4w6jcZBk.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_pk06GlrL.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__45oL-9qs.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_9oiXSJhY.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_-TQy12x8.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/complete-guide-fullstack-development.md?astroContentCollectionEntry=true":"chunks/complete-guide-fullstack-development_RgVDeTFY.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/essential-data-structures-algorithms.md?astroContentCollectionEntry=true":"chunks/essential-data-structures-algorithms_OhR8ENc0.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/how-to-become-frontend-master.md?astroContentCollectionEntry=true":"chunks/how-to-become-frontend-master_HNcCoaKb.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/kitchensink.mdx?astroContentCollectionEntry=true":"chunks/kitchensink_Pv7BpMQ_.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/janette-lynch.md?astroContentCollectionEntry=true":"chunks/janette-lynch_Bafpq-kx.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/marcell-ziemann.md?astroContentCollectionEntry=true":"chunks/marcell-ziemann_pk-1_hSS.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/robert-palmer.md?astroContentCollectionEntry=true":"chunks/robert-palmer_ME4quy8p.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/complete-guide-fullstack-development.md?astroPropagatedAssets":"chunks/complete-guide-fullstack-development_81oMuzez.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/essential-data-structures-algorithms.md?astroPropagatedAssets":"chunks/essential-data-structures-algorithms_IJUOhK89.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/how-to-become-frontend-master.md?astroPropagatedAssets":"chunks/how-to-become-frontend-master_dhZgz_kg.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/kitchensink.mdx?astroPropagatedAssets":"chunks/kitchensink_5_Ddn314.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/janette-lynch.md?astroPropagatedAssets":"chunks/janette-lynch_w9sqcYDa.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/marcell-ziemann.md?astroPropagatedAssets":"chunks/marcell-ziemann_aT4OchvT.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/robert-palmer.md?astroPropagatedAssets":"chunks/robert-palmer_6JU46I2k.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/complete-guide-fullstack-development.md":"chunks/complete-guide-fullstack-development_sO75pNqM.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/essential-data-structures-algorithms.md":"chunks/essential-data-structures-algorithms_VMiNMIpG.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/how-to-become-frontend-master.md":"chunks/how-to-become-frontend-master_qsasT2xB.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/blog/kitchensink.mdx":"chunks/kitchensink_ZQJsuDqR.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/janette-lynch.md":"chunks/janette-lynch_Wr84e0jf.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/marcell-ziemann.md":"chunks/marcell-ziemann_GX3fJ8G8.mjs","C:/Users/dasyx/Documents/Développement Web/Projets/vocationa/src/content/team/robert-palmer.md":"chunks/robert-palmer_OqBsDWaT.mjs","@astrojs/svelte/client.js":"_astro/client.bWR2MAd2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/discover-removebg.7ViTU19N.png","/_astro/inter-cyrillic-ext-wght-normal.yBM_KeYt.woff2","/_astro/inter-cyrillic-wght-normal.ZiSV2vHp.woff2","/_astro/inter-vietnamese-wght-normal.PxkLsD1V.woff2","/_astro/inter-greek-ext-wght-normal.-QGCzYqo.woff2","/_astro/inter-latin-ext-wght-normal.jdaSF5G5.woff2","/_astro/inter-latin-wght-normal.YFatk6uG.woff2","/_astro/inter-greek-wght-normal.8iAzSMjZ.woff2","/_astro/about.ajRcRFiC.css","/favicon.svg","/opengraph.jpg","/robots.txt","/_astro/client.bWR2MAd2.js"]});

export { manifest };
