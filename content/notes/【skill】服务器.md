---
title: Linux 使用技巧
tags:
  - skill
layout: list
categories:
  - Notes
---


>ecnu13: ssh [haiwen@172.23.137.2](mailto:haiwen@172.23.137.2)

## 科学上网


科学上网：`source <(curl -s 172.23.148.93/s/ecnuproxy.sh)`

关闭代理：`unset http_proxy https_proxy all_proxy`

检测代理： `curl ipinfo.io`

查看ip: `ip a`

查看port: `/etc/ssh/sshd-config`

## 内网穿透之 Tailscale
Tailscale属于一种虚拟组网工具，把安装了Tailscale服务的机器，都放到同一个局域网，稳定连接

ecnu5 内网ip： 100.115.188.110 -p 49940
## 本地打开服务器的localhost
ssh链接时 将服务器的8097端口重定向到本机18097端口： `ssh -L 18097:127.0.0.1:8097 username@xx.xx.xx.xx -p PORT`


## 查看占用空间
`du -h --max-depth=1 |sort`

查看终端：`echo $SHELL`

设置默认终端：

快捷键：

切换桌面：ctrl+alt+方向键

显示终端：ctrl+alt+T


## 防火墙
服务器端口无法访问

A：防火墙未开启

查看防火墙中允许被访问的端口号：sudo firewall-cmd --list-all （ports选项）

`firewall-cmd --zone=public --list-ports`

开启端口：sudo firewall-cmd --zone=public --add-port=8885/tcp --permanent

重启防火墙：sudo firewall-cmd --reload

关闭端口：sudo firewall-cmd --zone=public --remove-port=7890/tcp --permanent 

再次检查

检查端口网站：https://tool.chinaz.com/port


## 通信
从服务器下载到本地：

```bash
#命令格式
scp 用户名@计算机IP或者计算机名称:文件名   本地路径
 
#示例
scp -r root@172.23.148.93:/data/jsq/pix2pix-zero/output  /Users/heavenmei/Documents/homework/CV/HW/p2p
```

从本地上传到服务器：

```bash
#命令格式
scp  本地路径/文件名 用户名@计算机IP或者计算机名称:远程路径
 
#示例
scp  ./files_name.txt git@166.111.77.123:/home/shangyj/files

```

scp中也有-r参数，使用-r参数，可以实现文件夹的复制



## pm2
- npm install pm2 -g
- pm2 list
- pm2 start
- pm2 restart {app_name}
- pm2 stop {app_name}
- pm2 delete app_name}
- pm2 clean --all