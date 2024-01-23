import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "./plugins/md.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md()],
  resolve: {
    // alias: [{ find: /^~/, replacement: "" }],
    // alias: {
    //   "~": path.resolve(__dirname, "./"),
    //   "@": path.resolve(__dirname, "./src"),
    // },
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
  },
});
