import fs from "fs/promises";
import { Element, Root } from "hast";
import crypto from "node:crypto";
import path from "node:path";
import sharp from "sharp";
import { Plugin } from "unified";
import { visit } from "unist-util-visit";

type Options = {
  sourceRoot: string;
  publicDir: string;
  resourcePath: string;
};

const checksum = (content: Buffer) => {
  return crypto.createHash("sha256").update(content).digest("hex");
};

const fileChecksum = async (file: string) => {
  try {
    return checksum(await fs.readFile(file));
  } catch (_) {
    return "";
  }
};

const copy = async (source: string, sha256sum: string, target: string) => {
  if (sha256sum !== (await fileChecksum(target))) {
    const targetDir = path.dirname(target);

    await fs.mkdir(targetDir, { recursive: true });
    await fs.copyFile(source, target);
  }
};

// 创建占位符
const createPlaceholder = async (image: sharp.Sharp) => {
  const { width, height } = await image.metadata();
  if (!width || !height) {
    throw new Error("fetched image without width and height");
  }

  const imgAspectRatio = width / height;

  const placeholderImgWidth = 8;
  const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio);

  return image
    .resize(placeholderImgWidth, placeholderImgHeight)
    .png({
      quality: 75,
    })
    .toBuffer()
    .then((buffer) => `data:image/png;base64,${buffer.toString("base64")}`);
};

const metadata = async (
  resourcePath: string,
  source: string,
  pathname: string
) => {
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
      blurDataURL,
    },
  };
};

const processImage = async (
  options: Options,
  file: any,
  node: Element
): Promise<void> => {
  const root = options.sourceRoot;
  const pathname = path.join(
    file.data.rawDocumentData.sourceFileDir,
    (node.properties?.src as string) || ""
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
    ...meta.props,
  };
};

export const staticCoverImage = async (
  sourceRoot: string,
  targetRoot: string,
  resourcePath: string,
  directory: string,
  image: string
) => {
  if (image.includes("://")) {
    return image;
  }

  const source = path.join(sourceRoot, directory, image);
  const content = await fs.readFile(source);
  const sha256sum = checksum(content);
  const target = path.join(targetRoot, directory, image);

  await copy(source, sha256sum, target);

  return `${resourcePath}/${directory}/${image}`;
};

const staticImages: Plugin<[Options], Root> =
  // @ts-ignore
  (options) => (tree, file, done) => {
    const tasks: Promise<void>[] = [];

    visit(tree, "element", (node) => {
      if (node.tagName === "img" && !node.properties.src.includes("://")) {
        tasks.push(processImage(options, file, node));
      }
    });

    Promise.all(tasks).then(() => done());
  };

export default staticImages;
