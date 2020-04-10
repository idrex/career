---
title: CentOS
order: 2
group:
  title: 系统
  order: 1
---

## 命令

```bash
// 更新，一般能解决大部分系统问题
$ yum update
```


## Nginx

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

## Node

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

## SSL

```bash
server {
    listen       80;
    server_name  idrex.net;

    location / {
        proxy_redirect off;
        proxy_set_header Host $host; 
        proxy_set_header X-Real-IP $remote_addr; 
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_pass http://127.0.0.1:7001/;
    }
}
```

### 配置SSL证书

* 在相应证书机构进行证书申请及下载(阿里云&腾讯云)
* 将证书文件 `xxx.pem` 和 `xxx.key`文件拷贝到`/etc/ssl/`目录下

```bash
    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  api.yiketiandi.com;
        root         /usr/share/nginx/html;

        ssl_certificate "/etc/ssl/1_api.yiketiandi.com_bundle.crt";
        ssl_certificate_key "/etc/ssl/2_api.yiketiandi.com.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
# http映射到https
    server{
        listen 80;
        server_name idrex.net;
        rewrite ^/(.*)$ https://idrex.net:443/$1 permanent;
    }
```
