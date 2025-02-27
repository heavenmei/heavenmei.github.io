---
title: React+Webpack 简易框架
subtitle: 
layout: post
date: 2024-09-29
author: heavenmei
categories:
  - Post
description: 编写markdown文件，利用前端技术栈搭建静态网站，部署GitHub Page
tags:
  - Front
image:
---

## 项目初始化
首先我们创建一个目录，初始化 npm,得到一个**package.json**文件。
```bash
mkdir react-cli
cd react-cli
npm init -y
# or
yarn init

```


## 配置webpack

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


## 配置React

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



## 配置css&sass

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

## 配置TS
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