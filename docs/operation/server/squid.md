---
sidebar_position: 2
description: 描述：Squid是一个支持HTTP、HTTPS、FTP等的Web缓存代理。它通过缓存和重用经常请求的网页来减少带宽并提高响应时间。
---

# Squid

官网：[Squid](http://www.squid-cache.org/)

---

## 需求

需要访问外网的服务器，但是服务器没有外网访问权限，需要通过代理服务器访问外网。

比如在构建 Docker 镜像的时候，需要从外网下载软件包，但是服务器没有外网访问权限，则可以通过代理服务器访问外网。

---

## 实现

在可以访问目标资源的服务器上安装 squid 代理服务器。

比如在 HK 的服务器上安装 squid 代理服务器，然后在 BJ 的服务器上配置代理服务器。

---

## 部署

在 HK 的服务器上使用 docker 部署 squid 代理服务器：

```sh
mkdir -p /etc/squid/conf.d
```

安装 httpd-tools 并生成用户名和密码：

```sh
yum install -y httpd-tools
htpasswd -c /etc/squid/conf.d/passwd daodao
# 输入密码
```

创建配置文件：

```sh
cat > /etc/squid/conf.d/debian.conf <<EOF
http_access allow localnet
auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/conf.d/passwd
acl auth proxy_auth REQUIRED
http_access deny !auth
http_access allow auth
EOF
```

```sh
docker run -d --name squid --restart=always -e TZ=Asia/Shanghai -p 3128:3128 -v /etc/squid/conf.d/:/etc/squid/conf.d/ ubuntu/squid
```

在 BJ 的服务器上可以在环境变量上配置代理服务器：

```sh
export http_proxy=http://$ip:3128
export https_proxy=http://$ip:3128
```

或者在命令行上使用 -x 参数指定代理服务器：

```sh
curl -i -x $ip:3128 -U daodao:$password https://google.com
```
