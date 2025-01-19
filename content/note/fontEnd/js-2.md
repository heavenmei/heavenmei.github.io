---
title: JavaScript 红宝书 之 进阶篇 (二)
subtitle: 
layout: post
date: 2022-12-02
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---

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







### 生成器





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

