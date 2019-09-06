## 部署egg应用到docker

### 部署

1. egg.js应用需要修改根目录下的package.json（普通node.js应用可忽略这一步）：将start这行里命令里的--daemon去掉，即启动eggjs使用egg-scripts start就好了。在Docker里eggjs应用要在前台运行。
2. 在本地应用的根目录下(package.json所在目录)新建一个名为Dockerfile的文件（无后缀），将以下内容复制到文件里，并将/usr/src/node-app/koa-server全部替换为你想设置的路径（该路径为docker容器里的路径，可自行设置）：

```ssh
# 设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像
FROM node:slim

# 创建app目录
RUN mkdir -p /data/egg-demo/api

# 设置工作目录
WORKDIR /data/egg-demo/api

# 拷贝package.json文件到工作目录
# !!重要：package.json需要单独添加。
# Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层。
# 如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要。
# 所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY package.json /data/egg-demo/api/package.json

# 安装npm依赖(使用淘宝的镜像源)
# 如果使用的境外服务器，无需使用淘宝的镜像源，即改为`RUN npm i`。
RUN npm i --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目录
COPY . /data/egg-demo/api

# 暴露容器端口
EXPOSE 9002

# 启动node应用
CMD npm start
```

上面的注释一目了然。整个过程简单描述就是：1.拉取docker镜像（并设置时区等）；2.创建docker工作目录，并将package.json拷贝到docker里；3.安装npm依赖；4.将服务器上的应用拷贝到docker里；5.暴露docker容器的端口，然后启动node应用。
3. 使用ftp工具或git工具将整个应用上传到生产环境服务器，并使用终端连接到服务器，进入到服务器应用的目录下；（过程略）
4. 执行以下命令，安装docker镜像；
```ssh
$ sudo docker build -t node/koa-server .
```

-t是对该镜像进行tag标识，标识的名字为node/koa-server，可以自定义这个名字。镜像的构建过程依赖于网速，整体还比较快。npm依赖可能会久一些，因为egg.js的依赖比较多。如果所有步骤执行完，会有success的提示，安装成功了。
5. 执行以下命令，使用刚创建好的镜像来启动一个容器；
普通node.js应用
```ssh
$ sudo docker run -d --name koa-server -p 9002:9002 node/koa-server
```

-d为后台运行容器。如果普通node.js应用使用以上命令，容器使用9002端口，与Dockerfile里面的一致。
eggjs应用
```ssh
$ sudo docker run -d --net=host --name koa-server node/koa-server
```

eggjs应用需要执行以上命令，即增加了--net=host，该参数表示使用host网络模式与主机共享网络来连接mysql数据库；(暂时使用这种模式成功了，后续研究其他更好方案)。
6. 执行以下命令查看容器是否启动成功；
```ssh
$ docker ps
```

以上命令是查看运行中的容器。如果刚才启动成功，则会显示出来。
```ssh
$ curl -i localhost:9002
```

也可以通过curl命令或者到浏览器里输入应用的访问地址，来查看能否访问应用，如果可以则安装成功。
```ssh
$ docker logs containerId
```

如果刚才执行docker ps没有看到刚刚启动的容器，说明启动失败，使用该命令来查看启动的具体情况。
7. docker容器里eggjs连接mysql：
只需要根据情况修改数据库相关信息即可，在host网络模式下，容器里eggjs的mysql配置文件里的host仍可设置为localhost。

## 更新

1. 通过查看容器列表，找到需要停止的容器ID；
```ssh
$ docker ps
```

2. 停止容器；
```ssh
$ sudo docker stop containerId
```

3. 删除容器；
```ssh
$ sudo docker rm containerId
```

4. 删除镜像；
```ssh
// 正常情况可以删除
$ sudo docker rmi imageId
// 提示无法删除情况下，强制删除
$ sudo docker rmi -f imageId
```

5. 将本地应用代码更新到服务器目录下。
6. 按照上面的步骤重新构建镜像和启动容器。
