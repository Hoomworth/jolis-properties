import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Jolis Properties Portal',

  projectId: 'rcaapojl',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
