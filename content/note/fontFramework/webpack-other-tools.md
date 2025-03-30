---
title: 与webpack类似的打包工具
subtitle: 
layout: post
date: 2025-03-30
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---
## [Rollup](https://rollupjs.org/)

一款 `ES Modules` 打包器，从作用上来看，Rollup 与 Webpack 非常类似。不过相比于 Webpack，Rollup 要小巧的多.

#### 优点

- 在用于打包JS库时，`rollup`比 `webpack` 更有优势，打包出来的代码更小、更快
- 默认支持 Tree-shaking

#### 缺点
- 加载其他类型的资源文件或者支持导入 `CommonJS` 模块，又或是编译 `ES` 新特性，这些额外的需求 Rollup 需要使用插件去完成。

综合来看，==Rollup并不适合打包应用程序更适合打包库（纯JS）==，因为需要使用第三方模块，而目前第三方模块大多数使用`CommonJs`方式导出成员，并且rollup不支持`HMR`。


## [Vite](https://vite.vuejs.ac.cn/)

其作用类似`webpack`+ `webpack-dev-server`。它主要由两部分组成：

- 一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度快到惊人的模块热更新HMR
- 一套构建指令，它使用 Rollup打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源

Vite 利用 esbuild 在开发环境中**预打包**一些依赖项，但 Vite 并没有使用 esbuild 作为生产构建的打包器。而是==使用 `Rollup`作为生成环境构建打包器==，因为esbuild不兼容vite插件API。


#### 优点
- **快速的冷启动**：
	- vite会直接启动开发服务器，不需要进行打包操作，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快。
	- Vite 使用 esbuild *预* 打包依赖项。esbuild是用 Go 编写的，预打包依赖项的速度比基于 JavaScript 的打包器快 10 到 100 倍。
- **即时的模块热更新**：
	- 在 Vite 中，HMR 通过**原生 ESM** 执行。 ==当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像webpack那样需要把该模块的相关依赖模块全部编译一次==。

	- **强缓存**：源代码模块请求通过 `304 Not Modified` 有条件地发出，并且依赖项模块请求通过 `Cache-Control: max-age=31536000,immutable` 强缓存，因此一旦缓存后它们就不会再次访问服务器。
- **真正的按需编译**
	- webpack是将所有文件编译打包为bundle之后，才启动devServer。而 Vite 通过 原生 ESM 根据需要转换和提供源代码，当浏览器请求它时。条件**动态导入**后面的代码只有在当前屏幕实际使用时才会被处理。

#### 缺点

- Vite目前还不支持像Webpack那样的插件生态系统，因此其可扩展性还有待提高。


## [Parcel](https://parcel.node.org.cn/docs/)
主打一个零配置开箱即用的Web应用打包工具。

```shell
# 不需要配置文件，命令行即可打包
npx parcel src/index.html
```

#### 优点
- 开箱即用，新手友好
- 极速打包：Parcel使用worker进程去启用**多核编译**。同时有文件系统缓存，即使在重启构建后也能快速再编译
- 内置开发服务器，跟`webpack Dev Server`一样
- 支持模块热替换HMR
- 支持自动安装依赖，像`webpack`开发阶段突然使用安装某个第三方依赖，必然会终止`dev server`然后安装再启动
- 打包过程是多进程同时工作，构建速度会比`Webpack` 快，输出文件也会被压缩，并且样式代码也会被单独提取到单个文件中


#### 缺点
- webpack很多功能Parcel也并不具备，比如常用的~~Tree Shaking~~（parcel2支持了）、提取公共代码等
- 没有配置文件，不够灵活





## [Rspack](https://rspack.dev/zh/guide/start/introduction)


Rspack 是由字节Web Infra 团队在2024年发布的==基于 Rust 语言==开发的 Web 构建工具，拥有高性能、*兼容 Webpack 生态*、定制性强等多种优点。