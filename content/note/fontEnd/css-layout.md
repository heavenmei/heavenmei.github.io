---
title: CSS 之 布局篇 (二)
subtitle: 
layout: post
date: 2022-09-02
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
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


## 2-设置斑马线表格(纯css)

`tr:nth-child(even)` 偶数子元素

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

## 3- 文本元素居中

#### 水平居中

`text-align` 一个元素中的文本行互相间的对齐方式，该属性设置文本和img标签等一些内联对象（或与之类似的元素）的居中。
- text-align的center应用在一个容器上，**只针对容器里面display为inline或者inline-block的容器**，如果里面的容器display为block，则里面的容器的内容不会居中。
- text-align具有向下传递性（**继承性**），会不断地向子元素传递。如果设置一个div，则其子div中的内容也会居中。

```html
<style>
  .box {
    width: 400px;
    height: 100px;
    background: pink;
    text-align: center;
  }
</style>
<div class="box">css 水平居中了--文本文字</div>
```

#### 垂直居中

对于单行文本，我们只需要 **line-height=height** 就可以了
```html
<style>
  .box {
    width: 300px;
    height: 300px;
    background: paleturquoise;
    line-height: 300px;
  }
</style>
<div class="box">css 垂直居中了--文本文字</div>

```
   
对于多行文本，分为两种情况，一个是父级元素高度不固定，随内容变化；另一个是父级元素高度固定。
   
父级高度不固定时，高度只能通过内部文本来撑开。可以通过**设置padding让文本看起来垂直居中**
```html
<style>
  .box {
    width: 300px;
    background: paleturquoise;
    padding: 50px 20px;
  }
</style>
<div class="box">
  css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字
</div>

```
   
父级元素高度固定时，使用**vertical-align:middle +display:table-cell** 使文字垂直居中
```html
<style>
  .box {
    width: 300px;
    height: 300px;
    background: paleturquoise;
    vertical-align: middle;
    display: table-cell;
  }
</style>
<div class="box">
  css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字
</div>

```

⚠️说明：vertical-align:middle +display:table-cell能够使单行文字、多行文字都居中。但是因为 table-cell 是 inline 类型，所以会导致原来的块级元素每个 div 一行移动到了同一行。如果需要分列两行，需要在外面额外添加容器对位置进行控制。

## 4-flex实现九宫格讲思路
利用了padding-top和flex-wrap:wrap

background-color包括盒子模型中的content+padding

但是为什么不设置height呢？因为父元素没有高度，所以定义height:30%是没有用的，且若想每个block都为正方形，最好的方式就是设置**padding-top/padding-bottom：a%，因为此时的百分比是父元素宽度的百分比**，而width也为父元素宽度的百分比，所以block可以成为正方形。

```html
<style>
  .container-flex2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .block {
    padding-top: 30%;
    margin-top: 3%;
    background-color: orange;
    width: 30%;
  }
</style>
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
```

## 5- CSS实现一个等腰三角形

宽高设置成0，边框宽度设置宽一些，设置其中三个边透明，只留一个边显示

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度，而高是边长的 $\frac{\sqrt{3}}{2} \approx 0.866$ 倍，假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

```html
<style>
  div {
    width: 0px;
    height: 0px;

    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 138.56px solid #a962ce; /*--三角形的高--*/
  }
</style>
<div></div>
```

## 6-实现扇形、圆形

圆形：border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为50%, 即 弯曲元素的边框以创建圆。 由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，不同的值将创建椭圆。

```html
<style>
  div {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: #666;
  }
</style>
<div></div>
```

扇形：利用border-radius，实现90度角的扇形。左上角是圆角，其余三个角都是直角：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。

```html
<style>
  div {
    border-radius: 80px 0 0;
    width: 80px;
    height: 80px;
    background: #666;
  }
</style>
<div></div>
```

绘制任意角度的扇形。绘制两个半圆，旋转一定角度。clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，**使用clip属性，元素必须是absolute的**

```html
<div class="shanxing shanxing1">
  <div class="sx1"></div>
  <div class="sx2"></div>
</div>
<!--*绘制一个85度扇形*/-->
<div class="shanxing shanxing2">
  <div class="sx1"></div>
  <div class="sx2"></div>
</div>
<!--*绘制一个向右扇形，90度扇形*-->
<div class="shanxing shanxing3">
  <div class="sx1"></div>
  <div class="sx2"></div>
</div>
<!--*绘制一个颜色扇形 */-->
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
  .shanxing {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: yellow;
  }

  .sx1 {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(
      0px,
      100px,
      200px,
      0px
    ); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
    border-radius: 100px;
    background-color: #f00; /*-webkit-animation: an1 2s infinite linear; */
  }

  .sx2 {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(0px, 100px, 200px, 0px);
    border-radius: 100px;
    background-color: #f00; /*-webkit-animation: an2 2s infinite linear;*/
  }

  /*绘制一个60度扇形*/
  .shanxing1 .sx1 {
    transform: rotate(-30deg);
  }
  .shanxing1 .sx2 {
    transform: rotate(-150deg);
  }

  /*绘制一个85度扇形*/
  .shanxing2 .sx1 {
    transform: rotate(-45deg);
  }
  .shanxing2 .sx2 {
    transform: rotate(-140deg);
  }

  /*绘制一个向右扇形，90度扇形*/
  .shanxing3 .sx1 {
    transform: rotate(45deg);
  }
  .shanxing3 .sx2 {
    transform: rotate(-45deg);
  }

  /*绘制一个颜色扇形 */
  .shanxing4 .sx1 {
    transform: rotate(45deg);
    background-color: #fff;
  }
  .shanxing4 .sx2 {
    transform: rotate(-45deg);
    background-color: #fff;
  }

  /*绘制一个不同颜色半圆夹角 */
  .shanxing5 .sx1 {
    transform: rotate(45deg);
    background-color: #f00;
  }
  .shanxing5 .sx2 {
    transform: rotate(-45deg);
    background-color: #0f0;
  }
</style>

```



## 7- 双栏 / 三栏布局

### 双栏布局

一个定宽栏 + 一个自适应的栏
#### float
- `float：left`： 左浮左边栏
- ` margin-left`: 右边模块 撑出内容块做内容展示
- `overflow: hidden`：为父级元素添加BFC，防止下方元素飞到上方内容
```html
<style>
    .box{
        overflow: hidden; /* 添加BFC*/
    }
    .left {
        float: left;
        width: 200px;
        background-color: gray;
        height: 400px;
    }
    .right {
        margin-left: 210px;
        background-color: lightgray;
        height: 200px;
    }
</style>
<div class="box">
    <div class="left">左边</div>
    <div class="right">右边</div>
</div>
```
#### flex:1
```css
.box{
	display: flex;
}
.left {
	width: 100px;
}
.right {
	flex: 1;
}
```


### 三栏布局
方法：
- 两边 float / absolute，中间 margin
- display: table 实现
- flex实现 （中间flex：1）
- grid网格布局

#### 两边 float / absolute，中间 margin
```html
<style>
  .wrap {
    background: #eee;
    overflow: hidden;   /* 生成BFC，计算高度时考虑浮动的元素 */
    position: relative;  /* 绝对定位 定位父元素 */
  }
  .left,
  .right {
    height: 200px;
    width: 200px;
  }

  .left {
    background: coral;
    /* 方法 1 */
    float: left;

    /* 方法 2 */
    position: absolute;
    top: 0;
    left: 0;
  }
  .right {
    background: lightblue;
    /* 方法 1 */
    float: right;

    /* 方法 2 */
    position: absolute;
    top: 0;
    right: 0;
  }
  .middle {
    margin: 0 220px;
    height: 200px;
    background: lightpink;
  }
</style>
<div class="wrap">
  <div class="left">左侧</div>
  <div class="right">右侧</div>
  <div class="middle">中间</div>
</div>


```



### 三栏布局（平均分布）


```html
<style>
  .Grid {
    display: flex;
  }

  .Grid-cell {
    flex: 1;
    /* 2. flex: 0 0 33.3%; */
    /* 3. width: 33.33% */
    background: #eee;
    margin: 10px;
  }
</style>
<div class="Grid">
  <div class="Grid-cell">1/3</div>
  <div class="Grid-cell">1/3</div>
  <div class="Grid-cell">1/3</div>
</div>

```

## 8-画 0.5px 的直线

#### scale缩放

```html
<style>
  .hr.scale-half {
    background-color: black;
    height: 1px;
    transform: scaleY(0.5);
  }
</style>
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



#### linear-gradient

```html
<style>
  .hr.scale-half {
    height: 1px;
    background: linear-gradient(0deg, #fff, #000);
  }
</style>
<div class="hr scale-half"></div>
```

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/645.png)

inear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff渐变到黑色#000，而且是线性的，在高清屏上，1px的逻辑像素代表的物理（设备）像素有2px，由于是线性渐变，所以第1个px只能是#fff，而剩下的那个像素只能是#000，这样就达到了画一半的目的。

#### box-shadow

```html
<style>
  .hr.scale-half {
    height: 1px;
    background: none;
    box-shadow: 0 0.5px 0 #000;
  }
</style>
<div class="hr scale-half"></div>

```

#### viewport

```html
<head>
  <meta name="viewport" content="width=device-width,initial-sacle=0.5" />
</head>
<style>
  .hr.scale-half {
    height: 1px;
    background: black;
  }
</style>
<div class="hr scale-half"></div>

```

其中width=device-width表示将viewport视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为1时，如iphone 6竖屏的宽度为750px，它的dpr=2，用2px表示1px，这样设置之后viewport的宽度就变成375px。但是我们可以改成0.5，viewport的宽度就是原本的750px，所以1个px还是1px，正常画就行，但这样也意味着UI需要按2倍图的出，整体面面的单位都会放大一倍。

## 9-移动端 1px 问题


**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

`window.devicePixelRatio=物理像素 /CSS像素`


目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，而我们写css样式是以设备375为参照的，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。


#### WWDC对iOS统给出的方案
   
在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。
- 优点：简单，没有副作用
- 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。

```css
border: 0.5px solid #E5E5E5;
```
   
可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。


#### 使用边框图片
- 优点：没有副作用
- 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。
   
```css
border: 1px solid transparent;
border-image: url('./../../image/96.jpg') 2 repeat;
```
   
#### 使用box-shadow实现
- 优点：使用简单，圆角也可以实现  
- 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。
```css
box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
		  1px  0  1px -1px #e5e5e5,   //右边线
		  0  1px  1px -1px #e5e5e5,   //下边线
		  -1px 0  1px -1px #e5e5e5;   //左边线
```
   


#### 使用伪元素

  - 优点：全机型兼容，实现了真正的1px，而且可以圆角。
   - 缺点：暂用了after 伪元素，可能影响清除浮动。
   

   
```css
/* 1条border */
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
   

   
```css
/*  4 条border */
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
   

#### 设置viewport的scale值
   
这个解决方案是利用viewport+rem+js 实现的。      
   - 优点：全机型兼容，直接写`1px`不能再方便
   - 缺点：适用于新的项目，老项目可能改动大
```html
<html>
  <head>
    <title>1px question</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta
      name="viewport"
      id="WebViewport"
      content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    />
    <style>
      html {
        font-size: 1px;
      }
      * {
        padding: 0;
        margin: 0;
      }
      .top_b {
        border-bottom: 1px solid #e5e5e5;
      }
      .a,
      .b {
        box-sizing: border-box;
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1.4rem;
      }
      .a {
        width: 100%;
      }
      .b {
        background: #f5f5f5;
        width: 100%;
      }
    </style>
    <script>
      var viewport = document.querySelector("meta[name=viewport]"); //下面是根据设备像素设置viewport
      if (window.devicePixelRatio == 1) {
        viewport.setAttribute(
          "content",
          "width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        );
      }
      if (window.devicePixelRatio == 2) {
        viewport.setAttribute(
          "content",
          "width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"
        );
      }
      if (window.devicePixelRatio == 3) {
        viewport.setAttribute(
          "content",
          "width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no"
        );
      }
      var docEl = document.documentElement;
      var fontsize = 32 * (docEl.clientWidth / 750) + "px";
      docEl.style.fontSize = fontsize;
    </script>
  </head>
  <body>
    <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
    <div class="b">上面的边框宽度是虚拟1像素的</div>
  </body>
</html>

```
   



## 10-移动端适配方案


适配思路：设计稿（750*1334） ---> 开发 ---> 适配不同的手机屏幕，使其显得合理

- 固定宽度，最后再viewport统一缩放处理，在不同手机上都能用
- 需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
- 固定尺寸+弹性布局，不需要缩放

#### viewport 适配

根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕，在 head 里设置viewport。

缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好。

```html
<meta name="viewport" content="width=750,initial-scale=0.5">
```
为了适配其他屏幕，需要动态的设置 initial-scale 的值。`initial-scale = 屏幕的宽度 / 设计稿的宽度`

```html
<head>
  <script>
      const WIDTH = 750;
      const mobileAdapter = () => {
        let scale = screen.width / WIDTH;
        let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`;
        let meta = document.querySelector("meta[name=viewport]");
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("name", "viewport");
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
      };

      mobileAdapter();

      window.onorientationchange = mobileAdapter; //屏幕翻转时再次执行
    </script>
</head>
```


#### vw / rem适配（部分等比缩放）

对于需要等比缩放的元素，CSS使用转换后的单位。对于不需要缩放的元素，比如边框阴影，使用固定单位px。

假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注，对设计稿的标注进行转换，比如页面元素字体标注的大小是40px：
- px->vw： (100/750)*40 vw。`vw` 是视口宽度的百分比，1vw 等于视口宽度的 1%。
- px->rem：根据不同屏幕宽度，设置 html 的 font-size 值。视口宽度为viewportWidth，则$fontSize=viewportWidth / 750​$。这样，设计稿中的 1px 在移动端开发中就对应 1rem。假设 html 的 font size = 1px 的话，就可以写 28 rem 了，更方便了，但是浏览器对字体大小有限制，设为 1px 的话，在浏览器中是失效的，会以 12px（或者其他值） 做一个计算 , 就会得到一个很夸张的结果，所以可以把 html 写的大一些。



关于换算，为了开发方便，利用自定义属性，CSS变量，注意此时，meta 里就不要去设置缩放了。

```html
<head>
  <meta
	name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
  />
  <script>
	const WIDTH = 750;
	//:root { --width: 0.133333 } 1像素等于多少 vw
	document.documentElement.style.setProperty("--width", 100 / WIDTH);

	// 1像素等于多少 rem，假设根节点fontSize 100px
	document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px';
  </script>

  <style>
	header {
	  font-size: .28rem;
	}
	div {
	  font-size: calc(28vw * var(--width));
	}
  </style>
</head>

```


使用 sass 库时，JS 处理还是一样的，但看着好看些

```css
@function px2rem($px) {
  @return $px * 1rem / 100;
}

header {
  font-size: px2rem(28);
}
```

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。

#### flex 布局

```css
<meta name="viewport" content="width=device-width">
<style>
	section {
	  display: flex;
	}
</style>
```


## 11-css 切换主题

### 主题层

这应该是实现主题功能的一种最常用的手段了。首先，我们的站点会有一个最初的基础样式（或者叫默认样式）；然后通过添加一些后续的额外的CSS来覆盖与重新定义部分样式。


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

然后，假设我们的某个主题的样式文件存放于 `theme.*` 文件，对应于 `components.tabs`，`theme.tabs` 文件内容如下

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


### 有状态的主题

该方式可以实现基于条件选择不同的主题皮肤，并允许用户在客户端随时切换主题。非常适合需要客户端样式切换功能，或者需要对站点某一部分（区域）进行独立样式设置的场景。

```css
/* SCSS */
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

这里我们把`.t-red`与`.t-blue`称为 Tab 元素的上下文环境（context）。Tab 元素会根据 context 的不同展示出不同的样式。最后我们给`body`元素加上这个开关

```html
<body class="t-red">
    <ul class="tabs">...</ul>
</body>
```

优点

- 将许多主题放在了同一处代码中
- 非常适合主题切换的功能
- 非常适合站点局部的主题化
- 可以实现将主题应用于所有元素

缺点

- 有时有点也是缺点，将许多主题混杂在了同一块代码中
- 可能会存在冗余


### 配置主题

这种方式其实是在开发侧来实现主题样式的区分与切换的。基于不同的配置，配合一些开发的自动化工具，我们可以在开发时期根据配置文件，编译生成不同主题的 CSS 文件。

它一般会结合使用一些 CSS 预处理器，可以对不同的 UI 元素进行主题分离，并且向客户端直接提供主题样式下最终的 CSS。

以 Sass 为例，首先会有一份 Sass 的配置文件，例如`settings.config.scss`，在这份配置中定义当前的主题值以及一些其他变量

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

这时，我们在其之前引入相应的配置文件后，Tab 组件就会呈现出红色主题。

```css
@import "settings.config";
@import "components.tabs";
```

当然，我们也可以把我们的`settings.config.scss`做的更健壮与易扩展一些

```css
$config: (
    theme: red,
    env: dev,
)

/* 从$config中获取相应的配置变量 */
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


### 主题调色板

这种方式有些类似于我们绘图时，预设了一个调色板（palette），然后使用的颜色都从其中取出一样。

在实现主题功能时，我们也会有一个类似的“调色板”，其中定义了主题所需要的各种属性值，之后再将这些信息注入到项目中。

当你经常需要为客户端提供完全的定制化主题，并且经常希望更新或添加主题时，这种模式会是一个不错的选择。


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


### 用户定制化

这种模式一般会提供一个个性化配置与管理界面，让用户能自己定义页面的展示样式。

首先，页面中支持自定义的元素会被预先添加 util class，例如 Tab 元素中的`u-user-color-background`

```html
<ul class="tabs u-user-color-background">...</ul>
```

此时，`u-user-color-background`还并未定义任何样式。而当用户输入了一个背景色时，我们会创建一个标签，并将 hex 值注入其中，这时用户就得到了一个红色的 Tab。

```html
<style id="my-custom">
    .u-user-color-background {        
	  background-color: #00ffff;    
	}
</style>
```


优点

- 不需要开发人员的输入信息（是用户定义的）
- 允许用户拥有自己“独一无二”的站点
- 非常实用

缺点

- 不需要开发人员的输入信息也意味着你需要处理更多的“不可控”情况
- 会有许多的冗余
- 会浪费 CSS 的带宽
- 失去部分 CSS 的浏览器缓存能力


## 12-滚动条放左侧

[MDN scrollbar-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scrollbar-width)

#### direction:rtl
正常情况下滚动条都是在页面的右侧显示

让滚动的父元素使用`direction:rtl`（或与主方向相反的方向），并让滚动元素的内部切换回正常值。

[MDN direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction)


```css
.scroll-wrap {
	overflow: scroll;
	scrollbar-width: thin;  /* 滚动条变窄 */
	direction: rtl; /* 滚动条放左侧 */

	.content{
		direction: ltr; /* 内容变回正常 */
	}
}
```



#### 旋转角度

将父对象旋转180度，然后将子对象再向后旋转180度，使其再次垂直

```css
.scroll-wrap {
	overflow: scroll;
	scrollbar-width: thin;  /* 滚动条变窄 */
	transform: rotate(180deg);

	.content{
		transform: rotate(-180deg);
	}
}
```



## 13-修改SVG颜色
 [修改svg图标颜色方法](https://www.cnblogs.com/mengff/p/17490650.html "发布于 2023-06-19 11:09")
#### fill=currentColor
 `fill='currentColor'` 或 css 修改fill。 **仅对内联svg有效**，对background中svg无效。


#### mask
但是在伪元素或者backgound中，这fill不生效。因为：

1. 样式不允许跨文档级联
2. 当使用  （或 `content` ，或任何引用 svg 的 css 图像属性）时，出于安全考虑，浏览器不会公开 svg 文档

解决方案：使用 **SVG 蒙版** 和背景颜色的变通方法。并没有修改 SVG DOM 本身，只是在更改背景颜色。

 [在 :before 或 :after CSS 中更改 SVG 填充颜色](https://segmentfault.com/q/1010000042997976)

```css
a::before {
  content: url("/icons/links.svg");
  color: #f68800; /* 不生效 */
}


/* 使用蒙版 让svg 填充颜色 */
a::before {
  content: " ";
  background-color: #f68800;
  mask: url("/icons/links.svg") no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}
```


#### filter 纯黑白
```css
.icon{
	filter: brightness(0); /* 纯黑 */
	filter: brightness(100); /* 纯白 */
}
```


