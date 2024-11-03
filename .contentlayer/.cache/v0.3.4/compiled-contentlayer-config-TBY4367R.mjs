// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkCodeTitles from "remark-flexible-code-titles";

// src/lib/rehype-pre-raw.js
import { visit } from "unist-util-visit";

// contentlayer.config.js
import rehypeSlug from "rehype-slug";
var commonFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "array", required: false },
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    titleAlt: { type: "string", required: false },
    description: { type: "string", required: false },
    descriptionAlt: { type: "string", required: false },
    date: { type: "date", required: false }
  },
  computedFields: {
    // id: {
    //   type: "string",
    //   resolve: (item) =>
    //     item._raw.sourceFileName.split("_").slice(1).join("_").split(".")[0],
    // },
    // headings: {
    //   type: "json",
    //   resolve: async (doc) => {
    //     const slugger = new GithubSlugger();
    //     // https://stackoverflow.com/a/70802303
    //     const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
    //     const headings = Array.from(doc.body.raw.matchAll(regex)).map(
    //       // @ts-ignore
    //       ({ groups }) => {
    //         const flag = groups?.flag;
    //         const content = groups?.content;
    //         return {
    //           heading: flag?.length,
    //           text: content,
    //           slug: content ? slugger.slug(content) : undefined,
    //         };
    //       }
    //     );
    //     console.log("headings===", headings);
    //     return headings;
    //   },
    // },
    ...commonFields
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  contentDirExclude: ["ZtTemplates", ".trash", ".obsidian"],
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm
      // [
      //   remarkCodeTitles,
      //   {
      //     titleTagName: "CodeBlockTitle",
      //     titleClassName: "custom-code-title",
      //     titleProperties: (language, title) => ({
      //       ["data-language"]: language,
      //       title,
      //     }),
      //   },
      // ],
    ],
    // TODO: fix postProcess
    rehypePlugins: [
      // preProcess,
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "github-dark",
      //   },
      // ],
      // postProcess,
      rehypeSlug
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     // 锚点设置类名
      //     properties: {
      //       class: "header-anchor",
      //     },
      //     // 锚点的内容
      //     content: {
      //       type: "text",
      //       value: "#",
      //     },
      //   },
      // ],
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TBY4367R.mjs.map
