import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "./plugins/md.js";
import path from "path";
import { readMdFile } from "./lib/posts-md.js";

const PostPath = path.join(__dirname, "./content/post");
const NotePath = path.join(__dirname, "./content/notes");
const PostFiles = readMdFile(PostPath);
const NoteFiles = readMdFile(NotePath);
console.log("markdown files", PostFiles);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md()],
  // 挂在到window
  define: {
    PostFiles: PostFiles,
    NoteFiles: NoteFiles,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
  },
});
