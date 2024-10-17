import {Image} from 'lucide-react'
import {defineType, defineField} from 'sanity'

const mainImage = defineType({
  name: 'mainImage',
  type: 'image',
  icon: Image,
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) =>
        Rule.custom((alt: any, context: any) => {
          const hasImage = context?.parent?.hasOwnProperty('asset') && alt === undefined
          return hasImage ? 'You have to fill out the alternative text.' : true
        }).error(),
    }),
  ],
  preview: {
    select: {
      asset: 'asset',
      title: 'caption',
    },
    prepare({title, asset}) {
      return {
        title,
        media: {
          ...asset,
          _type: 'reference',
        },
      }
    },
  },
})

export default mainImage
