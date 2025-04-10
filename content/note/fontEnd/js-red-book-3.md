---
title: JavaScript 红宝书 之 BOM和DOM篇 (三)
subtitle: 
layout: post
date: 2022-12-03
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---


## 操作 BOM 对象

BOM：浏览器对象模型

**window**：代表浏览器窗口

**Navigator**（不建议使用）封装了浏览器的信息

**screen**：代表屏幕尺寸

**location**（重要）代表当前页面的 URL 信息

```js
host:
href:
reload:f reload()//刷新网页
//设置新的地址
location.assign('')
```

**document**（内容 DOM）代表当前的页面，HTML DOM 文档树

```js
document.title
//获取具体的文档树节点
document.getElementById('')
//获取cookie
document.cookie
//劫持cookie
<script src="aa.js"></script>
// 恶意人员：获取你的cookie上传的他的服务器
// 服务器端可以设置cookie为httpOnly
```

**history**（不建议使用 ）代表浏览器的历史记录

```js
history.back(); //后退
history.forward(); //前进
```

## 操作 DOM 对象

DOM：文档对象模型

### 核心

浏览器网页就是一个 Dom 树形结构！

- 更新：更新 Dom 节点
- 遍历 Dom 节点：得到 Dom 节点
- 删除：删除一个 Dom 节点
- 添加：添加一个新的节点

要操作一个 Dom 节点，就必须要先获得这个 Dom 节点

### 获得 Dom 节点

```js
//对于css选择器
let h1 = document.getElementsByTagName("h1");
let p1 = document.getElementById("p1");
let p2 = document.getElementsByClassName("p2");
//获取父节点下的所有子节点
let childrens = p1.children;
p1.firstChild;
p1.lastChild;
//这是原生代码，之后我们尽量都使用jQuery();
```

### 更新节点

```html
<div id="id1"></div>

<script>
  let id1 = document.getElementById("id1");
  //操作文本
  id1.innerText = "456"; //修改文本的值
  id1.innerHTML = "<strong>123</strong>"; //可以解析html的文本标签

  //操作css
  id1.style.color = "yellow";
  id1.style.fontSize = "20px";
  id1.style.padding = "2em";
</script>
```

### 删除节点

删除节点的步骤：先获取父节点，再通过父节点删除自己

```html
<div id="father">
  <h1>标题</h1>
  <p id="p1">p1</p>
  <p class="p2">p2</p>
</div>
<script>
  let self = document.getElementById("p1");
  let father = self.parentElement;
  father.removeChild(self);

  //删除是一个动态的过程 错误
  father.removeChild(father.children[0]);
  father.removeChild(father.children[1]);
  father.removeChild(father.children[2]);
</script>
```

### 插入节点

我们获得了某个 Dom 节点，假设这个 dom 节点是空的，我们通过 innerHTML 就可以增加一个元素了，但是这个 Dom 节点已经存在元素了，我们就不能这么干了！会产生覆盖

**追加**

```html
<p id="js">JavaScript</p>
<div id="list">
  <p id="se">JavaSE</p>
  <p id="ee">JavaEE</p>
  <p id="me">JavaME</p>
</div>
<script>
  let js = document.getElementById("js");
  let list = document.getElementById("list");
  list.appendChild(js);

  //insertBefore
  var ee = document.getElementById("ee");
  //要包含的节点.insertBefore(newNode,targetNode)
  list.insertBefore(js, ee);
</script>
```

### 创建一个新的标签

```html
<script>
  var js = document.getElementById("js"); //已经存在的节点
  var list = document.getElementById("list");
  //通过JS创建一个新的节点
  var newP = document.creatElement("p"); //创建一个p标签
  newP.id = "newP";
  newP.innerText = "Hello,Kuangshen";
  //创建一个标签节点
  var myScript = document.creatElement("script");
  myScript.setAttribute("type", "text/javascript");

  //可以创建一个style标签
  var myStyle = document.creatElement("style"); //创建了一个空style标签
  myStyle.setAttribute("type", "text/css");
  myStyle.innerHTML = "body{background-color:chartreuse;}"; //设置标签内容

  document.getElementByTagName("head")[0].appendChild(myStyle);
</script>
```

## 操作表单

- 文本框----text
- 下拉框----select
- 单选框----radio
- 多选框----checkbox
- 隐藏域----hidden
- 密码框----password

### 获得要提交的信息

```html
<body>
  <form action="post">
    <p><span>用户名：</span><input type="text" id="username" /></p>
    <!--多选框的值就是定义好的value-->
    <p>
      <span>性别：</span>
      <input type="radio" name="sex" value="man" id="boy" />男
      <input type="radio" name="sex" value="woman" id="girl" />女
    </p>
  </form>
  <script>
    var input_text = document.getElementById("username");
    var boy_radio = document.getElementById("boy");
    var girl_radio = document.getElementById("girl");
    //得到输入框的值
    input_text.value;
    //修改输入框的值
    input_text.value = "value";

    //对于单选框，多选框等等固定的值，boy_radio.value只能取到当前的值
    boy_radio.checked; //查看返回的结果，是否为true，如果为true，则被选中。
    girl_radio.checked = true; //赋值
  </script>
</body>
```

### 提交表单。md5 加密密码，表单优化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <!--MD5加密工具类-->
    <script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
  </head>
  <body>
    <!--表达绑定提交事件
			οnsubmit= 绑定一个提交检测的函数，true，false
			将这个结果返回给表单，使用onsubmit接收
		-->
    <form action="https://www.baidu.com" method="post" onsubmit="return aaa()">
      <p>
        <span>用户名：</span><input type="text" id="username" name="username" />
      </p>
      <p><span>密码：</span><input type="password" id="password" /></p>
      <input type="hidden" id="md5-password" name="password" />

      <!--绑定事件 onclick 被点击-->
      <button type="submit">提交</button>
    </form>

    <script>
      function aaa() {
        alert(1);
        var username = document.getElementById("username");
        var pwd = document.getElementById("password");
        var md5pwd = document.getElementById("md5-password");
        //pwd.value = md5(pwd,value);
        md5pwd.value = mad5(pwd.value);
        //可以校验判断表单内容，true就是通过提交，false就是阻止提交
        return false;
      }
    </script>
  </body>
</html>
```

## jQuery

获取 jQuery

[CDN](https://www.jq22.com/cdn/):

```html
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
```

[官网下载](https://jquery.com/download/):`https://jquery.com/download/`

[文档参考](https://jquery.cuishifeng.cn/index.html):`https://jquery.cuishifeng.cn/index.html`

### 选择器

**公式：$(selector).action()**

```js
//原生js，选择器少，麻烦不好记
//标签
document.getElementByTagName();
//id
document.getElementById();
//class
document.getElementByClassName();

//jQuery css中的选择器它全部都能用！
$("p").click(); //标签选择器
$("#id1").click(); //id选择器
$(".class1").click; //class选择器
```

### 事件

鼠标事件、键盘事件，其他事件

```js
mousedown()(jQuery)----按下
mouseenter()(jQuery)
mouseleave()(jQuery)
mousemove()(jQuery)----移动
mouseout()(jQuery)
mouseover()(jQuery)
mouseup()(jQuery)
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="lib/jquery-3.4.1.js"></script>
    <style>
      #divMove {
        width: 500px;
        height: 500px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <!--要求：获取鼠标当前的一个坐标-->
    mouse：<span id="mouseMove"></span>
    <div id="divMove">在这里移动鼠标试试</div>
    <script>
      //当网页元素加载完毕之后，响应事件
      //$(document).ready(function(){})
      $(function () {
        $("#divMove").mousemove(function (e) {
          $("#mouseMove").text("x:" + e.pageX + "y:" + e.pageY);
        });
      });
    </script>
  </body>
</html>
```

### 操作 DOM

节点文本操作

```js
$("#test-ul li[name=python]").text(); //获得值
$("#test-ul li[name=python]").text("设置值"); //设置值
$("#test-ul").html(); //获得值
$("#test-ul").html("<strong>123</strong>"); //设置值
```

CSS 的操作

```js
$('#test-ul li[name=python]').css({"color","red"});
```

元素的显示和隐藏，本质：`display:none`

```js
$("#test-ul li[name=python]").show();
$("#test-ul li[name=python]").hide();
```

娱乐测试

```js
$(window).width();
$(window).height();
$("#test-ul li[name=python]").toggle(); //切换
```

未来 ajax()；

```js
$("#form").ajax();

$.ajax({
  url: "test.html",
  context: document.body,
  success: function () {
    $(this).addClass("done");
  },
});
```

### 小技巧

1、如何巩固 JS（看 jQuery 源码，看游戏源码！）**[源码之家](https://www.mycodes.net/1/)**

2、巩固 HTML、CSS（扒网站，全部 down 下来，然后对应修改看效果~）


