---
title: 鉴权方式
subtitle: ""
description: ""
date: 2023-11-25
author: heavenmei
image: ""
tags:
  - tag1
  - tag2
categories:
  - Post
url: /2023-12-07-secret
---

> 常见的鉴权方式有以下几种方式：
>
> 1. token
> 2. session + cookie
> 3. OAuth

## token

### 流程

1. 客户端使用账密登录
2. 服务端验证账密
3. 账密验证通过，服务端生成一个token，再把token发送给客户端
4. 客户端通过cookie或者其他方式将token存储起来
5. 客户端以后发送请求都需要带上token
6. 服务端验证token的合法性，校验通过则返回资源，不通过则返回401状态码










