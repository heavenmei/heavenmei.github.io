---
title: 浏览器面试 之 渲染流程
subtitle: 
layout: post
date: 2023-01-09
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---

## 浏览器渲染流程

![img](https://img.alicdn.com/tps/TB1eabOLpXXXXX3XFXXXXXXXXXX-1093-167.jpg_720x720.jpg#alt=)

- 构建 DOM 树：浏览器将 HTML 解析成树形结构的 DOM 树，一般来说，这个过程发生在页面初次加载，或页面 JavaScript 修改了节点结构的时候。
- 构建渲染树：浏览器将 CSS 解析成树形结构的 CSSOM 树，再和 DOM 树合并成渲染树。计算样式，这个过程是根据 CSS 选择器，对每个 DOM 元素匹配对应的 CSS 样式。这一步结束之后，就确定了每个 DOM 元素上该应用什么 CSS 样式规则
- 布局（Layout）：浏览器根据渲染树所体现的节点、各个节点的 CSS 定义以及它们的从属关系，计算出每个节点在屏幕中的位置。Web 页面中元素的布局是相对的，在页面元素位置、大小发生变化，往往会导致其他节点联动，需要重新计算布局，这时候的布局过程一般被称为**回流（Reflow**）。
- 绘制（Paint）：遍历渲染树，调用渲染器的  `paint()`  方法在屏幕上绘制出节点内容，本质上是一个像素填充的过程。这个过程也出现于回流或一些不影响布局的 CSS 修改引起的屏幕局部重画，这时候它被称为**重绘（Repaint）**。实际上，<u>绘制过程是在多个层上完成的，这些层我们称为渲染层（RenderLayer）</u>。
- 渲染层合成（Composite）：<u>多个绘制后的渲染层按照恰当的重叠顺序进行合并，而后生成位图，最终通过显卡展示到屏幕上。</u>

![](assets/bvrowser-render-20250118032712.png)

### 分层

从浏览器的渲染过程中我们知道，页面 HTML 会被解析成 DOM 树，每个 HTML 元素对应了树结构上的一个 node 节点。而从 DOM 树转化到一个个的渲染层，并最终执行合并、绘制的过程，中间其实还存在一些过渡的数据结构，它们记录了 DOM 树到屏幕图形的转化原理，其本质也就是树结构到层结构的演化。

![图片描述](https://image-static.segmentfault.com/368/970/3689707524-5ac9e6a024f23_articlex)

#### 1、渲染对象（RenderObject）

一个 DOM 节点对应了一个渲染对象，渲染对象依然维持着 DOM 树的树形结构。一个渲染对象知道如何绘制一个 DOM 节点的内容，它通过向一个绘图上下文（GraphicsContext）发出必要的绘制调用来绘制 DOM 节点。

#### 2、渲染层（RenderLayer）

这是浏览器渲染期间构建的第一个层模型，处于**相同坐标空间（z 轴空间）的渲染对象**，都将归并到同一个渲染层中，因此根据层叠上下文，不同坐标空间的的渲染对象将形成多个渲染层，以体现它们的层叠关系。所以，对于满足形成层叠上下文条件的渲染对象，浏览器会自动为其创建<u>新的渲染层</u>。能够导致浏览器为其创建新的渲染层的，包括以下几类常见的情况：

![|500](https://static001.geekbang.org/resource/image/a0/19/a03eb12053aac1ac496b61a424f20119.png?wh=1142*601)

- 根元素 document
- 有明确的定位属性（relative、fixed、sticky、absolute）
- opacity < 1
- 有 CSS fliter 属性
- 有 CSS mask 属性
- 有 CSS mix-blend-mode 属性且值不为 normal
- 有 CSS transform 属性且值不为 none
- backface-visibility 属性为 hidden
- 有 CSS reflection 属性
- 有 CSS column-count 属性且值不为 auto 或者有 CSS column-width 属性且值不为 auto
- 当前有对于 opacity、transform、fliter、backdrop-filter 应用动画
- overflow 不为 visible

**DOM 节点和渲染对象是一一对应的，满足以上条件的渲染对象就能拥有独立的渲染层**。当然这里的独立是不完全准确的，并不代表着它们完全独享了渲染层，<mark>由于不满足上述条件的渲染对象将会与其第一个拥有渲染层的父元素共用同一个渲染层</mark>，因此实际上，这些渲染对象会与它的部分子元素共用这个渲染层。

#### 3、合成层（GraphicsLayer）

满足某些特殊条件的渲染层，会被浏览器自动提升为合成层。合成层拥有单独 GraphicsLayer，<mark>而其他不是合成层的渲染层，则和其第一个拥有 GraphicsLayer 的父层共用一个。</mark>

那么一个渲染层满足哪些特殊条件时，才能被提升为合成层呢？

**显式合成**

- 3D transforms：translate3d、translateZ 等
- video、canvas、iframe 等元素
- 通过 Element.animate() 实现的 opacity 动画转换
- 通过 СSS 动画实现的 opacity 动画转换
- position: fixed
- 具有 will-change 属性
- 对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition

**隐式合成**

- 两个 absolute 定位的 div 在屏幕上交叠了，根据  `z-index`  的关系，其中一个 div 就会”盖在“了另外一个上边。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0a871e2e9~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 这个时候，如果处于下方的 div 被加上了 CSS 属性：`transform: translateZ(0)`，就会被浏览器提升为合成层。提升后的合成层位于 Document 上方，假如没有隐式合成，原本应该处于上方的 div 就依然还是跟 Document 共用一个 GraphicsLayer，层级反而降了，就出现了元素交叠关系错乱的问题。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0a89f88c8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 所以为了纠正错误的交叠顺序，浏览器必须让原本应该”盖在“它上边的渲染层也同时提升为合成层。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0aa2976c4~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

这里值得注意的是，不少人会将这些合成层的条件和渲染层产生的条件混淆，这两种条件发生在两个不同的层处理环节，是完全不一样的。

另外，有些文章会把 CSS Filter 也列为影响 Composite 的因素之一，然而我验证后发现并没有效果。

### 图层绘制

分好层后，就需要对每个层进行绘制了。绘制并不是一蹴而就，而是像画画一样，是按顺序一笔一笔画出来的，渲染引擎也是类似。对于每一个合成层，渲染引擎的渲染过程：

- 先绘制下面的渲染层，再绘制上面的渲染层；
- 在绘制一个渲染层时，将一个渲染层的绘制拆分成很多小的绘制指令。
- **需要说明一点，绘制列表只是用来记录绘制顺序和绘制指令的列表**，并没有真正的绘制出页面。

![](https://static001.geekbang.org/resource/image/40/08/40825a55214a7990bba6b9bec6e54108.png?wh=1142*603)

### 栅格化（raster）

生成了绘制指令，就到了真正绘制页面的时候了，真正的绘制过程不是在主线程完成的，而是在得到绘制指令后，主线程会将这些信息交给合成线程，<mark>由合成线程（是线程！不是进程！）来完成绘制</mark>。

![](https://static001.geekbang.org/resource/image/a8/87/a8d954cd8e4722ee03d14afaa14c3987.png?wh=1142*857)

合成线程是如何工作的呢？

页面可能很大，但用户只能看到一部分，在这种情况下如果全部绘制，就会产生很大的性能开销，因此需要**优先绘制视口**（即用户看到的区域）区域内的元素。

基于此原因，绘制前，**合成线程会对页面进行分块**，然后将每个图块发送给栅格线程，**栅格线程将图块转换为位图**。合成器线程可以优先处理不同的栅格线程，这样就可以首先对视口（或附近）中的事物进行栅格化。

通常，**栅格化过程都会使用 GPU 来加速生成，生成的位图被保存在 GPU 内存中**。



### 合成和显示

一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——**“DrawQuad”**，然后将该命令提交给浏览器进程。

浏览器进程里面有一个叫**\*viz 的组件**，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。

到这里，经过这一系列的阶段，编写好的 HTML、CSS、JavaScript 等文件，经过浏览器就会显示出漂亮的页面了。

## 渲染流水线大总结

![](https://static001.geekbang.org/resource/image/97/37/975fcbf7f83cc20d216f3d68a85d0f37.png?wh=1142*745)

结合上图，一个完整的渲染流程大致可总结为如下：

1. 渲染进程将 HTML 内容转换为能够读懂的 **DOM 树结构**。

2. 渲染引擎将 CSS 样式表转化为浏览器可以理解的** styleSheets**，计算出 DOM 节点的样式。

3. 创建**布局树**，并计算元素的布局信息。

4. 对布局树进行分层，并生成**分层树**。

5. 为每个图层生成**绘制列表**，并将其提交到合成线程。

6. 合成线程将图层分成**图块**，并在**光栅化线程**池中将图块转换成位图。

7. 合成线程发送**绘制图块命令**DrawQuad 给浏览器进程。

8. 浏览器进程根据 DrawQuad 消息生成页面，并**显示**到显示器上。

## 性能优化

### 提升为合成层优缺点

<mark>渲染层是为保证页面元素以正确的顺序，合成层是为了减少渲染的开销。</mark>

好处：

- 合成层的位图，会交由 GPU 合成，比 CPU 处理要快

- 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层

- 对于 transform 和 opacity 效果，不会触发 layout 和 paint

缺点：

- 绘制的图层必须传输到 GPU，这些层的数量和大小达到一定量级后，可能会导致传输非常慢，进而导致一些低端和中端设备上出现闪烁；
- 隐式合成容易产生过量的合成层，每个合成层都占用额外的内存，而内存是移动设备上的宝贵资源，过多使用内存可能会导致浏览器崩溃，让性能优化适得其反。

### 优化建议

#### 1、提升动画效果的元素

对于一些体验要求较高的关键动画，比如一些交互复杂的玩法页面，存在持续变化位置的 animation 元素，我们最好是使用 transform 来实现而不是通过改变 left/top 的方式。这样做的原因是，如果使用 left/top 来实现位置变化，animation 节点和 Document 将被放到了同一个 GraphicsLayer 中进行渲染，持续的动画效果将导致整个 Document 不断地执行重绘，而使用 transform 的话，能够让 animation 节点被放置到一个独立合成层中进行渲染绘制，动画发生时不会影响到其它层。并且另一方面，动画会完全运行在 GPU 上，相比起 CPU 处理图层后再发送给显卡进行显示绘制来说，这样的动画往往更加流畅。

合成层的好处是不会影响到其他元素的绘制，因此，为了减少动画元素对其他元素的影响，从而减少 paint，我们需要把动画效果中的元素提升为合成层。

**提升合成层的最好方式是使用 CSS 的 will-change 属性**。 `will-change`  设置为 opacity、transform、top、left、bottom、right 可以将元素提升为合成层。对于那些目前还不支持 will-change 属性的浏览器，目前常用的是使用`transform: translateZ(0)`来强制提升为合成层

#### 2、使用 transform 或者 opacity 来实现动画效果

从性能方面考虑，最理想的渲染流水线是没有布局和绘制环节的，只需要做合成层的合并即可：

![img](https://img.alicdn.com/tps/TB14YwvLpXXXXXGXFXXXXXXXXXX-1093-167.jpg_720x720.jpg#alt=)

为了实现上述效果，就需要只使用那些仅触发 Composite 的属性。目前，只有两个属性是满足这个条件的：`transforms 和 opacity`。更详细的信息可以查看  [CSS Triggers](https://security.feishu.cn/link/safety?target=http%3A%2F%2Fcsstriggers.com%2F%3Fspm%3Dtaofed.bloginfo.blog.36.2c585ac8BjB2Yv&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)。

注意：元素提升为合成层后，transform 和 opacity 才不会触发 paint，如果不是合成层，则其依然会触发 paint。 浏览器发现没有任何属性会导致重排或重绘，所以它可以应用合成优化：将两个图像绘制为合成层并将它们发送到 GPU。

```html
<style>
  #a,
  #b {
    position: absolute;
  }

  #a {
    left: 10px;
    top: 10px;
    z-index: 2;
    animation: move 1s linear;
  }

  #b {
    left: 50px;
    top: 50px;
    z-index: 1;
  }
  @keyframes move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(70px);
    }
  }
</style>
<div id="#a">A</div>
<div id="#b">B</div>
```

#### 3、减少隐式合成

虽然隐式合成从根本上来说是为了保证正确的图层重叠顺序，但具体到实际开发中，隐式合成很容易就导致一些无意义的合成层生成，归根结底其实就要求我们在开发时约束自己的布局习惯，避免踩坑。

比如上边提到的栏目页面，就因为平时开发的不注意造成页面生成了过多的合成层，我在试图查看页面合成层情况的时候，在 PC 上已经能明显感到卡顿了。利用 Chrome Devtools 分析之后不难发现，页面里边存在的一个带动画 transform 的 button 按钮，提升为了合成层，<u>动画交叠的不确定性使得页面内其他  `z-index`  大于它但其实并没有交叠的节点也都全部提升为了合成层（这个原因真的好坑）。</u>

这个时候我们只需要把这个动画节点的  `z-index`  属性值设置得大一些，让层叠顺序高过于页面其他无关节点就行。当然并不是盲目地设置  `z-index`  就能避免，有时候  `z-index`  也还是会导致隐式合成<u>，这个时候可以试着调整一下文档中节点的先后顺序直接让后边的节点来覆盖前边的节点，而不用  `z-index`  来调整重叠关系。</u>方法不是唯一的，具体方式还是得根据不同的页面具体分析。

#### 3、减小合成层的尺寸

举个简单的例子，分别画两个尺寸一样的 div，但实现方式有点差别：一个直接设置尺寸 100x100，另一个设置尺寸 10x10，然后通过  `scale`  放大 10 倍，并且我们让这两个 div 都提升为合成层：

```css
<style>
  .bottom, .top {    position: absolute;    will-change: transform;  }  .bottom {    width: 100px;    height: 100px;    top: 20px;    left: 20px;    z-index: 3;    background: rosybrown;  }  .top {    width: 10px;    height: 10px;    transform: scale(10);    top: 200px;    left: 200px;    z-index: 5;    background: indianred;  }
</style>
<body>
  <div class="bottom"></div>
  <div class="top"></div>
</body>
```

利用 Chrome Devtools 查看这两个合成层的内存占用后发现，`.bottom`  内存占用是 39.1 KB，而  `.top`  是 400 B，差距十分明显。这是因为  `.top`  是合成层，transform 位于的 Composite 阶段，现在完全在 GPU 上执行。因此对于一些纯色图层来说，我们可以使用 width 和 height 属性减小合成层的物理尺寸，然后再用  `transform: scale(…)`  放大，这样一来可以极大地减少层合成带来的内存消耗。

## 查看合成层

首先是看看页面的渲染情况，以一个栏目页为例，点击  `More tools -> Rendering`，选择  `Layer borders`，你就能看到页面中的合成层都带上了黄色边框。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0d555a746~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

这还不够，我们还需要更加详尽的层合成情况，点击  `More tools -> Layers`，你可以看到像这样的一个视图：

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0dd4303a5~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

左侧列出了所有提升为独立合成层的元素，右侧则是一个整体合成层边界视图，以及选定合成层的详细情况，包括以下几个比较关键的信息：

- Size：合成层的大小，其实也就是对应元素的尺寸；
- Compositing Reasons：形成复合层原因，这是最关键的，也是我们分析问题的突破口，比如图中的合成层产生的原因就是交叠问题；
- Memory estimate：内存占用估算；
- Paint count：绘制次数；
- Slow scroll regions：缓慢滚动区域。

可以看出我们在不经意间就已经制造出了很多意料之外的合成层，这些没有实际意义的合成层都是可以被优化的。

## 相关拓展

### 层爆炸和层压缩

**层爆炸**

由于隐式合成，很容易就产生一些不在预期范围内的合成层，当这些不符合预期的合成层达到一定量级时，就会变成层爆炸。

层爆炸会占用 GPU 和大量的内存资源，严重损耗页面性能，因此盲目地使用 GPU 加速，结果有可能会是适得其反。

例子详见：[CSS3 硬件加速也有坑](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%2F%3Ftarget%3Dhttps%253A%252F%252Fdiv.io%252Ftopic%252F1348&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  这篇文章提供了一个很有趣的  [DEMO](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%2F%3Ftarget%3Dhttp%253A%252F%252Ffouber.github.io%252Ftest%252Flayer%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

**层压缩**

当然了，面对这种问题，浏览器也有相应的应对策略，如果多个渲染层同一个合成层重叠时，这些渲染层会被压缩到一个 GraphicsLayer 中，以防止由于重叠原因导致可能出现的“层爆炸”。这句话不好理解，具体可以看看这个例子：

- 还是之前的模型，只不过这次不同的是，有四个 absolute 定位的 div 在屏幕内发生了交叠。此时处于最下方的 div 在加上了 CSS 属性  `transform: translateZ(0)`  后被浏览器提升为合成层，如果按照隐式合成的原理，盖在它上边的 div 会提升为一个新的合成层，第三个 div 又盖在了第二个上，自然也会被提升为合成层，第四个也同理。这样一来，岂不是就会产生四个合成层了？

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0d4bf2415~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

- 然而事实并不是这样的，浏览器的层压缩机制，会将隐式合成的多个渲染层压缩到同一个 GraphicsLayer 中进行渲染，也就是说，上方的三个 div 最终会处于同一个合成层中，这就是浏览器的层压缩。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daf0c0d5261105~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

当然了，浏览器的自动层压缩并不是万能的，有很多特定情况下，浏览器是无法进行层压缩的，[无线性能优化：Composite](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttps%253A%252F%252Ffed.taobao.org%252Fblog%252F2016%252F04%252F26%252Fperformance-composite%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  这篇文章列举了许多详细的场景。

###### CSS 如何影响 DOM 的构建

JavaScript 脚本由于可能会修改 DOM，因此会阻塞 DOM 的构建，这一点我们都知道；而 CSS 并不会操作或者改变 DOM，因此通常我们认为 CSS 不会影响 DOM 的构建，只会影响后续的布局、绘制等过程，即会影响 DOM 的渲染。但其实**CSS 可以通过 JavaScript 来阻塞 DOM 的构建**。

因为 JavaScript 是可以改变样式的，也就是具有修改 CSS 规则树的能力，而 JavaScript 脚本里是否有改变样式的操作，这一点在执行 JavaScript 之前是不可知的。因此，为保证 JavaScript 脚本的正确执行，**在执行 JavaScript 之前，CSS 规则树必须要先准备好**（不然万一有修改 CSS 的操作呢）。

也就是说，若在构建 DOM 的中途存在阻塞 DOM 构建的 JavaScript 脚本，而此页面中还包含了外部 CSS 文件的引用，那么此时就需要等目前的 CSS 规则树（基于目前生成完的部分 DOM 树）构建完毕后，再开始 JavaScript 脚本的执行，等一切结束了，再继续 DOM 的构建。

### 重排、重绘、合成

更新了元素的几何属性（重排）

![](https://static001.geekbang.org/resource/image/b3/e5/b3ed565230fe4f5c1886304a8ff754e5.png?wh=1142*318)

更新元素的绘制属性（重绘）

![](https://static001.geekbang.org/resource/image/3c/03/3c1b7310648cccbf6aa4a42ad0202b03.png?wh=1142*286)

直接合成阶段

![](https://static001.geekbang.org/resource/image/02/2c/024bf6c83b8146d267f476555d953a2c.png?wh=1142*270)

- 重排**会改变元素的几何位置**，需要更新完整的渲染流水线，所以开销也是最大的
- 重绘只是**修改元素的颜色等非位置属性**，所以省去了布局和分层阶段，开销比重排小
- 合成只会**由已提升会合成层的 transform 或 opacity 触发，只涉及几何变换或透明度变换**，会跳过前面的流程，直接进入合成阶段，开销最小。（**transform 或 opacity 若未提升为合成层，则依然会触发 paint**）

### CPU（中央处理器）和 GPU（图形处理器）

文中反复提到了 CPU 和 GPU ，相信很多童鞋可能会产生这样的疑惑：为什么要开启硬件加速，以及 GPU 优势到底在哪里？

我们先简单的了解一下 GPU 的工作原理，GPU 处理数据的过程大概是这样的：

- 将每个复合层绘制成一个单独的图像；
- 准备层数据（尺寸、偏移量、透明度等）；
- 准备动画着色器（如果适用）；
- 将数据发送到 GPU；

从  [pu-accelerated-compositing-in-chrome](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttp%253A%252F%252Fwww.chromium.org%252Fdevelopers%252Fdesign-documents%252Fgpu-accelerated-compositing-in-chrome&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)  这篇文章可以看出，硬件合成的好处有三种：

1. GPU 上合成图层可以在涉及大量像素的绘图和合成操作中实现比 CPU（无论是在速度和功耗方面）还要好的效率。硬件专为这些类型的工作负载而设计。
2. GPU 上的内容不需要昂贵的回读（例如加速视频 Canvas2D 或 WebGL ）。
3. CPU 和 GPU 之间的并行性，可以同时运行以创建高效的图形管道。

组成缓存元素的图像会更快，而这正是 GPU 的强势之处**：它能够很快地用亚像素精度合成图像，这给动画增加了显著的平滑度**。

我们可以这么理解，GPU 是一个单独的计算机：每一个现代设备的一个重要部分实际上是一个独立的单元，有自己的处理器和自己的内存和数据处理模型。与其他应用程序或游戏一样，浏览器必须像外部设备那样与 GPU 对话。

更多 GPU 的介绍，请看这里[传送门](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%3Ftarget%3Dhttp%253A%252F%252Fwww.chromium.org%252Fdevelopers%252Fdesign-documents%252Fgpu-accelerated-compositing-in-chrome&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)，这里就不扯远了。

#### 补充：CPU 与 GPU 各自的职责

我们可以说  **CPU 所做的工作都在软件层面，而 GPU 在硬件层面**，我们可以用软件（使用 CPU ）做任何事情，但是对于图像处理，通常用硬件会更快，因为 GPU 使用图像对高度并行浮点运算做了优化。

**过程**

1. CPU 计算好显示内容提交到 GPU
2. GPU 渲染完成后将渲染结果放入帧缓冲区
3. 视频控制器会按照 VSync 信号逐行读取帧缓冲区的数据，经过可能的数模转换传递给显示器显示

<u>浏览器将从 CPU 绘制它，然后将生成的图像发送到 GPU，GPU 将其显示在屏幕上</u>。我们看到了 GPU 确实很强势，但是我们最好不要把所有东西一股脑儿抛给 GPU ，问题在于 GPU 并没有无限制处理性能，而且一旦资源用完的话，性能就会开始下降了（即使 CPU 并没有完全占用）。事实上他们有自己的职责，各司其职，各尽其才，才能发挥出更大的作用。

## 参考文献

> [浏览器层合成](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6844903966573068301%23heading-9&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [无线性能优化：Composite](https://security.feishu.cn/link/safety?target=https%3A%2F%2Ffed.taobao.org%2Fblog%2F2016%2F04%2F26%2Fperformance-composite%2F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [详谈合成层](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6844903502678867981%23heading-0&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [CSS GPU Animation](https://security.feishu.cn/link/safety?target=https%3A%2F%2Flink.juejin.cn%2F%3Ftarget%3Dhttps%253A%252F%252Fwww.smashingmagazine.com%252F2016%252F12%252Fgpu-animation-doing-it-right%252F&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [浏览器的工作原理](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fjuejin.cn%2Fpost%2F6847902222349500430&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
>
> [06 | 渲染流程（下）：HTML、CSS 和 JavaScript，是如何变成页面的？-极客时间](https://time.geekbang.org/column/article/118826)
