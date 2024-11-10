import { visit } from "unist-util-visit";

// 获取代码块内容
export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;

      if (codeEl.tagName !== "code") return;
      node.properties.raw = codeEl.children?.[0].value;
      // console.log("🚨 preProcess ~", node);
    }
  });
};

// 代码块内容放进pre.raw
export const postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }

      for (const child of node.children) {
        if (child.tagName === "pre") {
          child.properties["raw"] = node.properties.raw;
          node.properties.raw = undefined;
          // console.log("🚨 postProcess ~", child, node.properties.raw);
        }
      }
    }
  });
};
