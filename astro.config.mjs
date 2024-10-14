// @ts-check
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'

import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [sanity({
      projectId: 'naj7xsf9',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // studioBasePath: '/sanity'
    }),
    react(),
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});