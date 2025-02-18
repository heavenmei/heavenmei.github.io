---
title: u don't know js 之 this & 对象
subtitle: 
layout: post
date: 2025-02-18
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---
## this

this既不指向自身也不指向函数的词法作用域。**this是在运行时绑定的，而不是编写时。它的上下文取决于函数调用的位置**

四条绑定规则:

| 规则 | 描述 | 优先级 |
| ---- | ---- | ---- |
| 默认绑定 | 指向全局对象、undefined（严格模式） | 最低 |
| 隐式绑定 | 函数引用有上下文对象时，则绑定该对象。`obj.foo()` | 低 |
| 显示绑定 | `call(...)` or `apply(...)`, 第一个参数是为this准备的 | 高 |
| new绑定 | 创建一个新的对象，新对象绑定到函数调用的this，返回该新对象 | 最高 |
| 箭头函数 | 根据外层（函数or全局）作用域决定 |  |


### 默认绑定
```js
function foo(){
	console.log(this.a);
}

var a = 2;

foo(); // 2 / undefined(严格模式)
```


### 隐式绑定
连续调用下，只在上一层（最后一层）起作用

```js
function foo(){
	console.log(this.a);
}

var obj = {
	a: 42,
	foo: foo
}

obj.foo(); //42


var obj2 = {
	a: 3,
	foo: foo
}

obj2.obj.foo(); // 42
```


### 显示绑定

硬绑定：call 和apply显式的强制绑定

```js
function bind(fn, obj){
	return function(){
		return fn.apply(obj, arguments);
	}
}
```

软绑定：指定一个非全局对象和undefined的值。若指向默认绑定则this指向obj，否则不变。避免污染全局对象


如果null和undefined赋值给call和apply则被忽略，应用默认绑定。

**柯里化**：预先设置一些参数
```js
function foo(a,b){
	console.log("a:",a, "b:", b);
}

var bar = foo.bind(null, 2); 
bar(2); //a:2 b:3
```

### new 绑定

构造函数只是被new操作符调用的普通函数，new一个构造函数的步骤：
1. 创建一个新对象
2. 新对象被执行`[[Prototype]]` 连接
3. 新对象绑定到函数调用的this
4. 自动返回新对象


### 箭头函数

**箭头函数不使用以上四种规则**，而是根据外层（函数or全局）作用域决定this。

**箭头函数会继承外层函数调用的this绑定**

```js
function foo(){
	setTimeout((a)=>{
		// this继承foo
		console.log(this.a);
	},100) 
}

var obj = {
	a: 29
}

foo.call(obj); // 29
```


## 对象

