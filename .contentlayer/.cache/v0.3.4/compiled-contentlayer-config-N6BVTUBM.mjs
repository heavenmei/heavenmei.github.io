// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { writeFileSync } from "fs";
import path2 from "node:path";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "remark-flexible-code-titles";

// lib/copy-code.js
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
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }
      for (const child of node.children) {
        if (child.tagName === "pre") {
          child.properties["raw"] = node.properties.raw;
          node.properties.raw = void 0;
        }
      }
    }
  });
};

// contentlayer.config.js
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// lib/static-images.ts
import fs from "fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import sharp from "sharp";
import { visit as visit2 } from "unist-util-visit";
var checksum = (content) => {
  return crypto.createHash("sha256").update(content).digest("hex");
};
var fileChecksum = async (file) => {
  try {
    return checksum(await fs.readFile(file));
  } catch (_) {
    return "";
  }
};
var copy = async (source, sha256sum, target) => {
  if (sha256sum !== await fileChecksum(target)) {
    const targetDir = path.dirname(target);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.copyFile(source, target);
  }
};
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
var metadata = async (resourcePath, source, pathname) => {
  const content = await fs.readFile(source);
  const image = await sharp(content);
  const { width, height } = await image.metadata();
  if (!width || !height) {
    return null;
  }
  const src = resourcePath + "/" + pathname;
  const sha256 = checksum(content);
  const blurDataURL = await createPlaceholder(image);
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
  const pathname = path.join(
    file.data.rawDocumentData.sourceFileDir,
    node.properties?.src || ""
  );
  const source = path.join(root, pathname);
  const meta = await metadata(options.resourcePath, source, pathname);
  if (!meta) {
    return;
  }
  const target = path.join(options.publicDir, pathname);
  await copy(source, meta.sha256, target);
  if (!node.properties) {
    node.properties = {};
  }
  node.properties = {
    ...node.properties,
    ...meta.props
  };
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
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
var isProduction = process.env.NODE_ENV === "production";
var commonFields = {
  parDir: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileDir
  },
  slug: {
    type: "string",
    resolve: (doc) => {
      const slug = doc._raw.flattenedPath.split("/").reverse()[0];
      return `/post/${slug}`;
    }
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").reverse()[0]
  }
};
var Post = defineDocumentType(() => ({
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
var Note = defineDocumentType(() => ({
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
    date: { type: "date", required: false }
  },
  computedFields: {
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
            title
          })
        }
      ],
      remarkMath
    ],
    rehypePlugins: [
      rehypeRaw,
      [(rehypeKatex, {})],
      [
        static_images_default,
        {
          publicDir: path2.join(process.cwd(), "public"),
          sourceRoot: path2.join(process.cwd(), "content"),
          resourcePath: ""
        }
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          // 锚点设置类名
          properties: {
            class: "header-anchor"
          }
        }
      ],
      // 获取代码块内容
      preProcess,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      // 代码块内容放进pre.raw
      postProcess
    ]
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData();
    createTagCount(allDocuments);
  }
});
export {
  Note,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-N6BVTUBM.mjs.map
