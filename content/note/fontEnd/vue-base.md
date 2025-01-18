---
title: Vue基础
subtitle:
layout: post
date: 2022-10-28
author: heavenmei
categories:
  - Note
description:
tags:
  - Front
image:
---

## 前端历史

### 前端核心分析

#### 1.1、概述

Soc 原则：关注点分离原则
Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。
HTML + CSS + JS : 视图 ： 给用户看，刷新后台给的数据
网络通信 ： axios
页面跳转 ： vue-router
状态管理：vuex
Vue-UI : ICE , Element UI

#### 1.2、前端三要素

HTML（结构）：超文本标记语言（Hyper Text Markup Language），决定网页的结构和内容
CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式。
JavaScript（行为）：是一种弱类型脚本语言，其源码不需经过编译，而是由浏览器解释运行，用于控制网页的行为

#### 1.4、表现层（CSS）

> 什么是 CSS 预处理器

用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用。

**SASS**：基于 Ruby ，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。
**LESS**：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但在实际开发中足够了，所以如果我们后台人员如果需要的话，建议使用 LESS。

#### 1.5、行为层（JavaScript）

> Native 原生 JS 开发

原生 JS 开发，也就是让我们按照【ECMAScript】标准的开发方式，简称 ES，特点是所有浏览器都支持。截至到当前，ES 标准以发布如下版本：
ES3、ES4（内部，未正式发布）、ES5（全浏览器支持）、ES6（常用，当前主流版本：webpack 打包成为 ES5 支持）、ES7、ES8、ES9（草案阶段）区别就是逐步增加新特性。

> TypeScript 微软的标准

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集， 而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。由安德斯·海尔斯伯格(C#、Delphi、TypeScript 之父； .NET 创立者) 主导。该语言的特点就是除了具备 ES 的特性之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持 TypeScript 语法， 需要编译后(编译成 JS) 才能被浏览器正确执行。

> JavaScript 框架

**JQuery**：大家熟知的 JavaScript 库，优点就是<u>简化了 DOM 操作</u>，缺点就是 DOM 操作太频繁，影响前端性能；在前端眼里使用它仅仅是为了兼容 IE6，7，8；
**Angular**：Google 收购的前端框架，由一群 Java 程序员开发，其特点是将后台的<u>MVC 模式</u>搬到了前端并增加了<u>模块化开发</u>的理念，与微软合作，采用了 TypeScript 语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如 1 代–>2 代，除了名字，基本就是两个东西；截止发表博客时已推出了 Angular6）
**React**：Facebook 出品，一款高性能的 JS 前端框架；特点是提出了新概念 <u>【虚拟 DOM】</u>用于减少真实 DOM 操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门【JSX】语言；
**Vue**：一款渐进式 JavaScript 框架，所谓<u>渐进式</u>就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是<u>综合了 Angular（模块化）和 React(虚拟 DOM) 的优点</u>；
**Axios**：<u>前端通信框架</u>；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；<u>当然也可以直接选择使用 jQuery 提供的 AJAX 通信功能</u>；

> UI 框架

Ant-Design：阿里巴巴出品，基于 React 的 UI 框架
ElementUI、iview、ice：饿了么出品，基于 Vue 的 UI 框架
BootStrap：Teitter 推出的一个用于前端开发的开源工具包
AmazeUI：又叫“妹子 UI”，一款 HTML5 跨屏前端框架

> JavaScript 构建工具

Babel：JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript
WebPack：模块打包器，主要作用就是打包、压缩、合并及按序加载

### 前端发展史

#### 2.1、三端同一

**混合开发（Hybrid App）**

主要目的是实现一套代码三端统一（PC、Android：.apk、iOS：.ipa）并能够调用到设备底层硬件（如：传感器、GPS、摄像头等），打包方式主要有以下两种：

- 云打包：HBuild -> HBuildX，DCloud 出品；API Cloud
- 本地打包： Cordova（前身是 PhoneGap）

**微信小程序**

详见微信官网，这里就是介绍一个方便微信小程序 UI 开发的框架：WeUI

#### 2.2、后端技术

前端人员为了方便开发也需要掌握一定的后端技术但我们 Java 后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，就出现了 Node JS 这样的技术。`Node JS`的作者已经声称放弃 Node JS(说是架构做的不好再加上笨重的 node modules，可能让作者不爽了吧)开始开发全新架构的`Deno`
既然是后台技术，那肯定也需要框架和项目管理工具， Node JS 框架及项目管理工具如下：

- Express：Node JS 框架

- Koa：Express 简化版

- NPM：项目综合管理工具，类似于 Maven

- YARN：NPM 的替代方案，类似于 Maven 和 Gradle 的关系

#### 2.3、主流前端框架

**Vue.js**

**iView**

iview 是一个强大的基于 Vue 的 UI 库， 有很多实用的基础组件比 element ui 的组件更丰富， 主要服务于 PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式基于 npm+webpack+babel 开发， 支持 ES 2015 高质量、功能丰富友好的 API， 自由 iview-admin
备注：属于前端主流框架，选型时可考虑使用，主要特点是<u>移动端支持较多</u>

**Element UI**

Element 是饿了么前端开源维护的 Vue UI 组件库， 组件齐全， 基本涵盖后台所需的所有组件，文档讲解详细， 例子也很丰富。主要用于开发 PC 端的页面， 是一个质量比较高的 Vue UI 组件库。
[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)
备注：属于前端主流框架，选型时可考虑使用，主要特点是<u>桌面端支持较多</u>

**ICE**

飞冰是阿里巴巴团队基于 React/Angular/Vue 的中后台应用解决方案， 在阿里巴巴内部， 已经有 270 多个来自几乎所有 BU 的项目在使用。飞冰包含了一条从设计端到开发端的完整链路，帮助用户快速搭建属于自己的中后台应用。
备注：主要组件还是以 React 为主， 截止 2019 年 02 月 17 日更新博客前对 Vue 的支持还不太完善，目前尚处于观望阶段

**VantUI**

Vant UI 是有赞前端团队基于有赞统一的规范实现的 Vue 组件库， 提供了-整套 UI 基础组件和业务组件。通过 Vant， 可以快速搭建出风格统一的页面，提升开发效率。

**AtUI**

at-ui 是一款基于 Vue 2.x 的前端 UI 组件库， 主要用于快速开发 PC 网站产品。它提供了一套 n pm+web pack+babel 前端开发工作流程， CSS 样式独立， 即使采用不同的框架实现都能保持统一的 UI 风格。

**Cube Ul**

cube-ui 是滴滴团队开发的基于 Vue js 实现的精致移动端组件库。支持按需引入和后编译， 轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

> 混合开发

**Flutter**

Flutter 是谷歌的移动端 UI 框架， 可在极短的时间内构建 Android 和 iOS 上高质量的原生级应用。Flutter 可与现有代码一起工作， 它被世界各地的开发者和组织使用， 并且 Flutter 是免费和开源的。
备注：Google 出品， 主要特点是快速构建原生 APP 应用程序， 如做混合应用该框架为必选框架

**lonic**

lonic 既是一个 CSS 框架也是一个 Javascript UI 库， lonic 是目前最有潜力的一款 HTML 5 手机应用开发框架。通过 SASS 构建应用程序， 它提供了很多 UI 组件来帮助开发者开发强大的应用。它使用 JavaScript MV VM 框架和 Angular JS/Vue 来增强应用。提供数据的双向绑定， 使用它成为 Web 和移动开发者的共同选择。

> 微信小程序

**mpvue**

mpvue 是美团开发的一个使用 Vue.js 开发小程序的前端框架， 目前支持微信小程序、百度智能小程序，头条小程序和支付宝小程序。框架基于 Vue.js， 修改了的运行时框架 runtime 和代码编译器 compiler 实现， 使其可运行在小程序环境中， 从而为小程序开发引入了 Vue.js 开发体验。
备注：完备的 Vue 开发体验， 井且支持多平台的小程序开发， 推荐使用

**WeUI**

WeUI 是一套同微信原生视觉体验一致的基础样式库， 由微信官方设计团队为微信内网页和微信小程序量身设计， 令用户的使用感知更加统一。包含 button、cell、dialog、toast、article、icon 等各式元素。

### 了解前后分离的演变史

#### 3.1、后端为主的 MVC 时代

为了降低开发的复杂度， 以后端为出发点， 比如：Struts、Spring MVC 等框架的使用， 就是后端的 MVC 时代；
以 SpringMVC 流程为例：

![在这里插入图片描述](https://gitee.com/heavenmei/java-study/raw/master/img/20210908110330.png)

- 发起请求到前端控制器(`Dispatcher Servle`)

- 前端控制器请求`HandlerMapping`查找`Handler`，可以根据`xml`配置、注解进行查找

- 处理器映射器`HandlerMapping`向前端控制器返回`Handler`

- 前端控制器调用处理器适配器去执行`Handler`

- 处理器适配器去执行`Handler`

- `Handler`执行完成给适配器返回`ModelAndView`

- 处理器适配器向前端控制器返回`ModelAndView`，`ModelAndView`是`SpringMvc`框架的一个底层对象，包括`Model`和`View`

- 前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图(`JSP`)

- 视图解析器向前端控制器返回`View`

- 前端控制器进行视图渲染，视图渲染将模型数据(在`ModelAndView`对象中)填充到`request`域

- 前端控制器向用户响应结果

**优点**

​ MVC 是一个非常好的协作模式， 能够有效降低代码的耦合度从架构上能够让开发者明白代码应该写在哪里。为了让 View 更纯粹， 还可以使用 Thyme leaf、Frree marker 等模板引擎， 使模板里无法写入 Java 代码， 让前后端分工更加清晰。

**缺点**

- 前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：

  - 第一种是前端写 DEMO， 写好后， 让后端去<u>套模板</u>。好处是 DEMO 可以本地开发， 很高效。不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；
  - 另一种协作模式是前端负责浏览器端的所有开发和服务器端的 View 层模板开发。好处是 UI 相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。

- 前后端职责纠缠不清：模板引擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码，还有一个很大的灰色地带是`Controller`， 页面路由等功能本应该是前端最关注的， 但却是由后端来实现。`Controller`本身与`Model`往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在`Controller`层。这些问题不能全归结于程序员的素养， 否则`JSP`就够了。

- 对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作，但由于后端框架限制，我们很难使用[Comet】、【Big Pipe】等技术方案来优化性能。

注：在这期间(2005 年以前) ， 包括早期的 JSP、PHP 可以称之为 Web 1.0 时代。

#### 3.2、基于 AJAX 带来的 SPA 时代

时间回到 2005 年`AJAX`(Asynchronous JavaScript And XML， 异步`JavaScript`和`XML`，老技术新用法)被正式提出并开始使用`CDN`作为静态资源存储， 于是出现了 JavaScript 王者归来的`SPA`(Single Page Application) 单页面应用时代。

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908144807.png)

**优点**
这种模式下， **前后端的分工非常清晰， 前后端的关键协作点是 AJAX 接口。**看起来是如此美妙， 但回过头来看看的话， 这与 JSP 时代区别不大。复杂度从服务端的 JSP 里移到了浏览器的 JavaScript，浏览器端变得很复杂。类似 Spring MVC， 这个时代开始出现浏览器端的分层架构：

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908144939.png)

**缺点**

- 前后端接口的约定：如果后端的接口一塌糊涂，如果后端的业务模型不够稳定，那么前端开发会很痛苦；不少团队也有类似尝试，通过接口规则、接口平台等方式来做。有了和后端一起沉淀的接口规则，还可以用来模拟数据，使得前后端可以在约定接口后实现高效并行开发。
- 前端开发的复杂度控制：SPA 应用大多以功能交互型为主，JavaScript 代码过十万行很正常。大量 JS 代码的组织，与 View 层的绑定等，都不是容易的事情。

#### 3.3、前端为主的 MV\*时代

此处的 MV\*模式如下：

`MVC`(同步通信为主) ：Model、View、Controller
`MVP`(异步通信为主) ：Model、View、Presenter
`MVVM`(异步通信为主)：Model、View、View Model 为了降低前端开发复杂度，涌现了大量的前端框架，比如：`Angular` `JS`、`React`、`Vue.js`、`Ember J`S 等， 这些框架总的原则是先按类型分层， 比如 Templates、Controllers、Models， 然后再在层内做切分，如下图：

![在这里插入图片描述](https://gitee.com/heavenmei/java-study/raw/master/img/20210908145207.png)

**优点**

- 前后端职责很清晰：前端工作在浏览器端，后端工作在服务端。清晰的分工，可以让开发并行，测试数据的模拟不难， 前端可以本地开发。后端则可以专注于业务逻辑的处理， 输出`RESTful`等接口。
- 前端开发的复杂度可控：前端代码很重，但合理的分层，让前端代码能各司其职。这一块蛮有意思的，简单如模板特性的选择，就有很多很多讲究。并非越强大越好，限制什么，留下哪些自由，代码应该如何组织，所有这一切设计，得花一本书的厚度去说明。
- 部署相对独立：可以快速改进产品体验

**缺点**

- 代码不能复用。比如后端依旧需要对数据做各种校验，校验逻辑无法复用浏览器端的代码。如果可以复用，那么后端的数据校验可以相对简单化。
- 全异步， 对 SEO 不利。往往还需要服务端做同步渲染的降级方案。
- 性能并非最佳，特别是移动互联网环境下。
- SPA 不能满足所有需求， 依旧存在大量多页面应用。URL Design 需要后端配合， 前端无法完全掌控。

#### 3.4、Node JS 带来的全栈时代

前端为主的 MV\*模式解决了很多很多问题， 但如上所述， 依旧存在不少不足之处。随着 Node JS 的兴起， JavaScript 开始有能力运行在服务端。这意味着可以有一种新的研发模式：

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908145454.png)

在这种研发模式下，前后端的职责很清晰。对前端来说，两个 UI 层各司其职：

- Front-end Ul layer 处理浏览器层的展现逻辑。通过 CSS 渲染样式， 通过 JavaScript 添加交互功能， HTML 的生成也可以放在这层， 具体看应用场景。
- Back-end Ul layer 处理路由、模板、数据获取、Cookie 等。通过路由， 前端终于可以自主把控 URL Design， 这样无论是单页面应用还是多页面应用， 前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。

通过 Node， WebServer 层也是 JavaScript 代码， 这意味着部分代码可前后复用， 需要 SEO 的场景可以在服务端同步渲染，由于异步请求太多导致的性能问题也可以通过服务端来缓解。前一种模式的不足，通过这种模式几乎都能完美解决掉。
与 JSP 模式相比， 全栈模式看起来是一种回归， 也的确是一种向原始开发模式的回归， 不过是一种螺旋上升式的回归。
基于 Node JS 的全栈模式， 依旧面临很多挑战：

- 需要前端对服务端编程有更进一步的认识。比如 TCP/IP 等网络知识的掌握。
- Node JS 层与 Java 层的高效通信。Node JS 模式下， 都在服务器端， RESTful HTTP 通信未必高效， 通过 SOAP 等方式通信更高效。一切需要在验证中前行。
- 对部著、运维层面的熟练了解，需要更多知识点和实操经验。
  大量历史遗留问题如何过渡。这可能是最大最大的阻力。

#### 3.5、总结

综上所述，模式也好，技术也罢，没有好坏优劣之分，只有适合不适合；前后分离的开发思想主要是基于`Soc`(关注度分离原则)，上面种种模式，都是让前后端的职责更清晰，分工更合理高效。

## Vue 简介

### 4.1、什么是 MVVM

MVVM（**Model-View-ViewModel**）是一种软件设计模式，MVVM 的核心是`ViewModel`层，<u>负责转换 Model 中的数据对象来让数据变得更容易管理和使用</u>。主要目的是分离视图（View）和模型（Model），有几大好处：

- **低耦合**：视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
- **可复用**：你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 View 重用这段视图逻辑。
- **独立开发**：开发人员可以专注于业务逻辑和数据的开发（ViewMode），设计人员可以专注于页面设计。
- **可测试**：界面素来是比较难以测试的，而现在测试可以针对 ViewModel 来写。

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908150146.png)

**View**：视图层， 也就是用户界面。

**Model**：指数据模型， 泛指后端进行的各种业务逻辑处理和数据操控， 主要围绕数据库系统展开。这里的难点主要在于需要和前端约定统一的接口规则

**ViewModel**：是由前端开发人员组织生成和维护的视图数据层。在这一层， 前端开发者对从后端获取的 Model 数据进行转换处理， <u>做二次封装</u>， 以生成符合 View 层使用预期的视图数据模型。
需要注意的是 View Model 所封装出来的数据模型包括<u>视图的状态和行为</u>两部分， 而 Model 层的数据模型是只包含状态的。

- 比如页面的这一块展示什么，那一块展示什么这些都属于视图状态(展示)
- 页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为(交互)

视图状态和行为都封装在了 View Model 里。这样的封装使得 View Model 可以完整地去描述 View 层。由于实现了双向绑定， <u>View Model 的内容会实时展现在 View 层</u>， 这是激动人心的， 因为前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图。

MVVM 框架已经把最脏最累的一块做好了， 我们<u>开发者只需要处理和维护 View Mode</u>l， 更新数据视图就会自动得到相应更新，真正实现事件驱动编程。

<u> View 层展现的不是 Model 层的数据， 而是 ViewModel 的数据</u>， 由 ViewModel 负责与 Model 层交互， 这就完全解耦了 View 层和 Model 层， 这个解耦是至关重要的， 它是前后端分离方案实施的重要一环。

### 4.2、Vue

Vue(读音/vju/， 类似于 view) 是一套用于构建用户界面的**渐进式框架**， 发布于 2014 年 2 月。与其它大型框架不同的是， Vue 被设计为可以自底向上逐层应用。<u>Vue 的核心库只关注视图层</u>， 不仅易于上手， 还便于与第三方库(如：vue-router，vue-resource，vue x) 或既有项目整合。

**（1）MVVM 模式的实现者**

Model：模型层， 在这里表示 JavaScript 对象
View：视图层， 在这里表示 DOM(HTML 操作的元素)
ViewModel：连接视图和数据的中间件， <u>Vue.js 就是 MVVM 中的 View Model 层的实现者</u>

在 MVVM 架构中， 是不允许数据和视图直接通信的， 只能通过 ViewModel 来通信， 而 View Model 就是定义了一个 Observer 观察者

- ViewModel 能够观察到数据的变化， 并对视图对应的内容进行更新
- ViewModel 能够监听到视图的变化， 并能够通知数据发生改变

至此， 我们就明白了， Vue.js 就是一个 MV VM 的实现者， 他的核心就是实现了 DOM 监听与数据绑定

**（2）为什么要使用 Vue.js**

- 轻量级， 体积小是一个重要指标。Vue.js 压缩后有只有 20 多 kb(Angular 压缩后 56kb+，React 压缩后 44kb+)
- 移动优先。更适合移动端， 比如移动端的 Touch 事件
- 易上手，学习曲线平稳，文档齐全
- 吸取了 Angular(模块化) 和 React(虚拟 DO Ｍ) 的长处， 并拥有自己独特的功能，如：计算属性
- 开源，社区活跃度高

### 4.3、Hello,Vue

**安装**
将 Vue.js 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。

2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。

3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。

4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)

**代码实现**

```html
<!--view层 ${} 模板-->
<div id="app">{{message}}</div>
<!--导入vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script>
  let vm = new Vue({
    el: "#app",
    //Model层 : 数据
    data: {
      message: "hello vue",
    },
  });
</script>
```

测试：
  1、在浏览器上运行第一个 Vue 应用程序， 进入开发者工具 F12
  2、在控制台输入 vm.message=‘huang23’， 然后回车， 你会发现浏览器中显示的内容会直接变成 huang12
   此时就可以在控制台直接输入 vm.message 来修改值， 中间是可以省略 data 的， 在这个操作中， 我并没有主动操作 DOM， 就让页面的内容发生了变化， 这就是借助了 Vue 的数据绑定功能实现的； <u>MVVM 模式中要求 View Model 层就是使用观察者模式来实现数据的监听与绑定， 以做到数据与视图的快速响应。</u>

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908153025.png)

## 计算属性

它就是一个能够将计算结果缓存起来的属性(将行为转化成了静态的属性)，仅此而已；可以想象为**缓存**!
<u>所有的计算属性都以函数的形式写在 Vue 实例内的`computed`选项内，最终返回计算后的结果。</u>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <!--view层，模板-->
    <div id="app">
      <p>currentTime1:{{currentTime1()}}</p>
      <p>currentTime2:{{currentTime2}}</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script type="text/javascript">
      var vm = new Vue({
        el: "#app",
        data: {
          message: "pan",
        },
        methods: {
          //监听事件
          currentTime1: function () {
            return Date.now();
          },
        },
        computed: {
          currentTime2: function () {
            //计算属性：methods，computed方法名不能重名，重名之后，只会调用methods的方法
            this.message;
            return Date.now();
          },
        },
      });
    </script>
  </body>
</html>
```

**说明：**

- methods：定义方法， 调用方法使用 currentTime1()， 需要带括号
- computed：定义计算属性， 调用属性使用 currentTime2， 不需要带括号：this.message 是为了能够让 currentTime2 观察到数据变化而变化
- 如何在方法中的值发生了变化，则缓存就会刷新!可以在控制台使用 vm.message=”qin jiang"， 测试。
- <u>计算属性是基于它的依赖缓存的一个计算属性所以来的数据发生变化时，它才会重新取值，如果不改变计算属性也就不更新。</u>当遍历大数组和做大量计算时，应当使用计算属性。

每个计算属性都包含一个`getter`和`setter`，默认调用.

```vue
<div id="app">
    姓名：{{ fullName }}
</div>

<script>
var app = new Vue({
  el: "#app",
  data: {
    firstName: "Jack",
    lastName: "Green",
  },
  computed: {
    fullName: {
      //getter 读取
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      //setter 写入时触发
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
});
</script>
```

## 语法指令

### v-bind：

除了文本插值`{{}}`，我们还可以像这样来绑定元素 attribute：

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
<script>
  var app2 = new Vue({
    el: "#app-2",
    data: {
      message: "页面加载于 " + new Date().toLocaleString(),
    },
  });
</script>
```

<u>动态更新 HTML 元素上的属性</u>——将这个元素节点的 title 属性和 Vue 实例的 message 值保持一致
如果你再次打开浏览器的 JavaScript 控制台，输入 `app2.message = '新消息'`，就会再一次看到这个绑定了 title 属性的 HTML 已经进行了更新。

### v-on @

<u>绑定监听事件监听器</u>
表达式可以是一个方法名，方法写在`methods`属性内且是函数形式

```html
<div id="app-6">
  <button v-on:click="sayHi">点我</button>
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
<script>
  var app6 = new Vue({
    el: "#app-6",
    data: {
      message: "Hello World",
    },
    methods: {
      sayHi: function () {
        //'this'在方法里面指向当前Vue实例
        alert(this.message);
      },
      reverseMessage: function () {
        this.message = this.message.split("").reverse().join("");
      },
    },
  });
</script>
```

- @click 调用方法名后可以不加`()`，若有参则默认传入原生事件对象 event
- Vue 提供了一个特殊变量`$event`，用于访问原生 DOM 事件

**修饰符**

在@绑定的事件后+`.`+一个后缀来使用修饰符，Vue 支持一下修饰符：

- `.stop` `.prevent` `.capture` `.self` `.once`

```html
<!--阻止单击事件冒泡-->
<a @click.stop="handle"></a>
<!--提交事件不再重载页面-->
<form @submit.prevent="handle"></form>
<!--修饰符可以串联-->
<a @click.stop.prevent="handel"></a>
<!--只有修饰符-->
<form @submit.prevent></form>
<!--添加事件侦听器时使用事件捕获模式-->
<div @click.capture="handle"></div>
<!--只有事件在该元素本身（而不是子元素）触发时触发回调-->
<div @click.self="handle"></div>
<!--只触发一次，组件同样适用-->
<div @click.once="handle"></div>
```

在表单元素上监听键盘事件，使用按键修饰符，以下是快捷键名称：

- `.enter` `.tab` `.delete` `.esc` `.space` `.up` `.down` `.left` `.right`

```js
//只有在keyCode为13时调用 vm.submit()
<input @keyup.13="submit">

//也可以自己配置具体按键,全局定义后，就可以使用 @keyup.f1
Vue.config.keycodes.f1 = 112
```

- `.ctrl` `.alt` `shift` `meta`(Mac 是 Commend 键，Window 是窗口键)【这些可以组合使用也可以和鼠标配合使用】

```html
<!-- Shift + S -->
<input @keyup.shift.83="handle" />
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">...</div>
```

### v-if， v-else，v-else-if

```html
<div id="app-4">
  <h1 v-if="type==='A'">A</h1>
  <h1 v-else-if="type==='B'">B</h1>
  <h1 v-else-if="type==='D'">D</h1>
  <h1 v-else>C</h1>
  <!-- ===三个等号在JS中表示绝对等于(就是数据与类型都要相等)-->
</div>
<script type="text/javascript">
  var app4 = new Vue({
    el: "#app-4",
    data: {
      type: "A",
    },
  });
</script>
```

出于效率考虑，Vue 会尽可能地**复用**已有的元素而非重新渲染。如果不希望这样，Vue.js 提供`key` 属性，它可以让你自己觉得是否复用元素，key 的值必须唯一，添加不同 key 值便不会复用。

### v-for

```html
<div id="app">
  <!--遍历数组：一个可选参数：索引-->
  <li v-for="(item,index) in items">{{item.message}}----{{index}}</li>
  <!--遍历对象: 两个可选参数（键名和索引）-->
  <li v-for="(value,key,index) in user">{{index}} - {{key}} ： {{value}}</li>
  <!--迭代整数-->
  <span v-for="n in 10">{{n}}</span>
</div>
<script>
  var app5 = new Vue({
    el: "#app",
    data: {
      items: [{ message: "huang" }, { message: "haiwen" }],
      user: {
        name: "Arson",
        sex: "man",
        age: 26,
      },
    },
  });
</script>
```

**数组更新**

`app.items.push({message:"wen"})`
改变原始数组的方法 push()、pop()、shift()、unshift()、splice()、sort()、reverse()

`app.items = app.items.filter(function (item){...}`
返回新数组的方法，需要替换原始数组 filter()、concat()、slice()

==注意==：以下变动 Vue 无法检测到，也不会触发视图更新：

- 通过索引直接设置项，`app.items[3]={...}`

- 修改数组长度，app.items.length=1

```js
//解决1a
Vue.set(app.items,3{
        message:'Huang'
        });
//如果是在webpack中使用组件化的方式，默认是没有导入Vue的，可以使用$set
this.$set(app.items,3{
        message:'Huang'
        });

//解决1b
app.items.splice(3,1,{
    message:'Huang'
})

//解决2
app.items.splice(1);
```

​

### v-model 表单双绑

它能轻松实现表单输入和应用状态之间的双向绑定.

注意：`v-model`会忽略所有表单元素的`value`、`checked`、`selected`特性的初始值而总是将`Vue`实例的数据作为数据来源。你应该通过`JavaScript`在组件的`data`选项中声明初始值!

```html
<div id="app-7">
  文本框：
  <input v-model="message" />
  <label>{{ message }}</label>
  <br />
  单复选框：
  <!--不需要v-model，v-bind绑定一个布尔值即可，为真时选中-->
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{checked}}</label>
  <br />
  单选框按钮
  <!--组合互斥用v-model配合value使用-->
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <span>选中的值：{{picked}}</span>
  <br />

  多复选框：
  <!--同上-->
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="join" value="Join" v-model="checkedNames" />
  <label for="join">Jack</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <span>选中的值：{{checkedNames}}</span>
  <br />

  下拉框:
  <!--otion中有value则优先匹配，没有匹配text-->
  <!--select中 添加属性 multiple则多选，此时v-model绑定数组-->
  <select v-model="pan">
    <option value="" disabled>---请选择---</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <span>value:{{pan}}</span>
</div>
<script>
  var app7 = new Vue({
    el: "#app-7",
    data: {
      message: "Hello World",
      checked: false,
      checkedNames: [],
      picked: "",
      pan: "",
    },
  });
</script>
```

注意：`v-model`表达式的初始值未能匹配任何选项，元系将被渲染为“未选中”状态。 在 iOS 中， 这会使用户无法选择第一个选项，因为这样的情况下，iOS 不会触发`change`事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

**绑定值**

上面 v-model 绑定的是静态字符串或布尔值，而业务中需要绑定动态数据，可用 v-bind 实现

```vue
<div id="app">
    单选按钮
    <input type="radio" v-model="picked" :value="value"/>
    <!--按下后app.picked === app.value = 123-->
    复选框
    <input type="checkbox" v-model="toggle" :true-value="value1" :false-value="value2"/>
    <!--勾选时，app.toggle === app.value1；未勾选时，app.toggle === app.value2 -->
    下拉框
    <select v-model="selected">
        <option :value="{number : 123}">123</option>
    </select>
    <!--选中时，app.selected.number=123-->
    
</div>
<script>
var app7 = new Vue({
  el: "#app-7",
  data: {
    picked: false,
    value: 123,
    toggle: false,
    value1: "a",
    value2: "b",
    selected: "",
  },
});
</script>
```

**修饰符**

与事件 v-onleisi ,v-model 也有修饰符，用于控制数据同步的时机。

- `.lazy`:v-model 默认是在 input 事件中同步输入框的数据，使用该修饰符会转变为在 change 事件中同步，不是实时改变，二十在失焦或按下回车时才更新。

- `.number`:将输入转换为 number 类型，否则虽然输入数字仍未 string

### 其他指令

| 指令    | 作用                                                                                                                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v-html  | 输出 HTML 标签，而不是纯文本                                                                                                                                                                 |
| v-pre   | 跳过这个元素和子元素的编译过程                                                                                                                                                               |
| v-cloak | 它会在 Vue 实例结束编译时从绑定的 HTML 元素上移除，经常和 display:none 配合使用。<br />一般工程化项目不在需要。                                                                              |
| v-once  | 定义它的元素或组件只渲染一次，首次渲染后，不在随数据的变化重新渲染，将被视为静态内容。少用                                                                                                   |
| v-show  | 与 v-if 用法基本一致，但其时改变元素 CSS 属性 display。表达式为 false 等价于 display:none。<br /><u>区别</u>：v-show 无论真假均会被编译；v-if 为假时不会渲染只有当条件第一次变真时才开始编译 |

## 组件

组件是可复用的`Vue`实例， 说白了就是一组可以重复使用的模板， 跟`JSTL`的自定义标签、`Thymeleal`的`th:fragment`等框架有着异曲同工之妙，通常一个应用会以一棵嵌套的组件树的形式来组织：

![Component Tree](https://gitee.com/heavenmei/java-study/raw/master/img/20210908163354.png)

### 第一个 Vue 组件

注意：在实际开发中，我们并不会用以下方式开发组件，而是采用`vue-cli`创建，`vue`模板文件的方式开发，以下方法只是为了让大家理解什么是组件。

使用`Vue.component()`方法注册组件，格式如下：

```html
<div id="app">
  <pan></pan>
</div>
<script>
  //先注册组件
  Vue.component("pan", {
    template: "<li>Hello</li>",
    data: function () {
      return {
        message: "sd",
      };
    },
    //组件中的data必须时函数，然后将数据return出去
  });
  //再实例化Vue
  var vm = new Vue({
    el: "#app",
  });
</script>
```

**注意**：Vue 组件的模板在某些情况下会受到 HTML 的限制，例如`<table>`内规定只允许表格元素，所以使用组件会无效。因此需要用 is 属性挂在组件。

```vue
<div id="app">
    <table>
        <tbody is="pan"></tbody>
    </table>
</div>
<script>
//先注册组件
Vue.component("pan", {
  template: "<li>Hello</li>",
});
//再实例化Vue
var vm = new Vue({
  el: "#app",
});
</script>
```

### props 传递参数

父组件-> 子组件。注意：默认规则下 props 属性里的值<u>不能为大写</u>；

```html
<div id="app">
  <pan v-for="item in items" v-bind:panh="item"></pan>
</div>
<script>
  Vue.component("pan", {
    props: ["panh"],
    template: "<li>{{panh}}</li>",
  });
  var vm = new Vue({
    el: "#app",
    data: {
      items: ["java", "Linux", "前端"],
    },
  });
</script>
```

**数据验证**

```vue
<script>
Vue.component("pan", {
  props: {
    //必须是数字
    propA: Number,
    //必须是字符串或数组
    propB: [String, Number],
    //布尔值，默认true
    propC: {
      type: Boolean,
      default: true,
    },
    //数字，而且必传
    propD: {
      type: Number,
      required: true,
    },
    //如果是数组或对象，默认值必须是一个函数来返回
    propE: {
      type: Array,
      default: function () {
        return [];
      },
    },
    //自定义一个验证函数
    propF: {
      validator: function (value) {},
    },
  },
});
</script>
```

### 自定义事件

子组件->父组件。`this.$emit(‘自定义事件名’， 参数)`

说明：组件无法直接使用 vue 实例中的方法，只能调用自身的方法。

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210909103522.png)
**使用 v-model**

![](https://gitee.com/heavenmei/java-study/raw/master/img/20211130194840.png)

组件$emit()的事件名是特殊的 input，没有使用@input=“handle”,而是直接用了 v-model 绑定了一个数据，这也是语法糖。
此外，v-model 还可以实现双向绑定。

![](https://gitee.com/heavenmei/java-study/raw/master/img/20211130195612.png)

### 插槽

使用`<slot>`元素作为承载分发内容的出口，可以应用在组合组件的场景中

```vue
<div id="vue">
  <todo>
        <todo-title slot="todo-title" :title="title"></todo-title>
        <!--v-bind:item 简写-->
        <todo-items slot="todo-items" v-for="item in todoItems" :item="item"></todo-items>
    </todo>
</div>
<script type="text/javascript">
Vue.component("todo", {
  template:
    '<div>\
                    <slot name="todo-title"></slot>\
                    <ul>\
                        <slot name="todo-items"></slot>\
                    </ul>\
                </div>',
});
Vue.component("todo-title", {
  props: ["title"],
  template: "<div>{{title}}</div>",
});
Vue.component("todo-items", {
  props: ["item"],
  template: "<li>{{item}}</li>",
});

var vm = new Vue({
  el: "#vue",
  data: {
    title: "秦老师系列课程",
    todoItems: ["狂神说Java", "test2", "test3"],
  },
});
</script>
```

## 入门小结

**核心**：数据驱动，组件化

**优点**：借鉴了 AngularJS 的<u>模块化开发</u>和 React 的<u>虚拟 Dom</u>，虚拟 Dom 就是把 Demo 操作放到内存中执行；

**常用的属性：**

- v-if
- v-else-if
- v-else
- v-for
- v-on 绑定事件，简写@
- v-model 数据双向绑定
- v-bind 给组件绑定参数，简写：

**组件化：**

- 组合组件 slot 插槽
- 组件内部绑定事件需要使用到 this.$emit("事件名",参数);
- 计算属性的特色，缓存计算数据

遵循 SoC 关注度分离原则，<u>Vue 是纯粹的视图框架</u>，并不包含，比如 Ajax 之类的通信功能，为了解决通信问题，我们需要使用 Axios 框架做异步通信；

**说明**
Vue 的开发都是要基于 NodeJS，实际开发采用<u>Vue-cli 脚手架开发</u>，<u>vue-router 路由</u><u>，vuex 做状态管理</u>；<u>Vue UI</u>，界面我们一般使用 ElementUI（饿了么出品https://element.eleme.cn/#/zh-CN），或者ICE（阿里巴巴出品https://ice.work/）来快速搭建前端项目~~

## Axios 异步通信

### 什么是 Axios

Axios 是一个开源的可以用在浏览器端和 Node JS 的异步通信框架， 她的主要作用就是**实现 AJAX 异步通信**，其功能特点如下：

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

GitHub：https://github.com/axios/axios
中文文档：http://www.axios-js.com/

### Hello,Axios

咱们开发的接口大部分都是采用**JSON 格式**， 可以先在项目里模拟一段 JSON 数据， 数据内容如下：创建一个名为 data.json 的文件并填入上面的内容， 放在项目的根目录下

```json
{
  "name": "狂神说Java",
  "url": "https://blog.kuangstudy.com",
  "page": 1,
  "isNonProfit": true,
  "address": {
    "street": "含光门",
    "city": "陕西西安",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "https://space.bilibili.com/95256449"
    },
    {
      "name": "狂神说Java",
      "url": "https://blog.kuangstudy.com"
    },
    {
      "name": "百度",
      "url": "https://www.baidu.com/"
    }
  ]
}
```

测试代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!--v-cloak 解决闪烁问题-->
    <style>
      [v-cloak] {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="vue" v-cloak>
      <div>地名：{{info.name}}</div>
      <div>
        地址：{{info.address.country}}--{{info.address.city}}--{{info.address.street}}
      </div>
      <div>
        链接：<a v-bind:href="info.url" target="_blank">{{info.url}}</a>
      </div>
    </div>

    <!--引入js文件-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript">
      let vm = new Vue({
        el: "#vue",
        //data：属性：vm
        data() {
          return {
            //请求返回的参数格式，必须与json字符串一样
            info: {
              name: null,
              address: {
                country: null,
                city: null,
                street: null,
              },
              url: null,
            },
          };
        },
        mounted() {
          //钩子函数
          //可以换成Ajax
          axios
            .get("../data.json")
            .then((response) => (this.info = response.data));
        },
      });
    </script>
  </body>
</html>
```

说明：

1.  在这里使用了 v-bind 将 a:href 的属性值与 Vue 实例中的数据进行绑定
2.  使用 axios 框架的 get 方法请求 AJAX 并自动将数据封装进了 Vue 实例的数据对象中

### vue 生命周期

Vue 实例有一个完整的生命周期，也就是从开始创建初女台化数据、编译模板、挂载 DOM、渲染一更新一渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。
   在 Vue 的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册 JS 方法，可以让我们用自己注册的 JS 方法控制整个大局，在这些事件响应方法中的 this 直接指向的是 Vue 的实例。

![](https://gitee.com/heavenmei/java-study/raw/master/img/20210908185106.png)

## vue-cli

vue-cli 官方提供的一个**脚手架，用于快速生成一个 vue 的项目模板**；
预先定义好的目录结构及基础代码，就好比咱们在创建 Maven 项目时可以选择创建一个骨架项目，这个估计项目就是脚手架，我们的开发更加的快速；
项目的功能：统一的目录结构、本地调试、热部署、单元测试、集成打包上线

### 安装 vue-cli

1. 安装 node.js

   - cmd 下输入`node -v`，查看是否能够正确打印出版本号即可！
   - cmd 下输入`npm -v`，查看是否能够正确打印出版本号即可！

2. 更新 NPM

   - `npm -g install npm`，更新 npm 至最新版本,安装的位置：C:\Users\administrator\AppData\Roaming\npm

3. 安装 cnpm

   - `npm install -g cnpm --registry=https://registry.npm.taobao.org` ,使用 npm 的国内镜像（npm 国内镜像 https://npm.taobao.org/）cnpm 命令代替默认的 npm 命令，增加依赖包加载速度且避免资源限制。

4. 安装脚手架 vue-cli

   - `cnpm install -g vue-cli ` 2.X
   - `npm install -g @vue/cli` 3.X

5. 更新手脚架

- 你应该需要全局重新安装最新版本的@vue/cli：`npm install -g @vue/cli`
- 然后在 Vue 项目中运行：`vue upgrade --next`

### Hello，vue-cli

1.创建一个 Vue 项目,新建文件夹 myvue 2.创建一个基于 webpack 模板的 vue 应用程序

```bash
# 2
cd myvue
vue init webpack myvue

# 3.X
vue create hello-world
```

一路都选择 no 即可；说明：

- Project name：项目名称，默认回车即可
- Project description：项目描述，默认回车即可
- Author：项目作者，默认回车即可
- Install vue-router：是否安装 vue-router，Yes
- Use ESLint to lint your code:是否使用 ESLint 做代码检查，选择 n 不安装（后期需要再手动添加)
- Set up unit tests:单元测试相关，选择 n 不安装（后期需要再手动添加）
- Setupe2etests with Nightwatch：单元测试相关，选择 n 不安装（后期需要再手动添加）
- Should we run npm install for you after the,project has been created:创建完成后直接初始化，

  3.初始化并运行

```bash
cd myvue
npm install
npm run dev #运行vue ctrl+C结束 2.X
npm vue-cli-service serve # 3.X
```

## webpack

WebPack 是一款模块加载器兼打包工具， 它能把各种资源， 如 JS、JSX、ES 6、SASS、LESS、图片等都作为模块来处理和使用。

### 安装

`npm install webpack -g`
`npm install webpack-cli -g`

测试安装成功:
`webpack -v` `webpack-cli -v`

**配置**
创建 webpack.config.js 配置文件

- entry：入口文件， 指定 webpack 用哪个文件作为项目的入口
- output：输出， 指定 webpack 把处理完成的文件放置到指定路径
- module：模块， 用于处理各种类型的文件
- plugins：插件， 如：热更新、代码重用等
- resolve：设置路径指向
- watch：监听， 用于设置文件改动后直接打包

```js
module.exports = {
	entry:"",
	output:{
		path:"",
		filename:""
	},
	module:{
		loaders:[
			{test:/\.js$/,;\loade:""}
		]
	},
	plugins:{},
	resolve:{},
	watch:true
}
```

### 使用

1. 创建项目

2. 创建一个名为 modules 的目录，用于放置 JS 模块等资源文件

3. 在 modules 下创建模块文件，如 hello.js，用于编写 JS 模块相关代码

   ```js
   //暴露一个方法：sayHi
   exports.sayHi = function () {
     document.write("<div>Hello Webpack</div>");
   };
   ```

4. 在 modules 下创建一个名为 main.js 的入口文件，用于打包时设置 entry 属性

   ```js
   //require 导入一个模块，就可以调用这个模块中的方法了
   var hello = require("./hello");
   hello.sayHi();
   ```

5. 在项目目录下创建 webpack.config.js 配置文件，使用 webpack 命令打包

   ```js
   module.exports = {
     entry: "./modules/main.js",
     output: {
       filename: "./js/bundle.js",
     },
   };
   ```

6. 在项目目录下创建 HTML 页面，如 index.html，导入 webpack 打包后的 JS 文件

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>狂神说Java</title>
     </head>
     <body>
       <script src="dist/js/bundle.js"></script>
     </body>
   </html>
   ```

7. 在 IDEA 控制台中直接执行 webpack；如果失败的话，就使用管理员权限运行即可！
8. 运行 HTML 看效果

**说明**

```js
参数--watch 用于监听变化
webpack --watch
```

## vue-router 路由

### 安装

基于第一个`vue-cli`进行测试学习； 先查看 node modules 中是否存在 vue-router
vue-router 是一个插件包， 所以我们还是需要用 n pm/cn pm 来进行安装的。打开命令行工具，进入你的项目目录，输入下面命令。

```bash
cnpm install vue-router --save-dev
```

如果在一个模块化工程中使用它，必须要通过 Vue.use()明确地安装路由功能：

```vue
import Vue from 'vue' import VueRouter from 'vue-router' Vue.use(VueRouter);
```

### 使用

1. `components` 目录下存放我们自己编写的组件定义一个`Content.vue` 的组件

   ```vue
   <template>
     <div>
       <h1>内容页</h1>
     </div>
   </template>

   <script>
   export default {
     name: "Content",
   };
   </script>
   ```

   `Main.vue`组件

   ```vue
   <template>
     <div>
       <h1>首页</h1>
     </div>
   </template>

   <script>
   export default {
     name: "Main",
   };
   </script>

   <style scoped></style>
   ```

2. 安装路由，在 src 目录下，新建一个文件夹：`router`，专门存放路由，配置路由 index.js，如下

   ```js
   import Vue from "vue";
   //导入路由插件
   import Router from "vue-router";
   //导入上面定义的组件
   import Content from "../components/Content";
   import Main from "../components/Main";
   //安装路由
   Vue.use(Router);
   //配置路由
   export default new Router({
     routes: [
       {
         //路由路径
         path: "/content",
         //路由名称
         name: "content",
         //跳转到组件
         component: Content,
       },
       {
         //路由路径
         path: "/main",
         //路由名称
         name: "main",
         //跳转到组件
         component: Main,
       },
     ],
   });
   ```

3. 在`main.js`中配置路由

   ```js
   import Vue from "vue";
   import App from "./App";

   //导入上面创建的路由配置目录
   import router from "./router"; //自动扫描里面的路由配置

   //来关闭生产模式下给出的提示
   Vue.config.productionTip = false;

   new Vue({
     el: "#app",
     //配置路由
     router,
     components: { App },
     template: "<App/>",
   });
   ```

4. 在`App.vue`中使用路由

   ```vue
   <template>
     <div id="app">
       <!--
         router-link：默认会被渲染成一个<a>标签，to属性为指定链接
         router-view：用于渲染路由匹配到的组件
       -->
       <router-link to="/main">首页</router-link>
       <router-link to="/content">内容</router-link>
       <router-view></router-view>
     </div>
   </template>

   <script>
   export default {
     name: "App",
   };
   </script>
   <style></style>
   ```

## 实战快速上手

### 创建工程

注意：命令行都要使用管理员模式运行
1、创建一个名为 hello-vue 的工程`vue init webpack hello-vue`
2、安装依赖， 我们需要安装 vue-router、element-ui、sass-loader 和 node-sass 四个插件

```bash
#进入工程目录
cd hello-vue
#安装vue-routern
cnpm install vue-router --save-dev
#安装element-ui
cnpm i element-ui -S
#安装依赖
cnpm install
# 安装SASS加载器
cnpm install sass-loader@7.3.1 --save-dev
cnpm install node-sass --save-dev
#启功测试
npm run dev
```

**注意：**如果报错如下图：Module build failed: TypeError: loaderContext.getResolve is not a function（sass-loader 版本太高）

3、Npm 命令解释：

`npm install moduleName`：安装模块到项目目录下
`npm install -g moduleName`：-g 的意思是将模块安装到全局，具体安装到磁盘哪个位置要看 npm config prefix 的位置
`npm install -save moduleName`：–save 的意思是将模块安装到项目目录下， 并在 package 文件的 dependencies 节点写入依赖，-S 为该命令的缩写
`npm install -save-dev moduleName`:–save-dev 的意思是将模块安装到项目目录下，并在 package 文件的 devDependencies 节点写入依赖，-D 为该命令的缩写

### 11.2、创建登录页面

把没有用的初始化东西删掉！在源码目录中创建如下结构：

- assets：用于存放资源文件

- components：用于存放 Vue 功能组件

- views：用于存放 Vue 视图组件

- router：用于存放 vue-router 配置

​

1、创建首页视图，在 views 目录下创建一个名为**Main.vue**的视图组件：

```vue
<template>
  <div>首页</div>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style scoped></style>
<template>
  <div>首页</div>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style scoped></style>
```

2、创建登录页视图在 views 目录下创建名为**Login.vue**的视图组件，其中 el-\*的元素为 ElementUI 组件；

```vue
<template>
  <div>
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisiable"
      width="30%"
      :before-close="handleClose"
    >
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      //表单验证，需要在 el-form-item 元素中增加prop属性
      rules:{
        username:
          {required:true,message:"账号不可为空",trigger:"blur"}
        ],
        password:[
          {required:true,message:"密码不可为空",tigger:"blur"}
        ]
      },

      //对话框显示和隐藏
      dialogVisible:false
    }
  },
  methods:{
    onSubmit(formName){
      //为表单绑定验证功能
      this.$refs[formName].validate((valid)=>{
        if(valid){
          //使用vue-router路由到指定界面，该方式称为编程式导航
          this.$router.push('/main');
        }else{
          this.dialogVisible=true;
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
```

3、创建路由，在 router 目录下创建一个名为**index.js**的 vue-router 路由配置文件

```js
import Vue from "vue";
import Router from "vue-router";

import Main from "../views/Main";
import login from "../views/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/main",
      components: Main,
    },
    {
      path: "/login",
      components: login,
    },
  ],
});
```

**4、APP.vue**

```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 11.3、路由嵌套

嵌套路由又称子路由，在实际应用中，通常由多层嵌套的组件组合而成。
1、 创建用户信息组件，在 views/user 目录下创建一个名为 Profile.vue 、List.vue 的视图组件；

```vue
<template>
  <h1>个人信息</h1>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>

<style scoped></style>

<!--List.vue-->
<template>
  <h1>用户列表</h1>
</template>

<script>
export default {
  name: "UserList",
};
</script>

<style scoped></style>
```

2、修改首页视图，我们修改 Main.vue 视图组件，此处使用了 ElementUI 布局容器组件，代码如下：

```vue
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-caret-right"></i>用户管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--插入的地方-->
                <router-link to="/user/profile">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!--插入的地方-->
                <router-link to="/user/list">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-caret-right"></i>内容管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="2-1">分类管理</el-menu-item>
              <el-menu-item index="2-2">内容列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!--在这里展示视图-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
```

3、 配置嵌套路由修改 router 目录下的 index.js 路由配置文件，使用 children 放入 main 中写入子模块，代码如下

```js
import Vue from "vue";
import Router from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
//导入子模块
import UserList from "../views/users/List";
import UserProfile from "../views/users/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/main",
      component: Main,
      //  写入子模块
      children: [
        {
          path: "/users/profile",
          component: UserProfile,
        },
        {
          path: "/users/list",
          component: UserList,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
```

### 11.4、参数传递

**第一种取值方式**

1、 修改路由配置, 主要是 router 下的 index.js 中的 path 属性中增加了`:id`这样的占位符

```js
{
	path: '/user/profile/:id',
	name:'UserProfile',
	component: UserProfile
}
```

2、传递参数
  此时我们在 Main.vue 中的 route-link 位置处 <u>to 改为了 :to</u>，是为了将这一属性当成对象使用，注意 router-link 中的 name 属性名称 一定要和 路由中的 name 属性名称 匹配，因为这样 Vue 才能找到对应的路由路径；

```vue
<!--name是组件的名字 params是传的参数 如果要传参数的话就需要用v:bind:来绑定-->
<router-link
  :to="{ name: 'UserProfile', params: { id: 1 } }"
>个人信息</router-link>
```

3、在要展示的组件 Profile.vue 中接收参数 使用 `{{$route.params.id}}`来接收。Profile.vue 部分代码

```vue
<template>
  <!--  所有的元素必须在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{ $route.params.id }}
  </div>
</template>
```

**第二种取值方式 使用 props 减少耦合**
1、修改路由配置 , 主要在 router 下的 index.js 中的路由属性中增加了 props: true 属性

```js
{
	path: '/user/profile/:id',
	name:'UserProfile',
	component: UserProfile,
	props: true
}
```

2、传递参数和之前一样 在 Main.vue 中修改 route-link 地址

```vue
<!--name是组件的名字 params是传的参数 如果要传参数的话就需要用v:bind:来绑定-->
<router-link
  :to="{ name: 'UserProfile', params: { id: 1 } }"
>个人信息</router-link>
```

3、在 Profile.vue 接收参数为目标组件增加 props 属性。Profile.vue

```vue
<template>
  <div>
    个人信息
    {{ id }}
  </div>
</template>
<script>
export default {
  props: ["id"],
  name: "UserProfile",
};
</script>
<style scoped></style>
```

### 11.5、组件重定向

重定向的意思大家都明白，但 Vue 中的重定向是作用在路径不同但组件相同的情况下，比如：
在 router 下面 index.js 的配置

```js
{
  path: '/main',
  name: 'Main',
  component: Main
},
{
  path: '/goHome',
  redirect: '/main'
}
```

说明：这里定义了两个路径，一个是 /main ，一个是 /goHome，其中 /goHome 重定向到了 /main 路径，由此可以看出重定向不需要定义组件；

使用的话，只需要在 Main.vue 设置对应路径即可；

```vue
<el-menu-item index="1-3">
    <router-link to="/goHome">回到首页</router-link>
</el-menu-item>
```

### 11.6、路由模式与 404

路由模式有两种

- hash：路径带 # 符号，如 http://localhost/#/login
- history：路径不带 # 符号，如 http://localhost/login

修改路由配置，代码如下：

```js
export default new Router({
  mode: "history",
  routes: [],
});
```

404 demo 1.创建一个 NotFound.vue 视图组件。`NotFound.vue`

```vue
<template>
  <div>
    <h1>404,你的页面走丢了</h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped></style>
```

2.修改路由配置 index.js

```js
import NotFound from '../views/NotFound'
{
   path: '*',
   component: NotFound
}
```

**路由钩子与异步请求**

beforeRouteEnter：在进入路由前执行
beforeRouteLeave：在离开路由前执行

在 Profile.vue 中写

```js
export default {
  name: "UserProfile",
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入个人信息页");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开个人信息页");
    next();
  },
};
```

参数说明：
to：路由将要跳转的路径信息
from：路径跳转前的路径信息
next：路由的控制参数
next() 跳入下一个页面
next(’/path’) 改变路由的跳转方向，使其跳到另一个路由
next(false) 返回原来的页面
next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例

> Axios 在钩子函数中使用异步请求

1、安装 Axios `cnpm install --save vue-axios`
2、main.js 引用 Axios

```js
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
```

3、准备数据 ： 只有我们的 static 目录下的文件是可以被访问到的，所以我们就把静态文件放入该目录下。
数据和之前用的 json 数据一样 需要的去上述 axios 例子里
静态数据存放的位置:`static/mock/data.json`
4、在 beforeRouteEnter 中进行异步请求 Profile.vue

```js
export default {
  //第二种取值方式
  // props:['id'],
  name: "UserProfile",
  //钩子函数 过滤器
  beforeRouteEnter: (to, from, next) => {
    //加载数据
    console.log("进入路由之前");
    next((vm) => {
      //进入路由之前执行getData方法
      vm.getData();
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("离开路由之前");
    next();
  },
  //axios
  methods: {
    getData: function () {
      this.axios({
        method: "get",
        url: "http://localhost:8080/static/mock/data.json",
      }).then(function (response) {
        console.log(response);
      });
    },
  },
};
```

## 报错

- **vue : 无法加载文件 D:\Environment\nodejs\node_global\vue.ps1，因为在此系统上禁止运行脚本。**

  （1）以管理员身份运行 VSCode

  （2）执行命令：get-ExecutionPolicy（取得 shell 的当前执行策略）

  显示 Restricted（表示状态是禁止的）

  （3）执行命令：set-ExecutionPolicy RemoteSigned

  （4）执行命令：get-ExecutionPolicy，显示 RemoteSigned

-
