---
sidebar_position: 2
description: Maven 是一个项目管理工具，可以对 Java 项目进行构建、依赖管理等。
---

# Maven

Maven 是一个项目管理工具，可以对 Java 项目进行构建、依赖管理等。

[Maven - Welcome to Apache Maven](https://maven.apache.org/)

---

## Repository

如果需要查询 Maven 依赖库中某个依赖包最新的版本，可以访问 Maven 中央仓库：

[Maven Central | central.sonatype.com](https://central.sonatype.com/)

:::info
当网络环境异常抖动或中断，maven 可能无法成功的下载到仓库中的依赖包时，可以尝试删除 `~/.m2/repository` 目录中的相关包名路径里面的缓存文件 `*.lastUpdated`。
:::

---
