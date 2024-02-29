import path from "path";
import fs from "fs";

const mdToStr = (str) => {
  const content = JSON.stringify(str);
  return `export default ${content}`;
};

function md() {
  return {
    configureServer: [
      // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => {
          if (ctx.path.endsWith(".md")) {
            ctx.type = "js";
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToStr(fs.readFileSync(filePath).toString());
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [
      {
        // 用于 rollup // 插件
        test: (context) => context.path.endsWith(".md"),
        transform: ({ code }) => mdToStr(code),
      },
    ],
  };
}

export default md;
