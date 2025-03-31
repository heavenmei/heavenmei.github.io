---
title: 浏览器 之 V8引擎
subtitle: 
layout: post
date: 2024-10-19
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---
## AST 抽象语法树

抽象语法树 (Abstract Syntax Tree)，

用途：
- 编辑器的错误提示、代码格式化、代码高亮、代码自动补全；
- `elint`、`pretiier` 对代码错误或风格的检查；
- `webpack` 通过 `babel` 转译 `javascript` 语法；

js 执行的第一步是读取 js 文件中的字符流，然后通过词法分析生成 `token`，之后再通过语法分析( Parser )生成 AST，最后生成机器码执行。整个解析过程主要分为以下两个步骤：

- 分词：将整个代码字符串分割成最小语法单元数组
- 语法分析：在分词基础上建立分析语法单元之间的关系




- [AST explorer 在线生成词法 (✅ 推荐)](https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F "https://astexplorer.net/")
- [AST Parser produces syntax tree 词法scanner分析工具](https://link.juejin.cn/?target=https%3A%2F%2Fesprima.org%2Fdemo%2Fparse.html "https://esprima.org/demo/parse.html")

## V8 引擎
V8引擎是由 Google 开发的开源JavaScript 引擎，是 JavaScript **虚拟机**的一种


![](assets/bvrowser-v8-20250328095757.png)