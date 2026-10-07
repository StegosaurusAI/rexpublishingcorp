import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";
import emittedLinkRepair from './scripts/repair-emitted-links.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://rexpublishingcorp.com',
  integrations: [mdx(), sitemap(), tailwind(), partytown(), emittedLinkRepair()]
});
