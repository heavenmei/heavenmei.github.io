import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import path from "node:path";

// Remark packages
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";
import { preProcess, postProcess } from "./lib/copy-code";
import remarkMath from "remark-math";
import { remarkMark } from "remark-mark-highlight";

// Rehype packages
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdxImages from "./lib/static-images";
import rehypeKatex from "rehype-katex";

const isProduction = process.env.NODE_ENV === "production";

const commonFields = {
  parDir: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileDir,
  },
  slug: {
    type: "string",
    resolve: (doc) => {
      const slug = doc._raw.flattenedPath.split("/").reverse()[0];
      return `/post/${slug}`;
    },
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").reverse()[0],
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields: {
    // id: {
    //   type: "string",
    //   resolve: (item) =>
    //     item._raw.sourceFileName.split("_").slice(1).join("_").split(".")[0],
    // },
    ...commonFields,
  },
}));

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `note/**/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields: {
    ...commonFields,
  },
}));

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
function createTagCount(allBlogs) {
  const tagCount = {};
  // const slugger = new GithubSlugger()
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

// function createSearchIndex(allBlogs) {
//   writeFileSync(
//     `public/search.json`,
//     JSON.stringify(allCoreContent(sortPosts(allBlogs)))
//   );
//   console.log("Local search index generated...");
// }

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["ZtTemplates", ".trash", ".obsidian"],
  documentTypes: [Post, Note],
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
      remarkMath,
      remarkMark,
    ],
    rehypePlugins: [
      [rehypeKatex, {}],
      [
        mdxImages,
        {
          publicDir: path.join(process.cwd(), "public"),
          sourceRoot: path.join(process.cwd(), "content"),
          resourcePath: "",
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          // 锚点设置类名
          properties: {
            class: "header-anchor",
          },
        },
      ],

      // 获取代码块内容
      preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      // 代码块内容放进pre.raw
      postProcess,
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData();
    createTagCount(allDocuments);
    // createSearchIndex(allPosts);
  },
});
