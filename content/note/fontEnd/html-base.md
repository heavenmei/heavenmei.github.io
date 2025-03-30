---
title: HTML 基础学习
subtitle: 
layout: post
date: 2022-08-30
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---

## !Doctype

!DOCTYPE 标签：它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令.

body :

- 用于定义文档的主体, 包含了文档的所有内容
- 该标签支持 html 的全局属性和事件属性.

## `<head>`


`<head>`是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者.该标签下所包含的部分可加入的标签有`<base>, <link>, <meta>, <script>, <style>,<title>`

- `<title>`  标签定义了不同文档的标题。
- `<base>`  标签描述了基本的链接地址/链接目标，该标签作为 HTML 文档中所有的链接标签的**默认链接**
- `<link>`  标签定义了文档与外部资源之间的关系。标签通常用于链接到**css样式表**
- `<style>`  标签定义了 HTML 文档的样式文件引用地址，也可以直接添加样式来渲染 HTML 文档
- `<meta>`元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。charset 指定网页的字符集
	- `name='keywords'` 表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开
	- `name='description'` 用于指定网站的描述,网站的描述会显示在搜索引擎的搜索的结果中
	- `name='author'` 定义页面作者
	- `http-equiv `把 content 属性关联到 HTTP 头部
	- `charset` 定义文档的字符编码 (H5)

```html
<head>
	<title>Heavenmei.io</title>
	<base href="https://heavenmei.github.io" target="_blank" />
	
	<!-- keywords 表示网站的关键字 SEO -->
	<meta
      name="keywords"
      content="个人博客,笔记,HTML, CSS, XML, XHTML, JavaScript"
    />
	<!-- description 用于指定网站的描述 SEO -->
	<meta
      name="description"
      content="Heavenmei Personal Site"
    />
	<!-- author 定义页面作者 -->
	<meta name="author" content="Heavenmei" />
	<!-- http-equiv 每 30 秒刷新页面 -->
	<meta http-equiv="refresh" content="30" />
	<!--将页面重定向到另一个网站-->
	<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
	<!-- charset 定义文档的字符编码 -->
	<meta charset="utf-8" />
	
	<link rel="stylesheet" type="text/css" href="mystyle.css" />

	<style type="text/css">
	  body {
	    background-color: yellow;
	  }
	  p {
	    color: blue;
	  }
	</style>
</head>
```



## `<audio>`

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>
```

audio常用属性

| 属性       | 属性值      | 注释                                                         |
| -------- | -------- | ---------------------------------------------------------- |
| src      | url      | 播放的音乐的url地址（火狐只支持ogg的音乐，而IE9只支持MP3格式的音乐。<br />chrome貌似全支持） |
| preload  | preload  | 预加载（在页面被加载时进行加载或者说缓冲音频），<br />如果使用了autoplay的话那么该属性失效。      |
| loop     | loop     | 循环播放                                                       |
| controls | controls | 是否显示默认控制条（控制按钮）                                            |
| autoplay | autoplay | 自动播放                                                       |

audio音乐格式的支持

| 音频格式 | Chrome | Firefox | IE9 | Opera | Safari |
| ---- | ------ | ------- | --- | ----- | ------ |
| OGG  | 支持     | 支持      | 支持  | 不支持   | 不支持    |
| MP3  | 支持     | 不支持     | 支持  | 不支持   | 支持     |
| WAV  | 不支持    | 支持      | 不支持 | 支持    | 不支     |

audio属性

| 属性          | 注释                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------- |
| duration    | 获取媒体文件的总时长，以s为单位，如果无法获取，返回NaN                                                                 |
| paused      | 如果媒体文件被暂停，那么paused属性返回true，反之则返回false                                                         |
| ended       | 如果媒体文件播放完毕返回true                                                                              |
| muted       | 用来获取或设置静音状态。值为boolean                                                                         |
| volume      | 控制音量的属性值为0-1;0为音量最小，1为音量最大                                                                    |
| startTime   | 返回起始播放时间                                                                                      |
| error       | 返回错误代码，为uull的时候为正常。<br />否则可以通过Music.error.code来获取具体的错误代码： <br />1.用户终止 2.网络错误 3.解码错误 4.URL无效 |
| currentTime | 用来获取或控制当前播放的时间，单位为s。                                                                          |
| currentSrc  | 以字符串形式返回正在播放或已加载的文件                                                                           |

常用的控制用的函数：

| 函数               | 作用                         |
| ---------------- | -------------------------- |
| load()           | 加载音频、视频软件                  |
| play()           | 加载并播放音频、视频文件或重新播放暂停的的音频、视频 |
| pause()          | 暂停出于播放状态的音频、视频文件           |
| canPlayType(obj) | 测试是否支持给定的Mini类型的文件         |

常用audio的事件：

| 事件名称           | 事件作用                      |
| -------------- | ------------------------- |
| loadstart      | 客户端开始请求数据                 |
| progress       | 客户端正在请求数据（或者说正在缓冲）        |
| play           | play()和autoplay播放时        |
| pause          | pause()方法促发时              |
| ended          | 当前播放结束                    |
| timeupdate     | 当前播放时间发生改变的时候。播放中常用的时间处理哦 |
| canplaythrough | 歌曲已经载入完全完成                |
| canplay        | 缓冲至目前可播放状态。               |




## `<table>`

- 标题：`<caption>` 在表的顶部显示出来。
- 行： `<tr>` 
- 表头列：`<th>`
- 表体列：`<td>`
- 表头：`<thead>`
- 表体：`<tbody>`
- 表页脚：`<tfoot>`

**边距**

| 元素/是否支持 | margin | padding        |
| ------- | ------ | -------------- |
| table   | 有效     | 视情况而定          |
| tr      | 无效     | 有 padding 区但无效 |
| td      | 无效     | 有效             |
- table 的 padding 使用外层 div 的 padding 代替。
- tr 不要设置任何的 margin 和 padding，只是起到换行作用的元素，没其他任何作用
- 没必要设置 td 的 margin


**属性：**
- `cellspacing`：表格单元格之间的空间
- `cellpadding`：单元格边框与单元格内容之间的距离
- `colspan`: 合并列
- `rowspan`：合并行


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


## `<ul> & <ol>`

- `<ul>`  无序列表，`<li>`
- `<ol>` 有序列表， `<li>`
- `<dl>` 描述列表 ，`<dt>`定义项目/名字，`<dd>` 描述每个项目/名字

```html
<!-- 无序列表 -->
<ul>
  <li>Coffee</li>
  <li>Milk</li>
</ul>

<!-- 有序列表 -->
<ol>
  <li>Coffee</li>
  <li>Milk</li>
</ol>

<!-- 描述列表 -->
<dl>
  <dt>Coffee</dt>
    <dd>Black hot drink</dd>
  <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```


## `<form>`



```html
<form>
  <input type="text" name="firstname" />

  <!-- 密码 -->
  <input type="password" name="pwd" />

  <!-- 单选按钮 -->
  <input type="radio" name="sex" value="female" />Female

  <!-- 复选框 -->
  <input type="checkbox" name="vehicle" value="Car" />I have a car

  <!-- 提交按钮 -->
  <input type="submit" value="Submit" />
</form>
```

## h5新特性

- 新增选择器 document.querySelector、document.querySelectorAll
- 拖拽释放(Drag and drop) API
- **媒体播放的 video 和 audio**
- 本地存储 localStorage 和 sessionStorage
- 离线应用 manifest
- 桌面通知 Notifications
- **语意化标签 article、footer、header、nav、section**
- 增强表单控件 calendar、date、time、email、url、search
- 地理位置 Geolocation
- 多任务 webworker
- 全双工通信协议 websocket
- 历史管理 history
- 跨域资源共享(CORS) Access-Control-Allow-Origin
- 页面可见性改变事件 visibilitychange
- 跨窗口通信 PostMessage
- Form Data 对象
- 绘画 canvas

H5移除的元素：

- 纯表现的元素：basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素：frame、frameset、noframes


