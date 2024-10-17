import {House} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  icon: House,
  type: 'document',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      type: 'pageBuilder',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
})
