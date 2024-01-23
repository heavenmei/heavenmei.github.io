/// <reference types="vite/client" />
declare module "*.md" {
  const content: string;
  export default content;
}

declare module "markdown-navbar";
declare module "fs";
declare module "path";
