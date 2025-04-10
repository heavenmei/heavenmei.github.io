---
title: JS面试 之 基础篇 (一)
subtitle: 
layout: post
date: 2022-09-11
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---

###  let & const & var

- `var`存在变量提升，可重复声明同一变量，声明的变量均可改
- `let`没有变量提升，不可重复声明同一变量，声明的变量均可改
- `const`没有变量提升，不可重复声明同一变量，声明的基本数据类型不可改，引用类型可改属性，不可只声明变量而不赋值


#### 变量提升？函数提升？

- 变量提升

```js
console.log(name); // undefined
var name = "Sunshine_Lin";

if (false) {
  var age = 23;
}
console.log(age); // undefined 不会报错
```

- 函数提升

```js
console.log(fun); // function fun() {}
function fun() {}

if (false) {
  function fun2() {}
}
console.log(fun2); // undefined 不会报错
```

- 函数提升优先级 > 变量提升优先级

```js
console.log(fun); // function fun() {}
var fun = "Sunshie_Lin";
function fun() {}
console.log(fun); // 'Sunshie_Lin'
```


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



### JS数据类型？判断变量类型方法？

- number：数字类型
- string：字符串类型
- boolean：布尔值类型
- undefined：未定义类型
- null：空类型
- object：对象类型
- symbol：symbol 类型
- bigint：大数字类型

**判断变量类型**

- typeof ：（6 种）number、string、boolean、object（数组，null）、undefined、function
- instanceof：判断原型链是否存在该对象
- constructor：原型对象的属性，指向构造函数
- Object.prototype.toString.call()：[object String]
- isPrototypeOf: 判断对象 Array.prototype.isPrototypeOf(a)
- getPrototypeOf: Object.getPrototypeOf(a)=== Array.prototype
- isArray: Array.isArray(a)



#### undeclared & undefined 

- undefined：声明了变量，但是没有赋值
- undecalared：报错，没有声明变量就直接使用

```js
var a; //undefined
b;    // b is not defined
```



#### null 和 undefined 的异同点有哪些？

**相同点**

- 1、都是空类型
- 2、转布尔值都是 false，都是假值
- 3、null == undefined 为 true

**不同点**

- 1、typeof，前者为 object，后者为 undefined

- 2、null 转数字为 0，undefined 转数字为 NaN

- 3、null === undefined 为 false

- 4、undefined: 未定义的值，一个变量的原始值，而非人为操作。null：空值，被人为置为空对象。
#### 为什么 typeof null 是 object？

不同数据类型底层都是用二进制来表示的，二进制前三位为`000`则会被判断为 object，而 null 二进制全是 0，所以被判断成 object


#### NaN

- typeof NaN = number
- NaN 不等于自身，不大于自身，不小于自身
- NaN 可以使用`Number.isNaN`判断
- NaN 是假值，转布尔值为 false

**判断NaN**
- `isNaN`：除了判断 NaN 为 true 外，还会把不能转成数字判断为 true，例如'dasd'
- `Number.isNaN`：只会判断 NaN 为 true

#### JavaScript 变量在内存中具体存储形式？

- `基本数据类型`：存在栈内存里
- `引用数据类型`：指针存栈内存，指向堆内存中一块地址，内容存在堆内存中
- 也有说法说其实 JavaScript 所有数据都存堆内存中，我也比较赞同这种说法

#### 装箱和拆箱

**装箱：把基本数据类型转化为对应的引用数据类型的操作**

看以下代码，s1 只是一个基本数据类型，他是怎么能调用 indexOf 的呢？

```js
const s1 = "Sunshine_Lin";
const index = s1.indexOf("_");
console.log(index); // 8
```

原来是 JavaScript 内部进行了装箱操作

- 1、创建 String 类型的一个实例；
- 2、在实例上调用指定的方法；
- 3、销毁这个实例；

```js
var temp = new String("Sunshine_Lin");
const index = temp.indexOf("_");
temp = null;
console.log(index); // 8
```

**拆箱：将引用数据类型转化为对应的基本数据类型的操作**

通过 valueOf 或者 toString 方法实现拆箱操作

```js
var objNum = new Number(123);
var objStr = new String("123");
console.log(typeof objNum); //object
console.log(typeof objStr); //object
console.log(typeof objNum.valueOf()); //number
console.log(typeof objStr.valueOf()); //string

console.log(typeof objNum.toString()); // string
console.log(typeof objStr.toString()); // string
```

### == 与 === 的区别？== 的隐式转换

- `==`：比较过程会进行隐式转换
- `===`：值相同，类型相同才会为 true


1. null == undefined 为 true，且与自身相等，与其他不等
2. bool ->number: 如果有一个操作数是<u>布尔值</u>，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1；
3. string->number: 如果一个操作数是<u>字符串</u>，另一个操作数是数值，在比较相等性之前先将字符串转换为数值
4. object->object.toString(): 如果一个操作数是对象，另一个操作数不是，则调用<u>对象的 toString()</u>方法，用得到的基本类型值按照前面的规则进行比较
5. NaN 不等于任意值，包括自身
6. ToNumber:
	- **undefined--NaN**
	- null -- 0
	- "" -- 0
	- [] -- 0
7. ToString:
	- null -- "null"
	- undefined -- "undefined"
	- true -- "true"
	- Object 先 valueOf 再 toString
	- Array.valueOf =自身 Array.toString= 逗号拼接

8. ToBoolean
	- False: undefined、null、false、0、NaN、""
	- True: 除上、[]、{}

```js
[] == false //true

[] == ![]
[] == false
[] == 0
'' == 0
0 == 0  //true
[0] == [0] // false
[0] === [0] //false


{} == !{}
{} == false
{}.toString() =[Object object]
Number([Object object]) = NaN
NaN == false// false
```

#### JS 的隐式转换规则？

- 转string类型：`+`（字符串连接符）
- 转number类型：`++`/`--`(自增自减运算符) `+ - * / %`(算术运算符) `> < >= <= == != === !== `(关系运算符)
- 转boolean： `!`（逻辑非运算符)
#### undefined >= undefined 为什么是 false ？null >= null 为什么是 true？

隐式转换，变成`NaN >= NaN`，`NaN`不等于自身也不大于自身

隐式转换，变成`0 >= 0`，为 true

#### 0.1 + 0.2 === 0.3，对吗？

不对，JavaScript 存在`精度丢失`问题，由于有些小数无法用二进制表示，所以只能取近似值，解决方法有：

- 先转大数，再变小数
- 使用`toFixed`


### 创建一个对象的方式有哪几种？

- new Object

```js
const obj = new Object();
obj.name = "Sunshine_Lin";
```

- 字面量

```js
const obj = { name: "Sunshin_Lin" };
```

- 工厂模式

```js
function createObj(name) {
  const obj = new Object();
  obj.name = name;
  return obj;
}
const obj = createObj("Sunshine_Lin");
```

- 构造函数

```js
function Person(name) {
  this.name = name;
}
const person = new Person("Sunshine_Lin");
```




### 解决遍历对象时，把原型上的属性遍历出来了咋办？

使用`hasOwnProperty`判断

```js
function Person(name) {
  this.name = name;
}
Person.prototype.age = 23;
const person = new Person("Sunshine_lin");
for (const key in person) {
  console.log(key);
} // name age
// 使用 hasOwnProperty
for (const key in person) {
  person.hasOwnProperty(key) && console.log(key);
} // name
```

### valueOf 与 toString？

- `valueOf`比较偏向于计算，`toString`偏向于显示
- 对象转换时，优先调用`toString`
- 强转字符串时优先调用`toString`，强转数字时优先调用`valueOf`
- 正常情况下，优先调用`toString`
- 运算操作符情况下优先调用`valueOf`

### 函数声明和函数表达式的区别？

- 函数声明：享受函数提升
- 函数表达式：归类于变量声明，享受变量提升
- 函数提升优先级 > 变量提升优先级`

```js
console.log(fun); // fun () {}
// 函数表达式
var fun = function (name) {};
// 函数声明
function fun() {}
console.log(fun); // fun (name) {}
```


### Ajax、Axios、Fetch 有啥区别？

- `Ajax`：是对 XMLHttpRequest(XHR)的封装
- `Axios`：是基于 Promise 对 XHR 对象的封装
- `Fetch`：是 window 的一个方法，基于 Promise，==与 XHR 无关==，不兼容 IE

### load、$(document).ready、DOMContentLoaded 的区别？

- `$(document).ready`、`DOMContentLoaded`：DOM 树构建完毕，但还没有请求静态资源
- `load`：静态资源请求完毕

### 什么是事件委托？

当子元素都需要绑定相同事件时，可以将事件绑在父元素上，优点有：

- 绑定在父元素，则只需绑定一次，节省性能

- 后续新增的子元素也可以触发父元素绑定的事件

  ```js
  var oUl = document.getElementById("newList");
  oUl.onclick = function (e) {
    var evt = e || event;
    var _target = evt.target || evt.srcElement; //兼容IE
    if (_target.nodeName.toLowerCase() == "li") {
      //操作
    }
  };
  ```


### Set 与 Array 的区别是什么？

- Set 使用 has 判断有无元素，数组使用索引
- Set 添加元素使用方法 add，数组用 push、unshift
- Set 长度为 size，数组为 length
- Set 会自动把同样的基础数据类型去重，数组不能
- Set 删除元素用 delete，数组用 splice、pop、shift
- Set 可以使用 clear 清空，数组需要重新赋值[]
- 数组可以传入 new Set(array)，实现数组转 Set
- Set 可以使用 keys、value 方法，转数组
- Set 自带 forEach 方法进行遍历

### Map 与 Object 的区别是什么？

- Map 使用 set 设置属性，对象使用 obj[key] = value
- Map 使用 get 获取属性值，对象使用 obj[key]
- Map 使用 has 判断属性存在与否，对象只能 obj[key]
- Map 删除元素使用 delete 方法，对象使用 delete 关键字
- Map 使用 clear 进行情空，对象需要重新赋值{}
- Map 和对象都可以使用 entries 方法转数组键值对
- Map 自带 forEach 方法进行遍历

### 处理异步的方法有哪些？

- 回调函数
- Promise
- 事件监听
- 发布订阅
- async/await



### JS 中有哪些不同类型的弹出框？

在 JS 中有三种类型的弹出框可用，分别是：

- Alert
- Confirm
- Prompt

### 如何将 JS 日期转换为 ISO 标准

```js
var date = new Date();
var n = date.toISOString();
console.log(n);
// YYYY-MM-DDTHH:mm:ss.sssZ
```

### encodeURI & encodeURIComponent 

- `encodeURI()` / `decodeURI()`：用于对完整 URL 进行编码
- `encodeURIComponent()` / `decodeURIComponent()`：用于编码 URI 部分，例如查询字符串
- `new URLSearchParams('?name=John&age=30')` ：string —> obj
```js
encodeURI('https://example.com/path to a document.pdf')
// 空格 -> %20
// 'https://example.com/path%20to%20a%20document.pdf'


`http://example.com/?search=${encodeURIComponent('encode & decode param')}`
// & -> %26
// 'http://example.com/?search=encode%20%26%20decode%20param'
```

### arguments对象

```js
function fn1 () {
  console.log(arguments)
}

fn1(1, 2, 3)
// [Arguments] { '0': 1, '1': 2, '2': 3 }


const fn2 = () => {
  console.log(arguments)
}
fn2(1, 2, 3)
// arguments is not defined
```

### 监听ajax上传进度

```js
//【上传进度调用方法实现】
xhr.upload.onprogress = progressFunction
```

### ['1', '2', '3'].map(parseInt)

- parseInt('1', 0) //0为十进制
- parseInt('2', 1) //没有一进制
- parseInt('3', 2) // 二进制没有3

```js
[1, NaN, NaN]
```

将数组index作为第二个参数，parseInt第二参数指定转换进制


### 页面重定向

-  `location.href`：window.location.href =""
-  `location.replace`：window.location.replace(" ")




### 数组的常用方法

| 方法      | 作用                  | 是否影响原数组 |
| ------- | ------------------- | ------- |
| push    | 在数组后添加元素，返回长度       | ✅       |
| pop     | 删除数组最后一项，返回被删项      | ✅       |
| shift   | 删除数组第一项，返回被删项       | ✅       |
| unshift | 数组开头添加元素，返回长度       | ✅       |
| reserve | 反转数组，返回数组           | ✅       |
| sort    | 排序数组，返回数组           | ✅       |
| splice  | 截取数组，返回被截取部分        | ✅       |
| join    | 将数组变字符串，返回字符串       | ❌       |
| concat  | 连接数组                | ❌       |
| map     | 相同规则处理数组项，返回新数组     | ❌       |
| forEach | 遍历数组                | ❌       |
| filter  | 过滤数组项，返回符合条件的数组     | ❌       |
| every   | 每一项符合规则才返回 true     | ❌       |
| some    | 只要有一项符合规则就返回 true   | ❌       |
| reduce  | 接受上一个 return 和数组下一项 | ❌       |
| flat    | 数组扁平化               | ❌       |
| slice   | 截取数组，返回被截取区间        | ❌       |

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



### Math 的常用方法有哪些？

| 方法                 | 作用              |
| -------------------- | ----------------- |
| Math.max(...arr)     | 取 arr 中的最大值 |
| Math.min(...arr)     | 取 arr 中的最小值 |
| Math.ceil(小数)      | 小数向上取整      |
| Math.floor(小数)     | 小数向下取整      |
| Math.round(小数)     | 小数四舍五入      |
| Math.sqrt(num)       | 对 num 进行开方   |
| Math.pow(num, m)     | 对 num 取 m 次幂  |
| Math.random() \* num | 取 0-num 的随机数 |



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

