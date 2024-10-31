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
      stega: {
        studioUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://code-builder.sanity.studio'
    },
    }),
    react(),
    vue({ devtools: true }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});