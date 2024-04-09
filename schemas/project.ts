import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'liveURL',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'reference', to: {type: 'languages'}}],
    }),
  ],
})
