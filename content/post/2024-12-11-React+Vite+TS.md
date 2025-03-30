---
title: Vite快速构建react+ts项目
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
## vite &  webpack
虽说以前都用webpack搭react，但是webpack实在是太慢了。下面从一下几方面总结了一下vite和webpack的优缺点：

> 1. 构建速度：Vite是基于现代浏览器原生 ES 模块解析方式构建，不需要打出中间包，因此它在热更新、构建速度等方面都比Webpack更快。
> 2. 开发体验：Vite使用了原生模块化的开发方式，不需要像Webpack那样预处理，因此在开发体验上更加灵活。Vite还支持开箱即用的TypeScript支持和Vue单文件组件的开发，使得开发更加高效和符合直觉。
> 3. 打包功能：虽然Vite在开发体验和构建速度方面更优秀，但是它并不能取代Webpack的打包功能。Webpack的打包能力更强大，支持多种打包方式，例如代码分割、异步加载等，适用于大型项目的开发。

总的来说，Vite更偏向于开发体验和快速开发，提供了更好的开箱即用的Vue单文件组件和TypeScript支持，而Webpack则更偏向于打包功能和应用于大型项目的开发。

  

## 初始化
[Vite](https://cn.vitejs.dev/)
```shell

npm create vite@latest
yarn create vite


yarn add -D sass
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

## 状态管理器 zustand
![](assets/2024-12-11-React+Vite+TS-20241211080932.png)
> [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) 是一个轻量级、简洁且强大的 React 状态管理库，旨在为您的 React 项目提供更简单、更灵活的状态管理方式。与其他流行的状态管理库（如 Redux、MobX 等）相比，Zustand 的 API 更加简洁明了，学习成本较低，且无需引入繁琐的中间件和配置。同时，Zustand 支持 TypeScript，让您的项目更具健壮性。
> 教程：[codthing.github.io/react/zusta…](https://link.juejin.cn/?target=https%3A%2F%2Fcodthing.github.io%2Freact%2Fzustand%2Fzustand-base%2F%23%25E4%25B8%2580%25E5%25AE%2589%25E8%25A3%2585 "https://codthing.github.io/react/zustand/zustand-base/#%E4%B8%80%E5%AE%89%E8%A3%85")


```bash
yarn add zustand
```


`src/store/useStore.ts`
```js
import { create } from "zustand";

type GlobalStore = {
  bears: number;

  increasePopulation: (payload: boolean) => void;
  removeAllBears: (payload: any) => void;
  updateBears: (payload: number) => void;
};

export const useStore = create<GlobalStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

```


`main.tsx`
```js
import { useStore } from "./store/useStore";

function App() {
  const bears = useStore((state) => state.bears);

  return (
    <>
      <h1>{bears} around here...</h1>
    </>
  );
}

```




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