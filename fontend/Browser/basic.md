---
title: 基础知识
group:
  title: 浏览器
  order: 2
---


## 浏览器架构

- 用户界面
- 主进程 
- 内核
  - 渲染引擎
  - JS 引擎
    - 执行栈 
  - 事件触发线程
    - 消息队列
      - 微任务
      - 宏任务  
  - 网络异步线程
  - 定时器线程

### 堆栈问题

- heap是没有结构的，数据可以任意存放。heap用于复杂数据类型（引用类型）分配空间，例如数组对象、object对象。
- stack是有结构的，每个区块按照一定次序存放（后进先出），stack中主要存放一些基本类型的变量和对象的引用，存在栈中的数据大小与生存期必须是确定的。可以明确知道每个区块的大小，因此，stack的寻址速度要快于heap。
- 程序运行时，每个线程分配一个stack，每个进程分配一个heap，也就是说，stack是线程独占的，heap是线程共用的。此外，stack创建的时候，大小是确定的，数据超过这个大小，就发生stack overflow错误，而heap的大小是不确定的，需要的话可以不断增加。所以这里只看stack的大小限制。
- stack：变量和常量；heap：对象引用，函数；闭包中引用的常量也在heap



## 浏览器下事件循环(Event Loop)

事件循环是指: 执行一个宏任务，然后执行清空微任务列表，循环再执行宏任务，再清微任务列表 

- 微任务 `microtask(jobs)`: `promise / ajax / Object.observe(该方法已废弃)`
- 宏任务 `macrotask(task)`: `setTimout / script / IO / UI Rendering`

## 从输入 url 到展示的过程

- DNS 解析 
- TCP 三次握手
- 发送请求，分析 url，设置请求报文(头，主体)
- 服务器返回请求的文件 (html)
- 浏览器渲染
  - `HTML parser` => `DOM Tree`
    - 标记化算法，进行元素状态的标记
    - dom 树构建 
  - `CSS parser` => `Style Tree`
    - 解析 css 代码，生成样式树 
  - attachment => `Render Tree`
    - 结合 dom树 与 style树，生成渲染树
  - layout: 布局
  - GPU painting: 像素绘制页面


- 缓存策略: 可分为 **强缓存** 和 **协商缓存**
  - Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，**Cache-Control的 max-age 优先级高于 Expires**
  - 当缓存已经过期时，使用协商缓存
    - 唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 服务器判断资源是否被修改，
    - 最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)
      - 如果一致，则直接返回 304 通知浏览器使用缓存
      - 如不一致，则服务端返回新的资源
    
  - Last-Modified 缺点：
    - 周期性修改，但内容未变时，会导致缓存失效
    - 最小粒度只到 s， s 以内的改动无法检测到 
  - Etag 的优先级高于 Last-Modified

## 重绘与回流

当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中，有两种类型的操作，即重绘与回流。

- **重绘(repaint)**: 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 **损耗较少**

- **回流(reflow)**: 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作: 
  - 页面初次渲染
  - 浏览器窗口大小改变
  - 元素尺寸、位置、内容发生改变
  - 元素字体大小变化
   - 添加或者删除可见的 dom 元素
  - 激活 CSS 伪类（例如：:hover）
  - 查询某些属性或调用某些方法
    - clientWidth、clientHeight、clientTop、clientLeft
    - offsetWidth、offsetHeight、offsetTop、offsetLeft
    - scrollWidth、scrollHeight、scrollTop、scrollLeft
    - getComputedStyle()
    - getBoundingClientRect()
    - scrollTo()
  

**回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。**

### 最佳实践:

- css
  - 避免使用`table`布局
  - 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上

- javascript 
  - 避免频繁操作样式，可汇总后统一 **一次修改**
  - 尽量使用`class`进行样式修改
  - 减少`dom`的增删次数，可使用 **字符串** 或者 `documentFragment` 一次性插入
  - 极限优化时，修改样式可将其`display: none`后修改
  - 避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用 **变量存住**

## 存储

我们经常需要对业务中的一些数据进行存储，通常可以分为 短暂性存储 和 持久性储存。

- 短暂性的时候，我们只需要将数据存在内存中，只在运行时可用

- 持久性存储，可以分为 浏览器端 与 服务器端
  - 浏览器: 
    - `cookie`: 通常用于存储用户身份，登录状态等
      - http 中自动携带， 体积上限为 4K， 可自行设置过期时间
    - `localStorage / sessionStorage`: 长久储存/窗口关闭删除， 体积限制为 4~5M
    - `indexDB` 
  - 服务器:
    - 分布式缓存 redis
    - 数据库 

### cookie属性

name字段为一个cookie的名称。
value字段为一个cookie的值。

domain字段为可以访问此cookie的域名。

非顶级域名，如二级域名或者三级域名，设置的cookie的domain只能为顶级域名或者二级域名或者三级域名本身，不能设置其他二级域名的cookie，否则cookie无法生成。

顶级域名只能设置domain为顶级域名，不能设置为二级域名或者三级域名，否则cookie无法生成。

二级域名能读取设置了domain为顶级域名或者自身的cookie，不能读取其他二级域名domain的cookie。所以要想cookie在多个二级域名中共享，需要设置domain为顶级域名，这样就可以在所有二级域名里面或者到这个cookie的值了。
顶级域名只能获取到domain设置为顶级域名的cookie，其他domain设置为二级域名的无法获取。

path字段为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。

expires/Max-Age 字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。

Size字段 此cookie大小。

http字段  cookie的httponly属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。

secure 字段 设置是否只能通过https来传递此条cookie

## 缓存

浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。

浏览器缓存的优点有：

1.减少了冗余的数据传输，节省了网费

2.减少了服务器的负担，大大提升了网站的性能

3.加快了客户端加载网页的速度

浏览器缓存主要有两类：缓存协商和彻底缓存，也有称之为协商缓存和强缓存。

1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;

2.协商缓存：向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；

两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。

缓存中header的参数：

### 强制缓存

Expires：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。

**Cache-Control：**当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

cache-control除了该字段外，还有下面几个比较常用的设置值：

**-no-cache：**不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

**-no-store：**直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

**-public：**可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。

**-private：**只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

### 协商缓存

Last-Modify/If-Modify-Since：浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间；当浏览器再次请求该资源时，request的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存

**Etag：**web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。

**If-None-Match：**当资源过期时（使用Cache-Control标识的max-age），发现资源具有Etage声明，则再次向web服务器请求时带上头If-None-Match （Etag的值）。web服务器收到请求后发现有头If-None-Match 则与被请求资源的相应校验串进行比对，决定是否命中协商缓存；

ETag和Last-Modified的作用和用法，他们的区别：

1.Etag要优于Last-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；

2.在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值；

3.在优先级上，服务器校验优先考虑Etag。

### 浏览器缓存过程

1.浏览器第一次加载资源，服务器返回200，浏览器将资源文件从服务器上请求下载下来，并把response header及该请求的返回时间一并缓存；

2.下一次加载资源时，先比较当前时间和上一次返回200时的时间差，如果没有超过cache-control设置的max-age，则没有过期，命中强缓存，不发请求直接从本地缓存读取该文件（如果浏览器不支持HTTP1.1，则用expires判断是否过期）；如果时间过期，则向服务器发送header带有If-None-Match和If-Modified-Since的请求

3.服务器收到请求后，优先根据Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200；；

4.如果服务器收到的请求没有Etag值，则将If-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200；；

3.常见问题

用户行为对浏览器缓存的影响

4.解决方案

点击刷新按钮或者按F5

浏览器直接对本地的缓存文件过期，但是会带上If-Modifed-Since，If-None-Match,这就意味着服务器会对文件检查新鲜度，返回结果可能是304，也有可能是200.

用户按Ctrl+F5（强制刷新）

浏览器不仅会对本地文件过期，而且不会带上 If-Modifed-Since，If-None-Match，相当于之前从来没有请求过，返回结果是200.

地址栏回车

浏览器发起请求，按照正常流程，本地检查是否过期，然后服务器检查新鲜度，最后返回内容

## Web Worker

现代浏览器为`JavaScript`创造的 **多线程环境**。可以新建并将部分任务分配到`worker`线程并行运行，两个线程可 **独立运行，互不干扰**，可通过自带的 **消息机制** 相互通信。

**基本用法:**

```js
// 创建 worker
const worker = new Worker('work.js');

// 向主进程推送消息
worker.postMessage('Hello World');

// 监听主进程来的消息
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
}
```

**限制:**

- 同源限制
- 无法使用 `document` / `window` / `alert` / `confirm`
- 无法加载本地资源


## 跨标签页通讯

不同标签页间的通讯，本质原理就是去运用一些可以 **共享的中间介质**，因此比较常用的有以下方法:

- 通过父页面`window.open()`和子页面`postMessage`
  - 异步下，通过 `window.open('about: blank')` 和 `tab.location.href = '*'` 
  
- 设置同域下共享的`localStorage`与监听`window.onstorage`
  - 重复写入相同的值无法触发
  - 会受到浏览器隐身模式等的限制 
  
- 设置共享`cookie`与不断轮询脏检查(`setInterval`)

- 借助服务端或者中间层实现


## V8垃圾回收机制

垃圾回收: 将内存中不再使用的数据进行清理，释放出内存空间。V8 将内存分成 **新生代空间** 和 **老生代空间**。

- **新生代空间**: 用于存活较短的对象
  - 又分成两个空间: from 空间 与 to 空间 
  - Scavenge GC算法: 当 from 空间被占满时，启动 GC 算法
    - 存活的对象从 from space 转移到 to space
    - 清空 from space
    - from space 与 to space 互换
    - 完成一次新生代GC
- **老生代空间**: 用于存活时间较长的对象
  - 从 新生代空间 转移到 老生代空间 的条件
    - 经历过一次以上 Scavenge GC 的对象
    - 当 to space 体积超过25%
  - **标记清除算法**: 标记存活的对象，未被标记的则被释放
    - 增量标记: 小模块标记，在代码执行间隙执，GC 会影响性能
    - 并发标记(最新技术): 不阻塞 js 执行
  - **压缩算法**: 将内存中清除后导致的碎片化对象往内存堆的一端移动，解决 **内存的碎片化**

## 内存泄露

- 意外的**全局变量**: 无法被回收
- **定时器**: 未被正确关闭，导致所引用的外部变量无法被释放
- **事件监听**: 没有正确销毁 (低版本浏览器可能出现)
- **闭包**: 会导致父级中的变量无法被释放
- **dom 引用**: dom 元素被删除时，内存中的引用未被正确清空

可用 chrome 中的 timeline 进行内存标记，可视化查看内存的变化情况，找出异常点。


参考
[How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)