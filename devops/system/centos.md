---
title: CentOS
order: 2
group:
  title: OS系统
  order: 1
---

## 基本命令

```bash
// 更新，一般能解决大部分系统问题
$ yum update
```

## 环境安装

### Nginx

```bash
// 安装
$ yum install nginx

// 启动
$ systemctl start nginx
// 重启
$ systemctl restart nginx
// 停止
$ systemctl stop nginx
// 重启
$ nginx -s reload
```

### Node

```bash
// 安装基本版Node，版本是6.x.x
$ yum install nodejs -y

// 安装Node版本管理工具 n
$ npm install n -g

// 通过n安装最新版
$ n 12.14.0
// 安装yarn
$ npm install yarn -g
```

### Git

```bash
$ yum install git -y
```
