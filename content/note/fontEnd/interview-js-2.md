---
title: JS面试 之 进阶篇 (二)
subtitle: 
layout: post
date: 2022-09-12
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---


### undeclared & undefined 

- undefined：声明了变量，但是没有赋值
- undecalared：报错，没有声明变量就直接使用

```js
var a; //undefined
b;    // b is not defined
```

###  let & const & var

- `var`存在变量提升，可重复声明同一变量，声明的变量均可改
- `let`没有变量提升，不可重复声明同一变量，声明的变量均可改
- `const`没有变量提升，不可重复声明同一变量，声明的基本数据类型不可改，引用类型可改属性，不可只声明变量而不赋值

#### 暂时性死区问题

```js
var a = 100;

if(1){
    a = 10;
    // 在当前块作用域中存在a使用let/const声明的情况下
    // 给a赋值10时，只会在当前作用域找变量a
    // 而a还未声明，Error:Cannot access 'a' before initialization
    let a = 1;
}
```


#### var+setTimeout 输出


```js
for(var i = 0; i < 3; i++){
  setTimeout(function(){
      console.log(i);   
  },0); 
};
```

答案：3，3，3

解决方法

```js
for(let i = 0; i < 3; i++){
  setTimeout(function(){
      console.log(i);   
  },0); 
};
// 0 1 2
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function () {
      console.log(i);
    }, 0, i)
  })(i)
};
// 0 1 2
```


### DOM

#### 获取DOM元素

| 方法                                     | 描述               |
| -------------------------------------- | ---------------- |
| document.getElementById(id)            | 通过id获取dom        |
| document.getElementsByTagName(tagName) | 通过标签名获取dom       |
| document.getElementsByClassName(class) | 通过class获取dom     |
| document.getElementsByName(name)       | 通过标签的属性name获取dom |
| document.querySelector(选择器)            | 通过选择器获取dom       |
| document.querySelectorAll(选择器)         | 通过选择器获取dom       |

#### 操作DOM元素

| 方法                     | 描述                                                               |
| ---------------------- | ---------------------------------------------------------------- |
| createElement          | 创建一个标签节点                                                         |
| createTextNode         | 创建一个文本节点                                                         |
| cloneNode(deep)        | 复制一个节点，连同属性与值都复制，deep为true时，<br />连同后代节点一起复制，不传或者传false，则只复制当前节点 |
| createDocumentFragment | 创建一个文档碎片节点                                                       |
| appendChild            | 追加子元素                                                            |
| insertBefore           | 将元素插入前面                                                          |
| removeChild            | 删除子元素                                                            |
| replaceChild           | 替换子元素                                                            |
| getAttribute           | 获取节点的属性                                                          |
| createAttribute        | 创建属性                                                             |
| setAttribute           | 设置节点属性                                                           |
| romoveAttribute        | 删除节点属性                                                           |
| element.attributes     | 将属性生成类数组对象                                                       |

#### DOM的类型

```js
元素节点              Node.ELEMENT_NODE(1)
属性节点              Node.ATTRIBUTE_NODE(2)
文本节点              Node.TEXT_NODE(3)
CDATA节点             Node.CDATA_SECTION_NODE(4)
实体引用名称节点       Node.ENTRY_REFERENCE_NODE(5)
实体名称节点          Node.ENTITY_NODE(6)
处理指令节点          Node.PROCESSING_INSTRUCTION_NODE(7)
注释节点              Node.COMMENT_NODE(8)
文档节点              Node.DOCUMENT_NODE(9)
文档类型节点          Node.DOCUMENT_TYPE_NODE(10)
文档片段节点          Node.DOCUMENT_FRAGMENT_NODE(11)
DTD声明节点            Node.NOTATION_NODE(12)
```



####  DocumentFragment 文档碎片
一个容器，用于暂时存放创建的dom元素，使用`document.createDocumentFragment()`创建

将需要添加的大量元素 先添加到文档碎片 中，再将文档碎片添加到需要插入的位置，**大大减少dom操作，提高性能** 

```js
var oFragmeng = document.createDocumentFragment(); 
for(var i=0;i<10000;i++)
{ 

    var op = document.createElement("span"); 

    var oText = document.createTextNode(i); 

    op.appendChild(oText); 

    //先附加在文档碎片中

    oFragmeng.appendChild(op);  

} 
//最后一次性添加到document中
document.body.appendChild(oFragmeng); 
```


### BOM

BOM 就是`browser object model`，`浏览器对象模型`

| api                | 作用                 | 代表方法或属性                                                                                                                                                                                                                                                                                                                           |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| window.history     | 操纵浏览器的记录     | history.back() history.go(-1)                                                                                                                                                                                                                                                                                                            |
| window.innerHeight | 获取浏览器窗口的高度 |                                                                                                                                                                                                                                                                                                                                          |
| window.innerWidth  | 获取浏览器窗口的宽度 |                                                                                                                                                                                                                                                                                                                                          |
| window.location    | 操作刷新按钮和地址栏 | location.host：获取域名和端口 <br />location.hostname：获取主机名<br />location.port：获取端口号<br /> location.pathname：获取 url 的路径<br /> location.search：获取?开始的部分<br /> location.href：获取整个 url <br />location.hash：获取#开始的部分 <br />location.origin：获取当前域名<br /> location.navigator：获取当前浏览器信息 |

#### BOM 和 DOM 的关系

**BOM**全称 Browser Object Model，即浏览器对象模型，主要处理浏览器窗口和框架。

DOM 全称 Document Object Model，即文档对象模型，是 HTML 和 XML 的应用程序接口（API），遵循 W3C 的标准，所有浏览器公共遵守的标准。

JS 是通过访问**BOM**（Browser Object Model）对象来访问、控制、修改客户端(浏览器)，由于**BOM**的 window 包含了 document，window 对象的属性和方法是直接可以使用而且被感知的，因此可以直接使用 window 对象的 document 属性，通过 document 属性就可以访问、检索、修改 XHTML 文档内容与结构。因为 document 对象又是 DOM 的根节点。

可以说，==BOM 包含了 DOM(对象)==，浏览器提供出来给予访问的是 BOM 对象，从 BOM 对象再访问到 DOM 对象，从而 js 可以操作浏览器以及浏览器读取到的文档。





### 数组操作
#### splice & slice 

| 方法     | 参数                                    |             |
| ------ | ------------------------------------- | ----------- |
| splice | splice(start, num, item1, item2, ...) | 源数组操作       |
| slice  | slice(start, end)                     | 返回new array |

#### substr & substring

| 方法        | 参数                   |
| --------- | -------------------- |
| substr    | substr(start,length) |
| substring | substring(start,end) |

#### includes 比 indexOf好在哪？

| 方法       | 检测`NaN` | 特点                             |
| -------- | ------- | ------------------------------ |
| includes | 可以✅     | 内部使用了`Number.isNaN`对`NaN`进行了匹配 |
| indexOf  | 不能❌     |                                |


### JS延迟加载 async & defer

#### 延迟加载方式
1. `<script async src="script.js"></script>`：给script标签加async属性，则加载和渲染后续文档元素的过程将和 `script.js` 的加载与执行并行进行（异步）
2. `<script defer src="script.js"></script>`：给script标签加defer属性，加载后续文档元素的过程将和 `script.js` 的加载并行进行（异步），但是 `script.js` 的执行要在所有元素解析完成之后，`DOMContentLoaded` 事件触发之前完成
3. 动态创建script标签：等到`DOMContentLoaded` 事件触发时，生成一个script标签，渲染到页面上
4. setTimeout定时器延迟代码执行

#### async & defer

`defer`属性告诉浏览器不要等待脚本，浏览器会继续处理 HTML，构建 DOM。该脚本“在后台”加载，然后在 **DOM 完全构建完成后再运行**。


`async`属性意味着该脚本是完全独立的，async 脚本在后台加载完就**立即运行**
- 浏览器不会阻止async脚本
- 其他脚本也不会等待async脚本，async脚本也不会等待其他脚本
- `DOMContentLoaded`和async脚本不会互相等待
    - `DOMContentLoaded`可能在async脚本执行之前触发（如果async脚本在页面解析完成后完成加载）
    - 或在async脚本执行之后触发（如果async脚本很快加载完成或在 HTTP 缓存中）




### 宏任务 & 微任务 & EventLoop & TaskQueue

#### 宏任务

| #                         | 浏览器 | Node |
| ------------------------- | --- | ---- |
| **I/O**                   | ✅   | ✅    |
| **setTimeout**            | ✅   | ✅    |
| **setInterval**           | ✅   | ✅    |
| **setImmediate**          | ❌   | ✅    |
| **requestAnimationFrame** | ✅   | ❌    |

#### 微任务

| #                                        | 浏览器 | Node |
| ---------------------------------------- | --- | ---- |
| **Promise.prototype.then catch finally** | ✅   | ✅    |
| **process.nextTick**                     | ❌   | ✅    |
| **MutationObserver**                     | ✅   | ❌    |

#### 宏任务与微任务的执行顺序？说说EventLoop？

[7关！setTimeout+Promise+Async输出顺序？你能过几关！](https://security.feishu.cn/link/safety?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzg2NjY2NTcyNg%3D%3D%26mid%3D2247483940%26idx%3D1%26sn%3D7a97101836c2b697a270bd84707d441f%26chksm%3Dce4617b5f9319ea3e65092ef4a8b977c85cb0c589f89f49cf626df961de0900c2510297f0af9%26scene%3D21%23wechat_redirect&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)


**JS的执行机制就可以看做是一个主线程加上一个任务队列(task queue)**。同步任务就是放在主线程上执行的任务，异步任务是放在任务队列中的任务。所有的同步任务在主线程上执行，形成一个执行栈;异步任务有了运行结果就会在任务队列中放置一个事件；脚本运行时先依次运行执行栈，然后会从任务队列里提取事件，运行任务队列中的任务，这个过程是不断重复的，所以又叫做事件循环(Event loop)。

### 各种函数
#### 高阶函数

高阶函数（Higher-order function）。以函数作为参数传给另一个函数，像数组的`map、reduce、filter`这些都是高阶函数。

```js
// 简单的高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}

//用代码验证一下：
add(-5, 6, Math.abs); // 11
```


#### 函数柯里化？

柯里化（Currying)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且**返回接受余下的参数的新函数**。

```js
// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```

好处-1：参数复用

```js
// 正常正则验证字符串 reg.test(txt)

// 普通情况
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false
```

好处-2：延迟执行 其实
`Function.prototype.bind`就是科里化的实现例子

```js
function sayKey(key) {
  console.log(this[key])
}
const person = {
  name: 'Sunshine_Lin',
  age: 23
}
// call不是科里化
sayKey.call(person, 'name') // 立即输出 Sunshine_Lin
sayKey.call(person, 'age') // 立即输出 23

// bind是科里化
const say = sayKey.bind(person) // 不执行
// 想执行再执行
say('name') // Sunshine_Lin
say('age') // 23
```

#### compose函数 扁平化

简单的compose函数：将需要嵌套执行的函数扁平化处理

```js
const compose = (a , b) => c => a( b( c ) );
```

例子：统计单词个数

```js
const space = (str) => str.split(' ')
const len = (arr) => arr.length


// 普通写法
console.log(len(space('i am linsanxin'))) // 3
console.log(len(space('i am 23 year old'))) // 5
console.log(len(space('i am a author in juejin'))) // 6


// compose写法
const compose = (...fn) => value => {
  return fn.reduce((value, fn) => {
    return fn(value)
  }, value)
}
const computedWord = compose(space, len)
console.log(computedWord('i am linsanxin')) // 3
console.log(computedWord('i am 23 year old')) // 5
console.log(computedWord('i am a author in juejin')) // 6
```

#### 箭头函数与普通函数的区别？

- 1、箭头函数不能作为构造函数，**不能new**
- 2、箭头函数**没有自己的this**
- 3、箭头函数**没有arguments对象**
- 4、箭头函数**没有原型对象**


#### 函数的length是多少？

`length` 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数


#### JS中的 MUL 函数？

MUL表示数的简单乘法。在这种技术中，将一个值作为参数传递给一个函数，而该函数将返回另一个函数，将第二个值传递给该函数，然后重复继续。例如:x*y*z可以表示为

```js
const mul = x => y => z => x * y * z

console.log(mul(1)(2)(3)) // 6
```

### JS模块化开发 & CommonJs & Es Module

在模块化没有出现之前，所有js文件都是script导入的，这就意味着 作用域都是顶层的，造成**变量污染**


JS模块化：`<script type="module"/>`让每个文件都是独立的作用域。**一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数**

发展从最初的**CommonJS** ，到后来的**AMD**和**CMD**，再到今天的**ES6模块**化方案。

#### CommonJs & Es Module 

| 模块化   | CommonJs                 | Es Module                              |
| ----- | ------------------------ | -------------------------------------- |
| 语法    | module.exports / exports | exports / export default               |
| 导出    | 拷贝输出，所以可更改               | 导出引用值，const 所以只读                       |
| 导入    | require                  | import                                 |
| 导入值读写 | 可读可写                     | 只读                                     |
| 代码发生在 | 运行时 （动态导入）               | 编译时（静态）<br/>只能声明在该文件的最顶部，<br/>不能动态加载语句 |
| 加载方式  | **同步**                   | **异步**                                 |
| 场景    | 服务端                      | 客户端                                    |

[常用的ES6-ES12的语法](https://security.feishu.cn/link/safety?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzg2NjY2NTcyNg%3D%3D%26mid%3D2247484979%26idx%3D1%26sn%3Dff9fd50664a1f75a770f7e396c72fd2e%26chksm%3Dce4613a2f9319ab4fb841798cc2fb2d17719545645a592b88f276731a3426773b3f86ee4aade%26scene%3D21%23wechat_redirect&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)

#### 为什么Commonjs不适用于浏览器

==CommonJS的 `require` 语法是同步的==，当我们使用`require` 加载一个模块的时候，必须要等这个模块加载完后，才会执行后面的代码。

**在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。**

所以才有了后面的**AMD**和**CMD**模块化方案，它们都是异步加载的，比较适合在浏览器端使用。

因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。


#### AMD & CMD

都是异步加载

| 模块化 | 代表应用       | 特点                                         |
| --- | ---------- | ------------------------------------------ |
| AMD | require.js | 1、AMD的api默认一个当多个用<br/>2、依赖前置，异步执行          |
| CMD | sea.js     | 1、CMD的api严格区分，推崇职责单一 <br/>2、依赖就近，按需加载，同步执行 |



### 页面重定向

-  `location.href`：window.location.href =""
-  `location.replace`：window.location.replace(" ")


### 鼠标/ 键盘事件
#### 鼠标事件有哪些？

| 事件         | 说明                      |
| ---------- | ----------------------- |
| click      | 单机鼠标左键触发                |
| dbclick    | 双击鼠标左键触发                |
| mousedown  | 单机鼠标任意一个按键都触发           |
| mouseout   | 鼠标指针位于某个元素上且将要移出元素边界时触发 |
| mouseover  | 鼠标指针出某个元素到另一个元素上时触发     |
| mouseup    | 松开任意鼠标按键时触发             |
| mousemove  | 鼠标在某个元素上时持续发生           |
| mouseenter | 鼠标进入某个元素边界时触发           |
| mouseleave | 鼠标离开某个元素边界时触发           |

#### 键盘事件有哪些？

> 注明：`event`对象上的`keyCode`属性，是按下的按键的`ASCLL值`，通过这个值可辨别是按下哪个按键。`ASCLL`表在此ASCII码一览表，ASCII码对照表

| 事件         | 说明                            |
| ---------- | ----------------------------- |
| onkeydown  | 某个键盘按键被按下时触发                  |
| onkeyup    | 某个键盘按键被松开时触发                  |
| onkeypress | 某个按键被按下时触发，不监听功能键，如ctrl，shift |
#### JS中鼠标事件的各个坐标？

| 属性      | 说明                                                     | 兼容性              |
| ------- | ------------------------------------------------------ | ---------------- |
| offsetX | 以当前的目标元素左上角为原点，定位x轴坐标                                  | 除Mozilla外都兼容     |
| offsetY | 以当前的目标元素左上角为原点，定位y轴坐标                                  | 除Mozilla外都兼容     |
| clientX | 以浏览器可视窗口左上角为原点，定位x轴坐标                                  | 都兼容              |
| clientY | 以浏览器可视窗口左上角为原点，定位y轴坐标                                  | 都兼容              |
| pageX   | 以doument对象左上角为原点，定位x轴坐标                                | 除IE外都兼容          |
| pageY   | 以doument对象左上角为原点，定位y轴坐标                                | 除IE外都兼容          |
| screenX | 以计算机屏幕左上顶角为原点，定位x轴坐标(多屏幕会影响)                           | 全兼容              |
| screenY | 以计算机屏幕左上顶角为原点，定位y轴坐标                                   | 全兼容              |
| layerX  | 最近的绝对定位的父元素（如果没有，则为 document 对象）<br />左上顶角为元素，定位 x 轴坐标 | Mozilla 和 Safari |
| layerY  | 最近的绝对定位的父元素（如果没有，则为 document 对象）<br />左上顶角为元素，定位 y 轴坐标 | Mozilla 和 Safari |


### JS的各个尺寸
#### 元素视图尺寸？

| 属性           | 说明                                         |
| ------------ | ------------------------------------------ |
| offsetLeft   | 获取当前元素到定位父节点的left方向的距离                     |
| offsetTop    | 获取当前元素到定位父节点的top方向的距离                      |
| offsetWidth  | 获取当前元素 width + 左右padding + 左右border-width  |
| offsetHeight | 获取当前元素 height + 上下padding + 上下border-width |
| clientWidth  | 获取当前元素 width + 左右padding                   |
| clientHeight | 获取当前元素 height + 上下padding                  |
| scrollWidth  | 当前元素内容真实的宽度，内容不超出盒子宽度时为盒子的clientWidth      |
| scrollHeight | 当前元素内容真实的高度，内容不超出盒子高度时为盒子的clientHeight     |

#### Window视图尺寸？

| 属性          | 说明                                       |
| ----------- | ---------------------------------------- |
| innerWidth  | innerWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏） |
| innerHeight | innerWidth 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏） |

#### Document文档视图尺寸？

| 属性                                    | 说明                                      |
| ------------------------------------- | --------------------------------------- |
| document.documentElement.clientWidth  | 浏览器窗口可视区宽度<br />（不包括浏览器控制台、菜单栏、工具栏、滚动条） |
| document.documentElement.clientHeight | 浏览器窗口可视区高度<br />（不包括浏览器控制台、菜单栏、工具栏、滚动条） |
| document.documentElement.offsetHeight | 获取整个文档的高度（包含body的margin）                |
| document.body.offsetHeight            | 获取整个文档的高度（不包含body的margin）               |
| document.documentElement.scrollTop    | 返回文档的滚动top方向的距离（当窗口发生滚动时值改变）            |
| document.documentElement.scrollLeft   | 返回文档的滚动left方向的距离（当窗口发生滚动时值改变）           |

