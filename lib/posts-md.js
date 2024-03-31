import fs from "fs";
import fm from "front-matter";
import * as dateformat from "./dateformat";

// const PostPath =
//   "/Users/heavenmei/Desktop/heavenmei.io/content/post/2024-01-17-Modal2Panel.md";

export function getFileAttr(file) {
  const data = fs.readFileSync(file, "utf8");
  const matter = fm(data);
  return {
    ...matter.attributes,
    date: dateformat.formatDate_ymd(matter.attributes.date),
  };
}

export function readMdFile(filepath) {
  const files = fs.readdirSync(filepath);
  const mdPaths = files.filter((item) => item.endsWith(".md"));
  const PostFiles = mdPaths.map((item) => {
    const absPath = `${filepath}/${item}`;
    const attrs = getFileAttr(absPath);
    return {
      absPath: absPath,
      path: item,
      ...attrs,
    };
  });
  PostFiles.sort(function (a, b) {
    return b.date > a.date ? 1 : -1;
  });
  return PostFiles;
}
