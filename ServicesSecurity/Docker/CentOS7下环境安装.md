# CentOS 7 下环境安装

## 安装

移除旧的版本：

```ssh
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

安装一些必要的系统工具：
```ssh
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

添加软件源信息：
```ssh
$ sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

更新 yum 缓存：
```ssh
$ sudo yum makecache fast
```

安装 Docker-ce：
```ssh
$ sudo yum -y install docker-ce
```

启动 Docker 后台服务
```ssh
$ sudo systemctl start docker
```
