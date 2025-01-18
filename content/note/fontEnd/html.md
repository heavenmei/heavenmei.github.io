---
title: HTML

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

### `<head>`

`<head>`

`<title>`  标签定义了不同文档的标题。

`<base>`  标签描述了基本的链接地址/链接目标，该标签作为 HTML 文档中所有的链接标签的默认链接:

```html
<base href="http://www.runoob.com/images/" target="_blank" />
```

`<link>`  标签定义了文档与外部资源之间的关系。标签通常用于链接到样式表。

```html
<link rel="stylesheet" type="text/css" href="mystyle.css" />
```

`<style>`  标签定义了 HTML 文档的样式文件引用地址，也可以直接添加样式来渲染 HTML 文档:

```html
<style type="text/css">
  body {
    background-color: yellow;
  }
  p {
    color: blue;
  }
</style>
```

`<meta>`元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。charset 指定网页的字符集

- name 指定的数据的名称

- content 指定的数据的内容

  - keywords 表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开

    ```html
    <meta
      name="Keywords"
      content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,数码,配件,手表,存储卡,京东"
    />
    ```

  - description 用于指定网站的描述,网站的描述会显示在搜索引擎的搜索的结果中

    ```html
    <meta
      name="description"
      content="京东JD.COM-专业的综合网上购物商城,销售家电!"
    />
    ```

  - author 定义页面作者

    ```html
    <meta name="author" content="Runoob" />
    ```

- http-equiv 每 30 秒刷新页面

  ```html
  <meta http-equiv="refresh" content="30" />
  <meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
  <!--将页面重定向到另一个网站-->
  ```

- charset 定义文档的字符编码。**H5**

  ```html
  <meta charset="utf-8" />
  ```

### 表格

表格由  `<table>`  标签来定义。每个表格均有若干行（由  `<tr>`  标签定义），每行被分割为若干单元格（由  `<td>`  标签定义）。表格的表头使用  `<th>`  标签进行定义。

`<caption> ... </ caption>`标签作为标题，并在表的顶部显示出来。

**单元格的空间：**

- `cellspacing`属性-定义表格单元格之间的空间

- `cellpadding`属性-表示单元格边框与单元格内容之间的距离

**合并单元格**

- 如果要将两个或多个列合并为一个列，将使用`colspan`属性
- 如果要合并两行或更多行，则将使用`rowspan`属性。

**表格头部、主体、页脚**

- `<thead>`- 创建单独的表头。

- `<tbody>`- 表示表格的主体。

- `<tfoot>`- 创建一个单独的表页脚。

```html
<table border="1" cellpadding="5" cellspacing="5">
  <caption>
    这是标题
  </caption>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td rowspan="2">row 2 Cell 1</td>
    <td>row 2 Cell 2</td>
  </tr>
  <tr>
    <td colspan="2">row 3 Cell 1</td>
  </tr>
</table>
```

| 元素/是否支持 | margin | padding             |
| ------------- | ------ | ------------------- |
| table         | 有效   | 视情况而定          |
| tr            | 无效   | 有 padding 区但无效 |
| td            | 无效   | 有效                |

- table 的 padding 使用外层 div 的 padding 代替。

- tr 不要设置任何的 margin 和 padding，只是起到换行作用的元素，没其他任何作用。

- 没必要设置 td 的 margin

### 列表

无序列表使用  `<ul>`  标签

```html
<ul>
  <li>Coffee</li>
  <li>Milk</li>
</ul>
```

有序列表始于  `<ol>`  标签。

```html
<ol>
  <li>Coffee</li>
  <li>Milk</li>
</ol>
```

自定义列表始于`<dl>`标签 每个自定义列表项以`<dt>`  开始。每个自定义列表项的定义以  `<dd>`开始。

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

### 表单

输入框

```html
<form>
  First name: <input type="text" name="firstname" /><br />
  Last name: <input type="text" name="lastname" />
</form>
```

密码

```html
<form>Password: <input type="password" name="pwd" /></form>
```

单选按钮

```html
<form>
  <input type="radio" name="sex" value="male" />Male<br />
  <input type="radio" name="sex" value="female" />Female
</form>
```

复选框

```html
<form>
  <input type="checkbox" name="vehicle" value="Bike" />I have a bike<br />
  <input type="checkbox" name="vehicle" value="Car" />I have a car
</form>
```

提交按钮

```html
<form name="input" action="html_form_action.php" method="get">
  Username: <input type="text" name="user" />
  <input type="submit" value="Submit" />
</form>
```