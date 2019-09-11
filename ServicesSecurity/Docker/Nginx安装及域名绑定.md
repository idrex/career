## Nginx 安装及域名绑定

### 安装 Nginx

```ssh
$ yum install nginx
```

### 创建 nginx 容器并启动

命令

```ssh
// 启动
systemctl start nginx
// 重启
systemctl restart nginx
// 停止
systemctl stop nginx
```


3.在文件夹/etc/nginx/nginx.conf 配置域名映射

内容
```ssh
server {
    listen       80;
    server_name  idrex.net;

    location / {
        proxy_set_header Host $host; 
        proxy_set_header X-Real-IP $remote_addr; 
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_pass http://127.0.0.1:7001/;
    }
}
```

