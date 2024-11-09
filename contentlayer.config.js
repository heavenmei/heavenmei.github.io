import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import path from "node:path";

// Remark packages
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";
import { preProcess, postProcess } from "./lib/rehype-pre-raw";

// Rehype packages
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdxImages from "./lib/static-images";

const isProduction = process.env.NODE_ENV === "production";

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
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    subtitle: { type: "string" },
    url: { type: "string", required: false },
    titleAlt: { type: "string", required: false },
    description: { type: "string", required: false },
    descriptionAlt: { type: "string", required: false },
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
      [
        mdxImages,
        {
          publicDir: path.join(process.cwd(), "public"),
          sourceRoot: path.join(process.cwd(), "content"),
          resourcePath: "",
        },
      ],

      // preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      // postProcess,
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
    ],
  },
  onSuccess: async (importData) => {
    const { allPosts } = await importData();
    createTagCount(allPosts);
    // createSearchIndex(allPosts);
  },
});
