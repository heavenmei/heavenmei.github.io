---
title: ubuntu
date: 2023-12-23
author: heavenmei
categories:
  - Post
---
TODO
在服务器中起docker，配置pytorch环境
并实现ssh远程端口登录


```shell

apt-get update
apt-get install -y curl git openssh-server vim
```

## 配置docker




## 配置ssh 连接docker 容器
[【skill】服务器](../notes/【skill】服务器.md#ssh)
```shell
apt-get install -y openssh-server 
# 设置登录密码 
passwd 
# 修改配置文件 
vim /etc/ssh/sshd_config 
# 开启root登录 PermitRootLogin yes 
# 开启密码认证 PasswordAuthentication yes

# 设置开机自启 systemctl enable ssh 只在宿主机上有效
echo "service ssh start" >> ~/.bashrc

# 重启
service ssh restart
```

设置完成，即可通过ssh远程访问：（默认root）
`ssh -p PORT root@IP`


[SSH连接Docker容器时环境变量丢失](https://www.jmyjmy.top/2023-03-14_docker-ssh-env/)
在容器中安装openssh-server后，启动ssh服务，然后从外部连接ssh进入docker后，会发现所有的容器环境变量都不见了，只剩下一些ssh必要的环境变量
可以把容器主进程的环境变量拿出来：在ssh的shell中执行
```shell
export $(cat /proc/1/environ |tr '\0' '\n' | xargs)
# 加到.bashrc 登录默认进入改进程
echo "export \$(cat /proc/1/environ |tr '\0' '\n' | xargs)" >> ~/.bashrc
```



