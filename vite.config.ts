import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "./plugins/md.js";
import path from "path";
import { readMdFile } from "./lib/posts-md.js";

const PostPath = path.join(__dirname, "./content/post");
const MdFiles = readMdFile(PostPath);
console.log("markdown files", MdFiles);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md()],
  // 挂在到window
  define: {
    MDFILES: MdFiles,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
  },
});
