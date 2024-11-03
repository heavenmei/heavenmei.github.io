// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";

// src/lib/rehype-pre-raw.js
import { visit } from "unist-util-visit";

// contentlayer.config.js
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var root = process.cwd();
var isProduction = process.env.NODE_ENV === "production";
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
    tags: { type: "list", of: { type: "string" } },
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
    ...commonFields
  }
}));
function createTagCount(allBlogs) {
  const tagCount = {};
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        if (tag in tagCount) {
          tagCount[tag] += 1;
        } else {
          tagCount[tag] = 1;
        }
      });
    }
  });
  writeFileSync("public/tag-data.json", JSON.stringify(tagCount));
}
var contentlayer_config_default = makeSource({
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
            title
          })
        }
      ]
    ],
    // TODO: fix postProcess
    rehypePlugins: [
      // preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      // postProcess,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          // 锚点设置类名
          properties: {
            class: "header-anchor"
          }
        }
      ]
    ]
  },
  onSuccess: async (importData) => {
    const { allPosts } = await importData();
    createTagCount(allPosts);
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RZKNIVKC.mjs.map
