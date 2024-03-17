---
sidebar_position: 1
description: Nginx 是一款高性能的开源 Web 服务器和反向代理服务器。
---

# Nginx

---

## 简介

Nginx（发音为"engine-x"）是一款高性能的开源Web服务器和反向代理服务器。

它以其出色的性能、稳定性、丰富的功能集和低资源消耗而闻名。

Nginx 最初由俄罗斯的程序员 Igor Sysoev 开发，并于2004年首次公开发布。

Nginx的主要特点包括：

1. **高性能：** Nginx以其出色的性能而著称，能够处理大量的并发连接而不消耗太多系统资源。它通常被用作前端代理服务器，处理静态资源的服务，或者作为反向代理服务器分发流量给后端应用服务器。

2. **低内存消耗：** 相比一些传统的Web服务器，Nginx使用较少的内存来处理相同数量的连接。这使得它在资源有限的环境中表现得非常出色。

3. **事件驱动架构：** Nginx采用了事件驱动的架构，它使用异步非阻塞的方式处理请求。这种设计使得Nginx能够高效地处理大量并发连接而不阻塞其他请求的处理。

4. **反向代理：** Nginx常被用作反向代理服务器，将请求转发到后端的应用服务器。这有助于分担后端服务器的负载、提高安全性，并提供负载均衡。

5. **负载均衡：** Nginx支持负载均衡，可以将请求分发到多个后端服务器，以提高整个系统的性能和可用性。

6. **静态文件服务：** Nginx优秀地处理静态文件，对于图片、CSS、JavaScript等静态资源的传输非常高效。

7. **模块化架构：** Nginx具有模块化的架构，允许用户根据需要添加或移除功能模块。

Nginx已经成为许多网站和应用的首选服务器之一，被广泛用于搭建高性能、可靠的Web服务。

---

## 配置案例

以下是一些 nginx 配置案例：

---

### header 路由

需求：编写 nginx 配置，根据 header 中的 X-Client 的值，转发请求到不同的目标服务中。

有 3 组目标服务：

- xxx
    - 192.168.16.8:30001
    - 192.168.16.8:30002
- yyy
    - 192.168.16.8:30003
    - 192.168.16.8:30004
- zzz
    - 192.168.16.8:30005
    - 192.168.16.8:30006

解析 header 中的 X-Client 的值，进行路由：

- 当 X-Client 的值是 1 或 2 的时候，转发到 xxx
- 当 X-Client 的值是 3 或 4 的时候，转发到 yyy
- 当 X-Client 的值是其它的时候，转发到 zzz

实现：

在以下配置中，map 指令将 X-Client 的值映射到相应的后端服务名称。

然后，通过 upstream 指令定义了三个不同的后端服务集群：xxx、yyy 和 zzz。

最后，在 location / 块中，使用 proxy_pass 将请求转发到相应的后端服务。

```nginx

http {

    upstream xxx {
        server 192.168.16.8:30001;
        server 192.168.16.8:30002;
    }

    upstream yyy {
        server 192.168.16.8:30003;
        server 192.168.16.8:30004;
    }

    upstream zzz {
        server 192.168.16.8:30005;
        server 192.168.16.8:30006;
    }

    map $http_x_client $backend {
        ~^(1|2)$ xxx;
        ~^(3|4)$ yyy;
        default  zzz;
    }

    server {

        listen       80;
        server_name  localhost;

        location / {
            proxy_pass http://$backend;
            # ...
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }

    }
}

```

测试命令：

```bash

curl -i -X POST -H "X-Client:1" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30001/demo/api/demo

curl -i -X POST -H "X-Client:2" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30002/demo/api/demo

curl -i -X POST -H "X-Client:3" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30003/demo/api/demo

curl -i -X POST -H "X-Client:4" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30004/demo/api/demo

curl -i -X POST -H "X-Client:5" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30005/demo/api/demo

curl -i -X POST -H "X-Client:6" -H  "Content-Type:application/json" -d '{"param":{"name":"xxx"}}' http://192.168.16.8:30006/demo/api/demo

```
