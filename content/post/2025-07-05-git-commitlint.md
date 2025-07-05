---
title: git commitlint、cz和husky校验Git提交信息
subtitle: 
layout: post
date: 2025-07-05
author: heavenmei
categories:
  - Note
description: 
tags:
  - Web
image:
---
[`commitlint`](https://commitlint.js.org/) 是一个用于检查 `git` 提交的 `message` 是否符合项目的规范的工具。规范的提交内容可以直接从 提交内容 生成 `changelog`
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf: 性能提升（提高性能的代码改动）
- test：测试
- build：构建过程或辅助工具的变动（webpack等）
- ci：更改CI配置文件和脚本
- chore：不修改src或测试文件的其他更改
- revert：撤退之前的commit


## Install

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

创建配置文件
```bash
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```


完成后，commit信息必须符合校验规则
```bash
# 错误示范
echo 'foo: bar' | node_modules/.bin/commitlint
# 正确
echo 'fix: 解决了xxx问题' | node_modules/.bin/commitlint
```



### husky自动校验

为了保证每个人提交的代码格式统一，采用`husky` +`lint-staged` 配置git hooks，自动触发格式化操作

`husky`是一个`Git hooks`工具，能够在项目中配置hooks脚本；当我们执行git操作时，自动触发配置的脚本；常用的hooks有`pre-commit`和`commit-message`。

```bash
npm install husky lint-staged --save-dev
```


创建hooks
```bash
# 生成.husky文件
npx husky init


# 创建pre-commit和commit-msg 文件
echo "npm run lint-staged" > .husky/pre-commit
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

当我们进行一次git提交时 => 触发husky配置的pre-commit钩子 => 执行`npm run lint-staged`命令 => 触发lint-staged对暂存区的文件进行格式化（使用package.json中配置的lint-staged任务） => 使用eslint 进行格式化

在package.json 中配置
```json
{
  "scripts": {
    "prepare": "husky",
    "lint-staged": "lint-staged",
    ...
  },
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^15.5.2",
  },
  "lint-staged": {
    "*.{js,ts,vue,jsx,tsx}": [
      "eslint --cache --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}

```


### 安装`commitizen`
`git`提交时写出规范的提交`message`的


**全局安装**
```bash
npm install -g commitizen


# commitizen根据不同的`adapter`配置commit message 
npm install -g cz-conventional-changelog 
# 创建一个`.czrc`文件。路径指向刚才全局安装的适配器。
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

# 使用git cz 代替git commit -m 
git cz
```



**项目安装**

```bash
npm install -D commitizen

npx commitizen init cz-conventional-changelog --save-dev --save-exact

```


pacakge.json 配置
```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```
如果是husky 可以这样配置
```json
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && npx cz --hook || true"
  }
}
```


效果如下
```bash
❯ git cz
cz-cli@4.3.1, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature 
  fix:      A bug fix 
  docs:     Documentation only changes 
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) 
  refactor: A code change that neither fixes a bug nor adds a feature 
  perf:     A code change that improves performance 
  test:     Adding missing tests or correcting existing tests 
(Move up and down to reveal more choices)

```

## Reference
[# [前端工程化配置] husky + lint-staged 格式化git提交代码](https://juejin.cn/post/7085534305249656862)


[# 使用commitlint、cz和husky校验Git提交信息release-it自动发布并生成 CHANGELOG](https://juejin.cn/post/7218459472919232570)