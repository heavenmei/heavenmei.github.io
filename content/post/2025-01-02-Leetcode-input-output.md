---
title: JS 刷题输入输出模板
subtitle: 
layout: post
date: 2025-01-02
author: heavenmei
categories:
  - Post
description: 
tags:
  - Code
image:
---
> 时隔多年重操旧业，又到了刷题的阶段。以前都是C++做题，现在改用js了，但是从来没有了解过JS的输入输出。LeetCode是核心代码模式不需要用户处理输出输出，但是如果面试时ACM模式就寄了。

提前练习输出输出平台：
[OJ在线编程常见输入输出练习场J](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fac.nowcoder.com%2Facm%2Fcontest%2F5657&objectId=2240679&objectType=1&isNewArticle=undefined)

## JS
JavaScript的ACM模式会有两种：`V8模式`、`Nodejs模式`
### V8模式
```js

// output 
console.log();

// 回输入的一行，字符串形式。需要通过`split`、`parseInt`等方法来得到真正的输入。(这里确实比C++那些要麻烦得多)
read_line()


let line;
while(line = read_line()) {
    let nums = line.split(' ');

    let a = +nums[0];    // 将字符串转为数字
    let b = +nums[1];

    console.log(a + b);
}
```



### NodeJs模式
Nodejs输入主要有三大步骤：

1. 引入`readline`模块
2. 调用`readline.createInterface()`，创建一个`readline的接口实例`
3. 监听`line`事件，事件处理函数的参数就是`输入的行`

```js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    // 
});
```

