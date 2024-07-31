import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    url: { type: 'string', required: true },
    titleAlt: { type: 'string', required: false },
    description: { type: 'string', required: false },
    descriptionAlt: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
  computedFields: {
    // url: {
    //   type: 'string',
    //   resolve: (post) => `${post._raw.flattenedPath}`,
    // },

    id: {
      type: 'string',
      resolve: (item) =>
        item._raw.sourceFileName.split('_').slice(1).join('_').split('.')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['ZtTemplates', '.trash', '.obsidian'],
  documentTypes: [Post],
});
