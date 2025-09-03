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

    - 容差比较

4. 刷短视频时，从刚进入app到视频展示出来，经历了哪些网络层。

    - 基于UDP的QUIC协议（HTTP/3）
    - 流式传输，数据包到达一定量（缓冲）后，立即交给媒体解码器进行解码

5. 平时会用到什么设计模式

6. 简单讲讲redux，这种模式和平时编程习惯有什么不同？

7. 有遇到过flutter开发的时候的性能问题吗？

8. coding： 反转链表II [92. 反转链表 II - 力扣（LeetCode）](https://leetcode.cn/problems/reverse-linked-list-ii/description/)


> 美团好喜欢链表，第二次做到这个题了


## 小红书 商业技术 一面 （09-01）

1. 不聊实习，选了一个我简历上不太熟的项目聊，聊我如何微调的？
2. React渲染性能优化策略
3. fiber架构分为几个阶段？
    1. commit对应是什么渲染过程

    2. 这个架构为了达到怎样的好处？怎样广度的价值？

    3. fiber架构的节点结构？链表 （解决未来有可能的并发）
4. 浏览器的缓存策略和前端资源的完整优化
    1. cookie&localstorage&sessionStorage&indexDB 哪些是磁盘缓存，哪些是内存缓存
    2. 前端视角下，存储有什么优化策略
5. jwt登录，sso登录流程
    1. sso首先向后端访问受保护的地址，返回什么状态码（401+登录中心的url）
    2. 401和403的区别？
    3. 登录中心认证完访问前端应用之后怎么把token给后端（放在url，不能用cookie有跨域问题）
        

## 淘天-行业运营 一面（09-01）

1. react有哪些hook可以优化性能
2. useCallback和useMemo的区别？
    1. 什么场景下用useCallback（经常搭配React.memo使用）
3. 方式二的改造对性能上有优化吗？（没有）
4. React.memo的第二个参数作用
    1. 相当于 shouldComponentUpdate的作用指定更新策略
    2. React.memo + useCallback才是最佳实践

```js
// 方式一
const dom = useCallback(()=><div onClick = {()=>{...}}> </div>,[])

// 方式二
const handleClick = useCallback(()=>{...},[..])
const dom = useCallback(()=><div onClick = {handleClick}> </div>,[])

// 有效写法
const MyComponent = () => {
  // 1. 用useCallback精准缓存需要传递的函数
  const handleClick = useCallback(() => {
    // ... 处理逻辑
  }, []); // 依赖项根据需要添加

  // 2. 直接返回JSX，无需用useCallback包装
  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

// 3. 子组件使用memo优化，与父组件的useCallback配合生效
const ChildComponent = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
});
```

5. useState 和useRef 什么场景下使用？区别？
    1. 访问dom
    2. 存储定时器/不用渲染的值
    3. forwardRef 配合使用
6. React的事件合成机制
7. 如何优化性能
8. SSR架构什么时候会出现水合失败的场景？什么原因导致的
    1. 服务端渲染结果与客户端第一次渲染结果不一致时触发，触发就会产生降级。这种情况该怎么处理？怎么排查水合失败的原因？
    2. SSR会引用npm包，引用window/dom的属性会报错如何解决呢？
        1. 版本过滤掉，不加载这个包
        2. window/dom等声明为空


## 腾讯 WXG 二面（09-02）

> 感觉是个ld，一直在聊天的状态

- 聊项目，为什么这么选型？
- flutter开发的不同？
- react和vue的区别？
- 为什么要用redux？
- ssr？服务端用java可以实现吗？（阿里是这样的？我不懂）
    - 可能是创建Node.js 服务 来执行 JavaScript，

- 你的职业规划
- 会介意base地吗？能提前入职吗？
- 如果和测试设计师的项目有delay，你会怎么办？
- 你是怎么跟进这个项目的？
- 你最近在学什么？
- 你认为你的缺点是什么？

## 美团 点评 二面 （09-02）

> 美团很喜欢数据库、排序

1. 有哪些复杂度为nlogn的排序算法？工程上用的最多的排序算法是哪个？为什么？
    - 快速、归并、堆
    - 工程上常用快速排序，（缓存友好数组访问、原地排序）（不确定对不对）

2. 哈希表查询复杂度多少？O(1)，为什么？他牺牲了什么
    - 空间换时间，无序、冲突解决
3. tcp握手挥手，为什么是四次挥手
4. 为什么数据库查找会更快？
	- 索引机制，B+树 （再多就不会了）
5. 你听过联合索引吗？（没有）
6. 聊项目
7. 智力题：手上有无限个棋子，有圆形棋盘，没有点位，随意放置，无限面积，棋子不能叠放，如何保证必赢
    - 博弈：我执先手放在圆心，之后和对方对称放置

8. 算法题，手撕double开根号，精度保留2位小数

```js
function mySqrtBinary(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return n;

  let left = 0;
  // 对于小于1的数，右边界应该设置为1，因为sqrt(n) > n 当 n < 1
  let right = n < 1 ? 1 : n;
  // 设置一个精度要求，当左右边界相差很小时就停止
  const precision = 0.001;

  while (right - left > precision) {
    let mid = (left + right) / 2;
    let midSq = mid * mid;

    if (midSq === n) {
      return mid.toFixed(2); // 幸运地找到了精确解
    } else if (midSq < n) {
      left = mid; // 答案在右半边 [mid, right]
    } else {
      right = mid; // 答案在左半边 [left, mid]
    }
  }
  // 循环结束时，left 和 right 非常接近，真实根在它们之间
  return ((left + right) / 2).toFixed(2);
}

// 测试
console.log(mySqrtBinary(4)); // 2
console.log(mySqrtBinary(2)); // 1.414213562373095
console.log(mySqrtBinary(0.25)); // 0.5

```