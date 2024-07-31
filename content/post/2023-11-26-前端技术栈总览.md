---
title: 搭建React+TS项目的几种方式
subtitle: 
layout: post
date: 2023-11-26
author: heavenmei
categories:
  - Post
description: 
tags:
  - Front
url: /2023-11-26-react+ts
image:
---

## 打包工具
### webpack
https://webpack.js.org/

### Vite
https://cn.vitejs.dev/

取代webpck的快速构建工具，优化构建时间。使用 esbuild
```shell

npm create vite@latest
yarn create vite
```



## 包管理器
npm, yarn, bnpm


**cross-env**
```json
// package.json
"dev": "cross-env PORT=9000 nuxt dev ",
"mock": "cross-env PORT=9000 MODE=mock nuxt dev ",
```

## React手脚架
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

Next.js 是一个基于 React 的[服务端渲染框架](https://cloud.tencent.com/product/ssr?from_column=20065&from=20065)，它提供了约定式路由、多种渲染方式、静态导出等功能。

**渲染方式**

- CSR - 客户端渲染。也就是我们常说的 SPA（single page application），使用 `useEffect` 获取接口数据。
- SSR - 服务器端渲染
- SSG - 静态站点生成。
- ISR – 增量静态再生，可以再次从 API 获取数据，并且生成静态页面，最适合常见的资讯类、新闻类网站。
- Server component- 也是 SSR 的一种， 但互补了 SSR 的不足，让网页拥有流式渲染的能力。/CRACO（Webpack）

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
    


## Vue手脚架
### nuxtjs
https://nuxt.com/

## Eslint & ts
### ts 别名设置
`yarn add -D @type/node`
vite.config.ts
```ts
export default defineConfig({
  ...,
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

```

tsconfig.json
```json
{
  "compilerOptions": {
    ...,
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./src/*"]
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

## 辅助
tailwindcss： https://tailwindcss.com/
animate.css: https://animate.style/
chroma: https://gka.github.io/chroma.js/ (color util)
## UI
arco.design: https://arco.design/
