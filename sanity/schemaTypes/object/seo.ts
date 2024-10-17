import {TextSearch} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const seo = defineType({
  name: 'seo',
  title: 'SEO',
  icon: TextSearch,
  type: 'object',
  fieldsets: [{name: 'seo', title: 'SEO', options: {collapsible: true, collapsed: true}}],
  fields: [
    defineField({
      title: 'Title for SEO and Social media',
      name: 'title',
      type: 'string',
      fieldset: 'seo',
      description:
        'Write an accurate and concise Title that describes the page. Ideally between 14 and 70 characters. Lets also include the text counter validation for this field as well.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Write a paragraph for the meta description of this page.',
      name: 'description',
      type: 'string',
      fieldset: 'seo',
      description:
        '⚡️ This will be used for SEO and social medias as well. Ideally between 70 and 160 characters.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Write focus keywords for keyphrase of this page.',
      name: 'focusKeyword',
      type: 'string',
      fieldset: 'seo',
      description:
        '🔑 This will be used for SEO and social medias as well. Use comma (,) to add multiple keywords',
    }),
  ],
})

export default seo
