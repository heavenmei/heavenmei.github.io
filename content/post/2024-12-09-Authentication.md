---
title: 用户认证Authentication方式，JWT和Session
subtitle: 
layout: post
date: 2024-12-09
author: heavenmei
categories:
  - Post
description: 
tags:
  - Front
image:
---

> 认证：Authentication，验证当前用户的身份
> 授权：Authorization， 用户授予第三方应用访问该用户某些资源的权限
> 凭证：Credentials，实现认证和授权的前提是需要一种证书来标记访问者的身份


**常见的前后端鉴权方式**
1. 基于Session-Cookie
2. 基于Token 验证（包括 JWT，SSO）
3. OAuth2.0（开放授权）

## 基于Session
1. 用户输入其登录信息
2. 服务器验证信息是否正确，并创建一个session，然后将其存储在数据库中
3. 服务器为用户生成一个sessionId，将具有sesssionId的Cookie将放置在用户浏览器中
4. 在后续请求中，会根据数据库验证sessionID，如果有效，则接受请求
5. 一旦用户注销应用程序，会话将在客户端和服务器端都被销毁




## 基于token
最常用的是JSON Web Token（JWT）

1. 用户输入其登录信息
2. 服务器验证信息是否正确，并返回已签名的token
3. token储在客户端，例如存在local storage或cookie中
4. 之后的HTTP每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里
5. 服务器解码JWT，并且如果令牌有效，则接受请求
6. 一旦用户注销，令牌将在客户端被销毁，不需要与服务器进行交互一个关键是，令牌是无状态的。后端服务器不需要保存令牌或当前session的记录。


一个jwt实际上就是一个字符串，它由三部分组成，头部、载荷与签名，这三个部分都是json格式。





**适合使用jwt的场景：**
- 有效期短
- 一次性特点

比如，用户注册后发一封邮件让其激活账户，通常邮件中需要有一个链接，这个链接需要具备以下的特性：能够标识用户，该链接具有时效性（通常只允许几小时之内激活），不能被篡改以激活其他可能的账户，一次性的。这种场景就适合使用jwt。



## Cookie、Session、Token

### Cookie
- **HTTP 是无状态的协议（对于事务处理没有记忆能力，每次客户端和服务端会话完成时，服务端不会保存任何会话信息**）：每个请求都是完全独立的，服务端无法确认当前访问者的身份信息，无法分辨上一次的请求发送者和这一次的发送者是不是同一个人。所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。而这个状态需要通过 cookie 或者 session 去实现。
- **cookie 存储在客户端：** cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
- **cookie 是不可跨域的：** 每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，**一级域名和二级域名之间是允许共享使用的**（**靠的是 domain）**。


### Session
- session 是另一种记录服务器和客户端会话状态的机制
- **session 是基于 cookie 实现的，session 存储在服务器端**。SessionID 会被存储到客户端的cookie 中，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。



### Token
- **访问资源接口（API）时所需要的资源凭证**, **服务端无状态化、可扩展性好**
- **简单 token 的组成：** uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）
- 基于 token 的用户认证是一种**服务端无状态的认证方式**，服务端不用存放 token 数据。**用解析 token 的计算时间换取 session 的存储空间**，从而减轻服务器的压力，减少频繁的查询数据库
- token 完全由应用管理，所以它可以避开同源策略

## Cookie VS. Session

- 安全性： Session 比 Cookie 安全，Session 是存储在服务器端的，Cookie 是存储在客户端的。
- 存取值的类型不同：Cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，Session 可以存任意数据类型。
- 有效期不同： Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭（默认情况下）或者 Session 超时都会失效。
- 存储大小不同： 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie，但是当访问量过多，会占用过多的服务器资源。




## Token VS.  Session  
- 安全性:  Session是保存在服务端的，而JWT是保存在客户端的。 Session 和 Token 并不矛盾，作为身份认证 Token 安全性比 Session 好，因为每一个请求都有签名还能防止监听以及重放攻击，而 Session 就必须依赖链路层来保障通讯安全了。*如果你需要实现有状态的会话，仍然可以增加 Session 来在服务器端保存一些状态。*
- Session 是一种记录服务器和客户端会话状态的机制，使服务端有状态化，可以记录会话信息。而 Token 是令牌，访问资源接口（API）时所需要的资源凭证。Token 使服务端无状态化，不会存储会话信息。

所谓 Session 认证只是简单的把 User 信息存储到 Session 里，因为 SessionID 的不可预测性，暂且认为是安全的。而 Token ，如果指的是 OAuth Token 或类似的机制的话，提供的是 认证 和 授权 ，认证是针对用户，授权是针对 App 。其目的是让某 App 有权利访问某用户的信息。这里的 Token 是唯一的。不可以转移到其它 App上，也不可以转到其它用户上。Session 只提供一种简单的认证，即只要有此 SessionID ，即认为有此 User 的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方 App。
 

所以简单来说：如果你的用户数据可能需要和第三方共享，或者允许第三方调用 API 接口，用 Token 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。

  


## Reference
[用户认证：基于jwt和session的区别和优缺点](https://www.cnblogs.com/yuanrw/p/10089796.html "发布于 2018-12-09 00:56")
[傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861#heading-25)
[理解OAuth 2.0](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)