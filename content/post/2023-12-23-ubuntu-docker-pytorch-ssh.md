---
title: ubuntu
date: 2023-12-23
author: heavenmei
categories:
  - Post
url: /2023-12-23-ubuntu-docker
---
> 在服务器中安装docker， 并创建pytorch运行环境，实现ssh远程端口登录

docker安装详见一键安装脚本
https://gitee.com/heavenmei/one-step-install

### 创建容器

镜像仓库： https://hub.docker.com/r/pytorch/pytorch/tags
```shell
docker pull pytorch/pytorch:2.1.2-cuda11.8-cudnn8-devel
```
运行容器，这一步尤其重要，要指定好一些参数
```shell
docker run -itd -p 8080:8080 -gpus all --name "hhw_pyt2"
```


### 环境配置
```shell
apt-get update
apt-get install -y curl git openssh-server vim
```



### 配置ssh 连接docker 容器
```shell
# 1. 安装
apt-get install -y openssh-server 
# 2. 设置登录密码 
passwd 

# 3. 修改配置文件 
vim /etc/ssh/sshd_config 
开启root登录 PermitRootLogin yes 
开启密码认证 PasswordAuthentication yes

# 4.设置开机自启 systemctl enable ssh 只在宿主机上有效
echo "service ssh start" >> ~/.bashrc

# 5.重启
service ssh restart
```

设置完成，即可通过ssh远程访问：（默认root） `ssh -p PORT root@IP`

**SSH连接Docker容器时环境变量丢失** 
在容器中安装openssh-server后，启动ssh服务，然后从外部连接ssh进入docker后，会发现所有的容器环境变量都不见了，只剩下一些ssh必要的环境变量 可以把容器主进程的环境变量拿出来：在ssh的shell中执行。
```shell
export $(cat /proc/1/environ |tr '\0' '\n' | xargs)
# 加到.bashrc 登录默认进入改进程
echo "export \$(cat /proc/1/environ |tr '\0' '\n' | xargs)" >> ~/.bashrc
```