---
title: Vue 之 进阶篇 （与React 对比）
subtitle: 
layout: post
date: 2022-10-29
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---
## React & Vue

==React 是手动挡，Vue 是自动挡。==


**共同点：**
- 使用 Virtual DOM
- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。


|     | React                                                    | Vue                                                                    |
| --- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| 响应式 | 1. 基于状态机，手动优化，setState<br/>2. 数据==改变时，以组件为根目录，默认全部重新渲染== | 1. 依赖收集，自动优化数据可变<br/>2. 递归监听data所有属性，直接修改<br/>3. ==数据改变时，只更新引用组件重新渲染== |
|     |                                                          |                                                                        |






## 响应式原理

![](assets/vue-base-20250330105224.png)




#### vue2和vue3的区别

响应式原理基本相同，知识 vue3 使用Proxy实现的