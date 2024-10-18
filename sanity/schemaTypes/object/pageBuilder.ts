import {Link2} from 'lucide-react'
import {defineType, defineField} from 'sanity'

const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'object',
  title: 'Page Builder',
  description: 'Page Builder allows you to easily add "Modules" to your page',
  icon: Link2,
  fields: [
      defineField({
        name: "posts",
        type: "array",
        of: [{ type: "reference", to: { type: "post" } }],
      })
  ]
})

export default pageBuilder
