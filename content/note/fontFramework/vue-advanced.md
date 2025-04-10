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


## vue2 & vue3

响应式原理基本相同，知识 vue3 使用Proxy实现的

|                  | **Vue2**                   | **Vue3**                      |
| ---------------- | -------------------------- | ----------------------------- |
| **发布时间**         | 2016年                      | 2020年9月                       |
| **核心架构**         | Options API 为主             | Composition API + Options API |
| **响应式原理**        | 基于 `Object.defineProperty` | 基于 `Proxy`                    |
| **性能**           | 较慢（虚拟DOM全量对比）              | 更快（静态标记、树结构优化等）               |
| **代码组织**         | 按选项（data、methods等）分组       | 按逻辑功能组织（Composition API）      |
| **TypeScript支持** | 支持较弱                       | 原生支持良好                        |
| **Fragment组件**   | 不支持（必须单根节点）                | 支持多根节点（Fragment）              |
| **生命周期**         | `beforeCreate`/`created` 等 | 改名（如 `setup` 替代部分钩子）          |
| **全局API**        | `Vue.prototype` 扩展         | `createApp` 隔离实例              |
| **Teleport组件**   | 无                          | 新增（传送门功能）                     |
| **Suspense组件**   | 无                          | 新增（异步组件加载状态处理）                |
| **打包体积**         | 较大                         | 更小（Tree-shaking优化）            |
| **自定义渲染器**       | 有限支持                       | 更灵活（如自定义原生渲染）                 |

## Vue 生命周期
![|500](assets/vue-base-20250329112022.png)





## 响应式原理

![](assets/vue-base-20250330105224.png)




