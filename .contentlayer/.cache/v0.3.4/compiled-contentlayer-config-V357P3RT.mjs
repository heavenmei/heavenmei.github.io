// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync, readFileSync } from "fs";
import path2 from "node:path";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";

// lib/rehype-pre-raw.js
import { visit } from "unist-util-visit";

// contentlayer.config.js
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// lib/static-images.ts
import fs from "fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import sharp from "sharp";
import { visit as visit2 } from "unist-util-visit";

// lib/placeholder.ts
var createPlaceholder = async (image) => {
  const { width, height } = await image.metadata();
  if (!width || !height) {
    throw new Error("fetched image without width and height");
  }
  const imgAspectRatio = width / height;
  const placeholderImgWidth = 8;
  const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio);
  return image.resize(placeholderImgWidth, placeholderImgHeight).png({
    quality: 75
  }).toBuffer().then((buffer) => `data:image/png;base64,${buffer.toString("base64")}`);
};
var placeholder_default = createPlaceholder;

// lib/static-images.ts
var checksum = (content) => {
  return crypto.createHash("sha256").update(content).digest("hex");
};
var findPath = (file, image) => {
  const data = file.data.rawDocumentData;
  const directory = data.sourceFileDir;
  if (directory && directory !== ".") {
    return path.join(directory, image.properties?.src || "");
  }
  return image.properties?.src || "";
};
var metadata = async (resourcePath, source, pathname) => {
  const content = await fs.readFile(path.join(process.cwd(), source));
  console.log("metadata ===", content, source);
  const image = await sharp(content);
  const { width, height } = await image.metadata();
  if (!width || !height) {
    return null;
  }
  const src = resourcePath + "/" + pathname;
  const sha256 = checksum(content);
  const blurDataURL = await placeholder_default(image);
  return {
    sha256,
    props: {
      width,
      height,
      src,
      blurDataURL
    }
  };
};
var processImage = async (options, file, node) => {
  const root = options.sourceRoot;
  const pathname = findPath(file, node);
  const source = path.join(root, pathname);
  const meta = await metadata(options.resourcePath, source, pathname);
  if (!meta) {
    return;
  }
  console.log("staticImages ===", meta);
  const target = path.join(options.publicDir, pathname);
};
var staticImages = (
  // @ts-ignore
  (options) => (tree, file, done) => {
    const tasks = [];
    visit2(tree, "element", (node) => {
      if (node.tagName === "img" && !node.properties.src.includes("://")) {
        tasks.push(processImage(options, file, node));
      }
    });
    Promise.all(tasks).then(() => done());
  }
);
var static_images_default = staticImages;

// contentlayer.config.js
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
      [
        static_images_default,
        {
          publicDir: path2.join(process.cwd(), "public"),
          sourceRoot: "/content",
          resourcePath: ""
        }
      ],
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
//# sourceMappingURL=compiled-contentlayer-config-V357P3RT.mjs.map
