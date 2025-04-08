---
title: 快速构建react+ts项目（Webpack / Vite）
subtitle: 
layout: post
date: 2024-12-11
author: heavenmei
categories:
  - Post
description: 
tags:
  - Web
url: 
image:
---
## React+Vite
### 初始化

```shell
# vite
npm create vite@latest
yarn create vite


# 纯手动 得到一个package.json文件
npm init -y

```



### ts 别名设置
```bash
yarn add @types/node -D
```

`vite.config.ts`
```ts
export default defineConfig({
  ...,
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
  },
});

```

`tsconfig.app.json`
```json
{
  "compilerOptions": {
    ...
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
}

```


### 禁用any

```js
//  .eslintrc (tslintrc) file :
rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
```



### tailwindcss
```bash
yarn add -D tailwindcss@latest postcss autoprefixer
npx tailwindcss init
```

`tailwind.config.js`
```js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### svgr
```bash
yarn add -D vite-plugin-svgr
```

`tsconfig.app,json`
```json
{
  "compilerOptions": {
    ...
    "types": [
      "vite-plugin-svgr/client",
      "node"
    ],
  },
}
```


`vite.config.ts`
```js
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  ...,
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      // 不用每次写 ?react
      include: '**/*.svg',
    }),
  ],
});

```


`main.tsx`
```js
// 未配置include需要写 ?react
import IconSvg from "@/assets/icons/layers.svg?react"; 
// 未配置include后可省略
import IconSvg from "@/assets/icons/layers.svg"; 


function App() {
  return (
    <><IconSvg /></>
  );
}
```


如果需要定制颜色,svg将`fill="currentColor"`,width,height需要定制可将svg中删去，然后组件指定width


## UI
我用的是arco-design ，这个看个人喜好吧
```bash
yarn add @arco-design/web-react less @arco-plugins/vite-react
```


定制化主题`vite.config.ts`
```js
import { vitePluginForArco } from "@arco-plugins/vite-react";

export default defineConfig({
  ...,
  plugins: [
    react(),
    vitePluginForArco({
      modifyVars: {
        "primary-6": "#12372a",
        "primary-1": "#12372a",
        "primary-2": "#12372a",
        "primary-3": "#738977",
        "primary-4": "#12372a",
        "primary-5": "#12372a",
        "primary-7": "#0E3227",
        "arcoblue-6": "#12372a",
        style: true,
      },
    }),
  ],
});
```



## React+Webpack

### 配置webpack

```bash
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```
- 安装webpack和相关依赖。
- **webpack-dev-server**是开启开发环境的服务
- **html-webpack-plugin**：该插件将为你生成一个 HTML5 文件， 在 body 中使用 `script` 标签引入你所有 webpack 生成的 bundle


手动创建目录结构
```diff
 react-cli
  |- node_modules
  |- package.json
  |- package-lock.json
+ |- public
+   |- index.html        //入口文件
+ |- src
+   |- index.js          
+ |- webpack.config.js    //环境配置
+ |- .babelrc            // babel
```


**webpack.config.js** 
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true, // 热更新
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.jsx', '.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};

```


**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-cli</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

```


**index.js**
```js
const root = document.getElementById('root');
root.innerHTML = '<div>Hello World</div>';
```


修改package.json文件，加上dev命令。
```json
  "scripts": {
    "dev": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },

```


然后控制台`npm run dev`回车，打开网页


### 配置React

```bash
npm install --save react react-dom react-router-dom
```
- **react-router-dom*** 路径管理

若采用jsx形式安装babel、loader等插件（ts可跳过直接配置ts-loader）
```zsh
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D
```

- **@babel/core**:  babel核心包。Babel是一个JavaScript编译器
- **@babel/preset-react**: JSX 转换JS
- **babel-loader**: 转义 js 文件代码的 loader
- **@babel/preset-env**: ES6转ES5


修改项目目录
```diff
 react-cli
  |- node_modules
  |- package.json
  |- package-lock.json
  |- public
     |- index.html        //入口文件
  |- src
+   |- index.jsx    
-   |- index.js             
+ |- webpack.config.js    //环境配置
```


```js
module.exports = {
  entry: './src/index.jsx',
  // ...
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  // ...
};
```

**index.jsx**
```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <div>Hello World</div>;
}

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container);

root.render(<App />);

```



### 配置css&sass

安装样式文件相关的loader，在webpack 5 中，可以使用内置的**Asset Modules**处理图像和字体，我们不用额外安装。
```bash
npm install --save-dev style-loader css-loader sass sass-loader
```

修改**webpack.config.js** 
```js

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /css$/i,    //匹配css、scss文件
        use: ["style-loader", "css-loader", "sass-loader"] // 注意执行顺序是后往前
      },
      {
        test: /.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ],
  },
};
```

这样即可创建css/sass文件

### 配置TS
```zsh
npm i -D typescript ts-loader
```

配置react相应的types
```bash
npm i --save-dev @types/react @types/react-dom
```

修改**webpack.config.js** 
```js

module.exports = {
 entry: './src/index.tsx',
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/',
      },
    ],
  },
};
```


新建 **tsconfig.json**
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "module": "es6",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "target": "es5",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "./src/**/*"
  ]
}
```