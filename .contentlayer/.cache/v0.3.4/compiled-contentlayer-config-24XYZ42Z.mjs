// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkCodeTitles from "remark-flexible-code-titles";

// src/lib/rehype-pre-raw.js
import { visit } from "unist-util-visit";
var preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code")
        return;
      node.properties.raw = codeEl.children?.[0].value;
    }
  });
};
var postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};

// contentlayer.config.js
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
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    titleAlt: { type: "string", required: false },
    description: { type: "string", required: false },
    descriptionAlt: { type: "string", required: false },
    date: { type: "date", required: false }
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (item) => item._raw.sourceFileName.split("_").slice(1).join("_").split(".")[0]
    },
    ...commonFields
  }
}));
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
      preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      postProcess
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-24XYZ42Z.mjs.map
