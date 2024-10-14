// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'portfolio',

//   projectId: 'naj7xsf9',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'naj7xsf9',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})
