---
title: 面试
subtitle: 
layout: post
date: 2022-08-29
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---

## css

### 基础

#### 盒子塌陷

**盒子塌陷是什么？**

本应该在父盒子内部的元素跑到了外部。当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其它非浮动的可见元素时，父盒子的高度就会直接塌陷为零， 我们称这是**CSS高度塌陷**。

**清除浮动是什么？**

清除浮动其实叫做闭合浮动更合适，因为是把浮动的元素圈起来，让父元素闭合出口和入口不让他们出来影响其他的元素。

**解决方法**

1. 直接设置父元素的高度
   优势：极其简单
   弊端：必须要知道父元素高度是多少，非自适应，浏览器的窗口大小直接影响用户体验

2. 设置父元素浮动
   优势：简单，代码量少，没有结构和语义化问题
   弊端：对后续元素会有影响，不易维护。

3. 为父元素设置overflow属性（<u>清除浮动</u>）
   overflow:auto; 有可能出现滚动条，影响美观。
   overflow:hidden; 可能会带来内容不可见的问题。
   优势：简单，代码量少
   弊端：如果有内容要溢出显示(弹出菜单)，也会被一同隐藏

4. 额外标签法，父盒子里最下方引入清除浮动块。最简单的有：但是我们并不推荐，因为其引入了不必要的冗余元素 。（<u>清除浮动</u>）
   
   ```css
   <br style="clear:both;"/>    
   ```

5. 父元素设置display:table
   优势：不影响结构与表现的分离，语义化正确，代码量少
   弊端：盒模型属性已经改变，会造成其他问题

6. **使用after伪元素清除浮动**（<u>清除浮动</u>）
   
   ```css
   .box:after {
       content:".";  /*尽量不要为空，一般写一个点*/
       height:0;     /*盒子高度为0，看不见*/
       display:block;    /*插入伪元素是行内元素，要转化为块级元素*/
       visibility:hidden;      /*content有内容，将元素隐藏*/
       clear:both;  
   }
   .box {
       *zoom: 1;   /*  *只有IE6,7识别 */
   }
   ```
   
   但是这个方法IE6，7不识别，要进行兼容，使用zoom:1触发 hasLayout来清除浮动
   代表网站：百度、淘宝、网易等优势：不破坏文档结构，没有副作用
   弊端：代码量多

7. **使用before和after双伪元素清除浮动**（<u>清除浮动</u>）
   
   ```css
   .cf:before,.cf:after {
      content:"";
      display:table;
   }
   .cf:after { clear:both; }
   ```
   
   优势：不破坏文档结构，没有副作用
   弊端： 代码量多
   注意：display:table本身无法触发BFC，但是它会产生匿名框(anonymous boxes)，而匿名框中的display:table-cell可以触发BFC，简单说就是，触发块级格式化上下文的是匿名框，而不是display:table。所以通过display:table和display:table-cell创建的BFC效果是不一样的。给外部盒子的after伪元素设置clear属性，再隐藏它
   
   这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。这也是bootstrap框架采用的清除浮动的方法。

> 方案6&7 区别

如果伪元素content的内容为空, 那么display:block处理BFC后仍旧存在margin重叠问题。而display:table则拥有良好表现。最后两种内容生成的方式是比较推荐使用的，如果需要考虑margin重叠的问题，就用方案7，不考虑就用方案6。

#### BFC

**疑问**

1. 为什么会margin边距重叠？
2. overflow:hidden, 语义应该是溢出:隐藏，按道理说，子元素浮动了，但依然是在父元素里的，而父元素高度塌陷，高度为0了，子元素应该算是溢出了，为什么没有隐藏，反而撑开了父元素的高度？
3. 为什么display:table也能清除浮动，原理是什么？

**BFC布局规则：**

1. 内部的Box会在垂直方向，按照从上到下的方式逐个排列。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6. 计算BFC的高度时，浮动元素的高度也参与计算

**触发BFC的条件**

1. 根元素
2. float 取值 none 以外的值
3. overflow 除了visible 以外的值（hidden，auto，scroll ）
4. display (table-cell，table-caption，inline-block，flex，inline-flex)
5. position（absolute，fixed）

详解：[清除浮动BFC](https://blog.csdn.net/FE_dev/article/details/68954481?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164532962716780366544022%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164532962716780366544022&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-68954481.first_rank_v2_pc_rank_v29&utm_term=clear+%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8&spm=1018.2226.3001.4187)

#### IFC

 **IFC基本概念**

 IFC: 行内格式化上下文

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/v2-802af4d163388892cec633645d00b58a_1440w.png)

**IFC布局规则**

 （1）内部的 `Box` 会在水平方向，从含块的顶部开始一个接着一个地放置；
​ （2）这些 `Box` 之间的水平方向的 `margin`，`border` 和`padding` 都有效；
​ （3）`Box` 垂直对齐方式：以它们的底部、顶部对齐，或以它们里面的文本的基线（`baseline`）对齐（默认， 文本与图片对其），例：`line-height` 与 `vertical-align`。

#### 伪类&伪元素

**伪类**：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。
        当用户悬停在指定元素时，可以通过:hover来描述这个元素的状态，虽然它和一般css相似，可以为 已有元素添加样式，但是它只有处于DOM树无法描述的状态下才能为元素添加样式，所以称为伪类。

**伪元素**：用于创建一些不在DOM树中的元素，并为其添加样式。
        我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在DOM文档中。

**伪类与伪元素的区别**

- 表示⽅法
  - CSS2 中伪类、伪元素都是以单冒号:表示,
  - CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
  - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
  - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
  - CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
- 定义不同
  - 伪类即假的类，可以添加类来达到效果
  - 伪元素即假元素，需要通过添加元素才能达到效果
- 总结:
  - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
  - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
  - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
  - 是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类
  - 伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。
  - 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
  - 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。

#### 行内元素&块级元素

**块级元素**

1.总是从新的一行开始，即各个块级元素独占一行，默认垂直向下排列；

2.高度、宽度、margin及padding都是可控的，设置有效，有边距效果；

3.宽度没有设置时，默认为100%；

4.块级元素中可以包含块级元素和行内元素。

**行内元素**

1.和其他元素都在一行，即行内元素和其他行内元素都会在一条水平线上排列；

2.width，height设置无效，由内容决定。

3.根据标签语义化的理念，行内元素最好只包含行内元素，不包含块级元素。

4.margin 和 padding

- 水平方向：水平方向上，都有效
- 垂直方向：垂直方向上，都无效；（`padding-top` 和 `padding-bottom` 会显示出效果，但是高度不会撑开，不会对周围元素有影响）

**转换**

当然块级元素与行内元素之间的特性是可以相互转换的。HTML可以将元素分为行内元素、块状元素和行内块状元素三种。

使用display属性能够将三者任意转换：

 (1)display:inline;转换为行内元素；

(2)display:block;转换为块状元素；

(3)display:inline-block;转换为行内块状元素。

#### 盒模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：`外边距（margin）`、`边框（border）`、`内边距（padding）`、`实际内容（content）`四个属性。
CSS盒模型：**标准模型 + IE模型**

**W3C盒子模型(标准盒模型)**

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/v2-ad08059be04698f8a70d2729cea8ec18_1440w.png)

**IE盒子模型(怪异盒模型)**

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/v2-d755200d4f64ca2463b75375a2b47d26_1440w.png)

**标准模型和IE模型的区别**

 计算宽度和高度的不同
​ 标准盒模型：盒子总宽度/高度 = `width/height + padding + border + margin`。（ 即 width/height 只是 内容高度，不包含 padding 和 border 值 ）
​ IE盒子模型：盒子总宽度/高度 = `width/height + margin = (内容区宽度/高度 + padding + border) +              margin`。（ 即 width/height 包含了 padding 和 border 值 ）

**CSS如何设置这两种模型**

标准：`box-sizing: content-box;` ( 浏览器默认设置 )
IE： `box-sizing: border-box;`

**JS如何获取盒模型对应的宽和高**

（1）`dom.style.width/height` 只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。
（2）`dom.currentStyle.width/height` （只有IE兼容）取到的是最终渲染后的宽和高
（3）`window.getComputedStyle(dom).width/height` 同（2）但是多浏览器支持，IE9 以上支持。
（4）`dom.getBoundingClientRect().width/height` 也是得到渲染后的宽和高，大多浏览器支持。IE9 以上支持，除此外还可以取到相对于视窗的上下左右的距离。
（6）`dom.offsetWidth/offsetHeight` 包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。

#### 样式优先级

**样式类型分为三类**

1. 行间
2. 内联`<style>`
3. 外部`<link rel="stylesheet" href="css/style.css">`

**选择器类型**

- 1、ID　　#id
- 2、class　　.class
- 3、标签　　p
- 4、通用　　*
- 5、属性　　[type="text"]
- 6、伪类　　:hover
- 7、伪元素　　::first-line
- 8、子选择器、相邻选择器

**权重计算规则**

第一等：代表内联样式，如: style=””，权值为1000。
第二等：代表ID选择器，如：#content，权值为0100。
第三等：代表类，伪类和属性选择器，如.content，权值为0010。
第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
继承的样式没有权值。

**比较规则**

- 选择器都有一个权值，权值越大越优先；
- 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
- 继承的 CSS 样式不如后来指定的 CSS 样式；
- 在同一组属性设置中标有!important规则的优先级最大
- 通配符、子选择器、相邻选择器等的。虽然权值为0000，但是也比继承的样式优先。

**！important**

1. !important 的作用是提升优先级，换句话说。加了这句的样式的优先级是最高的（比内联样式的优先级还高)。

```xml
<style> 
p{
    color:red !important;
} 
</style>
<p style="color:blue;">我显示红色</p>
```

1. ie7+和别的浏览器对important的这种作用的支持度都很好。只有ie6有些bug

```cpp
p{
      color:red !important;
      color:blue;    
 }//会显示blue
```

但是这并不说明ie6不支持important，只是支持上有些bug。看下面

```cpp
p{
     color:red !important;  
}
p{
    color:blue;  
} //这样就会显示的是red。说明ie6还是支持important的。</pre>
```

#### zoom:1的原理运用

zoom是IE专用属性，firefox等是不支持的。它的本来作用是设置或检索对象的缩放比例，但这作用几乎用不到。

可以让网页实现IE7中的放大缩小功能。比如你想让你的网页缩小为原来的一半，那么就在body中加入style="zoom:0.5"

设<u>置zoom:1可以在IE6下清除浮动、解决margin导致的重叠等问题。</u>

zoom:1就是IE6 专用的 触发 haslayout 属性的。hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可能的子孙元素进行尺寸计算和定位。

hasLayout对于内联元素也可以有效果，当内联元素的hasLayout为true的时候，可以给这个内联元素设定高度和宽度并得到期望的效果。具体关于hasLayout的知识点，可以另外搜索。

```css
.box {
    *zoom: 1;   /*  *只有IE6,7识别 */
}
```

zoom是设置或检索对象的缩放比例。设置或更改一个已被呈递的对象的此属性值将导致环绕对象的内容重新流动。

虽然此属性不可继承，但是它会影响对象的所有子对象( children )。这种影响很像 background 和 filter 属性导致的变化。

此属性对于 currentStyle 对象而言是只读的，对于其他对象而言是可读写的。

当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。

### 布局

#### 元素垂直水平居中的实现方式

1. **绝对定位+css3 transform:translate(-50%，-50%)**
   
   ```css
   .wrap{
     position:relative;
   }
   .child{
     position: absolute;
     top:50%;
     left:50%;
     -webkit-transform:translate(-50%,-50%);
   }
   ```

2. **css3 的flex布局**
   
   ```css
   .wrap{
     display:flex;
     justify-content:center;
   }
   .child{
     align-self:center;
   }
   ```

3. **table布局**
   
   ```css
   <div class="wrap">
      <div class="child">
             <div>sadgsdgasgd</div>
      </div>
   </div>
   .wrap{
     display:table;
     text-align:center;
   }
   .child{
     background:#ccc;
     display:table-cell;
     vertical-align:middle;
   }
   .child div{
       width:300px;
       height:150px;
       background:red;
       margin:0 auto;
       line-height:150px;//文字居中
   }
   ```


#### 文本元素如何居中

**文字水平居中  text-align**

该属性规定元素中的文本的水平对齐方式，它会影响一个元素中的文本行互相间的对齐方式。(left、right、center）
该属性设置文本和img标签等一些内联对象（或与之类似的元素）的居中。

特点：

1）应用在一个容器上，它<u>只针对容器里面的文字以及容器里面的display为inline或者inline-block的容器，如果里面的容器display为block，则里面的容器的内容不会居中</u>。

2）<u>块元素继承</u>，如果设置一个div，则其子div中的内容也会居中。

**文本垂直居中**

单行文字垂直居中
    对于单行文本，我们只需要将<u>文本行高(line-height属性)和所在区域高度(height)设置一致</u>就可了

多行文本垂直居中

- 父级元素高度不固定，随着内容变化；
  父级高度不固定的时，高度只能通过内部文本来撑开。所以，我们可以通过设置内填充（padding）的值来使文本<u>看起来垂直居中</u>，只需设置padding-top和padding-bottom的值相等：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css 垂直居中</title>
        <style>
            .box {
                width: 300px;
                margin: 50px auto;
                background: paleturquoise;
                padding: 50px 20px;
            }
        </style>
    </head>
    <body>
        <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字</div>
    </body>
</html>
```

- 父级元素高度固定
  使用`vertical-align:middle` `display:table-cell` 使文字垂直居中
  说明：vertical-align:middle +display:table-cell能够使单行文字、多行文字都居中。但是因为 table-cell 是 inline 类型，所以会导致原来的块级元素每个 div 一行移动到了同一行。如果需要分列两行，需要在外面额外添加容器对位置进行控制。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css 垂直居中</title>
        <style>
            .box {
                width: 300px;
                height: 300px;
                background: paleturquoise;
                vertical-align:middle;
                display:table-cell;
            }
        </style>

    </head>
    <body>
        <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字。</div>
    </body>
</html>
```


#### 设置斑马线表格(纯css)

`:nth-child(even/odd)`

```css
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>斑马线表格</title>
 <style type="text/css">
 *{
  margin: 0;
  padding: 0;
  /*清处浏览器默认设置*/
 }
 table{
  /*表格的外边距和大小*/
  margin: 10px 0 0 0;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  /*collapse 表格单元格边框合并 
   border-spacing 表格单元格间距为零
  */
 }
 caption{
  font: 30px "楷体";
  padding: 5px;
  /*表格标题*/
 }
 td{
  width: 32%;
  height: 50px;
  /*单元格大小*/
 }
 tbody td{
   border: 1px solid;
   /*表格主体的边框*/
 }
 thead{
  background-color: #A2A5A7;
  /*表格头部*/
 }
 tr:hover{
  background-color: #66D9EF;
  cursor: pointer;
  /*鼠标悬停在表格上时，表格的背景和鼠标的形状*/
 }
 table tbody tr:nth-child(even){
  background-color: #8F908A;
  box-shadow: inset 0 5px rgba(255,255,255,0.5);
  /*even为偶数行 odd为奇数行
    设置表格的主体部分偶数行的样式
    shadow 阴影  inset将外部阴影改为内部阴影
  */
 }
 thead tr th:first-child
 {
  /*表头部分th 第一个th左上角设置圆角*/
  border-radius: 15px 0 0 0;
 }
 thead tr td:last-child{
  /*最后一个单元格右上角设置圆角*/
  border-radius: 0 15px 0 0;
 }
 </style>
</head>
<body>
 <table>
 <caption>斑马线表格</caption>
 <thead>
  <tr>
   <th></th>
   <td></td>
   <td></td>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
  <tfoot>
   <tr>
    <td></td>
    <td></td>
    <td></td>
   </tr>
  </tfoot>
 </table>
</body>
</html>
```


#### 用flex实现九宫格讲思路

利用了padding-top和flex-wrap:wrap，当设置background-color时，是包括盒子模型中的content和padding的，但是为什么不设置height呢？因为父元素没有高度，所以定义height:30%是没有用的，且若想每个block都为正方形，最好的方式就是设置padding-top/padding-bottom：a%，因为此时的百分比是父元素宽度的百分比，而width也为父元素宽度的百分比，所以block可以成为正方形。

```html
<!DOCTYPE html>
<html>
<style>
.block {
    padding-top: 30%;
    margin-top: 3%;
    border-radius: 10%;
    background-color: orange;
    width: 30%;
}
.container-flex2  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
<body>
   <div class="container-flex2">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
</html>
```

#### CSS实现一个等腰三角形

主要是通过把宽高设置成0，边框宽度设置宽一些，设置其中三个边透明，只留一个边显示

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度，而高是边长的3^(1/2)/2倍，约等于0.866……假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>测试</title>
  <style type="text/css">
    div {
       width:0px;height:0px;margin:100px auto;
       border-left:80px solid transparent; 
       border-right:80px solid transparent; 
       border-bottom:138.56px solid #A962CE; /*--三角形的高--*/
    }
  </style>
</head>
<body>
  <div>
  </div>
</body>
</html>
```

**扩展：**

用CSS实现一个等边三角形：

根据各个边之间的长度关系，我们易知：需要展示的边框的宽度：相邻的透明的边框的宽度 = √3 ：1

```css
.triangle{
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;;
  border-top: 17.32px solid transparent;
  border-bottom: 17.32px solid red; 
}
```


#### 实现扇形、圆形

**圆形**：

border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为为50%

原理：border-radius: 50% 弯曲元素的边框以创建圆。
由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，不同的值将创建椭圆。

```html
<div class="circle"></div>
<style>
  .circle {
     border-radius: 50%;
     width: 80px;
     height: 80px;
     background: #666;
  }
</style>
```

**扇形**：

1. 利用border-radius，实现90度角的扇形：左上角是圆角，其余三个角都是直角：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。

```html
<div class="sector"></div>
<style>
.sector{
  border-radius:80px 0 0;
  width: 80px;
  height: 80px;
  background: #666;
}</style>
```

2. 绘制任意角度的扇形

```html
<div class="shanxing shanxing1">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个85度扇形*/--p>
<div class="shanxing shanxing2">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个向右扇形，90度扇形*-->
<div class="shanxing shanxing3">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个颜色扇形 */--p>
<div class="shanxing shanxing4">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--/*绘制一个不同颜色半圆夹角 */-->
<div class="shanxing shanxing5">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<style>
.shanxing{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: yellow;
}

.sx1{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(0px,100px,200px,0px); 
    /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
    border-radius: 100px;
    background-color: #f00;
    /*-webkit-animation: an1 2s infinite linear; */
}

.sx2{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(0px,100px,200px,0px);
    border-radius: 100px;
    background-color: #f00;
    /*-webkit-animation: an2 2s infinite linear;*/
}

/*绘制一个60度扇形*/
.shanxing1 .sx1{transform: rotate(-30deg);}
.shanxing1 .sx2{transform: rotate(-150deg);}

/*绘制一个85度扇形*/
.shanxing2 .sx1{transform: rotate(-45deg);}
.shanxing2 .sx2{transform: rotate(-140deg);}

/*绘制一个向右扇形，90度扇形*/
.shanxing3 .sx1{transform: rotate(45deg);}
.shanxing3 .sx2{transform: rotate(-45deg);}

/*绘制一个颜色扇形 */
.shanxing4 .sx1{transform: rotate(45deg);background-color: #fff;}
.shanxing4 .sx2{transform: rotate(-45deg);background-color: #fff;}

/*绘制一个不同颜色半圆夹角 */
.shanxing5 .sx1{transform: rotate(45deg);background-color: #f00;}
.shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0; }      
</style>
```

**clip:**

clip属性只能在元素设置了"position:absolute ”或者“ position:fixed ”属性起作用；如果先有" overflow:visible "，clip属性不起作用。
**rect()属性的top和bottom指定的偏移量是从元素盒子顶部边缘算起的；left和right指定的偏移量是从元素盒子左边边缘算起的

![|200](https://atts.w3cschool.cn/attachments/image/20170619/t_CLIP.png)

**clip-path**:

是CSS3中的属性，比旧版本的clip更加强大，但它的缺点就是兼容性，ie是完全不支持的，而webkit内核的浏览器，需要加上内核前缀-webkit-

```css
clip-path:polygon(x y,x1 y1....,xn yn)  //多边形
clip-path:circle( r at x y) //圆形
clip-path:ellipse( r1 r2 at x y) //椭圆
clip-path: inset(top right bottom left round top-radius right-radius bottom-radius left-radius) 
```


## JavaScript

1. **let const var** 
   
   变量提升:编译阶段会找出所有声明（暂时性死区，undefined）
   
   作用域
   
   重复声明
   
   const初始化不可更改、对象而言是引用值（不可更改指向、变量可更改值）

2. **js数据类型 判断数据类型的方法**
   
   String、Number、Boolean、Null、Undefined、Object、Symbol
   
   - typeof （以上6种）
   - instanceof 原型链上是否存在
   - constructor 原型对象上的属性，指向构造函数，根据实例对象寻找属性
   - Object.prototype.toString.call() [Object Object]

3. **原型链  继承**
   
   - 原型链继承
     
     ```js
     function Father(){}
     function Child(){}
     Child.prototype = new Father()
     ```
   
   - 原型继承 (实例间共享属性)
     
     ```js
     Object.create();
     
     function object(Father){
         function Child(){}
         Child.prototype = Father;
         return new Child();
     }
     ```
   
   - 盗用构造函数继承 （不可继承父原型链方法，不可复用构造函数）
     
     ```js
     function Father(){}
     function Child(){
         Father.call(this);
     }
     ```
   
   - 组合继承 (个别属性共享、执行两次构造函数)
     
     ```js
     function Father(){}
     function Child(name,age){
         Father.call(this,name);
     }
     Child.prototype = new Father();
     ```
   
   - 寄生式继承 (添加新的属性和方法)
     
     ```js
     function createAno(father){
         let child = Object.create(father);
         child.sayHi = function(){};//增强
         return child；
     }
     ```
   
   - 寄生式组合继承
     
     ```js
     function createAno(child,father){
         let clone = Object.create(father);
         clone.constructor = child;
         child.prototype = clone;
     }
     ```

4. **闭包 作用域链**
   
   使用了另一个函数作用域变量的函数
   
   原理：外部函数的活动对象加入闭包的作用域链，导致外部函数的活动对象在执行完后不能被销毁，因为被闭包引用。但上下文的作用域链会被销毁
   
   场景：callback、promise、setTimeout、return Function
   
   作用域链：一个包含指针的列表，指向一个变量对象

5. **promise** **aysnc/await** **generator**

6. **new 的过程**

7. **eventloop 浏览器、 eventloop node**

8. **一个url输入后发生了什么**

9. **vue双向数据绑定**

10. **vue23 diff**

11. **0.1+0.2为什么不等于0.3**

12. **前端性能优化方案**

13. **call、apply、bind区别，bind再bind this指向谁**

**柯里化和偏函数的区别**

**判断数据类型的方法**

**往数组头部添加元素的方法**

**instanceof原理**

**let变量提升暂时性死区**

**节流/防抖的区别**

**浏览器渲染机制**

**浏览器跨域方案**

**浏览器同源策略**

**浏览器缓存机制**

**常见网站攻防**

**虚拟dom和真实dom性能和效率**

**new Vue做了什么(口喷 _init()函数 )**

**双向绑定(vue2/vue3)**

**手写深克隆**

**promise原理**

**vue3与vue2的区别**

**react this.setState useState区别**

**react.memo 和 pureComonent区别**

**useState如何更新拿到最新值**

**useMomo 和 useCallback区别**

**useEffect第二个参数？对应class哪些生命周期？**

**webpack优化配置**

**webpack hash chunkhash contenthash**

**babel执行原理**

**为什么vite比webpack快**

**webpack Tapable发布订阅原理**

**webpack编译流程**

**typescript type interface区别**

**typescript ReadOnly实现**

**js大文件上传解决方案**

**移动端轮播方案**

**长列表滚动加载优化**

**margin塌陷如何作用到横向**

**leetcode 20 和 165**

**取min~max随机整数 手写**

**let怎么支持的块级作用域**

**leetcode 17**

**vue $nextTick原理**

**vue 侦听变化的策略(push + pull) 精细化渲染**

**react useEffect替代了哪几个生命周期**

**reducer(直接说reducer怎么实现回溯的 就不往下问了)**

**类组件和函数式组件的区别**

**useCallback和useMemo区别**

**useEffect参数的区别**

**vue 生命周期 & 父子组件生命周期...（都2022了）**

**手写二叉搜索树**

**手写翻转列表**

**为什么null的typeof 是object呢**

**object和map的区别**

**object的快慢属性**

**object key 字符串和number的顺序**

**V8 垃圾回收，什么场景会一直进入新生代但是没进入老生代**

**假如点击事件，弹出不同域名url（跨域），但是要拼上不可重复的自增数如何实现**

**12个瓶子 有一个不一样重 用三次天平 查出来（PDD的这道题感觉是搞心态的）**

**实现一个组件 给时间 回调 format 一秒render一下 按照format 到时间了执行callback**

**redux原理 pureComponent原理**

**transform translate transition 区别**

**bigint Polyfill（大数相加？）**

**手写获取cookie（脑子一热写成navigator.cookie 尬住 正则写不出）**

**项目怎么推进，落地过程里遇到了什么事，「一个项目 投入了大精力 反馈不好 你不难受吗」**

**一个架构 run起来才是有价值的**

**for of for in区别**

**如何让一个对象 既不能修改属性 也不能添加属性**

**多个请求并发要怎么做**

**class 和 es5 function 区别**

**回文字符串最大子串**

**vue2的computed和vue3的watcheffect有没有类似 扣源码**

**vue3收集依赖方式**

**手写  观察者模式和发布订阅模式 有什么区别（eventbus就是发布订阅吧）**

**webpack打包中间状态是什么样的 在转化为目标规范之前**

**ts any unknow never区别**

**进程 线程 协程关系**

**vue的complier产生了啥**

**如何向小白介绍vue组件export的东西**

**后端给你一个10M的数据对象 你怎么优化处理放到vue data里**

**谈谈你对前端工程化的理解**

一个10M的string是放在堆里还是栈里？为什么？
