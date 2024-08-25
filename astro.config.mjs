import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import { defineConfig } from 'astro/config';
import { SITE_METADATA } from "./src/consts.ts";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), metaTags(), robotsTxt()]
});