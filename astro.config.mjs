import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://astroship.web3templates.com',
	integrations: [tailwind(), svelte(), mdx(), sitemap()],
	output: 'server',
	adapter: netlify()
})
