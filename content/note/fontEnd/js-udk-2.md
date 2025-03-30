---
title: u don't know js 之 this & 对象
subtitle: 
layout: post
date: 2024-02-18
author: heavenmei
categories:
  - Note
description: 
tags:
  - JS
image:
---
## this

this既不指向自身也不指向函数的词法作用域。

**this是在运行时绑定的，而不是编写时。它的上下文取决于函数调用的位置**

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

**柯里化：预先设置一些参数**
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

- **两种定义形式**：声明（文字）形式和构造形式。二者唯一的区别是文字声明可以添加多个键/值对，构造形式必须逐个添加属性。
- **六种语言类型**：string、number、boolean、null、undefined、object
    - 简单基本类型（string、number、boolean、null、undefined）本身不是对象，`typeof null`会返回“object”是个bug。
        - 不同的对象在底层都表示为二进制，二进制前三位都为0的话会被判断为object类型，null的二进制表示全是0，所以typeof会返回“object”。
    - JavaScript中的函数是“一等公民”，是对象的一个子类型，本质上和普通对象一样（只是可以调用）。
- **内置对象**：对象子类型（注意大写的首字母），String、Number、Boolean、Object、Function、Array、Date、RegExp、Error。
    - 这些内置对象可以当做构造函数来使用，从而构造一个对应子类型的新对象。
    - null和undefined没有对应的构造形式，只有文字形式；Date只有构造没有文字形式。

### 内容
- **可计算属性名**：ES6新增功能，可以在文字形式中使用`[]`包裹一个表达式来当做属性名。
-  **属性和方法**：函数永远不会“属于”一个对象，即使在对象的文字形式中声明一个函数表达式，这个函数也不会“属于”这个对象，只是对于相同函数对象的多个**引用**。
- **复制对象**：
        - `var newObj = JSON.parse(JSON.stringify(someObj))`，需要保证对象是JSON安全的，只适用于部分情况。
        - `object.assign(..)`会遍历一个或多个源对象的所有可枚举的自有键并把它们复制到目标对象，最后返回目标对象，实现浅拷贝。
- **属性描述符**：从ES5开始所有属性都具备了属性描述符，包含`value`（属性值）、`writable`（控制是否可以修改属性值）、`enumerable`（控制是否会出现在对象的属性枚举中）、`configurale`（控制是否允许配置，修改成false是单项操作无法撤销）特性。
        - 创建普通属性时，属性描述符会使用默认值，也可以使用`Object.defineProperty(..)`来添加一个新属性或者修改一个已有属性并对特性进行设置。
-  **不变性**
        - 对象常量：结合`writable:false`和`configurable:false`就可以创建真正的常量属性（不可修改、重定义或者删除）。
        - 禁止扩展：`Object.preventExtensions(..)`可以禁止一个对象添加新属性并且保留已有属性。
        - 密封：`Object.seal(..)`会创建一个“密封”的对象，在现有对象上调用`Object.preventExtensions(..)`并把所有现有属性标记为`configurable:false`。
        - 冻结：`Object.freeze(..)`会创建一个冻结对象，在现有对象上调用`Object.seal(..)`并把所有“数据访问”属性标记为`writable:false`，这是可以应用在对象上的级别最高的不可变性（不过这个对象引用的其他对象是不受影响的）


### 存在性
- `"a" in myObject`使用in操作符可以检查属性是否在对象及其`[[Prototype]]`链中。
- `myObject.hasOwnPrototype("a")`只会检查属性是否存在myObject对象中，不会检查`[[Prototype]]`链。
- `myObject.prototypeIsEnumerable("a")`可以检查给定的属性名是否直接存在于对象中，而不是在原型链上，并且满足`enumerable:true`。
- `Object.keys(myObject)`会返回一个数组，包含所有可枚举属性，只会查找对象直接包含的属性。
- `Object.getOwnPrototypeNames(myObject)`会返回一个数组，包含所有属性，无论它们是否可枚举，只会查找对象直接包含的属性。


### 遍历
- `for..in`会遍历对象的可枚举属性列表，包括`[[Prototype]]`链。 **key**
- `for..of`会直接遍历值而不是数组下标或者对象属性。它首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next()方法来遍历所有返回值。 **value**
- `forEach(..)`会遍历数组中的所有值并忽略回调函数的返回值。
- `every(..)`会一直运行直到回调函数返回false。
- `some(..)`会一直运行直到回调函数返回true。
 
## 类 & 委托

### 类理论

- JavaScript没有类，但提供了一些近似类的语法，js只有对象，可以不通过类直接创建对象。
- 类通过**复制**操作被实例化为对象。子类得到的仅仅只是继承自父类行为的一个副本，子类对方法重写，不会影响父类





### 原型

所有普通的`[[Prototype]]`链最终都会指向内置的Object.prototype。

**构造函数**：就是所有带new 的函数调用。`new Foo()`会生成一个新对象，这个新对象的内部链接`[[Prototype]]`关联的是Foo.prototype对象。 从而让两个对象相互关联，这样一个对象就可以通过 委托 访问另一个对象的属性和函数

**原型继承**：在JavaScript中并不会将一个对象（“类”）复制到另一个对象（“实例”），只是将它们关联起来，这个机制被称为原型继承。但是继承意味着复制操作，js并不会复制，所以事实上“**委托**”这个术语描述会更加准确。


> 修改 prototype

 ES6前只能通过设置`.__proto__`属性来修改对象的`[[prototype]]`关联，`.__proto__`存在于内置的`Object.prototype`中，它引用了内部的`[[Prototype]]`对象，但无法兼容所有浏览器。
 
 ES6添加了`Object.setPrototypeOf(..)`这个标准并且可靠的修改关联的辅助函数。



>创建关联对象

需要调用`Object.create(..)`，它会凭空创建一个“新”对象并把新对象内部的`[[prototype]]`关联到指定的对象。



> 验证委托关联

ES5的标准方法：`Object.getPrototype(a) === Foo.prototype`

非标准方法：`a.__proto__ === Foo.prototype`




### 行为委托

- XYZ通过`Object.create(..)`创建，它的`[[prototype]]`委托了Task对象。这种编码风格称为“对象关联”。
- 委托行为意味着某些对象（XYZ）在找不到属性或者方法引用时会把这个请求委托给另一个对象（Task）。
- 行为委托认为对象之间是**兄弟关系**，互相委托，而不是父类和子类的关系。JavaScript的`[[prototype]]`机制本质上就是行为委托机制。
- 我们可以选择在JavaScript中努力实现类机制，也可以拥抱更自然的`[[prototype]]`委托机制，**类并不适用于JavaScript**。
- 禁止相互委托，无限循环


```js
Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};
Bar = Object.create(Foo);
Bar.speak = function() {
  alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();

```


> 行为委托 VS. 类设计模式 - 不同

   - 通常来说，在`[[prototype]]`委托中最好把状态保存在委托者（XYZ、ABC）而不是委托目标（Task）上。
    - 尽量避免在`[[prototype]]`链的不同级别中使用相同的命名，否则就要用笨拙脆弱的语法来消除歧义。
    - `this.setID(ID)`，XYZ中没有这个方法名，会通过`[[prototype]]`委托关联到Task中找到这个方法，由于调用位置触发了this的隐式绑定规则，运行时this会绑定到XYZ，这正是我们想要的。
    - 使用类构造函数需要在同一个步骤中实现构造和初始化，对象关联则更好地支持关注分离原则，创建和初始化不需要合并为一个步骤。
    - 对象关联能让代码更加简洁、更具扩展性，简化了代码结构，用一种简单的设计实现了同样的功能。



### ES6的class

- class不是向JavaScript引入了一种新的“类”机制，而是现有`[[prototype]]`委托机制的一种语法糖。
- class并不会像传统面向类的语言一样在声明时静态复制所有行为，如果修改或者替换了父“类”中的一个方法，子“类”的所有实例都会受到影响。


> 优点

   - 语法更好看，不再引用杂乱的`.prototype`，不再需要使用`Object.create(..)`、`.__proto__`、`Object.setPrototypeOf(..)`;
    - 可以通过`super(..)`来实现多态，任何方法都可以引用原型链上层的同名方法，还可以解决构造函数无法互相应引用的问题；
    - class字面语法不能声明属性，只能声明方法，可以帮你避免犯错；
    - 可以通过`extends`很自然的扩展对象（子）类型，甚至是内置的对象（子）类型。


