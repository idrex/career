## Nginx 安装及域名绑定

### 安装 Nginx

```bash
$ yum install nginx
```

### 创建 nginx 容器并启动

命令

```bash
// 启动
systemctl start nginx
// 重启
systemctl restart nginx
// 停止
systemctl stop nginx
```


### 在文件夹/etc/nginx/nginx.conf 配置域名映射

内容
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
#http节点中可以添加多个server节点
server{
    #监听443端口
    listen 443;
    #对应的域名，把idrex.net改成你们自己的域名就可以了
    server_name idrex.net;
    ssl on;
    #xxx.pem文件的全路径
    ssl_certificate /etc/ssl/1_idrex.net_bundle.pem;
    #xxx.key文件的全路径
    ssl_certificate_key /etc/ssl/2_idrex.net.key;
    #超时时间
    ssl_session_timeout 5m;
    #支持版本
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    #这是我的主页访问地址，因为使用的是静态的html网页，所以直接使用location就可以完成了。
    location / {
        #文件夹
        root /usr/local/service/ROOT;
        #主页文件
        index index.html;
    }
}
#http映射到https
server{
    listen 80;
    server_name idrex.net;
    rewrite ^/(.*)$ https://idrex.net:443/$1 permanent;
}
```