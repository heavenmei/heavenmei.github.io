---
title: ubuntu系统重装+ 一键配置脚本
date: 2023-11-25
author: heavenmei
categories:
  - Post
---


>  装环境实在太麻烦啦，mark一些安装命令，以备不时之需。
>  一键化自动安装脚本（Both for Mac & Ubuntu）： https://github.com/heavenmei/one-step-install
## 1、系统安装

ubuntu分配桌面版和服务器版，在主机上安装桌面版

1. 下载镜像链接 https://releases.ubuntu.com/
2. mac使用etcher烧录到U盘： [https://etcher.balena.io/](https://etcher.balena.io/)![Untitled.png](https://raw.githubusercontent.com/heavenmei/heavenmei.github.io/master/images/202312112004610.png)
3. f2 进入bios界面，设置u盘启动
4. 按照界面提示安装ubuntu，最重要是分区



## 2、显卡驱动

下载显卡驱动：[https://www.nvidia.com/Download/index.aspx?lang=en-us](https://www.nvidia.com/Download/index.aspx?lang=en-us)



## 3、Clash

下载文件 `clash-linux-amd64-v1.17.0.gz`

解压：`gunzip clash-linux-amd64-v1.17.0.gz`

移动重命名： `sudo mv clash-linux-amd64-v1.17.0 /usr/local/bin/clash`

给 Clash 添加执行权限：`sudo chmod +x /usr/local/bin/clash`

启动 Clash自动创建initial config file：`clash -d ~/.config/clash`

替换订阅文件：`curl https:/xxxx.yaml > ~/.config/clash/config.yaml`（或者手动复制）

启动 Clash：`clash -d ~/.config/clash`

写入 ~/zshrc

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

`sudo systemctl daemon-reload # 刷新配置` `sudo systemctl start clash # 启动clash.service` `sudo systemctl enable clash # 设置开机启动` `sudo systemctl status clash # 查看clash.service的状态`

## 3、一键配置脚本

下载一键安装脚本，执行`xxx/one_step_install.sh`

### oh-my-zsh

1. `zsh xxx/one_step_install.sh`, 选择ohmyzsh

2. 重启终端，配置主题
    

如果安装卡住，可能是网络不好 解决1：`zsh one_step_install.sh`, 选择scientific_surfing，再次安装

解决2: 先装clash，科学上网

解决3：直接 `zsh install_ohmyzsh.sh`,但是没有主题配置

查看终端：`echo $SHELL`

若不是zsh，请手动配置：`chsh -s $(which zsh)`，重启后可切换

### nvm & node

默认安装nvm，及node 16.20.0

![](https://raw.githubusercontent.com/heavenmei/heavenmei.github.io/master/images/202312112015109.png)

### ssh

配置端口号

查看ip: `ip a`

查看port: `/etc/ssh/sshd-config`

之后可以在本机电脑 ssh username@ip -p PORT 远程连接

### docker

for ubuntu20+

[Ubuntu中docker的安装和使用_ubuntu docker_urnotlanxi的博客-CSDN博客](https://blog.csdn.net/urnotlanxi/article/details/128005616)

### tmux

[Tmux 配置：打造最适合自己的终端复用工具 - zuorn - 博客园](https://www.cnblogs.com/zuoruining/p/11074367.html)