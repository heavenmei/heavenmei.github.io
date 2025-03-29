---
title: u don't know js 之 异步 Promise
subtitle: 
layout: post
date: 2024-02-20
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---
## 异步


JS引擎不是独立运行的，他是运行在宿主环境中 （通常是Web浏览器）

**事件循环**：提供一种机制来处理多个 “块” 的执行，且执行每块是调用JS引擎 （==宏任务==）

**tick**： 循环每一轮称为 tick

**任务队列**：Promise的异步特性。它是挂在事件循环队列每个tick之后的一个队列。在事件循环的每个tick中，可能出现的 异步动作 不会 导致一个完整的新事件添加，而是会在当前tick的任务队列末尾添加一个任务 （==微任务==）

[7关！setTimeout+Promise+Async输出顺序？你能过几关！](https://security.feishu.cn/link/safety?target=http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzg2NjY2NTcyNg%3D%3D%26mid%3D2247483940%26idx%3D1%26sn%3D7a97101836c2b697a270bd84707d441f%26chksm%3Dce4617b5f9319ea3e65092ef4a8b977c85cb0c589f89f49cf626df961de0900c2510297f0af9%26scene%3D21%23wechat_redirect&scene=ccm&logParams=%7B%22location%22%3A%22ccm_drive%22%7D&lang=zh-CN)




==JS是单线程的==
- 并行：多个任务**真正同时执行**，依赖**多核/多CPU/分布式**等硬件支持。
- 并发：多个任务**交替执行**，在**同一时间段内**看似同时进行（但可能并未真正同时运行）
- 批处理：取一个长期运行的 进程，分割成多个步骤或多批任务，使其他并发 进程 有机会将自己插入事件循环队列中交替运行



## Promise

回调的问题：

1. 回调地狱
2. 控制反转，把自己程序的一部分执行控制交给第三方

Promise可以解决控制反转问题。任何具有 `then`方法的对象和函数就是Promise。
- 链式流


