---
tags:
  - skill
---


> ecnu5：182.92.226.233 -p 59940 ****ecnu5 内网穿透： **100.115.188.110 -p 49940** 开放端口为6001-6009 分别对应59941-59949 ecnu13: ssh [haiwen@172.23.137.2](mailto:haiwen@172.23.137.2)

<aside> 🎯 **科学上网**

</aside>

科学上网：`source <(curl -s 172.23.148.93/s/ecnuproxy.sh)`

关闭代理：`unset http_proxy https_proxy all_proxy`

检测代理： `curl ipinfo.io`

查看ip: `ip a`

查看port: `/etc/ssh/sshd-config`

<aside> 🎯 **内网穿透之 Tailscale**

</aside>

Tailscale属于一种虚拟组网工具，把安装了Tailscale服务的机器，都放到同一个局域网，稳定连接

ecnu5 内网ip： 100.115.188.110 -p 49940

<aside> 🎯 ****本地打开服务器的localhost****

</aside>

ssh链接时 将服务器的8097端口重定向到本机18097端口： `ssh -L 18097:127.0.0.1:8097 username@xx.xx.xx.xx -p PORT`

<aside> 🎯 ****查看占用空间****

</aside>

`du -h --max-depth=1 |sort`

查看终端：`echo $SHELL`

设置默认终端：

快捷键：

切换桌面：ctrl+alt+方向键

显示终端：ctrl+alt+T