---
title: 《JavaScript 红皮书》笔记
subtitle:
layout: post
date: 2022-11-28
author: heavenmei
categories:
  - Note
description:
tags:
  - Front
image:
---

### Tips

**async & defer**

```js
//asnc 异步执行脚本
<script async src="..."></script>
//defer 推迟执行脚本
<script defer src="..."></script>
```

- 区分大小写
- 标识符用驼峰大小写形式
- 注释`//` `/**/`

## 基础语法

### 数据类型

**typeof 操作符**

#### 1、Undefined 类型

特殊值 undefined，未定义，声明未初始化，是一个假值

#### 2、Null 类型

特殊值 null，空，是一个假值；逻辑上，null 值是一个空对象指针，给 typeof 传一个 null 会返回*object*的原因

#### 3、Boolean 类型

字面值 true 和 false（区分大小写）

#### 4、Number 类型

js 不区分小数和整数

```js
1.123e3 - //科学计数法
  99; //复数
NaN; //不是数值。isNaN()函数检验
Infinity; //无穷
```

1. ECMAScript 的最值：`Number.MIN_VALUE` ,`Number.MAX_VALUE`
2. 数值转换：`Number()`用于任何数据类型、`parseInt()`和`parseFloat()`字符串是否包含数值模式
3. `toFix(小数位数)`：返回包含指定小数位数的数值字符串。四舍五入

#### 5、String 类型

1. 可以用双引号、单引号、反引号;_不可变的_，

2. 注意转义字符 `\`

3. `let x = 变量.toString()`

4. 多行字符串（**反引号**）

   ```JS
   //反引号 表示字面量
   var msg = `shdjsd
   hello
   world`;
   ```

5. 模板字符串 插值`${}`

   ```js
   let name = "sdsd";
   let msg = `hello ${name}`; //反引号
   ```

6. 原始字符串`String.raw`标签函数

7. **字符集**：16 位码元对应 1 个字符，Unicode

   ```js
   let msg = "abcd";
   //长度 属性 无括号
   msg.lenghth; //4
   //给定索引字符 方法
   msg.charAt(2); //c
   //查看指定码元的字符编码
   msg.charCodeAt(2); //99
   //根据UTF-16码元创建字符
   String.fromCharCode(0x61, 0x61, 0x63, 0x64); //abcd

   //两个16位码元组成的字符叫代理对，码点（一个字符的完整标识）解析
   //代替charCodeAt()
   msg.codePointAt(2);
   //代替fromCharCode()
   msg.fromCodePoint(97, 98, 128522, 100);
   ```

8. ##### **Base64 转码**

   可以任意值转为 0\~9、A\~Z、a\~z、+、/这个 64 个可打印字符

   - `bota()`：任意值转为 Base64 编码
   - `atob()`:Base64 编码转为原来值
   - 注意：这两个方法不适用非 ASCII 码

   ```js
   var string = "hello world";
   bota(string); //aGVsbG8gd29ybGQ=
   atob("aGVsbG8gd29ybGQ="); //hello world

   bota("你好"); //报错
   ```

   非 ASCII 码转换

   ```js
   function b64Encode(str) {
     return btoa(encodeURIComponent(str));
   }
   function b64Decode(str) {
     return decodeURIComponent(atob(str));
   }
   b64Encode("你好"); //JUU0JUJEJUEwJUU1JUE1JUJE
   b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE");
   ```

9. 大小写转换 方法

   ```js
   msg.toUpperCase();
   msg.toLowerCase();
   ```

10. 字符串位置方法

    ```js
    //从头找，从尾找，返回位置
    let msg = "hello world";
    msg.indexOf("o"); //4
    msg.lastIndexOf("o"); //7

    //从指定位置开始找
    msg.indexOf("o", 6); //7
    msg.lastIndexOf("o", 6); //4
    ```

11. 截取子串`slice()`,`substr()`,`substring()`

    ```js
    // [)
    let msg = "hello world";
    msg.slice(开始，结束);
    msg.substring(开始，结束);
    msg.substr(开始，数量);

    //负参
    msg.slice(3,-4);	//所有负值参数转化为长度+负值	lo w
    msg.substring(3,-4);	//负参转化为0	hel ==>substring(3,0)==>substring(0,3)
    msg.substr(3,-4);	//第一个转换，第二个为0 	""空
    ```

12. 包含字符串：`startsWith()`,`endsWith()`,`includes()`

    ```js
    //返回值true/false
    let msg = "foobarbaz";
    msg.startsWith("foo"); //true 开始于索引0的匹配项
    msg.startsWith("bar"); //false
    msg.startsWith("foo", 1); //false 开始搜索的位置

    msg.endsWith("baz"); //true
    msg.endsWith("bar"); //false
    mag.ensWith("bar", 6); //true	字符串末尾的位置

    msg.includes("bar"); //true 检查整个字符串
    mag.includes("bar", 4); //tue 开始搜索的位置
    ```

13. `trim()`：创建副本，删除前后空格，再返回结果

14. `repeat(整数)`:复制 n 次

15. `padStart(长度，填充字符)`，`padEnd(长度，填充字符)`:复制字符串，如果小于指定长度，在前后填充字符

16. 模式匹配方法`match()`,`search()`,`replace()`

#### 6、Symbol 类型

（ECMAScript6 新增）

#### 7、Object 类型

对象（object）是大括号，数组是中括号

```js
var person = {
  name: "",
  age: 2,
};
```

Js 中对象，`{…}`表示一个对象，建制对描述属性 xxx：xxx，多个属性之间用逗号隔开，最后一个属性不加逗号！
JavaScript 中的所有的键都是字符串，值是任意对象！

1、对象赋值`person.name="huang"`

2、使用一个不存在的对象属性，不会报错！undefined

3、动态的删减属性，通过 delete 删除对象的属性`delete person.name`

4、动态的添加，直接给新的属性添加值即可

5、判断属性值是否在这个对象中！`age in person`

6、判断一个属性是否是这个对象自身拥有的 `person.hasOwnProperty("toString")`

### 操作符

```js
~	按位非
&	按位与
|	按位或
<<	左移
>>	有符号右移
>>>	无符号右移
!	逻辑非
&& 	逻辑与
||	逻辑或
*	乘
/	除
%	取模
**	指数	Math.pow()

//相等的区别
==	相等，操作数相等，先进行类型转换再比较
===	全等，不转换操作数，数据类型不同返回false
let res1 = ("55" == 55)//true
let res2 = ("55" === 55);//false，数据类型不同
/*
NaN===NaN,这个与所有数值都不相等，包括自己
只能用isNaN()判断
*/
console.log((1/3) === (1-2/3)) //false
尽量避免浮点数运算，存在精度问题


... 扩展操作符
//对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }
//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
first // 1
rest  // [2, 3, 4, 5]
const [first, ...rest] = [1, 2, 3, 4, 5];
const [...rest, last] = [1, 2, 3, 4, 5];// 报错
const [first, ...rest, last] = [1, 2, 3, 4, 5];// 报错

//typeof操作符
console.log(typeof 参数);
//instanceof操作符 知道他是什么类型的对象
console.log(person instanceof Object); //变量person是Object对象嘛？
```

### 数组

Array 可以包含任意的数据类型

```js
var arr = [1, 2, 3, 4, 5, 6]; //通过下标取值和赋值
```

1、`arr.length`,假如给 arr.lennth 赋值，数组大小就会发生变化~，如果赋值过小，元素就会丢失

2、`arr.indexOf(2)`通过元素获得下标索引,字符串的"1"和数字 1 是不同的

3、`slice（）`截取 Array 的一部分，返回的一个新数组，类似于 String 中 substring

4、`push()`压入到尾部，`pop()`弹出尾部的一个元素

5、`unshift()`压入到头部,`shift()` 弹出头部的一个元素

6、`sort()`排序

7、`reverse()`元素反转

8、`concat([数组])` 注意：concat()并没有修改数组，只是会返回一个新的数组

9、连接符`join("连接符")` 打印拼接数组，使用特定的字符串连接

10、多维数组`arr[1][1]`

11、`splice(开始index，删除n个，添加若干'')`修改数组的万能方法，从指定索引开始删除若干元素，然后在该位置添加若干元素

### Map&Set

```js
var map = new Map([['tom':100],'jack',90])
var name = map.get('tom')
map.set('admin',123456)
map.delete("tom")

set.add(2)
set.delete(1)
set.has(3)//是否包含某个元素
```

**iterator 遍历迭代**

```js
for (var x of arr) {
}
for (let x of map) {
}
```

## 函数

### 定义函数

```js
function abs(x) {}
var abs = function (x) {
  //手动抛出异常
  if (typeof x !== "number") throw "Not a Number";
};
```

**`arguments`关键字**

代表，传递进来的所有参数，是一个<u>数组</u>

```js
var abs = function (x) {
  for (var i = 0; i < arguments.length; i++) {}
};
```

arguments 包含所有的参数，我们有时候想使用多余的参数来进行附加操作。需要排除已有参数~

**`rest`关键字**

ES6 引入的新特性，获取除了已经定义的参数之外的所有参数~…

rest 参数只能写在最后面，必须用…标识。

```js
function aaa(a, b, ...rest) {
  console.log("a==>" + a);
  console.log("b==>" + b);
  console.log(rest);
}
```

### 变量

|                                                    | var                | let                            |
| -------------------------------------------------- | ------------------ | ------------------------------ |
| 作用域                                             | 函数作用域         | 块作用域（）块是函数的子集 |
| 声明提升                                           | 会被提升           | 不会，暂时性死区               |
| 成为 window 对象属性`console.log(window.属性)` | Yes                | No                             |
| 条件声明，重复声明                                 | Yes                | No（SyntaxError 异常）         |
| for 循环中的声明                                   | 会渗透到循环体外部 | 作用域仅限循环块内部           |

**const：**行为与**let**基本想相同，唯一区别是声明变量时必须<u>同时初始化变量</u>，不能再被重新赋值为其他引用值（TypeError 异常），但对象的键则不受限制。若想整个对象都不能修改，可使用`Object.freeze()`.

> 规范

由于我们的所有变量都会绑定到 window 上，。如果不同的 js 文件，使用了相同的全局变量，就会产生冲突—>如何减少这样的冲突？

```js
//唯一全局变量
var huangApp = {};

//定义全局变量
huangApp.name = "haiwen";
huangApp.add = function (a, b) {
  return a + b;
};
```

把自己的代码全部放入自己定义的唯一空间名字中，降低全局命名冲突问题~
jQuery 中就是使用的该方法：jQuery.name，简便写法：**$()**

### 方法

方法就是把函数放在对象的里面，对象只有两个东西：属性和方法

```js
var huang ={
    name:'haiwen'
    birth:2000,
    //方法
    age:function(){
        var now = new Date().getFullYear();
        return now-this.birth;
    }
}
//属性
huang.name
//方法
huang.age()

```

this:是默认指向调用它的那个对象的；

apply():控制 this 指向

## 内部对象

### Date

```js
//接收一个表示日期的字符串参数，转换为表示该日期的毫秒数
Date.parse(" ")
//返回日期的毫秒表示
Date.UTC(年，月（1月是0，2月是1），日，时，分，秒，毫秒)
//返回执行时的日期和时间的毫秒数
Date.now()

var now = new Date();
now.getFullYear();//年
now.getMonth();//月
now.getDate();//日
now.getDay();//星期几
now.getHours();//时
now.getMinutes();//分
now.getSeconds();//秒
now.getTime();//时间戳

//转换
now.toLocaleString();
now.toGMTString();
```

### RegExp 正则表达式(待学)

### Math

```js
Math.PI; //Π的值
min(), Max();
//舍入方法
Math.ceil(); //向上舍入为整数
Math.floor(); //向下舍入为整数
Math.round(); //四舍五入
Math.fround(); //数值最接近的单精度浮点数

//随机数
Math.random(); //[0,1)的随机数
function selectFrom(lowerValue, upperValue) {
  let choice = upperValue - lowerValue + 1; //可选总数
  return Math.floor(Math.random() * choice + lowerValue);
}

//其他方法
Math.abs();
Math.exp();
Math.sqrt();
```

## 面向对象编程

class 继承

```js
<script>
	//ES6之后========================
	//定义一个学生的类
	class Student{
		constructor(name){
			this.name = name;
		}
		hello(){
			alert('hello');
		}
}

	class XiaoStudent extends Student{
		constructor(name,grade){
			super(name);
			this.grade = grade;
		}
		myGrade(){
			alert('我是一名小学生');
		}
	}

	var xiaoming = new Student("xiaoming");
	var xiaohong = new XiaoStudent("xiaohong",1);
</script>
```

**原型链**

_proto_:

## 操作 BOM 对象（重点）

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

## 操作 DOM 对象（重点）

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

## 优站

- layui，layer 弹窗：`https://www.layui.com/`
- Element ui:`https://element.eleme.cn/#/zh-CN`
- Ant Design:`https://ant.design/index-cn`

## 迭代器与生成器

### 迭代器

任何实现`Iterable`接口的对象都有一个`Symbol.iterator	`属性，这个属性引用*默认迭代器*
默认迭代器是一个函数，调用之后产生一个实现`Iterable`接口的对象

实现`Iterable`接口的内置类型：

- 字符串
- 数组
- 映射
- 集合
- arguments 对象
- NodeList 等 DOM 集合类型

接受可迭代对象的原声语言：

- for-of 循环
- 数组解构[...args]
-

## 前端学习网站

前端智能化思维：https://juejin.cn/post/6844904104448393223

前端内容图谱：https://www.processon.com/view/link/5ea52667f346fb177b96507c#map

B 站 - https://space.bilibili.com/389008815

腾讯课堂 - https://imissu.ke.qq.com/

某猿学习网: https://www.imooc.com/

vue3: https://juejin.cn/post/6955129410705948702

前端入门三部曲：

- https://www.bilibili.com/video/BV1nJ411R7Db?spm_id_from=333.999.0.0
- https://ke.qq.com/course/1740943
- https://ke.qq.com/course/464526

Vue 入门：

- https://www.bilibili.com/video/BV1qb41187fZ?spm_id_from=333.999.0.0
- https://www.bilibili.com/video/BV1VE411877C?spm_id_from=333.999.0.0

axios 请求： https://www.bilibili.com/video/BV12J41157k8?spm_id_from=333.999.0.0
