import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure} from './config/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {iconPicker} from 'sanity-plugin-icon-picker'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'naj7xsf9',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    visionTool(),
    iconPicker(),
  ],
  schema: {
    types: schemaTypes
  },
})
