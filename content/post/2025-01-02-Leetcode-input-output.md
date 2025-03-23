---
title: JS 刷题ACM模式 输入输出模板
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
[OJ在线编程常见输入输出练习场J](https://ac.nowcoder.com/acm/contest/5657)

## JS
JavaScript的ACM模式会有两种：`V8模式`、`Nodejs模式`

输出就用 `console.log();` 即可

输入读取一行，字符串形式。需要通过`split`、`parseInt`等方法来得到真正的输入。(这里确实比C++那些要麻烦得多)
### V8模式

用`readline()` 读取一行

```js
function add(a, b) {
  return a + b;
}

let line;
while (line = readline()) {
  const data = line.split(" ");
  let a = +data[0];  // string -> number
  let b = +data[1];
  const res = add(a, b);
  console.log(res);
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



#### 单行输入

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) {
  return a + b;
}

rl.on("line", function (line) {
  const lines = line.split(" ");
  let a = parseInt(lines[0]);
  let b = parseInt(lines[1]);
  const res = add(a, b);
  console.log(res);
});
```

#### 多行输入

利用标记记录行数，动态多行输入并一次性输出

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) {
  return a + b;
}

// 记录行数
let lineCount = -1;
// 记录每行
let lines = [];

rl.on("line", function (line) {
  if (lineCount === -1) {
    lineCount = parseInt(line.trim());
  } else {
    lines.push(line);
    if (lines.length === lineCount) {
      rl.close();
    }
  }
});

rl.on("close", function (line) {
  for (let i = 0; i < lineCount; i++) {
    const line = lines[i];
    const data = line.split(" ");
    let a = parseInt(data[0]);
    let b = parseInt(data[1]);
    const res = add(a, b);
    console.log(res);
  }
});

```



## Vscode 本地调试

launch.json， 使用NodeJS调试
```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        
        {
            "type": "node",
            "request": "launch",
            "name": " node Launch Program",
            "console": "integratedTerminal",
            "program": "${file}",
            "sourceMaps": true,
            // node 地址
            "runtimeExecutable": "/Users/heavenmei/.nvm/versions/node/v20.11.1/bin/node"
        }
    ],
}
```


