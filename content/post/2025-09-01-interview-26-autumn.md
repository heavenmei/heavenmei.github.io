---
title: 26届 前端 秋招 面经
subtitle: 
layout: post
date: 2025-09-01
author: heavenmei
categories:
  - Note
description: 
tags:
  - 八股
image:
---
## 字节 抖音电商 一面（08-21）

1. 讲讲前端构建方面的理解？vite&webpack

2. 讲讲性能优化

3. react中function和class组件的区别？分别能做哪些性能优化

4. 父组件套子组件的场景下是父子组件的componentDidMount的触发顺序（子先）

5. Js 的一些数据类型

6. js中识别array 类型的方法

7. css选择器及优先级

8. 【算法题】扁平数组转树


```js
function arrayToTree(list) {
    let result = [];    // 结果集
    let map = {};
 
    for(let item of list) {    // 遍历一遍源数组
        map[item.id] = {...item, chilrden: []};    // 将源数组中每一个对象的id作为key，将当前对象所有属性和新增属性chilrden作为value。
    }
 
    for (let item of list) {
        if (item.pid === 0) {    // 当pid为0时，添加到结果集
            let newItem = map[item.id];    // 注意！这里一定要将map[item.id] 赋值给新变量，这样newItem就和map[item.id]指向同一个内存地址了，达到数据共享
            result.push(newItem);
        } else {
            map[item.pid].chilrden.push(map[item.id]);    // 将key为当前id的对象，添加到key等于pid的对象的chilrden中
        }
    }
    return result;
}
```

> 回答稀烂

  

## 腾讯 WXG 一面（08-21）

1. 30min 两道算法题 （双指针+DP ，A了）

2. 实习项目拷问

3. React 和 Vue 在数据绑定和组件更新上的区别

4. useEffect和useLayoutEffect区别

5. 如何处理React 大量数据更新的情况

    1. useCallback，依赖缓存

6. 如何设计一个状态管理方案，避免组件过多渲染
    1. 发布订阅机制，参考zustand

    2. memo缓存租价

7. React 和vue 在事件处理机制上的区别？React和统一管理事件？

    1. React 合成事件（不会）

8. SSR 架构？会使用骨架屏吗？

9. HTTP2 和http1的区别

10. http的缓存策略有哪些？

11. TCP和UDP的区别？

12. TCP为什么是三次握手，四次挥手

13. https和http区别？加密过程？

14. 什么是xss攻击（回答错了）

15. 输入url到页面展示的过程

16. 微信小程序项目是怎么做全局的状态管理

17. cookie、sessionstorage、localstorage的区别

18. 用过哪些开发框架？

19. wecpack使用过程中有遇到过什么问题？
    
  

  

## 美团 点评 一面（08-29）

1. 如何看待AI 对代码编程的帮助

2. 跨端开发是否有遇到过双端不一致的情况？（没有）

3. 如何比较浮点数

    1. 容差比较

4. 刷短视频时，从刚进入app到视频展示出来，经历了哪些网络层。

    1. 基于UDP的QUIC协议（HTTP/3）

    2. 流式传输，数据包到达一定量（缓冲）后，立即交给媒体解码器进行解码

5. 平时会用到什么设计模式

6. 简单讲讲redux，这种模式和平时编程习惯有什么不同？

7. 有遇到过flutter开发的时候的性能问题吗？

8. coding： 反转链表II [92. 反转链表 II - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-linked-list-ii/description/)


> 美团好喜欢链表，第二次做到这个题了