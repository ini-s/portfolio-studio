import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'languages',
  title: 'Languages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'stackImage',
      title: 'stack Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
