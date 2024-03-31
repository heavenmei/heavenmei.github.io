---
title: 使用pont实现swagger文档生成ts响应类型
date: 2023-12-28
author: heavenmei
categories:
  - Post
tags:
  - Front
URL: /2023-12-28-pont-apiDoc
---
https://blog.csdn.net/m0_65035567/article/details/130278459

> 之前用过字节的ferry， 可以很方便讲thrift文件转成.d.ts类型定义和接口请求文件。但是ferry现在不开源，找到pont，可以把swagger转成ts。尝试接入现有的项目中

## pont
pont是阿里出的一个工具，它可以非常方便的把后端的swagger文档转成ts提示类型，不仅如此，它还支持添加模板，直接生成对应的接口请求，甚至能帮我们生成请求参数的默认基类。

Github：[github.com/alibaba/pon…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Falibaba%2Fpont "https://github.com/alibaba/pont")

## usage
1. 全局安装 `yarn add -D pont-engine`
2. 安装 vscode 插件 pont 以获取 pont 的全部能力
3. 进入项目目录，在项目中安装 pont-engine
4. 新建`pont-config.json`， 也可以`pont start`按照提示生成。 [配置参考](https://github.com/alibaba/pont/blob/master/docs/pontConfig.md)
5. 新建`pontTemplate.ts` 生成自定义接口代码

## API
### cmd

> 很奇怪，竟然没有代码生成的命令，只能利用vscode插件生成完成之后利用updateMod去更新



|  cmd |  description |
|---|---|
|pont start|一键接入 pont，若本地存在 [pont-config.json](https://github.com/alibaba/pont/blob/master/docs/pontConfig.md)配置文件，将覆盖重复的配置项|
|pont check|校验本地的 pont-lock.json 文件是否缺失、损坏。建议用户在项目中，在 pre-commit 里加上 pont check 命令，以防止在团队协作过程中，pont-lock.json 被误删、解决该文件冲突时被损坏等情况|
|pont scan|扫描未使用的接口，在 process.cwd()位置生成并写入 unusedRequests.json 文件，需要配置 scannedRange。请参考 [pont-config.json 配置项](https://github.com/alibaba/pont/blob/master/docs/pontConfig.md)|
|pont ls|查看所有数据源|
|pont select [dsName]|切换当前数据源|
|pont diff|查看远程数据和本地数据在模块、基类上的差异，以作针对性、选择性同步|
|pont updateMod [modName]|选择性更新本地的模块|
|pont updateBo [boName]|选择性更新本地的基类|

### pontConfig
- **originUrl**: swagger文档的json数据
- **outDir**：生成的文件位置
- **originType**：swagger文档类型 SwaggerV3/SwaggerV2
- **templatePath**：生成的接口模板位置

```json
{
    "originUrl": "https://petstore.swagger.io/v2/swagger.json",
    "outDir": "./apis",
    "originType": "SwaggerV3",
    "templatePath": "./pontTemplate",
}
```



### pontTemplate  // todo
```ts
export default class MyGenerator extends CodeGenerator {}
```