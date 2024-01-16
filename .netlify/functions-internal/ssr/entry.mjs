import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ZFUDiq9O.mjs';

const _page0  = () => import('./chunks/generic_Zd4uMKWL.mjs');
const _page1  = () => import('./chunks/index_j3qbaw-D.mjs');
const _page2  = () => import('./chunks/contact_s7AkUx5E.mjs');
const _page3  = () => import('./chunks/pricing_4w6jcZBk.mjs');
const _page4  = () => import('./chunks/about_pk06GlrL.mjs');
const _page5  = () => import('./chunks/_slug__45oL-9qs.mjs');
const _page6  = () => import('./chunks/blog_9oiXSJhY.mjs');
const _page7  = () => import('./chunks/404_-TQy12x8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/pricing.astro", _page3],["src/pages/about.astro", _page4],["src/pages/blog/[slug].astro", _page5],["src/pages/blog.astro", _page6],["src/pages/404.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
