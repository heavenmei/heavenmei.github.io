---
title: CSS面试 之 布局篇 (二)
subtitle: 
layout: post
date: 2022-09-02
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---
## 1-未知高度元素居中

#### 绝对定位+ transform:translate(-50%，-50%)

```css
.wrap{
  position:relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
```

#### flex布局

```css
.wrap{
  display:flex;
  justify-content:center;
}
.child{
  /* 弹性元素 自身垂直对齐 方式 */
  align-self: center;
}
```


#### table布局

```html
<style>
  .wrap {
    border: 1px solid black;
    width: 400px;
    height: 500px;

    display: table;
    text-align: center;
  }
  .child {
    background: #ccc;
    /* 填充整个table */
    display: table-cell;
    /* 子元素 垂直居中 */
    vertical-align: middle;
  }
  .child div {
    width: 300px;
    height: 150px;
    background: red;
    /* 自身水平居中 */
    margin: 0 auto;
  }
</style>

<div class="wrap">
  <div class="child">
    <div>sadgsdgasgd</div>
  </div>
</div>
```


## 2 设置斑马线表格(纯css)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>斑马线表格</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0; /*清处浏览器默认设置*/
      }
      table {
        /*表格的外边距和大小*/
        margin: 10px 0 0 0;
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse; /*collapse 表格单元格边框合并    border-spacing 表格单元格间距为零  */
      }
      caption {
        font: 30px "楷体";
        padding: 5px; /*表格标题*/
      }
      td {
        width: 32%;
        height: 50px; /*单元格大小*/
      }
      tbody td {
        border: 1px solid; /*表格主体的边框*/
      }
      thead {
        background-color: #a2a5a7; /*表格头部*/
      }
      tr:hover {
        background-color: #66d9ef;
        cursor: pointer; /*鼠标悬停在表格上时，表格的背景和鼠标的形状*/
      }
      table tbody tr:nth-child(even) {
        background-color: #8f908a;
        box-shadow: inset 0 5px rgba(255, 255, 255, 0.5); /*even为偶数行 odd为奇数行    设置表格的主体部分偶数行的样式    shadow 阴影  inset将外部阴影改为内部阴影  */
      }
      thead tr th:first-child {
        /*表头部分th 第一个th左上角设置圆角*/
        border-radius: 15px 0 0 0;
      }
      thead tr td:last-child {
        /*最后一个单元格右上角设置圆角*/
        border-radius: 0 15px 0 0;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>
        斑马线表格
      </caption>
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

## 4 文本元素如何居中

**参考答案：**

1. CSS设置文字水平居中
   
   在CSS中可以使用text-align属性来设置文字水平居中。该属性规定元素中的文本的水平对齐方式，通过使用center值设置文本居中。
   
   text-align是一个基本的属性，它会影响一个元素中的文本行互相间的对齐方式。值left、right和center会导致元素中的文本分别左对齐、右对齐和居中，想要使文本居中，直接使用center即可。
   
   该属性设置文本和img标签等一些内联对象（或与之类似的元素）的居中。
   
   该属性有如下几个特点：
   
   1）text-align的center应用在一个容器上，它只针对容器里面的文字以及容器里面的display为inline或者inline-block的容器，如果里面的容器display为block，则里面的容器的内容不会居中。
   
   2）text-align具有向下传递性，会不断地向子元素传递。如果设置一个div，则其子div中的内容也会居中。
   
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>css 水平居中</title>
     <style>
       .box {       width: 400px;       height: 100px;       background: pink;       text-align:center;     }   </style>
   </head>
   <body>
     <div class="box">css 水平居中了--文本文字</div>
   </body>
   
   </html>
   ```

2. CSS设置字体垂直居中
   
   2.1 单行文字垂直居中
   
   对于单行文本，我们只需要将文本行高(line-height属性)和所在区域高度(height)设置一致就可以了
   
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>css 垂直居中</title>
     <style>
       .box {       width: 300px;       height: 300px;       background: paleturquoise;       line-height:300px;     }   </style>
   </head>
   <body>
     <div class="box">css 垂直居中了--文本文字</div>
   </body>
   </html>
   ```
   
   2.2 多行文本垂直居中
   
   说明：多行文本垂直居中分为两种情况，一个是父级元素高度不固定，随着内容变化；另一个是父级元素高度固定。
   
   \1) 父级元素高度不固定
   
   父级高度不固定的时，高度只能通过内部文本来撑开。所以，我们可以通过设置内填充（padding）的值来使文本看起来垂直居中，只需设置padding-top和padding-bottom的值相等：
   
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>css 垂直居中</title>
     <style>
       .box {       width: 300px;       margin: 50px auto;       background: paleturquoise;       padding: 50px 20px;     }   </style>
   </head>
   <body>
     <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字</div>
   </body>
   </html>
   ```

\2) 父级元素高度固定

使用vertical-align:middle +display:table-cell 使文字垂直居中

```html
   <!DOCTYPE html>
   <html>
    <head>
      <meta charset="UTF-8">
      <title>css 垂直居中</title>
      <style>
        .box {          width: 300px;          height: 300px;          background: paleturquoise;          vertical-align:middle;          display:table-cell;        }      </style>

    </head>

    <body>

      <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字。</div>

    </body>

   </html>
```

说明：vertical-align:middle +display:table-cell能够使单行文字、多行文字都居中。但是因为 table-cell 是 inline 类型，所以会导致原来的块级元素每个 div 一行移动到了同一行。如果需要分列两行，需要在外面额外添加容器对位置进行控制。

## 5 用flex实现九宫格讲思路

**参考答案：**

利用了padding-top和flex-wrap:wrap，当设置background-color时，是包括盒子模型中的content和padding的，但是为什么不设置height呢？因为父元素没有高度，所以定义height:30%是没有用的，且若想每个block都为正方形，最好的方式就是设置padding-top/padding-bottom：a%，因为此时的百分比是父元素宽度的百分比，而width也为父元素宽度的百分比，所以block可以成为正方形。

```html
<!DOCTYPE html>
<html>
<style>
.block {    padding-top: 30%;    margin-top: 3%;    border-radius: 10%;    background-color: orange;    width: 30%;}
.container-flex2  {    display: flex;    flex-wrap: wrap;    justify-content: space-around;}
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

## 6 CSS实现一个等腰三角形

**参考答案**：

主要是通过把宽高设置成0，边框宽度设置宽一些，设置其中三个边透明，只留一个边显示

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度，而高是边长的3^(1/2)/2倍，约等于0.866……假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>测试</title>
  <style type="text/css">
    div {       width:0px;height:0px;margin:100px auto;       border-left:80px solid transparent;        border-right:80px solid transparent;        border-bottom:138.56px solid #A962CE; /*--三角形的高--*/
    }  </style>
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

## 7 实现扇形、圆形

**参考答案**：

圆形：

border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为为50%

原理：border-radius: 50% 弯曲元素的边框以创建圆。 由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，不同的值将创建椭圆。

```html
<div class="circle"></div>
<style>
  .circle {     border-radius: 50%;     width: 80px;     height: 80px;      background: #666;  }
</style>
```

扇形：

1. 利用border-radius，实现90度角的扇形：
   
   原理：
   
   左上角是圆角，其余三个角都是直角：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。

```html
<div class="sector"></div>
<style>
.sector{  border-radius:80px 0 0;  width: 80px;  height: 80px;  background: #666;}</style>
```

1. 绘制任意角度的扇形

```html
<div class="shanxing shanxing1">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个85度扇形*/--p>
<div class="shanxing shanxing2">    <div class="sx1"></div>     <div class="sx2"></div></div>
<!--*绘制一个向右扇形，90度扇形*-->
<div class="shanxing shanxing3">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个颜色扇形 */--p>
<div class="shanxing shanxing4">    <div class="sx1"></div>     <div class="sx2"></div></div>
<!--/*绘制一个不同颜色半圆夹角 */-->
<div class="shanxing shanxing5">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<style>
.shanxing{    position: relative;    width: 200px;    height: 200px;    border-radius: 100px;    background-color: yellow;}

.sx1{    position: absolute;    width: 200px;    height: 200px;    transform: rotate(0deg);    clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
    border-radius: 100px;    background-color: #f00;    /*-webkit-animation: an1 2s infinite linear; */
}

.sx2{    position: absolute;    width: 200px;    height: 200px;    transform: rotate(0deg);    clip: rect(0px,100px,200px,0px);    border-radius: 100px;    background-color: #f00;    /*-webkit-animation: an2 2s infinite linear;*/
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
.shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0;       
</style>
```

## 8 旋转45度

**参考答案**：

CSS中使用**rotate**方法来实现对元素的旋转，在参数中加入角度值，旋转方式为顺时针旋转。

```html
<!DOCTYPE html>
 2 <html>
 3     <head>
 4         <meta charset="utf-8" />
 5         <title>Transform旋转</title>
 6         <style>
 7         div {
 8             width: 300px;
 9             margin: 150px auto;
10             background-color: yellow;
11             text-align: center;
12             -webkit-transform: rotate(45deg);    /* for Chrome || Safari */
13             -moz-transform: rotate(45deg);       /* for Firefox */
14             -ms-transform: rotate(45deg);        /* for IE */
15             -o-transform: rotate(45deg);         /* for Opera */
16         }
17         </style>
18     </head>
19     <body>
20         <div>黄色div</div>
21     </body>
22 </html>
```

## 9 画 0.5px 的直线

**参考答案**：

1. 使用scale缩放

```xml
<style>
.hr.scale-half {    height: 1px;    transform: scaleY(0.5);}
</style>
    <p>1px + scaleY(0.5)</p>
    <div class="hr scale-half"></div>
```

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/6069926-0898781a7edaad7d.png)

Chrome/Safari都变虚了，只有Firefox比较完美看起来是实的而且还很细，效果和直接设置0.5px一样。所以通过transform: scale会导致Chrome变虚了，而粗细几乎没有变化。但是如果加上transform-origin: 50% 100%：

```css
.hr.scale-half {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
}
```

chrome现在的效果如下

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/6069926-3329a8348be4d1d4.png)

1. 线性渐变linear-gradient

```xml
<style>
.hr.gradient {    height: 1px;    background: linear-gradient(0deg, #fff, #000);}
</style>
<p>linear-gradient(0deg, #fff, #000)</p>
<div class="hr gradient"></div>
```

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/645.png)

inear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff渐变到黑色#000，而且是线性的，在高清屏上，1px的逻辑像素代表的物理（设备）像素有2px，由于是线性渐变，所以第1个px只能是#fff，而剩下的那个像素只能是#000，这样就达到了画一半的目的。

1. boxshadow

```xml
<style>
.hr.boxshadow {    height: 1px;    background: none;    box-shadow: 0 0.5px 0 #000;}
</style>
<p>box-shadow: 0 0.5px 0 #000</p>
<div class="hr boxshadow"></div>
```

1. viewport

```xml
<meta name="viewport" content="width=device-width,initial-sacle=0.5">
```

其中width=device-width表示将viewport视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为1时，如iphone 6竖屏的宽度为750px，它的dpr=2，用2px表示1px，这样设置之后viewport的宽度就变成375px。但是我们可以改成0.5，viewport的宽度就是原本的750px，所以1个px还是1px，正常画就行，但这样也意味着UI需要按2倍图的出，整体面面的单位都会放大一倍。

## 10 css 切换主题

**参考答案**：

方式一：主题层

这应该是实现主题功能的一种最常用的手段了。首先，我们的站点会有一个最初的基础样式（或者叫默认样式）；然后通过添加一些后续的额外的CSS来覆盖与重新定义部分样式。

具体实现

首先，我们引入基础的样式 `components.*` 文件

```css
@import "components.tabs";
@import "components.buttons"
```

其中 `components.tabs` 文件内容如下

```css
.tab {
    margin: 0;
    padding: 0;
    background-color: gray;
}
```

然后，假设我们的某个主题的样式文件存放于 `theme.*` 文件：

对应于 `components.tabs`，`theme.tabs` 文件内容如下

```css
.tab {
    background-color: red;
}
```

因此，我们只需要引入主题样式文件即可

```css
@import "components.tabs";
@import "components.buttons"

@import "theme.tabs";
```

这样当前的样式就变为了

```css
.tab {
    margin: 0;
    padding: 0;
    /* background-color: gray; */
    background-color: red;
}
```

优点

- 实现方式简单
- 可以实现将主题应用与所有元素

缺点

- 过多的冗余代码
- 许多的CSS其实是无用的，浪费了带宽
- 把样式文件切分到许多文件中，更加琐碎

---

方式二：有状态的主题

该方式可以实现基于条件选择不同的主题皮肤，并允许用户在客户端随时切换主题。非常适合需要客户端样式切换功能，或者需要对站点某一部分（区域）进行独立样式设置的场景。

具体实现

还是类似上一节中 Tab 的这个例子，我们可以将 Tab 部分的 (S)CSS 改为如下形式：

```css
.tab {
    background-color: gray;

    .t-red & {
        background-color: red;
    }

    .t-blue & {
        background-color: blue;
    }
}
```

这里我们把`.t-red`与`.t-blue`称为 Tab 元素的上下文环境（context）。Tab 元素会根据 context 的不同展示出不同的样式。

最后我们给`body`元素加上这个开关

```html
<body class="t-red">
    <ul class="tabs">...</ul>
</body>
```

此时 Tab 的颜色为红色。

当我们将`t-red`改为`t-blue`时，Tab 就变为了蓝色主题。

进一步的，我们可以创建一些 (S)CSS 的 util class（工具类）来专门控制一些 CSS 属性，帮助我们更好地控制主题。例如我们使用如下的`.u-color-current`类来控制不同主题下的字体颜色

```css
.u-color-current {
    .t-red & {
        color: red;
    }

    .t-blue & {
        color: blue;
    }
}
```

这样，当我们在不同主题上下文环境下使用`.u-color-current`时，就可以控制元素展示出不同主题的字体颜色

```html
<body class="t-red">
    <h1 class="page-title u-color-current">...</h1>
</body>
```

上面这段代码会控制`<h1>`元素字体颜色为红色主题时的颜色。

优点

- 将许多主题放在了同一处代码中
- 非常适合主题切换的功能
- 非常适合站点局部的主题化
- 可以实现将主题应用于所有元素

缺点

- 有时有点也是缺点，将许多主题混杂在了同一块代码中
- 可能会存在冗余

---

方式三：配置主题

这种方式其实是在开发侧来实现主题样式的区分与切换的。基于不同的配置，配合一些开发的自动化工具，我们可以在开发时期根据配置文件，编译生成不同主题的 CSS 文件。

它一般会结合使用一些 CSS 预处理器，可以对不同的 UI 元素进行主题分离，并且向客户端直接提供主题样式下最终的 CSS。

具体实现

我们还是以 Sass 为例：

首先会有一份 Sass 的配置文件，例如`settings.config.scss`，在这份配置中定义当前的主题值以及一些其他变量

```css
$theme: red;
```

然后对于一个 Tab 组件，我们这么来写它的 Sass 文件

```css
.tab {
    margin: 0;
    padding: 0;

    @if ($theme == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}
```

这时，我们在其之前引入相应的配置文件后

```css
@import "settings.config";
@import "components.tabs";
```

Tab 组件就会呈现出红色主题。

当然，我们也可以把我们的`settings.config.scss`做的更健壮与易扩展一些

```css
$config: (
    theme: red,
    env: dev,
)

// 从$config中获取相应的配置变量
@function config($key) {
    @return map-get($config, $key);
}
```

与之前相比，这时候使用起来只需要进行一些小的修改，将直接使用`theme`变量改为调用`config`方法

```css
.tab {
    margin: 0;
    padding: 0;

    @if (config(theme) == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}
```

优点

- 访问网站时，只会传输所需的 CSS，节省带宽
- 将主题的控制位置放在了一个地方（例如上例中的`settings.config.scss`文件）
- 可以实现将主题应用于所有元素

缺点

- 在 Sass 中会有非常多逻辑代码
- 只支持有限数量的主题
- 主题相关的信息会遍布代码库中
- 添加一个新主题会非常费劲

---

方式四：主题调色板

这种方式有些类似于我们绘图时，预设了一个调色板（palette），然后使用的颜色都从其中取出一样。

在实现主题功能时，我们也会有一个类似的“调色板”，其中定义了主题所需要的各种属性值，之后再将这些信息注入到项目中。

当你经常需要为客户端提供完全的定制化主题，并且经常希望更新或添加主题时，这种模式会是一个不错的选择。

具体实现

在方式三中，我们在一个独立的配置文件中设置了一些“环境”变量，来标示当前所处的主题。而在方式四中，我们会更进一步，抽取出一个专门的 palette 文件，用于存放不同主题的变量信息。

例如，现在我们有一个`settings.palette.red.scss`文件

```css
$color: red;
$color-tabs-background: $color-red;
```

然后我们的`components.tabs.scss`文件内容如下

```css
.tabs {
    margin: 0;
    padding: 0;
    backgroung-color: $color-tabs-background;
}
```

这时候，我们只需要引入这两个文件即可

```css
@import "settings.palette.red";
@import "components.tabs";
```

可以看到，`components.tabs.scss`中并没有关于主题的逻辑判断，我们只需要专注于编辑样式，剩下就是选择所需的主题调色板（palette）即可。

优点

- 编译出来的样式代码无冗余
- 非常适合做一些定制化主题，例如一个公司采购了你们的系统，你可以很方便实现一个该公司的主题
- 可以从一个文件中完全重制出你需要的主题样式

缺点

- 由于主要通过设定不同变量，所以代码确定后，能实现的修改范围会是有限的

---

方式五：用户定制化

这种模式一般会提供一个个性化配置与管理界面，让用户能自己定义页面的展示样式。

“用户定制化”在社交媒体产品、SaaS 平台或者是 Brandable Software 中最为常见。

具体实现

要实现定制化，可以结合方式二中提到的 util class。

首先，页面中支持自定义的元素会被预先添加 util class，例如 Tab 元素中的`u-user-color-background`

```html
<ul class="tabs u-user-color-background">...</ul>
```

此时，`u-user-color-background`还并未定义任何样式。而当用户输入了一个背景色时，我们会创建一个``标签，并将 hex 值注入其中

```html
<style id="my-custom">
    .u-user-color-background {        background-color: #00ffff;    }
</style>
```

这时用户就得到了一个红色的 Tab。

优点

- 不需要开发人员的输入信息（是用户定义的）
- 允许用户拥有自己“独一无二”的站点
- 非常实用

缺点

- 不需要开发人员的输入信息也意味着你需要处理更多的“不可控”情况
- 会有许多的冗余
- 会浪费 CSS 的带宽
- 失去部分 CSS 的浏览器缓存能力

## 11 布局: 三栏布局(平均分布)

**参考答案：**

1. flex:1 : 设置父级弹性盒，子盒子三个各占1份
   
   ```html
   <div class="Grid">
      <div class="Grid-cell">1/3</div>
      <div class="Grid-cell">1/3</div>
      <div class="Grid-cell">1/3</div>
    </div>
   ```
   
   ```css
   .Grid {
    display: flex;
   }
   
   .Grid-cell {
    flex: 1;
    background: #eee;
    margin: 10px;
   }
   ```

2. flex 百分比
   
   ```html
   <div class="Grid">
      <div class="Grid-cell col3"></div>
      <div class="Grid-cell col3"></div>
      <div class="Grid-cell clo3"></div>
   </div>
   ```
   
   ```css
   .col3 {
    flex: 0 0 33.3%;
   }
   ```

3. 流式布局
   
   ```html
   <div class="Grid">
      <div class="Grid-cell col3"></div>
      <div class="Grid-cell col3"></div>
      <div class="Grid-cell clo3"></div>
   </div>
   ```
   
   ```css
   .col3 {
    width: 33.33%
   }
   ```

## 12 移动端 1px 问题

**参考答案**：

**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

```
window.devicePixelRatio=物理像素 /CSS像素
复制代码
```

目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，而我们写css样式是以设备375为参照的，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。

**解决方案**

1. WWDC对iOS统给出的方案
   
   在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。
   
   ```css
   border:0.5px solid #E5E5E5
   ```
   
   可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。
   
   **总结：**
   
   - 优点：简单，没有副作用
   - 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。

2. 使用边框图片
   
   ```css
   border: 1px solid transparent;
   border-image: url('./../../image/96.jpg') 2 repeat;
   ```
   
   **总结：**
   
   - 优点：没有副作用
   - 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。

3. 使用box-shadow实现
   
   ```css
   box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
              1px  0  1px -1px #e5e5e5,   //右边线
              0  1px  1px -1px #e5e5e5,   //下边线
              -1px 0  1px -1px #e5e5e5;   //左边线
   ```
   
   **总结**
   
   - 优点：使用简单，圆角也可以实现
   - 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。

4. 使用伪元素
   
   1条border
   
   ```css
   .setOnePx{
    position: relative;
    &::after{
      position: absolute;
      content: '';
      background-color: #e5e5e5;
      display: block;
      width: 100%;
      height: 1px; /*no*/
      transform: scale(1, 0.5);
      top: 0;
      left: 0;
    }
   }
   ```
   
   可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐，将width 设置100%，height设置为1px，然后进行在Y方向缩小`0.5倍`。
   
   4 条border
   
   ```css
   .setBorderAll{
       position: relative;
         &:after{
             content:" ";
             position:absolute;
             top: 0;
             left: 0;
             width: 200%;
             height: 200%;
             transform: scale(0.5);
             transform-origin: left top;
             box-sizing: border-box;
             border: 1px solid #E5E5E5;
             border-radius: 4px;
        }
      }
   ```
   
   同样为伪元素设置绝对定位，并且和父元素左上角对其。将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的`0.5倍`
   
   **总结：**
   
   - 优点：全机型兼容，实现了真正的1px，而且可以圆角。
   - 缺点：暂用了after 伪元素，可能影响清除浮动。

5. 设置viewport的scale值
   
   这个解决方案是利用viewport+rem+js 实现的。
   
   ```html
   <html>
    <head>
        <title>1px question</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">        
        <style>
            html {              font-size: 1px;          }                      * {              padding: 0;              margin: 0;          }          .top_b {              border-bottom: 1px solid #E5E5E5;          }          .a,.b {                      box-sizing: border-box;              margin-top: 1rem;              padding: 1rem;                              font-size: 1.4rem;          }          .a {              width: 100%;          }          .b {              background: #f5f5f5;              width: 100%;          }      </style>
        <script>
            var viewport = document.querySelector("meta[name=viewport]");          //下面是根据设备像素设置viewport
            if (window.devicePixelRatio == 1) {              viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');          }          if (window.devicePixelRatio == 2) {              viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');          }          if (window.devicePixelRatio == 3) {              viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');          }          var docEl = document.documentElement;          var fontsize = 32* (docEl.clientWidth / 750) + 'px';          docEl.style.fontSize = fontsize;      </script>
    </head>
    <body>
        <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
        <div class="b">上面的边框宽度是虚拟1像素的</div>
    </body>
   </html>
   ```
   
   **总结**
   
   - 优点：全机型兼容，直接写`1px`不能再方便
   - 缺点：适用于新的项目，老项目可能改动大

## 14 移动端适配方案

**参考答案：**

适配思路

设计稿（750*1334） ---> 开发 ---> 适配不同的手机屏幕，使其显得合理

原则

1. 开发时方便，写代码时设置的值要和标注的 160px 相关
2. 方案要适配大多数手机屏幕，并且无 BUG
3. 用户体验要好，页面看着没有不适感

思路

1. 写页面时，按照设计稿写固定宽度，最后再统一缩放处理，在不同手机上都能用
2. 按照设计稿的标准开发页面，在手机上部分内容根据屏幕宽度等比缩放，部分内容按需要变化，需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
3. 固定尺寸+弹性布局，不需要缩放

**viewport 适配**

根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕

在 head 里设置如下代码

```html
<meta name="viewport" content="width=750,initial-scale=0.5">
```

initial-scale = 屏幕的宽度 / 设计稿的宽度

为了适配其他屏幕，需要动态的设置 initial-scale 的值

```html
<head>
  <script>
    const WIDTH = 750
    const mobileAdapter = () => {      let scale = screen.width / WIDTH      let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
      let meta = document.querySelector('meta[name=viewport]')      if (!meta) {        meta = document.createElement('meta')        meta.setAttribute('name', 'viewport')        document.head.appendChild(meta)      }      meta.setAttribute('content',content)    }    mobileAdapter()    window.onorientationchange = mobileAdapter //屏幕翻转时再次执行
  </script>
</head>
```

缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好

**vw 适配（部分等比缩放）**

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换，把px换成vw。比如页面元素字体标注的大小是32px，换成vw为 (100/750)*32 vw
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

关于换算，为了开发方便，利用自定义属性，CSS变量

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750
    //:root { --width: 0.133333 } 1像素等于多少 vw
    document.documentElement.style.setProperty('--width', (100 / WIDTH))   </script>
</head>
```

注意此时，meta 里就不要去设置缩放了

业务代码里就可以写

```css
header {
  font-size: calc(28vw * var(--width))
}
```

实现了按需缩放

**rem 适配**

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

假设设计稿的某个字体大小是 40px, 手机屏幕上的字体大小应为 420/750*40 = 22.4px (体验好)，换算成 rem（相对于 html 根节点，假设 html 的 font-size = 100px,）则这个字体大小为 0.224 rem

写样式时，对应的字体设置为 0.224 rem 即可，其他元素尺寸也做换算...

但是有问题

举个 ，设计稿的标注 是40px，写页面时还得去做计算，很麻烦（全部都要计算）

能不能规定一下，看到 40px ,就应该写 40/100 = 0.4 rem,这样看到就知道写多少了（不用计算），此时的 html 的 font-size 就不能是 100px 了，应该为 (420*100)/750 = 56px，100为我们要规定的那个参数

根据不同屏幕宽度，设置 html 的 font-size 值

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750 //设计稿尺寸
    const setView = () => {      document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px'
    }    window.onorientationchange = setView    setView()  </script>
</head>
```

对于需要等比缩放的元素，CSS使用转换后的单位

```css
header {
  font-size: .28rem;
}
```

对于不需要缩放的元素，比如边框阴影，使用固定单位px

```css
header > span.active {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}
```

假设 html 的 font size = 1px 的话，就可以写 28 rem 了，更方便了，但是浏览器对字体大小有限制，设为 1px 的话，在浏览器中是失效的，会以 12px（或者其他值） 做一个计算 , 就会得到一个很夸张的结果，所以可以把 html 写的大一些

使用 sass 库时

JS 处理还是一样的，但看着好看些

```css
@function px2rem($px) {
  @return $px * 1rem / 100;
}

header {
  font-size: px2rem(28);
}
```

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。

**弹性盒适配（合理布局）**

```html
<meta name="viewport" content="width=device-width">
```

使用 flex 布局

```css
section {
  display: flex;
}
```

总结一下，什么样的页面需要做适配（等比缩放）呢

- 页面中的布局是栅格化的

换了屏幕后，到底有多宽多高很难去做设置，整体的都需要改变，所以需要整体的缩放

- 头屏大图，宽度自适应，高度固定的话，对于不同的屏幕，形状就会发生改变（放到ipad上就变成长条了），宽度变化后，高度也要保持等比例变化

以上所有的适配都是宽度的适配，但是在某些场景下，也会出现高度的适配

比如大屏，需要适配很多的电视尺寸，要求撑满屏幕，不能有滚动条，此时若换个屏幕

此时需要考虑小元素用 vh, 宽和高都用 vh 去表示，中间的大块去自适应，这就做到了大屏的适配，屏幕变小了，整体变小了（体验更好），中间这块撑满了屏幕

对于更复杂的场景，需要更灵活考虑，没有一种适配方式可以囊括所有场景。

