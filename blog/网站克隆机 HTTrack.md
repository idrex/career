# 网站克隆机 HTTrack

## 安装

### Windows 下安装:

通过 http://www.httrack.com/page/2/en/index.html，Download 下载对应的版本即可。

### Linux 下安装:

```bash
# Debian/Ubuntu下安装
sudo apt install httrack
# CentOS/Fedora下安装
sudo yum install httrack
# Gentoo下安装
sudo emerge httrack
```

### Mac OSX 下安装:

```bash
sudo port install httrack
# 或者
brew install httrack
```

### 源码编译下安装:

```bash
git clone https://github.com/xroche/httrack.git --recurse
cd httrack
./configure --prefix=$HOME/usr && make -j8 && make install
```

具体参考：http://www.httrack.com/page/2/en/index.html

常用的参数选项可以通过 `httrack --help` 查看。

## 使用

### Mac OSX 下使用

```bash
# 终端输入
httrack
# 根据需要填写
Welcome to HTTrack Website Copier (Offline Browser) 3.49-2
Copyright (C) 1998-2017 Xavier Roche and other contributors
To see the option list, enter a blank line or try httrack --help

Enter project name :# 输入项目名称

Base path (return=/Users/drex/websites/) :# 输入文件路径

Enter URLs (separated by commas or blank spaces) :# 输入采集的地址

Action:
(enter)	1	Mirror Web Site(s)# 网站镜像
	2	Mirror Web Site(s) with Wizard # 网站镜像向导
	3	Just Get Files Indicated # 只需找到指定的文件
	4	Mirror ALL links in URLs (Multiple Mirror) # 镜像URL中的所有链接（多个镜像）
	5	Test Links In URLs (Bookmark Test) # 测试URL中的链接（书签测试）
	0	Quit # 退出
: # 动作选择，默认回车

Proxy (return=none) :# 代理，默认回车

You can define wildcards, like: -*.gif +www.*.com/*.zip -*img_*.zip
Wildcards (return=none) :# 通配符，默认回车

You can define additional options, such as recurse level (-r<number>), separated by blank spaces
To see the option list, type help
Additional options (return=none) :# 其他选项，默认回车

Ready to launch the mirror? (Y/n) :# 准备好发射镜子了吗？（是/否）：输入Y
Done.# 已完成
Thanks for using HTTrack!
* 
```
在输入的文件目录查看即可

### 异常情况

服务器部署了安全狗或者其他防火墙的专业软件可能会记录这种行为为攻击性质，可能无法克隆
