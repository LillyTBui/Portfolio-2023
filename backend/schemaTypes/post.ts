import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bigImage',
      title: 'big image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mediumImage',
      title: 'medium image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'smallImage',
      title: 'small image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altImage',
      title: 'alternate text for image',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'made',
      title: 'made',
      type: 'string',
    }),
    defineField({
      name: 'websiteLink',
      title: 'website link',
      type: 'string',
    }),
    defineField({
      name: 'githubLink',
      title: 'github link',
      type: 'string',
    }),
    defineField({
      name: 'techonology',
      title: 'technology',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'technology', type: 'string', title: 'technology'}],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
