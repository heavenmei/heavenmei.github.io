---
title: 【亲测有效】typora mac版本激活
description: 
layout: post
date: 2024-11-10
author: heavenmei
categories:
  - Post
tags:
  - skill
teaser:
---

1. 首先去官网下载安装 [typora](https://www.typoraio.cn/) （mac版本）

2. 然后搜索typora包内容找到文件夹`/Applications/Typora.app/Contents/Resources/TypeMark/page-dist/static/js`

3. 用编辑器打开`LicenseIndex.XXX.chunk。js`文件，是编译后的乱码
4. 输入 `hasActivated="true"==e.hasActivated `搜索，将它改为  `hasActivated="true"=="true"`
5. 重新打开typora看到成功激活！！！

![](assets/2024-11-10-typora-mac-activate-20241110064025.png)

但是会每次打开都弹出这个，暂未解决🥲