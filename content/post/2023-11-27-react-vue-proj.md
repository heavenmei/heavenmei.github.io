---
layout: post
title: 前端基础框架搭建
subtitle: 从0到1搭建 react/ vue 基础项目
description: 
date: 2023-11-27
author: heavenmei
image: ""
tags:
  - Web
url: 
categories:
  - Post
---
## webpack 快速构建
### webpack
```bash
mkdir webpack-demo
cd webpack-demo
# 创建package.json
yarn init -y  
npm init -y
pnpm init --y


# 安装依赖
pnpm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```


添加指令
```json
// package.json
"serve": "webpack-dev-server"
```

创建相应文件

```shell
webpack-demo
├─ src
│  └─ main.js
├─ public 
|  └─ index.html
└─ webpack.config.js 
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

`webpack.config.js `
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
	open: true, // 编译完自动打开浏览器
    port: 9000,
  },
};

```

### react + ts
```bash
pnpm add react react-dom
pnpm add -D @types/react @types/react-dom


pnpm add typescript -D
```

`tsc --init` 生成一个`tsconfig.json` 文件

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "node",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "common/*": [
        "src/common/*"
      ],
      "@/*": [
        "src/*"
      ]
    },
    "strict": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "importHelpers": true,
    "noUnusedLocals": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": [
    "src"
  ]
}
```

然后可以开始创建jsx/tsx文件
```tsx
// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return <div>hello world</div>;
};

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(<App />);

```

### babel
由于 webpack 只能识别js、json 文件， 无法识别 jsx/tsx 文件，此此时我们就需要使用 `babel-loader` 来转换代码，babel-loader 可以让 webpack 在构建的时候借助 Babel 对JS代码进行转译。
```js

// pnpm add -D babel-loader @babel/core @babel/preset-react @babel/preset-typescript


// webpack.config.js
module.exports = {
  ...
  resolve: {
    extensions: [".mjs", ".js", ".json", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-typescript"], ["@babel/preset-react"]],
          },
        },
      },
    ],
  },
};
```

如果你不想在 `webpack.config.js` 中直接配置 Babel，也可以创建一个 `.babelrc` 文件，将 Babel 配置写入其中：
```json
{
  // pnpm add -D @babel/preset-env
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

执行`pnpm run build` 就会发现打包了一个dist文件，html中自动导入了js文件

### css

三种主流css预处理器是[Less]([https://lesscss.org/](https://lesscss.org/))、[Sass]([https://sass-lang.com/](https://sass-lang.com/))（Scss=sass+css）及[Stylus]([https://stylus-lang.com/](https://stylus-lang.com/))

**编译环境不一样**
- Sass 需要Ruby环境
- Less 需要引入less.js(浏览器)
- Stylus 需要安装node

**变量符不一样**
```css
$color: #00c; /* sass */

@color: #00c; /* less */

mainColor = #00c; /* stylus */
```


`less-loader` 可以将 less 编译为 css

`postcss-loader` ：可选，它使用 JavaScript 插件来转换 CSS。这些插件可以执行各种任务，例如自动添加浏览器前缀、支持 CSS 新特性、优化代码、检查语法错误等。==使用抽象语法树（AST）来解析和操作 CSS 代码==

`css-loader` 只能帮我们将 css 解析成 js，但不能挂载到元素上。如果想让 css 生效，我们要手动挂载。

`style-loader`可以自动挂载样式，它负责将 css 样式通过 style 标签插入到 DOM 中。

```js
// pnpm add -D style-loader css-loader postcss postcss-loader less less-loader

// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
};

```

`style-loader` 把 css 样式都打包到最终中的 js 文件了，我们一般是用 `MiniCssExtractPlugin` 代替 style-loader，来将打包后的 js 文件的 css 提取出来，创建一个 css 文件，使用 link 的方式引入。 

除了分离 css文件减小 js 体积， 还可以使用 `CssMinimizerWebpackPlugin` 优化、压缩来 CSS 体积。 

```js
// pnpm add -D mini-css-extract-plugin

// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // 替换
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[hash:8].css", // 将css单独打包放在assets/css 下
    }),
  ],
};

```



### image

在index.tsx 中引入图片会引起ts类型报错，需要在ts类型声明进行声明
```ts
// global.d.ts
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
```

此时编译还是会报错，因为webpack无法识别图片，需要配置 loader
- `file-loader` ：处理文件导入地址并替换成其访问地址，并把文件输出到相应位置，可以处理图片、音视频等资源。
- `url-loader`：file-loader 的升级版，包含 file-loader 的全部功能，并且能够根据配置将符合配置的文件转换成 Base64 方式引入，将小体积的图片 Base64 引入项目可以减少 http 请求，也是一个前端常用的优化方式。

```js
// pnpm add -D file-loader url-loader

// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2000, // 限制打包图片的大小
            },
          },
        ],
      },
    ],
  },
};
```


事实上，webpack 5 的[资源模块](https://webpack.docschina.org/guides/asset-modules/)(asset module)可以来替换所有这些 loader。build后会打包进assets
```js
// 无需add file-loader url-loader

// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
       {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "assets/imgs/[name].[hash:8][ext]",
        },
      },
    ],
  },
};

```

## vite
取代webpck的快速构建工具，优化构建时间。使用 esbuild
```shell
npm create vite@latest
```

兼容性：Vite 需要 [Node.js](https://nodejs.org/en/) 版本 18+，20+

> 若用vscode开发不要装vetur插件（垃圾），安装Volar+TypeScript Vue Plugin (Volar)（vetur的升级版）


**cross-env**
```json
// package.json
"dev": "cross-env PORT=9000 nuxt dev ",
"mock": "cross-env PORT=9000 MODE=mock nuxt dev ",
```




## 手脚架
### CRA/CRACO

[cra](https://create-react-app.dev/)= Create React App。基于webpack和Babel， webpack配置太多。

[craco](https://craco.js.org/docs/getting-started/)= Create React App Configuration Overide。基于cra之上的一个hacky层，用于定制它的配置,allows you to get all of the benefits of Create React App without ejecting

1. `npx create-react-app my-app`
2. `npm i -D @craco/craco` or `npm i -D @craco/types`(ts)
3. create configuaration file `craco.config.js`
4. update `package.json`
    ```json
    "scripts": {
    -  "start": "react-scripts start"
    +  "start": "craco start"
    -  "build": "react-scripts build"
    +  "build": "craco build"
    -  "test": "react-scripts test"
    +  "test": "craco test"
    }
    ```



### Next.js

Next.js 是一个基于 React 的**服务端渲染框架**，它提供了约定式路由、多种渲染方式、静态导出等功能。



## vite 配置

### Sass

```bash
npm i sass -D
```

全局引入： 在vite.config.js文件添加配置

```js
export default defineConfig({
    ...
    css: {
        preprocessorOptions: {
            additionalData: '@import "@/assets/scss/globalVar.scss";@import "@/assets/scss/globalMixin.scss";'
        }
    }
});
```

按需引入

```vue
<style lang="scss" scoped>
    @import "@/assets/scss/globalVar.scss";
</style>
```



### 路径别名

```shell
npm install @types/node --save-dev
```

配置vite.config.ts

```tsx
import path from "path";

export default defineConfig({
  ...
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});

```

配置tsconfig.json

```tsx
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
}
```


### 状态管理-Pinia

[pinia](https://pinia.vuejs.org/zh/)
[pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)

```bash
npm install pinia -D
npm install pinia-plugin-persist -D # 可选，插件
```



### 多环境配置

添加配置文件

```env
# .env.user
# 接口请求地址前缀
VITE_APP_API_PREFIX = /api

# 删除 console 代码
VITE_DROP_CONSOLE = true

# 生产环境配置文件名称
VITE_GLOB_CONFIG_FILE_NAME = app.config.js

# 打包生成目录
VITE_OUTPUT_DIR = user

# 平台
VITE_PLATFORM = user

# 重定向路径
VITE_REDIRECT_INDEX = "/index"

```

修改package.json, 添加--mode 参数

```json
{
  ...
	"scripts": {
    "dev": "vite  --mode dev",
    "build": "vue-tsc && vite build --mode prd",
    "preview": "vite preview"
  },
}
```

项目中使用

```js
const baseUrl = import.meta.env.VITE_APP_API_PREFIX;
```





## Eslint 

### 禁用any

```js
//  .eslintrc (tslintrc) file :
rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
```





## 遇到的问题

##### Cannot find module 'vue'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?Vetur

把tsconfig.json配置项moduleResolution："bundler"改为 moduleResolution："node"



##### An import path cannot end with a '.ts' extension. Consider importing '@/store/counter.js

配置vite.config.ts中resolve.extensions的配置项

##### Cannot find module '~/store/counter' or its corresponding type declarations.ts(2307)



## Reference

[手把手教你搭建 Webpack 5 + React 项目](https://juejin.cn/post/7228845572618371133#heading-11)

tailwindcss： https://tailwindcss.com/

animate.css: https://animate.style/

chroma: https://gka.github.io/chroma.js/ (color util)
