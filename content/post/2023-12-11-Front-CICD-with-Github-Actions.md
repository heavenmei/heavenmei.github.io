---
title: 前端自动化CI/CD：Github Action部署项目到服务器
date: 2023-12-11
author: heavenmei
categories:
  - Post
url: /2023-12-11-CICD
---
> **What‘s Github Action？**  
> [GitHub Actions](https://github.com/features/actions) 是 GitHub 的持续集成服务(CI/CD)。
> 想要了解的朋友移步 [GitHub Actions 入门教程](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2019%2F09%2Fgetting-started-with-github-actions.html "https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html")


### 编写workflow
创建`.github/workflows` 文件夹，创建`demo.yml`文件

主要流程：
1. 拉取main分支的最新代码
2. 设置node版本号
3. 缓存依赖
4. 安装依赖
5. 打包
6. 上传资源到指定路径

```yaml
name: Node CI

# 触发workflow的条件
on:
	push:
		branches: [ "main" ]
	pull_request:
		branches: [ "main" ]

# jobs表示执行的一项或多项任务
jobs:
	# 任务的job_id，具体名称自定义，这里build代表打包
	build:
		runs-on: ubuntu-latest
		strategy:
			matrix:
				node-version: [18.18.2]

		steps:
			  # 拉取main分支最新代码
			  uses: actions/checkout@main
			  
			  # 确定node版本
			- name: Use Node.js ${{ matrix.node-version }}
			  uses: actions/setup-node@v3
			  with:
				node-version: ${{ matrix.node-version }}
		
			 # 缓存依赖
			- name: Cache nodemodules
			  uses: actions/cache@v1
			  env:
				cache-name: cache-node-modules
			  with:
			    # 需要缓存的文件的路径
				path: ./node_modules 
				# 对缓存的文件指定的唯一标识
				key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('./package.json') }} 
				# 用于没有再找目标key的缓存的backup选项
				restore-keys: |
					${{ runner.os }}-build-${{ env.cache-name }}-
					${{ runner.os }}-build-
					${{ runner.os }}-
		
			# 装依赖
			- name: Install
			  run: |
				npm install -g yarn@1.22.19
				yarn install
```


### 打包
本地开发时会把所需要的环境编写在.env 文件内，并且不会上传到github上以保证仓库隐私性。因此，在打包时若有相关生产环境变量，可以直接定义在 secret中


在脚本中引用
```yaml

env:
	VITE_SERVER_NAME: ${{ secrets.VITE_SERVER_NAME }} # 服务器域名
	cache-name: note

jobs:
	build:
		steps:
			...
			# 打包
			- name: Build
			run: |
				echo "VITE_SERVER_NAME = ${{ env.VITE_SERVER_NAME }}" > .env
				yarn build

```

### 部署
部署思想：首先利用ssh 将打包好的资源上传到服务器上，服务器上利用pm2 管理node进程，nginx反向代理端口，脚本重启pm2该项目进程。

1. 在服务器配置nginx指向前端运行的端口
```shell
server {
	listen 8889;  # 对外接口
	server_name api.msg.com;
	
	location / {
		proxy_pass http://localhost:3008; # 服务器本地运行前端端口
		add_header backendIP $upstream_addr;
		add_header backendCode $upstream_status;
	}
}
```
2. 服务器创建秘钥对
将本机与服务器创建密钥对，并把本地公钥加入`.ssh/authorized_keys`中，同时保存到github secrets。
```yaml

env:
	SERVER_PRIVATE_KEY: ${{ secrets.SERVER_PRIVATE_KEY }} # 服务器私钥
	SERVER_HOST: ${{ secrets.SERVER_HOST }} # 服务器IP地址
	USER_NAME: ${{ secrets.USER_NAME }} # 服务器用户名

jobs:
	build:
		steps:
			...
			# 上传打包资源
			- name: Deploy
			uses: easingthemes/ssh-deploy@v3
			env:
				SSH_PRIVATE_KEY: ${{ env.SERVER_PRIVATE_KEY }}
				ARGS: '-avz --delete'
				SOURCE: '.output/' # 
				
				REMOTE_HOST: ${{ env.SERVER_HOST }}
				REMOTE_USER: ${{ env.USER_NAME }}
				TARGET: /root/i-lion-front/.output # 服务器目标路径
```

3. 重新部署脚本
首先在服务器中安装[pm2](https://pm2.keymetrics.io/)并启动运行该项目，服务器中创建重启脚本`run_node.sh`
```shell
pm2 reload xxx/ecosystem.config.cjs
```
action 执行该脚本
```yaml
# 重新部署

- name: Reload pm2
  uses: appleboy/ssh-action@master
  with:
	host: ${{ env.SERVER_HOST }}
	username: ${{ env.USER_NAME }}
	key: ${{ env.SERVER_PRIVATE_KEY }}
	script: |
		# 在服务器中执行的命令
		zsh xxxrun_node.sh
```


### 执行
 GitHub Actions 绑定`.github/workflows/demo.yml` ，执行结果如下：

### 完整代码

```yaml
name: Node CI

# 触发workflow的条件
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

env:
    SERVER_PRIVATE_KEY: ${{ secrets.SERVER_PRIVATE_KEY }} # 服务器私钥
    SERVER_HOST: ${{ secrets.SERVER_HOST }} # 服务器IP地址
    USER_NAME: ${{ secrets.USER_NAME }} # 服务器用户名
    VITE_SERVER_NAME: ${{ secrets.VITE_SERVER_NAME }} 
    cache-name: note
    
jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.18.2]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@main
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
     #缓存依赖
    - name: Cache nodemodules
      uses: actions/cache@v1
      env:
          cache-name: cache-node-modules
      with:
          # 需要缓存的文件的路径
          path: ./node_modules 
          # 对缓存的文件指定的唯一标识
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('./package.json') }} 
          # 用于没有再找目标key的缓存的backup选项
          restore-keys: |
              ${{ runner.os }}-build-${{ env.cache-name }}-
              ${{ runner.os }}-build-
              ${{ runner.os }}-
    # 装依赖
    - name: Install
      run: |
          npm install -g yarn@1.22.19
          yarn install
    # 打包
    - name: Build
      run: |
          echo "VITE_SERVER_NAME = ${{ env.VITE_SERVER_NAME }}" > .env
          yarn build
    # 上传打包资源
    - name: Deploy
      uses: easingthemes/ssh-deploy@v3
      env:
          SSH_PRIVATE_KEY: ${{ env.SERVER_PRIVATE_KEY }}
          ARGS: '-avz --delete'
          SOURCE: '.output/'
          REMOTE_HOST: ${{ env.SERVER_HOST }}
          REMOTE_USER: ${{ env.USER_NAME }}
          TARGET: /root/i-lion-front/.output # 服务器目标路径
    # 重新部署
    - name: Reload pm2
      uses: appleboy/ssh-action@master
      with:
        host: ${{ env.SERVER_HOST }}
        username: ${{ env.USER_NAME }}
        key: ${{ env.SERVER_PRIVATE_KEY }}
        script: |
          source /www/server/nvm/nvm.sh
          nvm use 18.18.2
          zsh /root/i-lion-front/run_node.sh

```