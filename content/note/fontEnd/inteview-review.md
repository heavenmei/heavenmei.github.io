---
title: 面试复盘
subtitle: 
layout: post
date: 2022-08-29
author: heavenmei
categories:
  - Note
description: 
tags:
  - Front
image:
---


## 字节 一面 3.31

1. js基本数据类型，判断类型有哪几种方式？

2. flex：1代表什么？

3. box-sizing？

4. 原型链

5. 输入URL到页面展示过程

6. 手写防抖

7. 为什么要跨域，如何解决跨域（7种） 同源策略 webpack解决跨域原理？

8. 页面渲染机制，如何避免重排？

9. JS引擎解析是立即解析？还是加载完解析？（说了一下defer、async）

10. V8

11. JS事件处理传播机制 捕获、目标、冒泡 addEventListener第三个参数的作用？

12. Vue23响应式原理，缺点？ 提到了Angular、React，继而问为什么他们不用这个响应式方式，有什么缺点？

13. 虚拟DOM，为什么要有这个，什么好处？

14. 进程线程区别？ 线程共享进程资源，共享了哪些资源？ 为什么说JS是单线程？ 单核多线程吗？ 并行和并发的区别？

15. JS是一个动态语言，为什么？静态语言类型和动态语言类型区别？

16. HTTP HTTPS HTTP2、3

17. 对称加密和非对称加密

18. 网络模型有哪几层？为什么说TCP是点对点的？IP呢？（设备到设备）

19. 异步非阻塞？Nodejs？IO非阻塞，IO阻塞

20. 输出什么？this指向问题
    
    ```js
    var length = 10
    function fn(){
      return this.length + 1;
    }
    
    var obj={
      length:3,
      test1:function(){
          return fn();
      }
    }
    obj.test2 = fn;
    console.log(obj.test1()); //11
    console.log(obj.test2() === fn()); //false
    ```

算法题：矩阵从左到右，从上到下递增，输入num找到矩阵中是否有这个数据（算法太弱了）

```js
matrix=[
    [1,3,5,10],
    [2,4,6,11],
    [7,8,9,12],
]
num = 4//可以找到
num = 13//找不到
```

## 字节 二面 4.7

1、自我介绍

2、学习前端的过程和方法

3、学习前端的计划，如何衡量自身学习成果

4、评价自身的学习 哪些运用的好哪些还有欠缺？

5、文字垂直水平居中

6、自适应正方形

7、网页布局关注哪些点做出一个高品质的网站

8、Promise异步题

9、算法题 打印斐波那契数列的第10000个数（大数相加）

## 字节 三面 4.13

1、img alt属性

2、html 块级元素 display默认属性 （inline） 默认的inline-block元素有哪些? input、img、select

3、position有哪些属性 position为absolute的z-index的最大值（*2147483647* $2^{32} -1$）

4、margin合并 为什么会出现这个现象？

5、box-sizing

6、display：table 会改变渲染方式吗？（太前沿了）

7、渲染原理——合成层，根据dom的css属性渲染，合成层渲染优先级GPU CPU？

8、抓包HTTP

9、HTTP1.0 2.0

10、TCP和UCP

11、Vue2、3的区别

12、学习前端以来，印象最深刻的知识或者项目？

13、算法题：二进制加法（大数相加）

## 百度 一面 8.28

1、自我介绍

2、实习项目、技术产出

3、canvas中的文本省略（不了解）

4、flex弹性布局的属性及应用

5、盒子模型 box-sizing

6、postion属性。fixed相对于谁定位？（body？特殊情况）

7、css动画属性

8、前端性能优化

9、输入url到浏览渲染的过程

10、js手写： 50个请求，每次只能执行10个请求（共享屏幕）（并发的实现，写不太咋滴）

11、手写二分查找（忘记考虑未找到的情况）

12、webpack loader和plugin区别？（了解的不深，答的一般）

13、webpack，需要一个清楚console的需求，这个插件在什么阶段执行这个插件？（不了解webpack的生命周期，不会）

14、git常用命令，修改commit用什么命令？（不知道，git commit --amend）

15、反问：技术栈：Vue、业务介绍、对我的学习建议
