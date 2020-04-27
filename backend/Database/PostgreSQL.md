---
title: PostgreSQL
order: 2
group:
  title: 数据库
  order: 5
---

## 安装使用

### Mac

homebrew安装

```bash
$ brew install postgresql
```

初始化：
```bash
$ initdb /usr/local/var/postgres
```

创建数据库和账户
mac安装PostgreSQL后不会创建用户名数据库，执行命令：

createdb
然后登录PostgreSQL控制台：

psql
psql连接数据库默认选用的是当前的系统用户

使用\l命令列出所有的数据库，看到已存在用户同名数据库、postgres数据库，但是postgres数据库的所有者是当前用户，没有postgres用户。

然后我们来完成以下几件事：

一、创建postgres用户

CREATE USER postgres WITH PASSWORD 'post5432';
二、删除默认生成的postgres数据库

DROP DATABASE postgres;
三、创建属于postgres用户的postgres数据库

CREATE DATABASE postgres OWNER postgres;
四、将数据库所有权限赋予postgres用户

GRANT ALL PRIVILEGES ON DATABASE postgres to postgres;
五、给postgres用户添加创建数据库的属性

ALTER ROLE postgres CREATEDB;
这样就可以使用postgres作为数据库的登录用户了，并可以使用该用户管理数据库

登陆控制台指令
psql -U [user] -d [database] -h [host] -p [port]
-U指定用户，-d指定数据库，-h指定服务器，-p指定端口
完整的登录命令，比如使用postgres用户登录

psql -U postgres -d postgres
之前我们直接使用psql登录控制台，实际上使用的是缺省数据

user：当前mac用户
database：用户同名数据库
主机：localhost
端口号：5432，postgresql的默认端口是5432
常用控制台指令
\password：设置当前登录用户的密码
\h：查看SQL命令的解释，比如\h select。
\?：查看psql命令列表。
\l：列出所有数据库。
\c [database_name]：连接其他数据库。
\d：列出当前数据库的所有表格。
\d [table_name]：列出某一张表格的结构。
\du：列出所有用户。
\e：打开文本编辑器。
\conninfo：列出当前数据库和连接的信息。
\password [user]: 修改用户密码
\q：退出
使用PostgreSQL
现在来简单的学习一下使用PostgreSQL，以下命令都在postgres=# 环境下
修改用户密码
之前我们用命令CREATE USER postgres WITH PASSWORD 'XXXXXX';创建了postgres用户，现在我们来修改该用户的密码：

ALTER USER postgres WITH PASSWORD 'XXXXXX'
出现ALTER ROLE, 代表修改角色成功

创建和删除数据库用户
创建user1用户：CREATE USER user1 WITH PASSWORD 'XXXX'

查看数据库用户列表：\du

删除数据库用户：drop user user1;

创建和删除数据库
创建数据库：create database testdb;

查看数据库列表：\l

删除数据库：drop database db1;

创建和删除数据表
选择数据库：\c DatabaseName，比如\c testdb

创建数据库表：CREATE TABLE COMPANY( ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, AGE INT NOT NULL, ADDRESS CHAR(50), SALARY REAL);

删除数据库表： drop table company;

查看数据库信息：\d

查询数据：select * from company

关于第三方连接本地数据库的问题
如何设置PostgreSQL允许被远程访问

/usr/local/var/postgres/postgresql.conf
修改postgresql.conf
编辑或添加下面一行，使PostgreSQL可以接受来自任意IP的连接请求。
listen_addresses = '*'
修改pg_hba.conf
pg_hba.conf，位置与postgresql.conf相同，虽然上面配置允许任意地址连接PostgreSQL，但是这在pg中还不够，我们还需在pg_hba.conf中配置服务端允许的认证方式。任意编辑器打开该文件，编辑或添加下面一行。
```bash
# TYPE  DATABASE  USER  CIDR-ADDRESS  METHOD
host  all  all 0.0.0.0/0 md5
```
默认pg只允许本机通过密码认证登录，修改为上面内容后即可以对任意IP访问进行密码验证。对照上面的注释可以很容易搞明白每列的含义，具体的支持项可以查阅文末参考引用。

完成上两项配置后执行sudo service postgresql restart重启PostgreSQL服务后，允许外网访问的配置就算生效了。
