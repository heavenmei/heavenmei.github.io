---
title: CSS 基础学习
subtitle: 
layout: post
date: 2022-08-28
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---
## 选择器

### [分类](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2F53s812dp.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

1. 标签选择器

2. 类选择器`.`

3. id 选择器`#`

4. 复合选择器  `标签+类/id`

5. 组合选择器  `,` （#b1,.p1,h1,span,div.red{}）

6. 嵌套选择器

   - 父元素  `>`  子元素
   - 祖先`空格`后代
   - 兄  `~`  弟

7. 属性选择器

   - `[属性名]`  选择含有指定属性的元素
   - `[属性名=属性值]`  选择含有指定属性和属性值的元素
   - `[属性名^=属性值]`  选择属性值以指定值开头的元素
   - `[属性名$=属性值]`  选择属性值以指定值结尾的元素
   - `[属性名*=属性值]`  选择属性值中含有某值的元素的元素

8. 伪类/伪元素选择器  `:`

   伪类，用来描述一个元素的特殊状态（不存在的类，特殊的类） 伪元素，表示页面中一些特殊的并不真实的存在的元素（特殊的位置）
   
| 选择器                                                       | 示例           | 示例说明                                           |
| ------------------------------------------------------------ | -------------- | -------------------------------------------------- |
| [:link](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-link.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | a:link         | 选择所有未访问链接                                 |
| [:visited](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-visited.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | a:visited      | 选择所有访问过的链接                               |
| [:active](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-active.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | a:active       | 选择正在活动链接                                   |
| [:hover](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-hover.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | a:hover        | 把鼠标放在链接上的状态                             |
| [:focus](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-focus.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | input:focus    | 选择元素输入后具有焦点                             |
| [:first-letter](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-firstletter.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:first-letter | 选择每个`<p>` 元素的第一个字母                       |
| [:first-line](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-firstline.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:first-line   | 选择每个`<p>` 元素的第一行                           |
| [:first-child](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-firstchild.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:first-child  | 选择器匹配属于任意元素的第一个子元素的 `<p>` 元素   |
| [:nth-child(*n*)](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-nth-child.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:nth-child(2) | 选择每个 `<p>` 元素是其父级的第二个子元素            |
| [:before](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-before.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:before       | 在每个`<p>`元素之前插入内容，需要配合content属性使用 |
| [:after](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-after.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:after        | 在每个`<p>`元素之后插入内容，需要配合content属性使用 |
| [:lang(*language*)](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fwww.w3cschool.cn%2Fcssref%2Fsel-lang.html&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN) | p:lang(it)     | 为`<p>`元素的lang属性选择一个开始值                  |


```css
div:before {
  content: "abc";
  color: red;
}

div:after {
  content: "haha";
  color: blue;
}
div::after {
  content: "";
  display: block; //一定要
  width: 20px;
  height: 20px;
  background-color: rgb(255, 0, 0);
}
```

### 样式的继承

我们为一个元素设置的样式同时也会应用到它的后代元素上，继承是发生在**祖先和后代**之间的。

⚠️注意：并不是所有的样式都会被继承：比如 背景相关的，布局相关等的这些样式都不会被继承。

### 选择器优先级

**行内样式（1000）>ID 选择器（100）>类选择器（10）>标签选择器（1）**  

原因：首先加载标签选择器,再加载类选择器，然后加载 ID 选择器，最后加载行内样式

**CSS 优先级法则：**

- 选择器都有一个权值，权值越大越优先；
- 当权值相等时，<u>后出现的样式表设置要优于先出现的样式表设置</u>；
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
- 继承的 CSS 样式不如后来指定的 CSS 样式；
- 在同一组属性设置中标有  `!important`  规则的优先级最大；

## 单位

### 长度单位

绝对长度：
- **像素 px**： 屏幕（显示器）实际上是由一个一个的小点点构成的,不同屏幕的像素大小是不同的，像素越小的屏幕显示的效果越清晰 所以同样的 200px 在不同的设备下显示效果不一样
- **英寸 pt**

相对长度：
- **百分比**：也可以将属性值设置为相对于**其父元素属性的百分比**，设置百分比可以使子元素跟随父元素的改变而改变
- **em**：em 是**相对于元素的字体大小**来计算的，1em = 1font-size，em 会根据字体大小的改变而改变
- **rem**：rem 是**相对于根元素（html）的字体大小**来计算，HTML 根元素默认字体的大小为<u>16px</u>， 也称为基础字体大小

### 颜色单位

**颜色名**：red、orange、yellow、blue、green ... ...

**RGB 值**：每一种颜色的范围在 0 - 255 (0% - 100%) 之间，语法：`RGB(红色,绿色,蓝色)`

**RGBA**：就是在 rgb 的基础上增加了一个`a表示不透明度`，1 表示完全不透明 0 表示完全透明 .5 半透明

**十六进制的 RGB 值**：语法：`#红色绿色蓝色`  颜色浓度通过 00-ff

 如果颜色两位两位重复可以进行简写 `#aabbcc` --> `#abc`

**HSL 值 HSLA 值**

 - H 色相(0 - 360)
 - S 饱和度，颜色的浓度 0% - 100%
 - L 亮度，颜色的亮度 0% - 100%

## 常用的 CSS 属性

### 字体属性

| 属性        | 含义       | 说明                                                     |
| ----------- | ---------- | -------------------------------------------------------- |
| font-size   | 大小、尺寸 | 可以使用多种单位                                         |
| font-weight | 粗细       | normal 普通（默认） bold 粗体 自定义 400 normal 700 bold |
| font-family | 字体       | 一般建议写 3 种字体：首选、其次、备用。以逗号隔开        |
| font-style  | 样式       | normal 普通 italic 斜体                                  |
| font        | 简写       | font:font-style\|font-weight\|font-size\|font-family     |

### 文本属性

| 属性            | 含义           | 说明                                                   |
| --------------- | -------------- | ------------------------------------------------------ |
| color           | 颜色           |                                                        |
| line-height     | 行高           | 行之间的高度                                           |
| text-align      | 水平对齐方式   | 取值：left、center、right                              |
| vertical-align  | 垂直对齐方式   | 取值：top、middle、bottom 可以用于图片和文字的对齐方式 |
| text-indent     | 首行缩进       |                                                        |
| text-decoration | 文本修饰       | 取值：underline、overline、line-through                |
| text-transform  | 字母大小写转换 | 取值：lowercase、uppercase、capitalize 首字母大写      |
| letter-spacing  | 字符间距       |                                                        |
| word-spacing    | 单词间距       | 只对英文有效                                           |
| white-space     | 空白的处理方式 | 文本超出后是否换行，取值：nowrap                       |

### 背景属性

| 属性                  | 含义                 | 说明                                                                                                                |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| background-color      | 背景颜色             | 取值：transparent 透明                                                                                              |
| background-image      | 背景图片             | 必须使用 url()方式指定图片的路径                                                                                    |
| background-repeat     | 背景图片的重复方式   | 取值：repeat(默认)，repeat-x，repeat-y,no-repeat                                                                    |
| background-position   | 背景图片的显示位置   | 取值：<br />关键字：top、bottom、left、right、center<br /> 坐标：左上角为(0,0)坐标，向右为 x 正方向,向下为 y 正方向 |
| background-attachment | 背景图片是否跟随滚动 | 取值：scroll(默认)、fixed 固定不动                                                                                  |
| background            | 简写                 |                                                                                                                     |

### 其他属性 display

**`display`  用来设置元素显示的类型**

- inline 将元素设置为行内元素
- block 将元素设置为块元素
- inline-block 将元素设置为行内块元素 ，行内块，既可以设置宽度和高度又不会独占一行
- table 将元素设置为一个表格
- none 元素不在页面中显示

**`visibility`  用来设置元素的显示状态**

- visible 默认值，元素在页面中正常显示
- hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置

## 盒子模型

```css
width 宽度
height 高度
border 边框
  - border-width：上 右 下 左 /  border-xxx-width
  - border-color
  - border-style： solid 表示实线   dotted 点状虚线     dashed 虚线    double 双线
  - border-radius: 用来设置圆角 圆角设置的圆的半径大小
padding 内边距
margin 外边距
```

**水平居中**

```css
width: xxxpx;
margin: 0 auto;
```

**溢出** `overflow`  属性来设置父元素如何处理溢出的子元素:( overflow-x: overflow-y: )

- visible，默认值 子元素会从父元素中溢出，在父元素外部的位置显示
- hidden 溢出内容将会被裁剪不会显示
- scroll 生成两个滚动条，通过滚动条来查看完整的内容
- auto 根据需要生成滚动条

**外边距的合并**

相邻的垂直方向外边距会发生重叠现象

- 兄弟元素

  兄弟元素间的相邻垂直外边距会取两者之间的较大值（两者都是正值） 特殊情况：
	- 如果相邻的外边距一正一负，则取两者的和
	- 如果相邻的外边距都是负值，则取两者中绝对值较大的
  兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们<u>不需要进行处理</u>

- 父子元素 父子元素间相邻外边距，子元素的会传递给父元素（上外边距) 父子外边距的折叠会影响到页面的布局，必须要进行处理

## 浮动 float

### 文档流（normal flow）

网页是一个多层的结构，一层摞着一层，通过 CSS 可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，**最底下的一层称为文档流**，文档流是网页的基础。

我们所创建的元素默认都是在文档流中进行排列，对于我们来元素主要有两个状态：<u>在文档流中，不在文档流中</u>

> 元素在文档流中的特点

**块元素**

- 块元素会在页面中独占一行(自上向下垂直排列)
- 默认宽度是父元素的全部（会把父元素撑满)
- 默认高度是被内容撑开（子元素）

**行内元素**

- 行内元素不会独占页面的一行，只占自身的大小

- 行内元素在页面中左向右水平排列，如果一行之中不能容纳下所有的行内元素，则元素会换到第二行继续自左向右排列（书写习惯一致）

- 内元素的默认宽度和高度都是被内容撑开

> 脱离文档流的特点

<u>脱离文档流以后，不需要再区分块和行内了</u>

**块元素**

- 块元素不在独占页面的一行
- 脱离文档流以后，块元素的宽度和高度默认都被内容撑开

**行内元素**

- 行内元素脱离文档流以后会变成块元素，特点和块元素一样



### 简介

使用  `float`  属性来设置于元素的浮动

- none 默认值 ，元素不浮动
- left 元素向左浮动
- right 元素向右浮动

**注意**：元素设置浮动以后，水平布局的等式便不需要强制成立， 元素设置浮动以后，会完全从文档流中脱离，不再占用文档流的位置，所以**元素下边的还在文档流中的元素会自动向上移动**

> 浮动的特点

1. 浮动元素会完全<u>脱离文档流</u>，不再占据文档流中的位置
2. 设置浮动以后元素会向父元素的左侧或右侧移动
3. 浮动元素默认<u>不会从父元素中移出</u>
4. 浮动元素向左或向右移动时，不会超过它前边的其他浮动元素
5. <u>如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移</u>
6. 浮动元素不会超过它上边的浮动的兄弟元素，最多最多就是和它一样高

简单总结： **浮动目前来讲它的主要作用就是让页面中的元素可以水平排列，通过浮动可以制作一些水平方向的布局**

### BFC 块级格式化环境

BFC(Block Formatting Context) 是一个 CSS 中的一个隐含的属性，可以为一个元素开启 BFC，开启 BFC 该元素会变成一个独立的布局区域

<u>BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</u>

**元素开启 BFC 后的特点**

1. 开启 BFC 的元素不会被浮动元素所覆盖
2. 开启 BFC 的元素子元素和父元素外边距不会重叠
3. 开启 BFC 的元素可以包含浮动的子元素

**触发 BFC**

1. 浮动元素：float 除 none 以外的值。（不推荐）

2. 绝对定位元素：position (absolute、fixed)。

3. display 为 inline-block、table-cells、flex。（不推荐）

4. overflow 除了 visible 以外的值 (hidden、auto、scroll)。

**[遇到哪些问题需要用到 BFC](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fblog.csdn.net%2Fsinat_36422236%2Farticle%2Fdetails%2F88763187%3Fops_request_misc%3D%25257B%252522request%25255Fid%252522%25253A%252522164482927316780261938625%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D%26request_id%3D164482927316780261938625%26biz_id%3D0%26utm_medium%3Ddistribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-88763187.first_rank_v2_pc_rank_v29%26utm_term%3Dbfc%26spm%3D1018.2226.3001.4187&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)**

1.利用 BFC 避免 margin 重叠。

2.自适应两栏布局

3.高度塌陷（BFC、clear、clearfix）

### clear

如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过 clear 属性来清除浮动元素对当前元素所产生的影响

**作用**：清除浮动元素对当前元素所产生的影响

**可选值**：

 left 清除左侧浮动元素对当前元素的影响

 right 清除右侧浮动元素对当前元素的影响

 both 清除两侧中最大影响的那侧

**原理**：

设置清除浮动以后，浏览器会自动为元素添加一个上外边距， 以使其位置不受其他元素的影响



## 定位 position

使用`position`属性来设置定位 可选值：

- static 默认值，元素是静止的没有开启定位
- relative 开启元素的相对定位
- absolute 开启元素的绝对定位
- fixed 开启元素的固定定位
- sticky 开启元素的粘滞定位

**偏移量（offset）**  当元素开启了定位以后，可以通过偏移量来设置元素的位置

- top：定位元素和定位位置上边的距离
- bottom：定位元素和定位位置下边的距离
- left：定位元素和定位位置的左侧距离
- right：定位元素和定位位置的右侧距离

**相对定位**

1. 元素开启相对定位以后，如果不设置偏移量元素不会发生任何的变化
2. 相对定位是参照于元素在文档流中的位置进行定位的
3. 相对定位会提升元素的层级
4. 相对定位不会使元素脱离文档流
5. 相对定位不会改变元素的性质块还是块，行内还是行内

**绝对定位**

1. 开启绝对定位后，如果不设置偏移量元素的位置不会发生变化
2. 开启绝对定位后，元素会从文档流中脱离
3. 绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
4. 绝对定位会使元素提升一个层级
5. 绝对定位元素是相对于其包含块进行定位的

包含块( containing block )，正常情况下：包含块就是离当前元素最近的祖先块元素

绝对定位的包含块，就是离它最近的<u>开启了定位的祖先元素</u>，如果所有的祖先元素都没有开启定位则根元素就是它的包含块  **相对定位一般配合绝对定位使用（将父元素设置相对定位，使其相对于父元素偏移**）

**固定定位**

1. 固定定位也是一种绝对定位，所以固定定位的大部分特点都和绝对定位一样
2. 唯一不同的是固定定位永远参照于浏览器的视口进行定位
3. 固定定位的元素不会随网页的滚动条滚动

**粘滞定位**

1. 粘滞定位和相对定位的特点基本一致，不同的是粘滞定位可以在元素到达某个位置时将其固定

**层级**

对于开启了定位元素，可以通过`z-index`属性来指定元素的层级，z-index 需要一个整数作为参数，

- 值越大元素的层级越高

- 元素的层级越高越优先显示

- 如果元素的层级一样，则优先显示靠下的元素

- 祖先的元素的层级再高也不会盖住后代元素

## font & background

**font-face**可以将服务器中的字体直接提供给用户去使用

```css
@font-face {
  /* 指定字体的名字 */
  font-family: "myfont";
  /* 服务器中字体的路径 */
  src: url("./font/ZCOOLKuaiLe-Regular.ttf") format("truetype");
}
```

### 字体相关样式

**color**  用来设置字体颜色

**font-size**  字体的大小

- em 相当于当前元素的一个 font-size
- rem 相对于根元素的一个 font-size

**font-family**  字体族（字体的格式）以同时指定多个字体，多个字体间使用<u>逗号</u>隔开字体生效时优先使用第一个，第一个无法使用则使用第二个 以此类推

- serif 衬线字体
- sans-serif 非衬线字体
- monospace 等宽字体
- Eg. Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif

**font-weight**  字重 字体的加粗

- normal 默认值 不加粗
- bold 加粗，100-900 九个级别（没什么用）

**font-style**  字体的风格

- normal 正常的
- italic 斜体

**line height**  行高：文字占有的实际高度

- 可以直接指定一个大小（px em）
- 也可以直接为行高设置一个整数，行高将会是字体的指定的倍数
- 行间距 = 行高 - 字体大小
- 可以将行高设置为和高度一样的值，使单行文字在一个元素中垂直居中
- 字体框就是字体存在的格子，设置 font-size 实际上就是在设置字体框的高度，行高会在字体框的上下平均分配

**text-align**  文本的水平对齐

- left 左侧对齐
- right 右对齐
- center 居中对齐
- justify 两端对齐

**vertical-align**  设置元素垂直对齐的方式

- baseline 默认值 基线对齐
- top 顶部对齐
- bottom 底部对齐
- middle 居中对齐

**text-decoration**  设置文本修饰

- none 什么都没有
- underline 下划线
- line-through 删除线
- overline 上划线

**white-space**  设置网页如何处理空白

- normal 正常
- nowrap 不换行
- pre 保留空白

### 图标字体

- 通过类名来使用图标字体

- 通过实体来使用图标字体，&#x 图标的编码;

- 通过**伪元素**来设置图标字体

1. 找到要设置图标的元素通过 before 或 after 选中
2. 在 content 中设置字体的编码
3. 设置字体的样式

```css
li::before {
  content: "\f1b0";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: blue;
  margin-right: 10px;
}
```

### 背景

**background-color**  设置背景颜色

**background-image**  设置背景图片

- 可以同时设置背景图片和背景颜色，这样背景颜色将会成为图片的背景色
- 如果背景的图片小于元素，则背景图片会自动在元素中平铺将元素铺满
- 如果背景的图片大于元素，将会一个部分背景无法完全显示
- 如果背景图片和元素一样大，则会直接正常显示

**background-repeat**  用来设置背景的重复方式

- repeat 默认值 ， 背景会沿着 x 轴 y 轴双方向重复
- repeat-x 沿着 x 轴方向重复
- repeat-y 沿着 y 轴方向重复
- no-repeat 背景图片不重复

**background-position**  用来设置背景图片的位置 通过 top left right bottom center 几个表示方位的词来设置背景图片的位置

**background-clip**  设置背景的范围

- border-box 默认值，背景会出现在边框的下边

- padding-box 背景不会出现在边框，只出现在内容区和内边距

- content-box 背景只会出现在内容区

  **background-origin**  背景图片的偏移量计算的原点

- padding-box 默认值，background-position 从内边距处开始计算

- content-box 背景图片的偏移量从内容区处计算

- border-box 背景图片的变量从边框处开始计算

**background-size**  设置背景图片的大小

- （宽度，高度）

- cover 图片的比例不变，将元素铺满

- contain 图片比例不变，将图片在元素中完整显示

### 渐变

**！！渐变是图片，需要通过 background-image 来设置**

**linear-gradient()**线性渐变，颜色沿着一条直线发生变化

linear-gradient(red,yellow) 红色在开头，黄色在结尾，中间是过渡区域

- 线性渐变的开头，我们可以指定一个渐变的方向

  to left、to right、to bottom、 to top、deg deg 表示度数、turn 表示圈

渐变可以同时指定多个颜色，多个颜色默认情况下平均分布， 也可以手动指定渐变的分布情况

```css
background-image: linear-gradient(red, yellow, #bfa, orange);
background-image: linear-gradient(
  red 50px,
  yellow 100px,
  green 120px,
  orange 200px
);
background-image: repeating-linear-gradient(to right, red, yellow 50px);
/*repeating-linear-gradient() 可以平铺的线性渐变*/
```

**radial-gradient()**  径向渐变(放射性的效果)

radial-gradient(大小 at 位置, 颜色 位置 ,颜色 位置 ,颜色 位置)

大小：

- circle 圆形
- ellipse 椭圆
- closest-side 近边
- closest-corner 近角
- farthest-side 远边
- farthest-corner 远角

位置：top right left center bottom

```css
background-image: radial-gradient(farthest-corner at 100px 100px, red, #bfa);
```

## 动画 animation

### 过渡（transition）

**transition-delay**: 过渡效果的延迟，等待一段时间后在执行过渡

**transition-property**: 指定要执行过渡的属性 ，逗号隔开，如果所有属性都需要过渡，则使用 all 关键字

**transition-duration**: 指定过渡效果的持续时间

**transition-timing-function**: 过渡的时序函数，指定过渡的执行的方式

- ease 默认值，慢速开始，先加速，再减速
- linear 匀速运动
- ease-in 加速运动
- ease-out 减速运动
- ease-in-out 先加速 后减速
- cubic-bezier() 来指定时序函数， [https://cubic-bezier.com](https://security.feishu.cn/link/safety?target=https%3A%2F%2Fcubic-bezier.com&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)
- steps() 分步执行过渡效果，可以设置一个第二个值：
  - end ， 在时间结束时执行过渡(默认值)
  - start ， 在时间开始时执行过渡

```css
/* transition 可以同时设置过渡相关的所有属性，只有一个要求，如果要写延迟，则两个时间中第一个是持续时间，第二个是延迟 */
transition: 2s margin-left 1s cubic-bezier(0.24, 0.95, 0.82, -0.88);
```

### 动画（animation）

动画和过渡类似，都是可以实现一些动态的效果， 不同的是过渡需要在某个属性发生变化时才会触发 动画可以自动触发动态效果，设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤

```css
@keyframes test {
  /* from表示动画的开始位置 也可以使用 0% */
  from {
    margin-left: 0;
    background-color: orange;
  }

  /* to动画的结束位置 也可以使用100%*/
  to {
    background-color: red;
    margin-left: 700px;
  }
}
```

`animation: name duration timing-function delay iteration-count direction;`

**animation-name**: 要对当前元素生效的关键帧的名字

**animation-duration**: 动画的执行时间

**animation-delay**:动画的延时

**animation-iteration-count**: 动画执行的次数/infinite 无限执行

**animation-direction**:指定动画运行的方向

- normal 默认值 从 from 向 to 运行 每次都是这样
- reverse 从 to 向 from 运行 每次都是这样
- alternate 从 from 向 to 运行 重复执行动画时反向执行
- alternate-reverse 从 to 向 from 运行 重复执行动画时反向执行

**animation-play-state**: 设置动画的执行状态

- running 默认值 动画执行
- paused 动画暂停

**animation-fill-mode**: 动画的填充模式

- none 默认值 动画执行完毕元素回到原来位置
- forwards 动画执行完毕元素会停止在动画结束的位置
- backwards 动画延时等待时，元素就会处于开始位置
- both 结合了 forwards 和 backwards



### 变形（transform）

变形就是指通过 CSS 来改变元素的形状或位置，变形不会影响到页面的布局

> 平移

百分比是相对于自身计算的

**translateX()**  沿着 x 轴方向平移

**translateY()**  沿着 y 轴方向平移

**translateZ()**  沿着 z 轴方向平移,调整元素在 z 轴的位置，正常情况就是调整元素和人眼之间的距离，距离越大，元素离人越近，z 轴平移属于立体效果（近大远小），默认情况下网页是不支持透视，如果需要看见效果，必须要设置网页的视距

```css
transform: translateX(100%);

html {
  /* 设置当前网页的视距为800px，人眼距离网页的距离 */
  perspective: 800px;
}
```

> 旋转

通过旋转可以使元素沿着 x y 或 z 旋转指定的角度

**rotateX()**、**rotateY()**、**rotateZ()**

```css
transform: rotateZ(0.25turn);
transform: rotateY(180deg) translateZ(400px);
transform: translateZ(400px) rotateY(180deg);
transform: rotateY(180deg);
/* 是否显示元素的背面 */
backface-visibility: hidden;
```

> 缩放

**scaleX()**  水平方向缩放

**scaleY()**  垂直方向缩放

**scale()**  双方向的缩放

```css
transform:scale(2)

/* 变形的原点 默认值 center*/
transform-origin:20px 20px;
```

## 弹性盒子 flex

flex(弹性盒、伸缩盒)是 CSS 中的又一种布局手段，它主要用来**代替浮动**来完成页面的布局，flex 可以使元素具有弹性，让元素可以跟随页面的大小的改变而改变

弹性容器：要使用弹性盒，必须先将一个元素设置为弹性容器我们通过 display 来设置弹性容器

- **display:flex**  设置为块级弹性容器
- **display:inline-flex**  设置为行内的弹性容器

弹性元素：弹性容器的子元素是弹性元素（弹性项），弹性元素可以同时是弹性容器

### 弹性容器样式

**flex-direction**：顺序指定了弹性子元素在父容器中的位置。

- row：横向从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

**justify-content** ：内容对齐，如何分配<u>主轴</u>上的空白空间（==元素水平对齐==）

- flex-start 元素沿着主轴起边排列
- flex-end 元素沿着主轴终边排列
- center 元素居中排列
- space-around 空白分布到元素两侧
- space-between 空白均匀分布到元素间
- space-evenly 空白分布到元素的单侧

**flex-wrap** ：设置弹性元素是否在弹性容器中自动==换行==

- nowrap 默认值，元素不会自动换行，该情况下弹性子项可能会溢出容器
- wrap 元素沿着辅轴方向自动换行
- wrap-reverse 元素沿着辅轴反方向换行

**align-items**：元素在<u>辅轴</u>上如何对齐（==单行垂直对齐==）

- stretch 默认值，将元素的长度设置为相同的值
- flex-start 元素不会拉伸，沿着辅轴起边对齐
- flex-end 沿着辅轴的终边对齐
- center 居中对齐
- baseline 基线对齐

**align-content**：辅轴空白空间的分布（==多行垂直对齐==） 属性用于修改  `flex-wrap`  属性的行为。类似于  `align-items`, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。

### 弹性元素的样式

**order**  决定弹性元素的排列顺序，数值小的排在前面。可以为负值

**align-self**：设置弹性元素==自身垂直对齐==方式。

**flex**：可以设置弹性元素所有的三个样式==分配剩余空间==

- `flex：none | [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]`

**flex-grow**：弹性元素的增长系数

**flex-shrink**：弹性元素的缩减系数

**flex-basis**：弹性元素在主轴上的基础长度， 如果主轴是 横向的 则 该值指定的就是元素的宽度，如果主轴是 纵向的 则 该值指定的是就是元素的高度

**对齐居中**：设置"margin"值为"auto"值，==获取弹性容器中剩余的空间==。

- 只想要设置  `margin: auto;`  可以使得弹性子元素在两上轴方向上完全居中
- `margin-right: auto;` 。 它将剩余的空间放置在元素的右侧：

## 响应式设计

### Viewport

一个常用的针对移动网页优化过的页面的  `viewport meta`  标签大致如下：

- `width`：控制  `viewport`  的大小，可以指定的一个值，如果 600，或者特殊的值，如`device-width`  为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- `height`：和  `width`  相对应，指定高度。
- `initial-scale`：初始缩放比例，也即是当页面第一次  `load`  的时候缩放比例。
- `maximum-scale`：允许用户缩放到的最大比例。
- `minimum-scale`：允许用户缩放到的最小比例。
- `user-scalable`：用户是否可以手动缩放。

### 媒体查询

语法： @media 查询规则{}

媒体类型：

 all 所有设备

 print 打印设备

 screen 带屏幕的设备

 speech 屏幕阅读器

 - 可以使用,连接多个媒体类型，这样它们之间就是一个或的关系

可以在媒体类型前添加一个 only，表示只有。only 的使用主要是为了兼容一些老版本浏览器

```css
@media only screen {
  body {
    background-color: #bfa;
  }
}
```

**媒体特性**：

 width 视口的宽度

 height 视口的高度

 min-width 视口的最小宽度（视口大于指定宽度时生效）

 max-width 视口的最大宽度（视口小于指定宽度时生效）

样式切换的分界点，我们称其为**断点**，也就是网页的样式会在这个点时发生变化

一般比较常用的断点

 小于 768 超小屏幕 max-width=768px

 大于 768 小屏幕 min-width=768px

 大于 992 中型屏幕 min-width=992px

 大于 1200 大屏幕 min-width=1200px

```css
@media only screen and (min-width: 500px) and (max-width: 700px) {
  body {
    background-color: #bfa;
  }
}
```

