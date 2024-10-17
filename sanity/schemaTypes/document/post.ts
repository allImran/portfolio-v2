import {Rss} from 'lucide-react'
import {defineField, defineType} from 'sanity'
//select external/internal -> external/internal
export default defineType({
  name: 'post',
  title: 'Posts',
  icon: Rss,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      // title: 'Post Title',
      type: 'string',
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 296,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    }),
    defineField({
      name: 'detail',
      title: 'Details',
      type: 'text',
    }),
    defineField({
      name: "authors",
      title: 'Authors',
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    }),
    defineField({
      name: 'linkType',
      title: 'Link type',
      description: 'Please choose one of the type',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          {title: 'External', value: 'external'},
          {title: 'Internal', value: 'internal'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      hidden: ({parent}) => parent?.linkType == 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [{type: 'blog'}],
      hidden: ({parent}) => parent?.linkType == 'external',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'detail',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle || 'No details',
      }
    }
  },
})
