---
title: webpack 之 面试篇
subtitle: 
layout: post
date: 2022-11-02
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---

### Webpack 构建流程

Webpack 的运行流程是一个串行的过程：

1. **初始化参数**：从webpack.config.js和 Shell 语句中读取与合并参数，得出最终的参数
2. **编译构建流程**：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，**递归**地进行编译处理
3. **输出流程**：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统

在以上过程中，`Webpack`  会在特定的时间点广播出特定的事件，**插件在监听**到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。


[从源码窥探 Webpack4.x 原理](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6844904046294204429&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)


#### 初始化参数

**初始化配置项**：webpack将 `webpack.config.js` 中的各个配置项拷贝到 `options` 对象中，并加载用户配置的 `plugins`。

**初始化`Compiler`编译对象**：该对象掌控者webpack声明周期，不执行具体的任务，只是进行一些调度工作。`Compiler` 对象继承自 `Tapable`，初始化时定义了很多**钩子函数**


```js
class Compiler extends Tapable {
    constructor(context) {
        super();
        this.hooks = {
            beforeCompile: new AsyncSeriesHook(["params"]),
            compile: new SyncHook(["params"]),
            afterCompile: new AsyncSeriesHook(["compilation"]),
            make: new AsyncParallelHook(["compilation"]),
            entryOption: new SyncBailHook(["context", "entry"])
            // 定义了很多不同类型的钩子
        };
        // ...
    }
}

function webpack(options) {
  var compiler = new Compiler();
  ...// 检查options,若watch字段为true,则开启watch线程
  return compiler;
}
...
```

#### 编译构建
初始化完成后会调用`Compiler`的`run`来真正启动webpack编译构建流程，主要流程如下：

- `compile` 开始编译,主要是构建一个==`Compilation`对象，该对象是编译阶段的主要执行者==，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象。
- `make` 从入口点分析模块及其依赖的模块，webpack 会递归的构建一个 **依赖关系图**，这个依赖图包含着应用程序中所需的每个模块。
- `build-module` 完成模块编译，这里主要调用配置的`loaders`，将我们的模块转成标准的`JS`模块，输出**AST抽象语法树**


#### 输出流程
- `seal` 封装构建结果生成`chunks`，对`chunks`进行一系列的优化操作，并生成要输出的代码。
- `emit` 把各个chunk输出到结果文件



### 详谈 Loader
#### Loader (解析)

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。

==因为 Webpack 只认识 JavaScript和JSON，所以 Loader 就成了翻译官。loader 运行在打包文件之前。==


Loader 在 `module.rules` 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。



#### 编写 loader 的思路？
[Loader 的 API](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwww.webpackjs.com%252Fapi%252Floaders%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  

其本质为函数，函数中的 `this` 作为上下文会被 webpack填充，因此我们**不能**将 loader设为一个箭头函数。

函数接受一个参数`source`： webpack传递给 loader 的文件源内容

函数中有异步操作或同步操作，异步操作通过 `this.callback` 返回，返回值要求为 `string` 或者 `Buffer`

```js
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source) {
    const content = doSomeThing2JsString(source);
    
    // 如果 loader 配置了 options 对象，那么this.query将指向 options
    const options = this.query;
    
    // 可以用作解析其他模块路径的上下文
    console.log('this.context');
    
    /*
     * this.callback 参数：
     * error：Error | null，当 loader 出错时向外抛出一个 error
     * content：String | Buffer，经过 loader 编译后需要导出的内容
     * sourceMap：为方便调试生成的编译后内容的 source map
     * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
     */
    this.callback(null, content); // 异步
    return content; // 同步
}
```





#### 常见的 Loader？

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


#### 如何保证各个 loader 按照预想方式工作？

在实际工程中，配置文件上百行乃是常事，如何保证各个 loader 按照预想方式工作？

可以使用  `enforce`  强制执行  `loader`  的作用顺序，`pre`  代表在所有正常 loader 之前执行，`post`  是所有 loader 之后执行。(inline 官方不推荐使用)



### 详谈 Plugin 

#### Plugin

==webpack是基于发布订阅模式==，Plugin基于事件流框架  `Tapable`，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件（==全生命周期==），在合适的时机通过 Webpack 提供的 API 改变输出结果，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事。

Plugin 在 `plugins` 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造。

#### 编写 Plugin 的思路？
[Plugin 的 API](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fwww.webpackjs.com%252Fapi%252Fplugins%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  

webpack编译会创建两个核心对象：
- **compiler**：包含了 webpack 环境的所有的**配置信息**，包括 options，loader 和 plugin，和 webpack 整个生命周期相关的钩子。
- **compilation**：作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的**状态信息**。当检测到一个文件变化，一次新的 Compilation 将被创建。


plugin规范：
- 插件必须是一个函数或者是一个包含 `apply` 方法的对象，这样才能访问`compiler`实例
- 传给每个插件的 compiler 和 compilation 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件，因此不建议修改
- 异步的事件需要在插件处理完任务时**调用回调函数通知 Webpack 进入下一个流程**，不然会卡住

```js

class MyPlugin {
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply (compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', compilation => {
        // compilation: 当前打包构建流程的上下文
        console.log(compilation);
        
        // do something...
    })
  }
}
```






#### 常见的 Plugin？

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




### source map 是什么？生产环境怎么用？

`source map`  是将编译、打包、==压缩后的代码映射回源代码以供调试==的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。

map 文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：

- `hidden-source-map`：借助第三方错误监控平台 Sentry 使用
- `nosources-source-map`：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
- `sourcemap`：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)

注意：避免在生产中使用  `inline-`  和  `eval-`，因为它们会增加 bundle 体积大小，并降低整体性能。



### webpack proxy 跨域

`webpack proxy`，即webpack提供的代理服务。基本行为就是接收客户端发送的请求后转发给其他服务器。

webpack提供一个中间服务器`webpack-dev-server` （**只适用在开发阶段**）便于解决开发模式下跨域问题


`proxy`工作原理实质上是利用`http-proxy-middleware` 这个`http`代理中间件，实现请求转发给其他服务器


```js
// ./webpack.config.js
const path = require('path')

module.exports = {
    // ...
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'https://api.github.com'
            }
        }
        // ...
    }
}
```
### 文件监听 watch


通过**轮询**判断文件的最后编辑时间是否变化，如果变化自动重新构建出新的输出文件。

事实上，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等  `aggregateTimeout`  后再执行。



Webpack 开启监听模式，有两种方式：

- 启动 webpack 命令时，带上 `--watch` 参数
- 在配置 webpack.config.js 中设置 `watch:true`

缺点：每次需要手动刷新浏览器



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


#### watch 和 hot区别
`–watch`，你的CLI会在编译过程中挂起，等待文件中的任何代码更改，如果有更改，那么它将重新编译（==整个==），每次需要**手动**刷新浏览器

`hot`： 热更新，重新加载已==更改==的组件，而不是执行整页刷新。不刷新浏览器，页面就能自动更新。

### 热更新原理 HMR


HMR机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

HMR 的核心就是客户端从服务端拉去更新后的文件，准确的说是 `chunk diff` (chunk 需要更新的部分)，

实际上 WDS 与浏览器之间维护了一个  `Websocket`，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 `hash`，让客户端与上一次资源进行对比。

客户端对比出差异后会向 WDS 发起 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起  `jsonp`  请求获取该 chunk 的增量更新。

后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由  `HotModulePlugin`  来完成，提供了相关 API 以供开发者针对自身场景进行处理，像`react-hot-loader`  和  `vue-loader`  都是借助这些 API 实现 HMR。

细节请参考[Webpack HMR 原理解析](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fzhuanlan.zhihu.com%252Fp%252F30669007&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

### Tree-Shaking

Tree-Shaking （树摇）是一种**基于 ES Module** 规范的 Dead Code Elimination 技术，它会在运行过程中==静态分析==模块之间的导入导出，**删除未使用的JS模块**，以此实现打包产物的优化。

- 静态分析工具（如 Babel、ESLint 等）可以解析代码的抽象语法树（AST），从而识别出未使用的变量、函数和模块。

Tree Shaking 在 Rollup 中率先实现，Webpack 自 2.0 版本开始接入。


>你可以将应用程序想象成一棵树。绿色表示实际用到的源码和库，是树上活的树叶。灰色表示未引用代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动（shake）这棵树，使它们落下。

 
#### 原理
1. **解析代码**： `Make` 阶段，webpack首先会解析项目重点的代码，生成**AST**，通过AST收集模块中`import`和`export` 语句，并记录到模块**依赖关系图 ModuleGraph** 变量中
2. **标记未使用**：`Seal` 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用。
3. **移除未使用的代码**：生成产物时，若变量没有被其它模块使用则使用 Terser 删除对应的导出语句

#### CommonJS 不支持 Tree-shaking
- ESM 使用 `import` 和 `export` 语法，这些语法是**静态**的，即在代码运行之前就可以确定模块的依赖关系。这使得构建工具（如 Webpack、Rollup）能够通过**静态分析**来识别未使用的代码，并在构建过程中将其移除。
- CommonJS 使用 `require` 和 `module.exports`，这些语法是**动态**的，即模块的加载和解析是在运行时进行的。由于这种动态性，构建工具无法在编译时确定哪些代码是未使用的，因此 ==CommonJS 不支持 Tree-shaking==。

### 对 bundle 体积进行监控和分析方法

- `Import Cost` : vscode 插件，可以实时检测引入模块的大小
- `webpack-bundle-analyzer`  生成  `bundle`  的模块组成图，显示所占体积。
- `bundlesize`  工具包可以进行自动化资源体积监控。

### 文件指纹是什么？怎么用？

文件指纹是打包后输出的文件名的后缀。

- `Hash`：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
- `Chunkhash`：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
- `Contenthash`：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

#### JS 的文件指纹设置

设置 output.filename，用 `chunkhash`

```js
module.exports = {
  output: {
    filename: "[name][chunkhash:8].js",
    path: __dirname + "/dist",
  },
};
```

#### CSS 的文件指纹设置

利于` MiniCssExtractPlugin`插件 的 filename - `contenthash`

```js
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name][contenthash:8].css`,
    }),
  ],
};
```

#### 图片的文件指纹设置

设置 `file-loader` - name，使用 hash

```js
module.exports = {
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

占位符名称及含义

- ext 资源后缀名
- name 文件名称
- path 文件的相对路径
- folder 文件所在的文件夹
- contenthash 文件的内容 hash，默认是 md5 生成
- hash 文件内容的 hash，默认是 md5 生成
- emoji 一个随机的指代文件内容的 emoj

### 如何优化 Webpack 的构建速度？

(这个问题就像能不能说一说 *从 URL 输入到页面显示发生了什么* 一样）

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

### 代码分割的本质是什么？有什么意义呢？

代码分割的本质其实就是在`源代码直接上线`和`打包成唯一脚本main.bundle.js`这两种极端方案之间的一种更适合实际场景的中间状态。

**「用可接受的服务器性能压力增加来换取更好的用户体验。」**

源代码直接上线：虽然过程可控，但是 http 请求多，性能开销大。

打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。



### Babel 原理

大多数 JavaScript Parser 遵循  `estree`  规范，Babel 最初基于  `acorn`  项目(轻量级现代 JavaScript 解析器) Babel 大概分为三大部分：

- 解析：将代码转换成 AST
  - 词法分析：将代码(字符串)分割为 token 流，即语法单元成的数组
  - 语法分析：分析 token 流(上面生成的数组)并生成 AST
- 转换：访问 AST 的节点进行变换操作生产新的 AST
  - [Taro](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252FNervJS%252Ftaro%252Fblob%252Fmaster%252Fpackages%252Ftaro-transformer-wx%252Fsrc%252Findex.ts%2523L15&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)就是利用 babel 完成的小程序语法转换
- 生成：以新的 AST 为基础生成代码

想了解如何一步一步实现一个编译器的同学可以移步 Babel 官网曾经推荐的开源项目  [the-super-tiny-compiler](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Fjamiebuilds%252Fthe-super-tiny-compiler&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)








###  Federation

微前端