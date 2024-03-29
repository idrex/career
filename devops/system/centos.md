---
title: CentOS
order: 2
group:
  title: OS系统
  order: 1
---

CentOS 是 Community Enterprise Operating System（社区企业操作系统）的首字母缩写，是 100％ 重建的 RHEL（红帽企业 Linux）。尽管 RHEL 需要花钱，但 CentOS 是免费的，社区支持的企业 Linux 发行版。擅长 Linux 且不想支付 RHEL 支持费的开发人员和公司总是选择 CentOS 来节省资金并获得企业级软件。

> CentOS 8 将在2021年内停止维护
> CentoS 7 将继续在 RHEL 7 生命周期内 (2024 年底)继续得到支持

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
$ npm config set registry http://registry.npm.taobao.org/
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
