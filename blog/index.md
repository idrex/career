---
title: 推荐网站
nav:
  title: 博客
  order: 9
---


### 文章/订阅
* 奇舞周刊: https://weekly.75team.com/
* awesome-vue: https://github.com/vuejs/awesome-vue#libraries--plugins
* 阮一峰: http://www.ruanyifeng.com/blog/
* 百度前端研发技术周刊: http://fex.baidu.com/articles/
* React.js 小书: http://huziketang.mangojuice.top/books/react/
* 与时俱进版前端资源教程: https://github.com/nicejade/Front-end-tutorial
* 高性能浏览器网络（英文）： https://hpbn.co/

### 工具类
* linux命令查询: http://man.linuxde.net/
* es6浏览器支持: http://ruanyf.github.io/es-checker/index.cn.html
* pagespeed insights: https://developers.google.com/speed/pagespeed/insights/
* 微信接口校验: https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign
* Caniuse: http://caniuse.com/
* bootCDN: http://www.bootcdn.cn/
* codePen: https://codepen.io/pen
* jquery替代: http://youmightnotneedjquery.com/
* 正则检查: http://www.regexpal.com/
* 屏幕尺寸: http://screensiz.es/phone

### git
* gitflow工作流: http://nvie.com/posts/a-successful-git-branching-model/

### html相关
* https://www.w3.org/TR/html5/

### css相关
* CSS参考手册: http://www.css88.com/book/css/
* Sass中文文档: http://www.css88.com/doc/sass/
* bourbon: http://bourbon.io/docs/

### javascript相关
* javascript标准参考教程: http://javascript.ruanyifeng.com/
* Node.js: https://nodejs.org/dist/latest-v6.x/docs/api/
* 阮一峰es6文档: http://es6.ruanyifeng.com/
* ES6 feature: https://github.com/ES-CN/es6features/blob/master/README.md
* jquery: http://w3school.com.cn/jquery/jquery_reference.asp


### vue相关(1.x)
* vue: https://v1.vuejs.org/api/
* vue-router: https://github.com/vuejs/vue-router/tree/1.0/docs/zh-cn
* vue-resource: https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

### vue相关(2.x)
* vue: https://cn.vuejs.org/v2/api/
* vue-router: https://router.vuejs.org/
* vuex: https://vuex.vuejs.org/
* ssr: https://ssr.vuejs.org/
* nuxt: https://zh.nuxtjs.org/

### react相关
* React0.14.x: http://react-ie8.xcatliu.com/
* React https://reactjs.org/
* React中文: https://doc.react-china.org/
* React-router: https://react-guide.github.io/react-router-cn/docs/API.html

### TypeScript相关
* TypeScript官网: http://www.typescriptlang.org/
* TypeScript中文文档: http://www.css88.com/doc/typescript/
* 深入理解 TypeScript: https://jkchao.github.io/typescript-book-chinese/#why

### 类库及工具相关
* webpack2中文文档: http://www.css88.com/doc/webpack2/
* webpack3中文文档: http://www.css88.com/doc/webpack/
* Parcel中文文档：http://www.css88.com/doc/parcel/
* Markdown入门参考: http://xianbai.me/learn-md/
* emoji图标: https://www.webpagefx.com/tools/emoji-cheat-sheet/
* iscroll5: http://iscrolljs.com/
* Ramda: http://ramdajs.com/docs/
* Ramda函数参考: http://www.ruanyifeng.com/blog/2017/03/ramda.html
* Swiper3: http://idangero.us/swiper/api/#.WA3XgZN97IE
* Swiper2: http://2.swiper.com.cn/api/index.html
* Chartjs: http://www.chartjs.org/docs/latest/
* Immutable: http://facebook.github.io/immutable-js/docs/#/
* 百度地图api: http://lbsyun.baidu.com/index.php?title=jspopular/guide/introduction
* Chrome 开发者工具中文文档: http://www.css88.com/doc/chrome-devtools/
* ant.Design: http://ant-design.gitee.io/index-cn
* ant.Design.Pro: http://ant-design-pro.gitee.io/index-cn
* Nginx中文文档: http://www.nginx.cn/doc/


<!-- 
## HTTP 部分

### HTTP 请求方法

- HTTP 1.0

	- GET

		- 请求指定的信息、内容。参数跟在 url 后面，代表获取资源

			- 幂等性：即对一个 URL 请求多次结果是一样的（类似函数式的概念）。对于刷新新闻或列表的请求虽然内容不同但是其意义上都是获取最新信息，因此也是幂等的

	- POST

		- 像指定资源提交数据（文件上传，表单提交）数据在请求体内。代表新的资源的增加或更新。

			- 编码方式 Content-type

				- 1.  APPLICATION/X-WWW-FORM-URLENCODED 用于表单数据提交，会进行 URL 编码
				- 2. MULTIPART/FORM-DATA 用于提交文件
				- 3.  APPLICATION/JSON 目前最常用格式，比较灵活
				- 4. TEXT/XML 现在使用得相对少了

	- HEAD

		- 类似GET 只是返回的只有头部

	- GET 与 POST 的差别

		- 通常答案

			- 1. 对于 GET 请求，我们做回退操作是安全的，但是对于 POST 则会重新提交（刷新页面也是同样的原因）来自于 GET 的幂等性
			- 2. GET 的地址我们在浏览器是可以存书签的，而 POST 则不行。可以推出 GET 的参数（因为在 URL 上）是会被缓存，并且在浏览历史里的，而 POST 则不会（除非手动设置如：Preserve log）
			- 3.  GET 参数在 URL 上，因此不安全；而 POST 内容在 body 中，相对安全一些。但最早是 IE 的设定，如果会浏览器工具的话其实都是一样的
			- 4. GET 请求只能进行 URL 编码，并且参数只能使用 ASCII 字符；POST 可以进行多种编码

		- 真正的差别

			- GET 和 POST 本质是 TCP 连接，是没有差别的。上面所说的用法只是约定俗成的。所谓的差异其实是浏览器的和服务器的限制
			- GET 只发送一次，header 和数据同时发送给服务器
			- POST 发送两次，先是 header 等服务器返回 100 后，继续发送 body 的数据

				- 1. GET 和 POST 有语义不能乱用
				- 2. 网络环境好： POST 两次请求不占用性能；网络环境差：POST 两次请求保证数据的完整性
				- 3. 并非所有浏览器都是 POST  发送两次的，比如 Firefox

- HTTP 1.1

	- PUT

		- 从客户端向服务器传送的数据取代指定的文档的内容。语义上常用于更新资源，对应后端是 update 操作

			- HTTP 规范定义上 如果一个方法重复执行多次，产生的效果是一样的 幂等的

	- DELETE

		- 请求服务器删除指定的页面。语义上用于删除某个资源对应后端 delete 操作

			- 操作是幂等的，即 可以重试。至于多次 update/delete 操作报错是由于服务端逻辑的处理问题

	- OPTIONS

		- 允许客户端查看服务器的性能。

	- CONNECT

		- HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。

	- TRACE

		- 回显服务器收到的请求，主要用于测试或诊断。

- Restful 与传统的请求区别

	- 传统：请求的 url 是个动作，比如 /getUserInfo，/getArticle 等
	- Restful：请求的 url 指向的是资源，动作使用 HTTP 请求方法来代替。与传统的相比，更语义化也相对简短一些

### HTTP 状态码

- 1 系列 服务器收到请求，需要请求者继续执行操作

	- 100：继续，参考 POST 的两次请求
	- 101：切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议

- 2 系列 请求成功

	- 200：请求成功。一般用于GET与POST请求
	- 201：已创建。成功请求并创建了新的资源
	- 202：已接受。已经接受请求，但未处理完成

- 3 系列 资源系列

	- 301：重定向，资源永久被移动。服务器返回新的 URL，浏览器会自动跳转
	- 302：重定向，资源临时被移动。返回新的 URL，浏览器自动跳转，客户端应该持有现在的 URL
	- 304：资源未变化。让浏览器直接调用缓存（强弱缓存）

- 4 系列 请求资源错误

	- 400：参数传递错误，客户端的原因
	- 401：请求身份的认证。比如在头上我们需要带上 token 来表明身份
	- 403：服务器接受请求，但拒绝操作。比如没有权限访问
	- 404：资源不存在，URL 不存在
	- 405：方法不允许，比如 GET 设成了 POST
	- 413：请求实体过大，服务器无法处理，因此拒绝连接。如果是临时拒绝，则还会在头带上 Retry-after 参数
	- 415：服务器无法处理请求附带的媒体格式

- 5 系列 服务器错误系列

	- 500：服务器内部错误，无法完成请求
	- 503：由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中

### 网站访问，URL 输入到页面的渲染

- 1. 输入 URL
- 2. DNS 解析

	- DNS 缓存

		- 浏览器缓存，系统缓存（host），路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存

	- DNS 负载均衡

		- CDN 从就近的 DNS 服务器返回

- 3. 建立 TCP 连接

	- HTTP

		- 三次握手

			- 1. 客户端 -> 服务端  建立请求
			- 2. 服务端 -> 客户端 确认请求
			- 3. 客户端 -> 服务端  请求建立成功

		- 四次分手

			- 1. 客户端 -> 服务端 告知数据发送结束
			- 2. 服务端 -> 客户端  同意关闭连接
			- 3. 服务端 -> 客户端  告知发送结束
			- 4. 客户端 -> 服务端 关闭连接（服务端会关闭，客户端等待一段时间没返回时关闭）

	- HTTPS

		- 多了一层 SSL/TLS 加密

- 4. 服务端接受请求，返回
- 5. 浏览器页面解析

	- 1. 构建 DOM 树
	- 2. 渲染 CSS
	- 3. JS 渲染

		- 单线程，异步操作。JS 解析和 CSS 解析的线程是互斥的。因为 JS 可能会改 CSS

## JavaScript 部分

### 概念性问题

- dom/bom
- 基础类型

	- string

		- toString() 方法可以转进制

	- number

		- 小数精度： 0.1 + 0.2 != 0.3
		- NaN

			- 1. NaN !== NaN
			- 2. 任何与 NaN 相关的操作返回值都是 NaN
			- 3. isNaN() 可以用来判断变量是不是数字，但是能转成数字的也会返回 false 如 isNaN('10') === false

	- boolean
	- undefined

		- 未初始化，未定义

	- null

		- 不应该存在数据，代表空指针

- 引用类型

	- Object

- 类

	- 原型链

		- person.__proto__ -> Person.prototype
Person.prototype.__proto__ -> Object.prototype
Object.prototype.__proto__-> null

	- 继承
	- 变量

		- 私有变量/方法，定义在构造函数内部用 var / function 
		- 成员变量/方法，this.xxx/this.prototype.f = function
		- 静态变量/方法，Class.xxx/Class.f = function
在实例上是访问不了的

- 闭包

	- MDN 定义：闭包是指那些能够访问自由变量的函数。

		- 自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。

	- 实践定义：
1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
2. 在代码中引用了自由变量

		- 保存了创建时的上下文环境，主要存在 [scope] 变量中，Scope 维护了一个作用域连，因此在调用时逐级回找回找到之前的作用域

- 作用域提升

	- let

		- 块作用域

	- var

		- 变量会提升至顶部

- 正则
- 进制转换

	- 10 -> 2

		- x.toString(2)
还能转换成 8、16 等其他进制。为什么是 toString 因为 8进制前有 0x，16进制中有 A-F

	- 2 -> 10

		- parseInt(x, 2)
前面为数字，后面为数字所在的进制，转化后为均为 10 进制

- WebWorker

	- 解决 JS 多线程的问题（因为 JS 是单线程，无法充分利用好多核 CPU 的性能），无法操作 DOM（当然，毕竟多线程）

### 实用问题

- 深浅拷贝问题

	- 偷懒型

		- 普通 for 循环一下

			- 对于引用对象仍然两边互相关联

		- JSON.parse(JSON.stringify(obj))

			- 循环引用无解
			- 层级太深会爆栈

	- 深拷贝

		- 把对象看成是一棵树，然后对树进行循环复制
使用 while 借用一个树结构 {parent: root, key: key, data: data} 和 一个 NodeList 数组

			- 即使有引用类型数据也与原来没有关联
			- 要对变量的数据类型进行判断

- JS 变量类型判断

	- function isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}
这个方法可以满足日常基本的对象判断。并且用 toString 可以返回正确的类型 如 Array, Set 等 加上后 .slece(8, -1) 截取字符串

- 函数柯里化
- apply / call / bind 三者区别

	- apply

		- apply(this, [args])

			- 传入参数不确定的时候，应该使用 apply 比较好

	- call

		- call(this, arg1, arg2, ...)

	- bind

		- bind(this) 返回绑定函数
		- 多次的 bind 是无效的，只有第一次的 bind 才有效

- 函数参数 arguments

	- 类数组

- 常用设计模式

	- 单例模式

		- 单纯的一个对象，用来隔离变量名。后面使用自执行函数进行隔离

- 数组的高级用法

	- map
	- filter
	- find
	- reduce
	- some

- 异步相关

	- 回调函数

		- function(a, b, callback){.... callback()}

			- 会产生回调地狱，不好理解与阅读

	- Promise

		- 基础用法
		- 高级用法

			- Promise.all
			- Promise.race

	- Generator 函数
	- Async / await

- decorator 装饰器

	- 给类的方法和属性加上装饰

- debounce 防抖

	- 也就是说当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。
（电梯自动关门的例子，只要有人按开，就会重新计算时间）

		- var debounce = function(idle, action){
  var last
  return function(){
    var ctx = this, args = arguments
    clearTimeout(last)
    last = setTimeout(function(){
        action.apply(ctx, args)
    }, idle)
  }
}

- throttle 节流

	- 只允许一个函数在N秒内执行一次

		- 	function throttle(fn, delay, atleast) {
	    var timeout = null,
		startTime = new Date();
	    return function() {
		var curTime = new Date();
		clearTimeout(timeout);
		if(curTime - startTime >= atleast) {
		    fn();
		    startTime = curTime;
		}else {
		    timeout = setTimeout(fn, delay);
		}
	    }
	}

## 框架部分

### Vue

- 生态圈

	- vuex

		- 模块化 vuex

	- vue-router

		- 导航守卫

	- axios 拦截

		- 请求拦截：axios.interceptors.request
		- 返回拦截：axios.interceptors.response

- 基本概念

	- 生命周期

		- 生命周期概念和内容
		- beforeDestory 中该应该注意的问题

			- 计时器
			- 绑定事件的清除

	- data
	- computed/mehods/watch

		- computed
		- methods
		- watch

	- render 函数
	- 虚拟 DOM 概念

- 复用与组件化
- MVVM 概念

	- 变量变化的监听

- 组件间通信

	- EventBus
	- Vuex

- 脚手架和第三方工具

	- Webpack 使用

		- 分环境打包
		- 优化插件

			- eslint

		- proxy 解决跨域问题

			- proxyTable

	- 线上项目出错时的应用
	- 第三方调试工具

- SSR 服务端渲染

	- Nuxt
	- vue-server-renderer

### RxJS

- 待定

### GraphQL

- 待定

### React

- 待定

## Node.js 部分

### 异步/事件驱动概念

- Node 是非阻塞线程，即在遇到 IO 操作时直接丢给系统，然后继续执行后面的任务。这样即使一个线程，效率也得到了充分的利用。而为了处理异步 IO 就必须有事件循环，用来检查未处理的事件

	- 相当于100个人同时打饭，Node.js 做个登记，谁先打完饭然后回去报告。在大并发的时候容易挂掉。爬虫时爬网址，范围的顺序就不一定是顺序的，谁先结束谁先返回

- 与 Java 等的区别

	- Java 相当与是排队打饭，可以靠开窗口（多几台服务器）提高效率，但还是得一个人一个人去打饭。效率差一点，但是稳定，大并发时不容易挂掉
	- java 这种对于大并发就是线程池的方式对应

- 缺点问题

	- 无法使用多个 CPU，因为 Node.js 是单线程，因此只会调用一个 eventloop，只能使用一个 CPU 资源。需要第三方工具或者其他方法解决
	- 单线程一旦异常很容易整个程序崩溃，要做好错误的处理
	- CPU 处理密集型任务会造成性能瓶颈。比如斐波那契数列、视频编码等计算，毕竟处理任务还是 CPU 要抗着的

- 单线程的好处

	- 不用管锁的问题，管理比较简单
	- 浏览器渲染是多线程的，但是 ui 和 js 两个线程是互斥的，因为 js 可能会改 ui

### EventLoop

- 由 libev 负责，对开发者不可见。不断检车是否有未执行完的任务和要放入事件队列的任务。事件循环是唯一的，但是任务队列可以有多个，比如计时器一类
- 执行顺序

	- 宏任务（起始是读入整个 script 也就是把东西全部压入执行栈）->执行栈->微任务->循环 面试的时候可以画图来帮助解决问题

		- 画出这个表，往里面填对应的任务，就能解决事件循环的问题了
宏任务 | 执行栈 | 微任务

- 分类

	- 宏任务（tasks）一个事件循环的起始

		- script(整体代码）
		- 计时器（setTimeout, setInterval, setImmediate）

			- Node 中 setTimeout/setInterval 属于同一个源；setImmediate 在执行的顺序上晚于 setTimeout/setInterval

		- I/O
		- UI rending

	- 微任务（jobs）执行栈后执行微任务，微任务完成后相当于一个事件循环的结束

		- process.nextTick

			- Node.js 中 nextTick 优先与其他微任务

		- Promise

			- Promise 中的代码是同步的，.then() 的代码是微任务

### HTTP 代理

- 正向代理

	- 隐藏了客户端（比如科学上网）

- 反相代理

	- 隐藏了服务端（比如我们打 10086 不会直接打到某个客服头上）

### 模块化

- CommonJS

	- 只是一种概念，并非模块。提出了 exports 和 require 的概念

- AMD

	- Require.js 依赖前置，应用前徐需要加载完依赖

- CMD

	- Sea.js 依赖就近原则，用到什么就加载什么

- ES6

	- 终极的解决方式  import 和  export (export default)

### Web 框架

- express

	- 出现时间早，使用的是 callback  容易形成回调地狱，对错误的捕捉也不是很好。自身带了 router 和模版渲染，属于大而全的类型

- koa2

	- 框架精简，使用ES 的 generator 和 async/await 的写法，在语法上更舒服。需要各种功能的话要加各种插件，比如 router 等

- 日志处理

	- morgan

		- express 默认中间件
		- 只需要创建一个 fs 流即可落地到本地，也可以自定义过滤 skip 过滤掉成功到信息
app.use(morgan('short', {stream: accessLogStream}));

## Git 管理

### 分支管理

- git 权限

	- Git 在设计上就无法和 SVN 那样做精确的权限管理

		- 考虑搭建私有的 GitLab 可以进行角色的分配，从而保证 master 分支合并的权限；其他成员通过 merge request 请求合并

	- 使用 gitolite, gitosis

		- 对于仓库 repo 的权限管理

- 分支策略

	- Git Flow

		- 持续分支，一直存在的分支。上游策略，master 永远是最上层的

			- master 最终分支，由 release 分支合并过来
			- develop  实际做开发的分支，可能会领先 master

		- 临时分支 合并后会删除

			- feature 分支

				- 由功能驱动产生的分支，由 dev 分支分出。一般开发完毕后合并到 dev 分支中去然后删除

			- hot fix 分支

				- 临时的 debug 分支，由 master 分支分出。修复完毕候后会合并到 dev 或者 master 分支。视 bug 程度

			- release 分支

				- 由 dev 分支合并。发布前的最终保卫线，在此分支上测试完成后合并到 master 正式发布

- commit message 规范化

	- Commitizen 帮助格式化 commit message
	- 良好的 commit message 可以帮助我们日后查找，并且可以很方便生产 change log（有工具）

- 分支合并

	- Git 默认为快速合并，即将 master 直接指向 dev
	- 推荐 --no-ff 这样会在 master 上新建一个节点，方便日后的维护和回滚

### 前端持续集成

- Jenkins 免费的比较方便（反正有 Docker）

	- 在 Gitlab 等服务上建立 web-hook
	- 实施自动构建（针对 node 环境需要安装包）、自动化部署以及邮件通知

## 浏览器部分

### 浏览器缓存（存储）

- 缓存好处

	- 加快页面显示
	- 减少服务端压力

- 强缓存（本地缓存）

	- 直接调用本地的缓存（不经过服务器）

		- Cache-Control

			- public

				- 可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。

			- private

				- 只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

			- max-age

				- 相对时间，记录资源存储的时间

			- no-cache

				- 不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

			- no-store

				- 直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

		- Expires

			- Cache-Control 优先级更高，会覆盖 Expires
			- Expires 精确到 s 并且无法保证客户端时间与服务端时间同步

	- 普通刷新会忽略强缓存，启用弱缓存

- 弱缓存（协商缓存）

	- 由服务器来判断是否调用缓存（200，304）

		- Etag / If-None-Match

			- Etag 保证资源的唯一性，如果服务端与客户端相同，则返回 304

		- Last-Modify / If-Modify-Since

			- 服务端记录资源最后修改的时间，如果在时间内则返回 304

		- Etag 存在的理由

			- 1. 有些服务端不一定能精确获取文件的最后修改时间
			- 2. 文件修改的频率太频繁，在 s 级以下
			- 3. 文件仅仅只是时间修改，内容不变的情况

- 缓存强制清除

	- 靠 hash 的不同让浏览器强制刷新（Webpack build 之后的的文件带 hash 的原因）

### 前端（客户端）缓存

- 缓存类型

	- Cookie

		- 最早的手段

	- localStorage / sessionStorage

		- 目前比较常见的手段（也有类库辅助）

	- indexedDB

		- 原生 API 十分复杂，实际生产中建议使用类库辅助（Dexie、PouchDB）

	- webSQL

		- 不再支持的规范（移动端比 Web 端要兼容性多）

- 缓存设置策略

	- 采用 key-value 的策略进行前端缓存（Key 的寻找是关键因为要保证唯一性，可以采用 url+uuid 的方式进行存储。如获取某个用户的基本信息等）

### 浏览器跨域问题

- 同源策略

	- 域名、端口号都必须相同

- 跨域的方案

	- 1. 服务端设置（基本都要后端配合）

		- CORS（跨域资源共享） 配置

			- Access-Control-Allow-Origin
前端在发出请求时要带上 Origin 头

	- 2. 服务端转发

		- Webpack 有 ProxyTable 配置，从而进行跨域（本质应该还是服务端转发）
		- 自己搭一个 Node 服务器进行服务端转发

	- 3. JSONP

		- 动态生产 Script 标签，利用的是 src 的跨域请求原理；返回的就是经过服务端包装的函数，然后因为是 JSON 格式，天然支持被浏览器调用

			- 实际的处理函数是在前端定义的，JSONP 相当于是在某个时候调用这个函数。因为后端返回了一段可执行的 JS （就是前端定义的函数名）

比如 前端查询机票的信息，然后输出；在假设只使用 JSONP 的情况下，这个时候就需要用 JSONP 来执行返回的结果了（展示函数）

				- 前端：function hello(msg){ alert(msg) }

采用 JSONP 的话就是 http://xxxx.xxx/api?msg=233&callback=hello  这里 URL 上的 msg 和 hello 实际上就是我们之后要执行的函数和函数的参数

返回值：callback: hello(233) 我们只要去返回值的 callback 执行即可

		- 限制：只能使用 GET 方法

	- 4. 修改主域名

		- document.domain
只能扩大，而且必须是相同的，如 zhuanlan.zhihu.com 和 zhihu.com 可以修改 domain = zhihu.com 其他的不可以

- 为什么会有跨域的需求？

	- 比如 zhuanlan.zhihu.com 需要用户信息，而用户信息在  user.zhihu.com 下，此时如果后端不做任何处理，就取不到用户信息了

### 浏览器安全问题

- xss 恶意脚本注入

	- 对特殊输入进行转义（比如<script>）（前后端）
	- HttpOnly 保护 Cookie 这样无法被读取到

- XRSF 攻击

	- 正确使用 GET POST，避免使用 JSONP 来做大型提交

- 网络劫持

	- HTTPS 进行加密

### 浏览器页面渲染流程

## CSS 部分

### 文档流

- 行内元素/块级元素

	- 行内元素

		- width/height 无效；宽度只与内容有关
margin/padding 上下无效
		- 行内元素不能包含块级元素
只能包含文本和行内元素

	- 块级元素

		- 可以包含块级元素以及行内元素

	- inline-block

		- 在并列时会有空隙（有多种方法可以去掉）

- position 的几种用法

	- 脱离文档流

		- absolute

			- 绝对定位，相对于 static 定位以外的第一个父元素进行定位

		- fixed

			- 生成绝对定位的元素，相对于浏览器窗口进行定位

	- 不脱离文档流

		- static

			- 默认值。没有定位，元素出现在正常的流中。忽略 left/top/right/bottom/z-index 属性

		- relative

			- 生成相对定位的元素，相对于其正常位置进行定位

	- inherit

		- 父元素继承 position 属性的值

### 清除浮动

- 1. 父级元素：overflow: auto/hidden

	- 外层元素会随内层元素高度变化而变化（在不设高度的情况）
	- hidden 对于 seo 不太友好

- 2. 在浮动元素的后面加一个 div clear:both

	- 要多一个 dom 节点

- 3. 使用父元素的 :after

	- 作用和 clear both 一样，只是不用增加 dom 节点了
	- .outer :after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}

### 元素居中

- 1. 绝对定位：top, bottom, left, right  设 0 ; margin: auto

	- 必须要声明元素高度
	- 换成 fixed 就是可视部分居中（记得加上 z-index)

- 2. flex 布局 justify-content: center; align-items: center;
- 3. translate(-50%,-50%) 因为 translate 的的计算是以自己为基准而非父元素
- 4. 如果知道元素的尺寸，也可以使用负 margin 来进行移动和设定
- 5. 利用 display: Table 和 display: Table-cell
注意浏览器的兼容

	- .Pos-Container.is-Table { display: table; }
.is-Table .Table-Cell {
  display: table-cell;
  vertical-align: middle;
}
.is-Table .Center-Block {
  width: 50%;
  margin: 0 auto;
}

### 选择器

- id #
- class .
- tag tag
- * 通配符
- A B 后代选择器
- A, B 多元素选择器
- A > B 子元素选择器
- A + B 相邻元素选择器
- A[attr=aaa] 属性选择器，支持通配符
- 选择器权重 !important > id > class > tag

### CSS 继承

- 后面的 Class 会覆盖前面的 Class
- 子节点会继承父节点的属性（常见）

	- font 系列
	- text-align
	- list-style 系列
	- color

### 伪类

- CSS 2.1 常用

	- E:first-child
	- E:link
	- E:visited
	- E:active
	- E:hover
	- E:focus

- CSS 3 常用

	- E:enabled
	- E:disabled
	- E:checked
	- E:nth-child(n)

		- 可以用来判断奇偶行变色

	- E:nth-last-child(n)

### 伪元素

- CSS 2.1
2.1 中伪元素和伪类都是一个 :

	- E:first-line
	- E:first-letter
	- E:before
	- E:after

- CSS 3

	- 包含 CSS2.1 中的伪元素
以 ::before 的形式书写
	- ::selection

		- 设置用户选择某段内容时的样式

### CSS 3

- flex 布局

	- justify-content 水平对齐
	- align-items 垂直对齐

- box-sizing

	- border-box

		- width 包含了 border 和 padding 的

	- content-box 默认
边框、margin、padding 都要在元素设定宽度外面相加

- transform

	- translate 平移

		- 元素平移

	- scale 缩放
	- rotate 旋转

- transition 动画相关

	- 做过度效果

### scss，sass，less 预处理器

- 可以进行变量定义、Mixin、条件判断、函数定义，支持继承；配合 auto-prefix 自动适应各类浏览器（一般集成在 Webpack 中）

### BEM 命名规则

### 瀑布流布局

- multi-column相关的部分属性

	- column-count设置列数
	- column-gap设置列与列之间的间距
	- column-width设置每列的宽度

- break-inside属性值（子容器）

	-   avoid  指定避免元素内的分页符。

## 实战应用

### 文件拖拽上传

- 利用 element.ondrop 属性

### 图表

- Echarts 使用

### 图片懒加载

- 只对出现在视图区的图片进行加载（替换 src）需要计算高度，然后绑到 onScroll 上。但是 onScroll 有性能影响需要防抖或节流方法来进行性能的保障（Lodash/Underscore）

	-   var bodyScrollHeight =  document.body.scrollTop;// body滚动高度
  var windowHeight = window.innerHeight;// 视窗高度
  var imgs = document.getElementsByClassName('lazyloadimg');
  for (var i =0; i < imgs.length; i++) {
    var imgHeight = imgs[i].offsetTop;// 图片距离顶部高度  
    if (imgHeight  < windowHeight  + bodyScrollHeight) {
       imgs[i].src = imgs[i].getAttribute('data-src');
       img[i].className = img[i].className.replace('lazyloadimg','')
    }
  }

### 水印工具（防截屏工具）

- 利用的还是遮罩层的设计，要点是 css 的 pointer-event 属性，把 pointer-event 设为 none 即可保证遮罩层的内容不影响后面内容的操作

	- 肉眼不可见：调整 opcaity 为 0.005 的时候就是肉眼不可见。使用 PS 等工具调试可以显示
	- 生成的节点较多，为了性能考虑使用 createFregment() 方法；当绑定在 onresize 上时注意使用节流方法保证性能

### 正则相关

- 手机号匹配
- 去除特殊字符

### 数组相关题目

- 数组去重

	- 偷懒型

		- 利用 Set 转数组, arr = [...new Set(arr)]

	- 一般型

		- for 循环，配合 includes 去重

- 找出数组中出现次数最大的数字
- 数组扁平化

### localStorage/sessionStorage 封装

- 为什么要封装，原生 storage 支持的方法不多，而且只支持数据字符串格式
- 支持多对象、多种数据格式的插入，增加过期时间等操作

## 数据库相关*

### 关系型

- MySQL

	- Node 相关

		- mysql 库
		- knex 库

### 关系型数据的表结构设计

### 非关系型(NoSQL)
Not only SQL

- MongoDB

	- mongoose 使用（ODM 模型）

- CouchDB

	- 以 JSON 对象的形式存储，完全支持 RESTful  接口，无需额外安装库

## 系统架构*

### 微服务架构

- CAP 定理

	- 其中 P 是一定会有的（因为无法保证网络一定是通的且不丢包），所以只能在 A、C 中选择一个。互联网企业一般是保证 AP 牺牲 C 的（不保证强一致性，只保证最终一致性 这个一致性和 CAP 的 C 不是一个意思）
	- 一致性（C）：在分布式系统中的所有数据备份，在同一时刻是否同样的值。（等同于所有节点访问同一份最新的数据副本）
	- 可用性（A）：在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求。（对数据更新具备高可用性）
	- 分区容忍性（P）：以实际效果而言，分区相当于对通信的时限要求。系统如果不能在时限内达成数据一致性，就意味着发生了分区的情况，必须就当前操作在C和A之间做出选择。

- BASE 理论

	- BASE是Basically Available（基本可用）、Soft state（软状态）和Eventually consistent（最终一致性）三个短语的简写，BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的结论，是基于CAP定理逐步演化而来的，其核心思想是即使无法做到强一致性（Strong consistency），但每个应用都可以根据自身的业务特点，采用适当的方式来使系统达到最终一致性（Eventual consistency）。

- 特点：服务的划分，理想状态是一个服务就是一个系统。拥有完整的 UI-后台-数据库；现实上 UI 基本是整合的，后台和数据库可以分开（借助 Docker）

	- 缺点：服务划分得太细，小项目复杂度高
	- 优点：灵活对应需求的变更，加减都很方便（前端依旧要命）；同时不受语言限制（实际上还是要保证大家用的技术栈相同）

- 关联知识

	- K8S Google
	- Docker

*XMind: ZEN - Trial Version* -->