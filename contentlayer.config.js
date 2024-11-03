import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkCodeTitles from "remark-flexible-code-titles";
import { preProcess, postProcess } from "./src/lib/rehype-pre-raw";

const commonFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    titleAlt: { type: "string", required: false },
    description: { type: "string", required: false },
    descriptionAlt: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (item) =>
        item._raw.sourceFileName.split("_").slice(1).join("_").split(".")[0],
    },
    ...commonFields,
  },
}));

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["ZtTemplates", ".trash", ".obsidian"],
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkCodeTitles,
        {
          titleTagName: "CodeBlockTitle",
          titleClassName: "custom-code-title",
          titleProperties: (language, title) => ({
            ["data-language"]: language,
            title,
          }),
        },
      ],
    ],
    // TODO: fix postProcess
    rehypePlugins: [
      preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      postProcess,
    ],
  },
});
