---
title: 微前端-Garfish & qiankun
subtitle: 
layout: post
date: 2022-11-25
author: heavenmei
categories:
  - Post
description: 
tags:
  - Front
image:
---
> garfish官方文档 移步👉🏻https://garfish.fn.bytedance.net/guide/
> 
> qiankun官方文档 移步👉🏻https://qiankun.umijs.org/zh/guide/getting-started
> 
> 为什么不是iframe？ 移步👉🏻 [Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv) （简而言之，隔离性太强，共享能力弱）

  

### 概况

微前端目前的落地方案可分为：自组织模式、基座模式、模块加载模式。

与基座模式相比，模块加载模式没有中心容器（去中心化模式），这就意味着任何一个微应用都可以当作模块入口，整个项目的微应用与微应用之间相互串联。具体的代表库就是 [qiankun](https://link.juejin.cn?target=https%3A%2F%2Fqiankun.umijs.org%2Fzh%2Fguide) vs [EMP](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FefoxTeam%2Femp)。

实现模块加载模式需要依赖于 webpack5 的 [Module Federation](https://link.juejin.cn?target=https%3A%2F%2Fwebpack.js.org%2Fconcepts%2Fmodule-federation%2F) 功能。

![](assets/2022-11-25-Garfish-qiankun-20250119025415.png)

  

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=MjU0ZDA2ZDI1NzE2YzgyYzM1Nzk3MzU4ZTk0NWI4MDhfZ3Jpb2JqQ1JaTGdpV3UzMXlRbGwxUGRlOWJIeFVXRHhfVG9rZW46Ym94Y25uUGNyMEV0Mlo4WkF0OVZjbnplaGlkXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=N2ZmOGFmMDkxMjg5ZWMxMmMyOWE4OTcwMjgwZjQzMDdfQlBXeUp0eHNFTXU2ZTJ0Qkt4b2xMcjBRZTRwVGhQSWxfVG9rZW46Ym94Y241OUUzQWp3clJETkdQU3hiNGNodWhmXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

[Garfish 微前端实现原理](https://tech.bytedance.net/articles/7090836932149641224)

[微前端技术原理](https://juejin.cn/post/7099339595233361934)

  

### 生命周期

`Garfish` 应用的生命周期可以归结为：加载、渲染、销毁 三个阶段

- 加载主要是通过 [Garfish.loadApp](https://www.garfishjs.org/api/loadApp)，通过 `loadApp` API 会自动创建应用的实例，
    
- 通过应用实例上的 `mount` 和 `show` 方法对应用进行渲染
    
- 通过 `unmount` 和 `hide` 方法对应用进行销毁
    

用户在实际使用的过程中通过 [Garfish.run](https://www.garfishjs.org/api/run)会发现当路由发生变化时符合加载条件的应用会自动加载渲染，实际上是 **`[Garfish Router Plugin](https://www.garfishjs.org/guide/router)`** **通过监听路由变化来触发** **`loadApp`** **和** **`mount`** **自动完成应用的加载、渲染、销毁。**

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGVjZmU3MmUyZTkwNTc3MmM3ZTk2MzM0Yjc2OTNmODdfRWFLeDAxRGpnOHR0eDkxTHZMcTdoQWpnZmM1c1ZBSnRfVG9rZW46Ym94Y25GS0xtRTZrMXNMMWhnVVUzTmROeUlkXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

- `loadApp`：
    
    - beforeLoad()
        
    - 加载资源，html用fetch，js文件用script标签请求
        
    - New App()
        
    - Plugin & cache
        
    - afterLoad()
        
- `mount`
    
    - beforeMount 钩子
        
    - 将 app set 到 Garfish.activeApps 中
        
    - 创建 app container并添加到文档流上，编译子应用的代码 compileAndRenderContainer()
        
    - 拿到子应用的 provider,调用 provider.render
        
    - 将 app.display 和 app.mounted 设置为 true
        
    - afterMount 钩子
        
    - 如果渲染失败，app.mount 会返回 false，否则渲染成功会返回 true
        
- `show`
    
    - beforeMount 钩子
        
    - 将 app set 到 Garfish.activeApps 中
        
    - app container添加到文档流上
        
    - 调用 provider.render
        
    - 将 app.display 设置为 true
        
    - afterMount 钩子
        

  

  

### 加载器 - Loader

#### JS Entry

在主应用的同一页面载入子应用，可以通过将**子应用的所有资源**（包括布局、功能逻辑与素材）打包进一个js文件里，并将这个文件作为资源的入口在主应用引入，参考 single-spa 的[这个实现](https://github.com/joeldenning/simple-single-spa-webpack-example/blob/master/src/root-application/root-application.js)。

> Js Entry 的缺点是：
> 
> - 子应用更新打包后的 js bundle 名称会变化，主应用需要保证每次获取都是最新的 js bundle。
>     
> - 子应用所有资源打包到一个文件中，会失去 css 提取、静态资源并行加载、首屏加载(体积巨大)等优化。
>     
> - 需要在子应用打包过程中，修改相应的配置以补全子应用 js 资源的路径。
>     
> - 这种方式增加了主子应用的耦合性，且加载子应用的过程中无法并行加载，存在单个资源过大的问题，较难提升整体的效率；但该方案对应用的部署流程较为便捷，且要求较低。
>     

#### HTML Entry

主应用在运行时通过提供单独打包好的子应用 URL 地址，以 `fetch` 方式获取子应用的 HTML 文件，经过处理后在指定的容器中**插入 HTML 内容**，这样的方式称为 HTML Entry。相较于 JS Entry 方式，html Entry有着更低的耦合性和更大的灵活度，支持主应用在 fetch 后进行二次处理，通过 CSS 增加前缀、JS sandbox 等方式实现样式隔离和 JS 沙箱隔离，且能对静态资源采用并行加载，子应用的更新可以单独发布；但这种方式必须需要子应用支持跨域。 qiankun 框架采用的就是 HTML Entry 的形式进行子应用的载入，参考官网的 [demo](https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles) 注册环节。

  

不论是`qiankun`还是`garfish`都需要**子应用在入口js**中提供生命周期钩子，以供主应用在合适的时机调用。

`qiankun`需要子应用至少导出 `bootstrap`、`mount`、`unmount` 三个生命周期钩子；

`garifsh`需要子应用导出`provider`生命周期钩子

  

1. 根据提供的url作为入口文件加载资源**。通过fetch拿到资源内容**
    
    1. 如果是html资源入口会进行标签的序列化和相关处理（具体往下看）。
        
    2. 如果是js文件则会直接实例化一个js资源类，目的是保存加载到资源的类型，大小，代码字符串等基本信息。并会尝试缓存加载的资源。
        
2. 拿到html文件后如何解析并处理html文件的呢？
    
    1. 对加载的html资源进行**AST解析,结构化dom**，以便提取不同类型的标签内容。
        
    2. 结构化后进行深度优先遍历把**`link`****,****`style`****,****`script`****标签提取出来**
        
        1. 由于当前各个框架的实现基本都是有js生成dom并挂载到指定的元素上，因此这里只要把这三种加载资源的标签提取出来基本就完成了页面的加载。
            
        2. 当然还需要配合微前端的加载方式改造下子系统入口，让挂载函数指向主应用提供的dom。至此我们完成了基本资源的提取。
            
    
      
    

### 环境隔离--CSS

除了 single-spa 默认不提供样式隔离功能外，其余主流的微前端框架都实现了基于子应用作用域下的 CSS 样式隔离（原理类似 Vue 的 style scopted 实现方式）。

- 动态样式表
    
- 工程化手段
    
    - BEM
        
    - CSS Modules
        
    - CSS in JS
        
- Shadow Dom
    

  

- **CSS Module & CSS Namespace**
    
- **CSS Scope**：一句话理解，就是给子应用的所有样式规则添加一个 scope（类似 Vue 中的 )。
    

由于子应用有名称作为唯一标示，且挂载的容器在子应用切换时可以保证唯一性，可以通过统一加 `scope` 的形式处理所有的子应用样式。分为编译时和运行时两种处理方案：编译时提供 `webpack` 插件，对 `css` 编译时自动给子应用的样式添加 `scope`；运行时则是加载子应用时解析，由 `loader` 负责处理。

```JavaScript
// 假如子应用名字叫 child
// 转换前
.app-main {
    font-size: 14px;
}
// 转换后
div[data-qiankun="child"] .app-main {
    font-size: 14px;
}
```

- **Shadow DOM**：给子应用容器节点挂载一个 shadow DOM，以实现父子应用、多个子应用之间的样式隔离。
    

  

### 环境隔离--JS

[三种沙箱隔离方式](https://blog.csdn.net/qq_44746132/article/details/117385571?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166210607016782425122601%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=166210607016782425122601&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-6-117385571-null-null.142^v44^new_blog_pos_by_title&utm_term=%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%B2%99%E7%AE%B1&spm=1018.2226.3001.4187)

Js 沙箱做的事情可以用两句话概括：

1. 为每一个子应用创建一个专属的 “window 对象” (不是真的 window 对象)；
    
2. 劫持并代理window，避免数据污染，沙箱内的数据不会暴露到全局。
    

#### snapshotSandbox - 快照沙箱

> 在某个阶段给当前的运行环境打一个快照，再在需要的时候把快照恢复，从而实现隔离。

1. 在激活前的时候遍历 window 上的变量，存为 `snapshotOriginal`
    
2. 在失活的时候再次遍历 window 上的变量，分别和 `snapshotOriginal` 对比，将不同的存到 `snapshotMutated` 里，将 window 恢复回到 `snapshotOriginal`
    
3. 当应用再次切换的时候，就可以把 `snapshotMutated` 的变量恢复回 `window` 上，实现一次沙箱的切换。
    

#### proxySandbox - 代理沙箱

> 当有多个实例的时候，比如有`A`、`B`两个应用，`A` 应用就活在 `A` 应用的沙箱里面，`B` 应用就活在 `B` 应用的沙箱里面，`A` 和 `B` 无法互相干扰，这样的沙箱就是代理沙箱，这个沙箱的实现思路其实也是通过 `ES6` 的 [proxy](https://developer.mozilla.org/zh-cn/docs/web/javascript/reference/global_objects/proxy)，通过代理特性实现的。

```JavaScript
const varBox = {};
const fakeWindow = new Proxy(window, {
  get(target, key) {
    return varBox[key] || window[key];
  },
  set(target, key, value) {
    varBox[key] = value;
    return true;
  },
});
const fn = new Function('window', code);
fn(fakeWindow);
```

  

#### **LegacySandbox（依赖 Proxy)：**

缺点：虽然子应用之间的状态是隔离的，但是父子应用都会修改同一个 window 对象，互相污染。

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=YzYyMDc3ZGIyZjQ4NTE4OTc5ZTViZjYzZDY0N2RiOTJfNG1Rb3hidFZ6OUYyb3YxdDloQmVSQXZVeTNLYmR1dW5fVG9rZW46Ym94Y25uNzZxeHlSZXZIUmNoVVgxc3pMMVZnXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

  

副作用隔离

除了 JS 沙箱，还需要劫持一些全局方法。

- 计时器：`setInterval`、`setTimeout`
    
- 全局事件监听：`addEventListener`
    
- 全局存储：`localStorage`、`sessionStorage`
    

解决方法主要分为两类，能够通过劫持收集的：

1. 如 `setInterval`、`setTimeout`、`addEventListener`，通过重写这些方法，在调用的时候记录起来，放进一个队列里，在沙箱销毁的时候统一进行清除。
    
2. 持久化数据，无法通过劫持进行收集的，使用命名空间来区分 如 `localStorage`，`sessionStorage`，重写对象和方法
    

### 环境隔离--DOM

Garfish，首先依然是像构造沙箱window一样构造一份document的副本来作为沙箱内的document元素，保证document的set不会影响全局。这一部分实现就不在多说了。下一步就是代理这个副本document。代理的目标主要是两部分：

1. 对于获取dom元素的方法让他的document对象指向子应用挂载的那个dom。
    
2. 对于body和head这种顶级元素代理到子应用挂载dom下沙箱元素（在初始化子应用会在挂载dom下由garfish新建这些临时节点）。
    

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=YmRjMTJjOWVlNmNmMTc5NjQxMWFlMGU1ZmM0ZjQ5M2FfcUg5M3hqODRra2xjeDVtY2h5QVZuSE9FaWRkSnNQdXZfVG9rZW46Ym94Y25PbXBIVjB3MjQ1SmFMS3Q5ZlVXbTBiXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

  

  

  

  

### 路由托管 - Router

当浏览器的路径变化后，router 监听 `hashchange` 和 `popstate` 事件，在事件回调函数中，根据注册的子应用激活规则，卸载/激活子应用。

最先接收到这个变化的是基座的router，通过查询注册信息可以获取到转发到那个微应用，经过一些逻辑处理后，采用`修改hash`方法或者`pushState`方法来路由信息推送给微应用的路由，微应用可以是手动监听hashchange或者popstate事件接收，或者采用React-router，vue-router接管路由，后面的逻辑就由微应用自己控制。

最好的路由模式就是主应用、子应用都统一模式，可以减少不同模式之间的兼容工作

|   |   |   |   |   |
|---|---|---|---|---|
|主|子|推荐|接入影响|解决方案|
|hash|hash|✅|无||
|hash|history|不推荐|有|history.pushState|
|history|hash|一般|无||
|history|history|✅|无||

#### Garfish实现

Garfish 路由系统仅支持主应用的 `history` 路由模式，原因是 hash 路由无法作为子应用的基础路由

> 目前 `Garfish` 主要提供了以下三条策略

- 提供 `Router Map`，减少典型中台应用下的开发者理解成本
    
    - 通常可以将应用的结构分为两块，一块是菜单另一块则是内容区域，通过提供路由表来自动化完成子应用的调度，将公共部分作为拆离后的子应用渲染区域。
        
- 为不同子应用提供不同的 `basename` 用于隔离应用间的路由抢占问题
    
- 路由发生变化时能准确激活并触发应用视图更新
    

  

  

### 子应用通信

应用之间的通信能通过**发布订阅模**实现，本质原理都类似 [EventEmitter](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F77876876)。

`Garfish.channel` 为 Garfish 的实例属性，该属性是 [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2) 的实例。

  

### 部署

微前端应用的部署包括以下三部分：

- 主应用部署
    
- 服务发现的过程
    
- 需要承载子应用部署
    

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=OTIxYWRmYThlNWM3MDgxZDRkY2RjYTQ2OWY0NDExNGNfZmR5Y3BiZjFUNlpwdjZ2NEN5Z3RwWGM4VFdHT0hUbVVfVG9rZW46Ym94Y24ybGVPQkZIZFFEZXVUVEx3MExRaHhoXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)

![](https://a1j6nbrw76.feishu.cn/space/api/box/stream/download/asynccode/?code=YjA5NDY5YTNiNzEyYjExMDUxNTc4ZWRhNmRmNmIzYjRfWDIzUnNUa3AyOXd0aGhVU3pING45NzdQMkc5S2g1eUVfVG9rZW46Ym94Y25IS1R5bHdvYTF3TWFXZjc5OFkwekJmXzE3MzcyNjk1MTM6MTczNzI3MzExM19WNA)