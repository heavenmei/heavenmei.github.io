---
title: ubuntu环境配置
subtitle: 适用于ubuntu和mac 的一键安装相关环境脚本
layout: post
date: 2024-08-25
author: heavenmei
categories:
  - Post
description: 装环境实在太麻烦啦，mark一些安装命令，以备不时之需。
tags:
  - Ubuntu
url: /2023-11-25-one-step-install
image:
---


>  装环境实在太麻烦啦，mark一些安装命令，以备不时之需。
>  
>  一键化自动安装脚本（Both for Mac & Ubuntu）： https://github.com/heavenmei/one-step-install
## 系统安装

ubuntu分配桌面版和服务器版，在主机上安装桌面版

1. 下载镜像链接 https://releases.ubuntu.com/
2. mac使用etcher烧录到U盘： [https://etcher.balena.io/](https://etcher.balena.io/)
3. f2 进入bios界面，设置u盘启动
4. 按照界面提示安装ubuntu，最重要是分区

下载显卡驱动：[https://www.nvidia.com/Download/index.aspx?lang=en-us](https://www.nvidia.com/Download/index.aspx?lang=en-us)



## 科学上网 Clash

关闭代理：`unset http_proxy https_proxy all_proxy`

检测代理： `curl ipinfo.io`

查看 ip: `ip a`

查看 port: `/etc/ssh/sshd-config`

#### Clash 安装配置

下载文件 `clash-linux-amd64-v1.17.0.gz`
> 链接: https://pan.baidu.com/s/1RzYl_CGHLF9IUS9I5xyvZg?pwd=53kc 提取码: 53kc

- 解压：`gunzip clash-linux-amd64-v1.17.0.gz`
- 移动重命名： `sudo mv clash-linux-amd64-v1.17.0 /usr/local/bin/clash`
- 给 Clash 添加执行权限：`sudo chmod +x /usr/local/bin/clash`
- 启动 Clash自动创建initial config file：`clash -d ~/.config/clash`
- 替换订阅文件：`curl https:/xxxx.yaml > ~/.config/clash/config.yaml`（或者手动复制）
- 启动 Clash：`clash -d ~/.config/clash`
- 写入 ~/zshrc

```json
echo 'export http_proxy=127.0.0.1:7890' >> ~/.zshrc
echo 'export https_proxy=$http_proxy' >> ~/.zshrc
```

**开机自启配置：**[https://blog.csdn.net/xiaxinkai/article/details/123563488](https://blog.csdn.net/xiaxinkai/article/details/123563488)

`sudo vim /etc/systemd/system/clash.service`

写入配置

```json
[Unit]
Description=clash service
After=network.target
 
[Service]
ExecStart=/usr/local/bin/clash -d /home/haiwen/.config/clash/
 
[Install]
WantedBy=multi-user.target
```


```bash
sudo systemctl daemon-reload # 刷新配置

sudo systemctl start clash # 启动clash.service` 
sudo systemctl enable clash # 设置开机启动
sudo systemctl status clash # 查看clash.service的状态`
```


## ssh

配置端口号

查看ip: `ip a`

查看port: `/etc/ssh/sshd-config`

之后可以在本机电脑 ssh username@ip -p PORT 远程连接


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


## conda
```shell
# download
curl -O https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh
# 安装
sudo bash ./Anaconda3-2023.09-0-Linux-x86_64.sh
# 添加环境变量 
echo 'export PATH=~/anaconda3/bin:$PATH' >> ~/.bashrc 
# 刷新bashrc
source ~/.bashrc 
```


## Git ssh
查看是否由密钥
```bash
cd ~/.ssh

ls
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```

若没有则生成
```bash
ssh-keygen -t rsa -C "youremail@youremail.com" 
# or
ssh-keygen -o
```


粘贴公钥->github ->setting -> SSH and GPG keys
```bash
cat ~/.ssh/id_rsa.pub
```


验证
```bash
 ssh -T git@github.com
```

## 查看占用空间

`du -h --max-depth=1 |sort`

查看终端：`echo $SHELL`

切换桌面：ctrl+alt+方向键

显示终端：ctrl+alt+T

## 防火墙

检查端口网站：[https://tool.chinaz.com/port](https://tool.chinaz.com/port)

```shell
# 查看端口是否开启（无返回信息则表示该端口未开放。）
lsof -i:22
# 查看当前主机在监听的端口
netstat -tlunp
netstat -tlunp | grep 22
```

常见的 linux 系统防火墙有：UFW、firewall、[iptables](https://so.csdn.net/so/search?q=iptables&spm=1001.2101.3001.7020)，其中，UFW 是 Debian 系列的默认防火墙，firewall 是红帽系列 7 及以上的防火墙（如 CentOS7.x）。相互作用影响

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



**vscode 中 tmux 无法选中复制？** vscode->setting->macOptionClickForcesSelection :true-> option+


## GPU

`nvidia-smi` & `nvidia-smi -l` （自动实时刷新 GPU 的使用情况） 上图显示的显卡信息，第一行是版本信息，第二行是标题栏，第三行是具体的显卡信息。如果有多个显卡，就会有多行对应标题栏的信息。例如我上面显示了共 0~4 号，共 5 个卡。

- GPU：显卡编号，从 0 开始。 
- Fan：风扇转速，在 0~100%之间变动。这个速度是计算机期望的风扇转速，实际情况下如果风扇堵转，可能就不会显示具体转速值。有的设备不会返回转速，因为它不依赖风扇冷却，而是通过其他外设保持低温，比如我们实验室的服务器是常年放在空掉房间里面的。 
- Name：显卡名，以上都是 Tesla。 
- Temp：显卡内部的温度，以上分别是 54、49、46、50、39 摄氏度。 Perf：性能状态，从 P0 到 P12，P0 性能最大，P12 最小 。 
- Persistence-M：持续模式的状态开关，持续模式虽然耗能大，但是在新的 GPU 应用启动时，花费的时间更少。以上都是 Off 的状态。 
- Pwr：能耗表示。 
- Bus-Id：涉及 GPU 总线的相关信息。
- Disp.A：是 Display Active 的意思，表示 GPU 的显示是否初始化。 
- Memory-Usage：显存的使用率。 
- GPU-Util：GPU 的利用率。 
- Compute M.：计算模式。 下面的 Process 显示每块 GPU 上每个进程所使用的显存情况。 显卡占用和 GPU 占用是两个不一样的东西，显卡是由 GPU 和显卡等组成的，显卡和 GPU 的关系有点类似于内存和 CPU 的关系，两个指标的占用率不一定是互相对应的。例如跑 tensorflow 代码的时候，可能显存占得多，GPU 占得少。

**判断 cuda 是否可用：** `python -c "import torch; print(torch.cuda.is_available())"`

tip： 
- 内存使用： `free -m`
- cpu 使用：`top`




## 一键配置脚本

下载一键安装脚本，执行`xxx/one_step_install.sh`

### oh-my-zsh

`zsh xxx/one_step_install.sh`, 选择ohmyzsh. 然后重启终端，配置主题

如果安装卡住，可能是网络不好 解决1：`zsh one_step_install.sh`, 选择scientific_surfing，再次安装

解决2: 先装clash，科学上网

解决3：直接 `zsh install_ohmyzsh.sh`,但是没有主题配置

查看终端：`echo $SHELL`

若不是zsh，请手动配置：`chsh -s $(which zsh)`，重启后可切换




## QA
##### Q: sudo: command not found
`apt install sudo`

##### Q：apt & apt-get
_apt_ 和 _apt-get_ 之间的区别不仅在于 _apt_ 是 _apt-get_ 的较新版本。_apt_ 命令被设计为对用户更加友好的 _apt-get_ 替代方案，结合了多个包管理工具的功能，为用户提供便利。

[APT 与 APT-GET 之间有什么区别？](https://aws.amazon.com/cn/compare/the-difference-between-apt-and-apt-get/)