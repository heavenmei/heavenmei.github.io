---
title: webpack & Vite
subtitle:
layout: post
date: 2022-11-01
author: heavenmei
categories:
  - Note
description:
tags:
  - Front
image:
---

> [官方文档](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [「吐血整理」再来一打 Webpack 面试题](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6844904094281236487%23heading-0&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

核心思想：“一切皆模块”。

webpack 是一个用于现代 JavaScript 应用程序的  **静态模块打包工具**。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个  *bundles*，它们均为静态资源，用于展示你的内容。

## 基础概念

### 入口（Entry）

`context`:Webpack 在查找相对路径的时候，会以 context 为根目录进行查找。**绝对路径**

`entry`：确定 webpack 从哪里开始打包。默认值是  `./src/index.js`。

```js
//Node的模块，用于操作文件路径
const path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./path/to/my/entry/file.js",
};
```

### 出口（output）

output ：指定 webpack 在哪里输出它所创建的  *bundle*。

- `filename`表示输出资源文件名默认值是  `./dist/main.js`；**使用模板字符串指定多个输出，避免缓存**
- `path`表示输出资源位置，值必须为绝对路径。
- `clean`:在每次构建前清理  `/dist`  文件夹

**webpack.config.js**

```js
const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
    //filename: '[name].bundle.[chunkhash].js',
    clean: true, //在生成文件之前清空 output 目录
  },
};
```

你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该生成哪些文件。答案是，webpack 通过  **manifest**，可以追踪所有模块到输出 bundle 之间的映射。

### 预处理器（loader）

webpack 只能理解 JavaScript 和 JSON 文件，loader 对其他类型的资源进行转义，输出为 webpack 能够处理的形式。

**loader**  有两个属性：

1. `test` ：接收正则表达式，表示识别出哪些文件会被转换。
2. `use` ：接收一个数组，定义使用哪个 loader，按照数组从后往前的顺序匹配

**webpack.config.js**

```js
const path = require("path");

module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
```

==Warning==

- 在 webpack 配置中定义 rules 时，要定义在  `module.rules`  而不是  `rules`  中。
- 使用正则表达式匹配文件时，你不要为它添加引号。也就是说，`/\.txt$/`  与  `'/\.txt$/'`  或  `"/\.txt$/"`  不一样。

### 插件（plugins）

loader 用于转换某些类型的模块，而 plugin 则可以用于执行范围更广的任务。 包括：打包优化，资源管理，注入环境变量。

想要使用一个插件，你只需要  `require()`  它，然后把它添加到  `plugins`  数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用  `new`  操作符来创建一个插件实例。

```javascript
//为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // 用于访问内置插件

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

### 模式（mode）

参数： `development（开发）`, `production（生产）` ， `none` 。会将 DefinePlugin 中  `process.env.NODE_ENV`  修改。默认值 production。

```javascript
module.exports = {
  mode: "production",
};
```

### 代码分片

常用的代码分离方法：

- **入口起点**：使用  [`entry`](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fconfiguration%2Fentry-context&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  配置手动地分离代码。
- **防止重复**：使用  [Entry dependencies](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fconfiguration%2Fentry-context%2F%23dependencies&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  或者  [`SplitChunksPlugin`](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fplugins%2Fsplit-chunks-plugin&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  去重和分离 chunk。

> SplitChunksPlugin

插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。 具体配置详见[SplitChunksPlugin](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fplugins%2Fsplit-chunks-plugin%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  //在优化里面配置
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
//最后生成
//index.bundle.js
//another.bundle.js
//loash.js 公共的依赖模块
```

## 环境配置

### 概念

开发环境：开发人员调试开发的一种环境: 方便调试，保持高效的开发 生产环境：发布上线的环境: 让程序在生产环境中正常有效的运行

**开发环境的需求：**

- live reloading 或模块热更新 （本地开启服务，实时更新）
- source-map (代码映射，方便打包调试)
- 接口代理　 (配置 proxyTable 解决开发环境中的跨域问题)
- 代码规范检查 (代码规范检查工具)

**生产环境的需求：**

- 提取公共代码
- 压缩 bundle、文件压缩/base64 编码(压缩代码，减少线上环境文件包的大小)
- 更轻量的 source map
- 资源优化

**开发环境和生产环境的共同需求：**

- 入口
- 代码处理(loader 处理)
- 解析配置

**如何区分**

在 node 中有一个对象**process**对象，它里面包括 env 和它的一些属性，NODE_ENV 是我们自己加上去的自定义属性，用来区分环境变量，也就是通过这个变量来进行区别是开发环境还是生产环境。`process.env.NODE_ENV`

```json
//--config是可以设置我们执行哪个webpack文件，默认是执行webpack.config.js,但是我们现在修改文件名了，所以我们要设置一下
"build": "cross-env NODE_ENV=production webpack --config webpack.config.prod.js", // 生产环境打包
"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.dev.js" // 开发环境
```

### sourse-map

当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。例如，如果将三个源文件（`a.js`, `b.js`  和  `c.js`）打包到一个 bundle（`bundle.js`）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会直接指向到  `bundle.js`。你可能需要准确地知道错误来自于哪个源文件，所以这种提示这通常不会提供太多帮助。

`devtool`：此选项控制是否生成，以及如何生成 source map。

- **生产环境**  中使用  `source-map`
- **开发环境**  中使用  `inline-source-map`

```js
devtool: 'inline-source-map',
```

更多[sourse-map 选项](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fconfiguration%2Fdevtool%2F%23devtool&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### webpack-dev-Server

针对**开发阶段**，webpack 提供了一个便捷的本地开发调试工具`webpack-dev-server`，提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能

```javascript
const path = require("path");

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
    hot: true,
  },
};
```

- `static.directory`：表示从哪个目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为  `false`  以禁用
- `compress`：表示服务是否启用 gzip 压缩
- `port`：指定监听请求的端口号
- `proxy`：代理，跨域设置
- `hot`:启用 webpack 的模块热替换 HMR

> [HMR](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fconcepts%2Fhot-module-replacement%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

虽然 devServer 的自动刷新（live reloading）还不错，但当开发复杂大型项目时，这种方式仍然效率不高。webpack 还提供了更灵活的功能——`HMR`模块热替换(hot module replacement),用于在运行时只更新所需的部分模块，而不是刷新整个页面。当然 HMR 不适用于生产环境，仅用于开发环境。

从 webpack-dev-server v4 开始，HMR 是默认启用的。它会自动应用  `webpack.HotModuleReplacementPlugin`，这是启用 HMR 所必需的。因此当 hot 设置为 true，你不需要在你的 webpack.config.js 添加该插件。

模块热替换(hot module replacement)功能会在应用程序运行过程中，替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

- 保留在完全重新加载页面期间丢失的应用程序状态。
- 只更新变更内容，以节省宝贵的开发时间。
- 在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

### webpack 配置文件

搭建好 Vue-cli 脚手架之后，build 文件夹会分别自动的生成 webpack.base.conf.js、webpack.dev.conf.js、webpack.prod.conf.js 三个 webpack 配置文件：

- `webpack.base.conf.js`：webpack 的开发环境和生产环境的共有配置(开发环境和生产环境都是需要执行的配置)
- `webpack.dev.conf.js`：webpack 的开发环境的特有配置(只在开发环境中执行，生产环境中不执行)
- `webpack.prod.conf.js`：webpack 的生产环境的特有配置(只在生产环境中执行，开发环境中不执行)

> webpack.base.conf.js 公共环境

```js
const path = require("path");
//清除build/dist文件夹文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
//生成创建Html入口文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//将css提取到单独的文件中
const MiniCssExtract = require("mini-css-extract-plugin");
//css压缩
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
//压缩js文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//引入webpack
const webpack = require("webpack");

module.exports = {
  //webpack 入口文件
  entry: "./src/index.js",
  //webpack 输出文件配置
  output: {
    //输出文件路径
    path: path.resolve(__dirname, "dist"),
    //输出文件名
    filename: "k-editor.[hash:8].js",
  },
  //配置插件
  plugins: [
    //使用插件清除dist文件夹中的文件
    new CleanWebpackPlugin({
      path: "./dist",
    }),
    //使用插件生成Html入口文件
    new HtmlWebpackPlugin({
      //模板文件路径
      template: "./src/index.html",
      //模板文件名
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true, //删除双引号,
        collapseWhitespace: true, //压缩成一行，
      },
      hash: true,
    }),
    //提取css到style.css中
    new MiniCssExtract({
      filename: "style.css",
    }),
  ],
  resolve: {
    // modules: [path.resolve('node_modules')],//只在当前目录下查找
    alias: {
      //别名
      bootstrap: "bootstrap/dist/css/bootstrap.css",
    },
    // mainFields: ['style', 'main'],//优先寻找style，
    // mainFiles: [],//入口文件的名字,默认index.js
    // extensions: ['js', 'css', 'json', 'vue']//扩展名顺序
  },
  //loader加载器模块配置
  module: {
    rules: [
      {
        //正则表达式匹配.css为后缀的文件
        test: /\.css$/,
        //使用loader
        use: [
          MiniCssExtract.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
        ],
        //正则表达式匹配.less为后缀的文件
        //使用lodaer来处理
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtract.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "less-loader",
        ],
      },
      /* {                 test: /\.js$/,               //不包括node_modules                 exclude: /node_modules/,                 use: [{                     loader: "eslint-loader",                     options: {                         enforce: 'pre'    //强制更改顺序，pre 前  post 后                     }                 }],             },*/
      {
        test: /\.js$/, //普通的loader
        //不包括node_modules
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-withimg-loader"],
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //图片小于10kb就是图片地址，大于正常打包成base64格式编码
              limit: 10000,
              //输出路径
              outputPath: "img/",
            },
          },
        ],
      },
    ],
  },
};
```

> webpack.dev.conf.js 开发环境

```js
//引入webpack-merge插件进行合并
const { merge } = require("webpack-merge");
//引入webpack.base.conf.js文件
const base = require("./webpack.base.conf");
//引入webpack
const webpack = require("webpack");
//进行合并，将webpack.base.conf.js中的配置合并到这
module.exports = merge(base, {
  //模块参数
  mode: "development",
  devServer: {
    contentBase: "./dist",
    //端口号
    port: "8383",
    inline: true,
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true, //允许热加载
  },
  //启用source-map方便调试
  devtool: "source-map",
  plugins: [
    //定义全局变量
    new webpack.DefinePlugin({
      //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
      DEV: JSON.stringify("dev"),
    }),
  ],
});
```

> webpack.prod.conf.js 生成环境

```js
const { merge } = require("webpack-merge");
const base = require("./webpack.base");

const path = require("path");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimizer: [
      //压缩CSS代码
      new OptimizeCss(),
      //压缩js代码
      new UglifyJsPlugin({
        //启用文件缓存
        cache: true,
        //使用多线程并行运行提高构建速度
        parallel: true,
        //使用 SourceMaps 将错误信息的位置映射到模块
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    //使用插件定义全局变量DEV
    new webpack.DefinePlugin({
      DEV: JSON.stringify("production"),
    }),
  ],
});
```

> package.json 文件配置

```json
    "scripts": {
        "test": "npm  run test",
        "dev": "webpack serve --open --config webpack.dev.js",
        "build": "webpack --config webpack.prod.js"
      },
```

## 面试题

### 常见的 Loader？

- `raw-loader`：加载文件原始内容（utf-8）
- `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
- `url-loader`：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
- `source-map-loader`：加载额外的 Source Map 文件，以方便断点调试
- `svg-inline-loader`：将压缩后的 SVG 内容注入代码中
- `image-loader`：加载并且压缩图片文件
- `json-loader`  加载 JSON 文件（默认包含）
- `handlebars-loader`: 将 Handlebars 模版编译成函数并返回
- `babel-loader`：把 ES6 转换成 ES5
- `ts-loader`: 将 TypeScript 转换成 JavaScript
- `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
- `sass-loader`：将 SCSS/SASS 代码转换成 CSS
- `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性
- `style-loader`：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
- `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
- `eslint-loader`：通过 ESLint 检查 JavaScript 代码
- `tslint-loader`：通过 TSLint 检查 TypeScript 代码
- `mocha-loader`：加载 Mocha 测试用例的代码
- `coverjs-loader`：计算测试的覆盖率
- `vue-loader`：加载 Vue.js 单文件组件
- `i18n-loader`: 国际化
- `cache-loader`: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里

更多 Loader 请参考[官网](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwebpack.docschina.org%252Floaders%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### 常见的 Plugin？

- `HtmlWebpackPlugin`:该插件将为你生成一个 HTML5 文件， 在 body 中使用  `script`  标签引入你所有 webpack 生成的 bundle。如果你有多个 webpack 入口，他们都会在已生成 HTML 文件中的  `<script>`  标签内引入。

- `webpack-merge`:合并 webpack 配置文件，公共、生产、开发环境的配置

- `SplitChunksPlugin`：代码分片

- `efine-plugin`：定义环境变量 (Webpack4 之后指定 mode 会自动配置)

- `ignore-plugin`：忽略部分文件

- `web-webpack-plugin`：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用

- `uglifyjs-webpack-plugin`：不支持 ES6 压缩 (Webpack4 以前)

- `terser-webpack-plugin`: 支持压缩 ES6 (Webpack4)

- `webpack-parallel-uglify-plugin`: 多进程执行代码压缩，提升构建速度

- `mini-css-extract-plugin`: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)

- `serviceworker-webpack-plugin`：为网页应用增加离线缓存功能

- `clean-webpack-plugin`: 目录清理

- `ModuleConcatenationPlugin`: 开启 Scope Hoisting

- `speed-measure-webpack-plugin`: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)

- `webpack-bundle-analyzer`: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

更多 Plugin 请参考[官网](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwebpack.docschina.org%252Fplugins%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### Loader 和 Plugin 区别？

`Loader`  本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

`Plugin`  就是插件，基于事件流框架  `Tapable`，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

`Loader`  在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

`Plugin`  在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造

### Webpack 构建流程简单说一下

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. `初始化参数`：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
2. `开始编译`：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
3. `确定入口`：根据配置中的 entry 找出所有的入口文件
4. `编译模块`：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. `完成模块编译`：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
6. `输出资源`：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7. `输出完成`：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

在以上过程中，`Webpack`  会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

简单说

1. 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
2. 编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
3. 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

对源码感兴趣的同学可以移步我的另一篇专栏[从源码窥探 Webpack4.x 原理](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6844904046294204429&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### source map 是什么？生产环境怎么用？

`source map`  是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。

map 文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：

- `hidden-source-map`：借助第三方错误监控平台 Sentry 使用
- `nosources-source-map`：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
- `sourcemap`：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)

注意：避免在生产中使用  `inline-`  和  `eval-`，因为它们会增加 bundle 体积大小，并降低整体性能。

### 模块打包原理知道吗？

Webpack 实际上为每个模块创造了一个可以导出和导入的环境，本质上并没有修改 代码的执行逻辑，代码执行顺序与模块加载顺序也完全一致。

### 文件监听原理呢？

在发现源码发生变化时，自动重新构建出新的输出文件。

Webpack 开启监听模式，有两种方式：

- 启动 webpack 命令时，带上 --watch 参数
- 在配置 webpack.config.js 中设置 watch:true

缺点：每次需要手动刷新浏览器

原理：轮询判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等  `aggregateTimeout`  后再执行。

```js
module.export = {
  // 默认false,也就是不开启
  watch: true,
  // 只有开启监听模式时，watchOptions才有意义
  watchOptions: {
    // 默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行，默认300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll: 1000,
  },
};
```

### 说一下 Webpack 的热更新原理吧

(敲黑板，这道题必考)


`Webpack`  的热更新又称热替换（`Hot Module Replacement`），缩写为  `HMR`。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

HMR 的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个  `Websocket`，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起  `Ajax`  请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起  `jsonp`  请求获取该 chunk 的增量更新。

后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由  `HotModulePlugin`  来完成，提供了相关 API 以供开发者针对自身场景进行处理，像`react-hot-loader`  和  `vue-loader`  都是借助这些 API 实现 HMR。

细节请参考[Webpack HMR 原理解析](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fzhuanlan.zhihu.com%252Fp%252F30669007&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### 如何对 bundle 体积进行监控和分析？

`VSCode`  中有一个插件  `Import Cost`  可以帮助我们对引入模块的大小进行实时监测

还可以使用  `webpack-bundle-analyzer`  生成  `bundle`  的模块组成图，显示所占体积。

`bundlesize`  工具包可以进行自动化资源体积监控。

### 文件指纹是什么？怎么用？

文件指纹是打包后输出的文件名的后缀。

- `Hash`：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
- `Chunkhash`：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
- `Contenthash`：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

#### JS 的文件指纹设置

设置 output 的 filename，用 chunkhash。

```js
module.exports = {
  entry: {
    app: "./scr/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name][chunkhash:8].js",
    path: __dirname + "/dist",
  },
};
```

#### CSS 的文件指纹设置

设置 MiniCssExtractPlugin 的 filename，使用 contenthash。

```js
module.exports = {
  entry: {
    app: "./scr/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name][chunkhash:8].js",
    path: __dirname + "/dist",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name][contenthash:8].css`,
    }),
  ],
};
```

#### 图片的文件指纹设置

设置 file-loader 的 name，使用 hash。

占位符名称及含义

- ext 资源后缀名
- name 文件名称
- path 文件的相对路径
- folder 文件所在的文件夹
- contenthash 文件的内容 hash，默认是 md5 生成
- hash 文件内容的 hash，默认是 md5 生成
- emoji 一个随机的指代文件内容的 emoj

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name][hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
};
```

### 在实际工程中，配置文件上百行乃是常事，如何保证各个 loader 按照预想方式工作？

可以使用  `enforce`  强制执行  `loader`  的作用顺序，`pre`  代表在所有正常 loader 之前执行，`post`  是所有 loader 之后执行。(inline 官方不推荐使用)

### 如何优化 Webpack 的构建速度？

(这个问题就像能不能说一说**「从 URL 输入到页面显示发生了什么」**一样）

(我只想说：您希望我讲多长时间呢？)

(面试官：。。。)

- 使用`高版本`的 Webpack 和 Node.js
- `多进程/多实例构建`：HappyPack(不维护了)、thread-loader
- `压缩代码`
  - 多进程并行压缩
    - webpack-paralle-uglify-plugin
    - uglifyjs-webpack-plugin 开启 parallel 参数 (不支持 ES6)
    - terser-webpack-plugin 开启 parallel 参数
  - 通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。
- `图片压缩`
  - 使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)
  - 配置 image-webpack-loader
- `缩小打包作用域`：
  - exclude/include (确定 loader 规则范围)
  - resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  - resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
  - resolve.extensions 尽可能减少后缀尝试的可能性
  - noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
  - IgnorePlugin (完全排除模块)
  - 合理使用 alias
- `提取页面公共资源`：
  - 基础包分离：
    - 使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中
    - 使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4 内置) ，替代了 CommonsChunkPlugin 插件
- `DLL`：
  - 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
  - HashedModuleIdsPlugin 可以解决模块数字 id 问题
- `充分利用缓存提升二次构建速度`：
  - babel-loader 开启缓存
  - terser-webpack-plugin 开启缓存
  - 使用 cache-loader 或者 hard-source-webpack-plugin
- `Tree shaking`
  - 打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的 bundle 中去掉(只能对 ES6 Modlue 生效) 开发中尽可能使用 ES6 Module 的模块，提高 tree shaking 效率
  - 禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking
  - 使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码
    - purgecss-webpack-plugin 和 mini-css-extract-plugin 配合使用(建议)
- `Scope hoisting`
  - 构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
  - 必须是 ES6 的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法
- `动态Polyfill`
  - 建议采用 polyfill-service 只给用户返回需要的 polyfill，社区维护。 (部分国内奇葩浏览器 UA 可能无法识别，但可以降级返回所需全部 polyfill)

更多优化请参考[官网-构建性能](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwebpack.docschina.org%2Fguides%2Fbuild-performance%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### 你刚才也提到了代码分割，那代码分割的本质是什么？有什么意义呢？

代码分割的本质其实就是在`源代码直接上线`和`打包成唯一脚本main.bundle.js`这两种极端方案之间的一种更适合实际场景的中间状态。

**「用可接受的服务器性能压力增加来换取更好的用户体验。」**

源代码直接上线：虽然过程可控，但是 http 请求多，性能开销大。

打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。

### 是否写过 Loader？简单描述一下编写 loader 的思路？

Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。

[Loader 的 API](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwww.webpackjs.com%252Fapi%252Floaders%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  可以去官网查阅

- Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用
- Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据
- 尽可能的异步化 Loader，如果计算量很小，同步也可以
- Loader 是无状态的，我们不应该在 Loader 中保留状态
- 使用 loader-utils 和 schema-utils 为我们提供的实用工具
- 加载本地 Loader 方法
  - Npm link
  - ResolveLoader

### 是否写过 Plugin？简单描述一下编写 Plugin 的思路？

webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。

[Plugin 的 API](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwww.webpackjs.com%252Fapi%252Fplugins%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  可以去官网查阅

- compiler 暴露了和 Webpack 整个生命周期相关的钩子
- compilation 暴露了与模块和依赖有关的粒度更小的事件钩子
- 插件需要在其原型上绑定 apply 方法，才能访问 compiler 实例
- 传给每个插件的 compiler 和 compilation 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件
- 找出合适的事件点去完成想要的功能
  - emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)
  - watch-run 当依赖的文件发生变化时会触发
- 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住

### 聊一聊 Babel 原理吧

大多数 JavaScript Parser 遵循  `estree`  规范，Babel 最初基于  `acorn`  项目(轻量级现代 JavaScript 解析器) Babel 大概分为三大部分：

- 解析：将代码转换成 AST
  - 词法分析：将代码(字符串)分割为 token 流，即语法单元成的数组
  - 语法分析：分析 token 流(上面生成的数组)并生成 AST
- 转换：访问 AST 的节点进行变换操作生产新的 AST
  - [Taro](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252FNervJS%252Ftaro%252Fblob%252Fmaster%252Fpackages%252Ftaro-transformer-wx%252Fsrc%252Findex.ts%2523L15&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)就是利用 babel 完成的小程序语法转换
- 生成：以新的 AST 为基础生成代码

想了解如何一步一步实现一个编译器的同学可以移步 Babel 官网曾经推荐的开源项目  [the-super-tiny-compiler](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Fjamiebuilds%252Fthe-super-tiny-compiler&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

# Vite
