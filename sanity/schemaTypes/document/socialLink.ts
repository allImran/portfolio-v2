import {Link} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Links',
  icon: Link,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
        name: 'iconType',
        title: 'Select Icon Types',
        description: 'Please choose between 2 different media types',
        type: 'string',
        initialValue: 'image',
        options: {
          list: [
            {title: 'Image', value: 'image'},
            {title: 'Package Icon', value: 'package'},
          ],
          layout: 'radio',
        },
    }),
    defineField({
        title: 'Image',
        name: 'image',
        type: 'mainImage',
        hidden: ({parent}) => parent?.iconType == 'package',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        storeSvg: true,
      },
      hidden: ({parent}) => parent?.iconType == 'image',
    })
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
