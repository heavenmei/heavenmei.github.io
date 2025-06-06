---
title: ubuntu 使用技巧
tags:
  - Ubuntu
date: 2024-8-25
layout: post
categories:
  - Post
---

## 基本命令

rm [-rf] dirName

参数：-r 将目录及以下之档案亦逐一删除，-f 强行删除，不需询问。

## 科学上网

关闭代理：`unset http_proxy https_proxy all_proxy`

检测代理： `curl ipinfo.io`

查看 ip: `ip a`

查看 port: `/etc/ssh/sshd-config`

## 内网穿透之 Tailscale

Tailscale 属于一种虚拟组网工具，把安装了 Tailscale 服务的机器，都放到同一个局域网，稳定连接

ecnu5 内网 ip： 100.115.188.110 -p 49940

## ssh

```shell
apt-get install -y openssh-server
# 设置登录密码
passwd
# 修改配置文件
vim /etc/ssh/sshd_config
# 开启root登录 PermitRootLogin yes
# 开启密码认证 PasswordAuthentication yes

# 查看 ssh 状态
service ssh status/start/restart

# 开机自动启动ssh命令
sudo systemctl enable ssh

# 关闭ssh开机自动启动命令
sudo systemctl disable ssh

# 单次开启ssh
sudo systemctl start ssh

# 单次关闭ssh
sudo systemctl stop ssh

# 设置好后重启系统
reboot

#查看ssh是否启动，看到Active: active (running)即表示成功
sudo systemctl status ssh

```

ssh 链接时 将服务器的 8097 端口重定向到本机 18097 端口： `ssh -L 18097:127.0.0.1:8097 username@xx.xx.xx.xx -p PORT`

## 查看占用空间

`du -h --max-depth=1 |sort`

查看终端：`echo $SHELL`

设置默认终端：

快捷键：

切换桌面：ctrl+alt+方向键

显示终端：ctrl+alt+T

## 防火墙

> 检查端口网站：[https://tool.chinaz.com/port](https://tool.chinaz.com/port)

```shell
# 查看端口是否开启（无返回信息则表示该端口未开放。）
lsof -i:22
# 查看当前主机在监听的端口
netstat -tlunp
netstat -tlunp | grep 22
```

> 常见的 linux 系统防火墙有：UFW、firewall、[iptables](https://so.csdn.net/so/search?q=iptables&spm=1001.2101.3001.7020)，
> 其中，UFW 是 Debian 系列的默认防火墙，firewall 是红帽系列 7 及以上的防火墙（如 CentOS7.x）
> 相互作用影响

### ufw

```shell
# 防火墙状态/规则：inactive是关闭，active是开启
sudo ufw status
# 开启防火墙
sudo ufw enable/disable
# 重启防火墙
sudo ufw reload
#恢复初始化设置
sudo ufw reset
# 允许/拒绝访问20端口
sudo ufw allow/deny 20[/tcp]
# 批量打开
sudo ufw allow 4900:5000/tcp
# 比如删除端口
sudo ufw delete allow 3690

```

### firewall-cmd

```shell
# 状态
sudo firewall-cmd --state
# 查看防火墙中允许被访问的端口号
sudo firewall-cmd --list-all
sudo firewall-cmd --zone=public --list-ports

# 开启端口
sudo firewall-cmd --zone=public --add-port=8885/tcp --permanent
# 重启
sudo firewall-cmd --reload
# 关闭
sudo firewall-cmd --zone=public --remove-port=7890/tcp --permanent

```

## 通信

从服务器下载到本地：

```bash
#命令格式
scp [-params] 用户名@计算机IP或者计算机名称:文件名   本地路径

#示例
scp -P 4900 -r haiwen@172.23.137.29:/data/jsq/pix2pix-zero/output  /Users/heavenmei/Documents/homework/CV/HW/p2p
```

从本地上传到服务器：

```bash
#命令格式
scp  本地路径/文件名 用户名@计算机IP或者计算机名称:远程路径

#示例
scp  ./files_name.txt git@166.111.77.123:/home/shangyj/files

```

**参数**

- `-r` : 复制
- `-P`：port

## pm2

```bash
npm install pm2 -g

pm2 list

pm2 start

pm2 restart {app_name}

pm2 stop {app_name}

pm2 delete {app_name}

pm2 clean --all
```

## tmux

[Tmux 配置：打造最适合自己的终端复用工具 - zuorn - 博客园](https://www.cnblogs.com/zuoruining/p/11074367.html)

```bash
#启动新session：
tmux [new -s 会话名 -n 窗口名]
#恢复session：
tmux at [-t 会话名]
#列出所有sessions：
tmux ls
#关闭session：
tmux kill-session -t 会话名
#关闭整个tmux服务器：
tmux kill-server
```

​

**vscode 中 tmux 无法选中复制？** vscode->setting->macOptionClickForcesSelection :true-> option+

## Docker

[https://blog.csdn.net/qq_38418314/article/details/125074080?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170329365416800186525040%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=170329365416800186525040&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-125074080-null-null.142](https://blog.csdn.net/qq_38418314/article/details/125074080?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170329365416800186525040%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=170329365416800186525040&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-125074080-null-null.142)v96pc_search_result_base7&utm_term=docker-compose%20%E5%90%AF%E5%8A%A8pytorch&spm=1018.2226.3001.4187

### image

**delete image**

```bash

# 删除单个镜像
docker rmi -f [image_id/image_name]
# 删除多个镜像
docker rmi -f [image_id] [image_id]
# 删除所有镜像
docker rmi -f $(docker images -aq)
```

​

### container

**run**

```bash
docker run [params] [image_id/name]
​
--name="Name" 容器名字
-d 后台方式运行
-it 指定交互方式运行，进入容器查看内容
-p 8080:8080 (主机端口:容器端口)
-gpus all : 指定gpu
```

​

### copy container

```bash
# 查找正在运行的容器
docker ps
# 将容器打包为镜像
docker commit [container_id/container_name] [image_name]
# 查看镜像
docker images
# 启动新的容器
docker run -it [image_name]
```

## 磁盘管理

查看磁盘信息：`lsblk`

## GPU

`nvidia-smi` & `nvidia-smi -l` （自动实时刷新 GPU 的使用情况） 上图显示的显卡信息，第一行是版本信息，第二行是标题栏，第三行是具体的显卡信息。如果有多个显卡，就会有多行对应标题栏的信息。例如我上面显示了共 0~4 号，共 5 个卡。

GPU：显卡编号，从 0 开始。 Fan：风扇转速，在 0~100%之间变动。这个速度是计算机期望的风扇转速，实际情况下如果风扇堵转，可能就不会显示具体转速值。有的设备不会返回转速，因为它不依赖风扇冷却，而是通过其他外设保持低温，比如我们实验室的服务器是常年放在空掉房间里面的。 Name：显卡名，以上都是 Tesla。 Temp：显卡内部的温度，以上分别是 54、49、46、50、39 摄氏度。 Perf：性能状态，从 P0 到 P12，P0 性能最大，P12 最小 。 Persistence-M：持续模式的状态开关，持续模式虽然耗能大，但是在新的 GPU 应用启动时，花费的时间更少。以上都是 Off 的状态。 Pwr：能耗表示。 Bus-Id：涉及 GPU 总线的相关信息。 Disp.A：是 Display Active 的意思，表示 GPU 的显示是否初始化。 Memory-Usage：显存的使用率。 GPU-Util：GPU 的利用率。 Compute M.：计算模式。 下面的 Process 显示每块 GPU 上每个进程所使用的显存情况。 显卡占用和 GPU 占用是两个不一样的东西，显卡是由 GPU 和显卡等组成的，显卡和 GPU 的关系有点类似于内存和 CPU 的关系，两个指标的占用率不一定是互相对应的。例如跑 tensorflow 代码的时候，可能显存占得多，GPU 占得少。

**判断 cuda 是否可用：** `python -c "import torch; print(torch.cuda.is_available())"`

tip： 内存使用： `free -m` cpu 使用：`top`
