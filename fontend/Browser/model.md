# 浏览器模型

## windows 窗体

### location 对象

location.href-- 返回或设置当前文档的 URL
location.search -- 返回 URL 中的查询字符串部分。例如 https://www.drex.wang/drex?id=5&name=drex 返回包括(?)后面的内容?id=5&name=drex
location.hash -- 返回 URL#后面的内容，如果没有#，返回空
location.host -- 返回 URL 中的域名部分，例如 www.drex.wang
location.hostname -- 返回 URL 中的主域名部分，例如 drex.wang
location.pathname -- 返回 URL 的域名后的部分。例如 https://drex.wang/xhtml/ 返回/xhtml/
location.port -- 返回 URL 中的端口部分。例如 https://drex.wang:8080/xhtml/ 返回 8080
location.protocol -- 返回 URL 中的协议部分。例如 https://drex.wang:8080/xhtml/ 返回(//)前面的内容 http:
location.assign -- 设置当前文档的 URL
location.replace() -- 设置当前文档的 URL，并且在 history 对象的地址列表中移除这个 URL location.replace(url);
location.reload() -- 重载当前页面

### history 对象

- history.go() -- 前进或后退指定的页面数 history.go(num);
- history.back() -- 后退一页
- history.forward() -- 前进一页

### Navigator 对象

- navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
- navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

### Performance 性能

- performance.getEntries()
```js
// 获取 performance 数据
var performance = {
  // memory 是非标准属性，只在 Chrome 有
  memory: {
    usedJSHeapSize: 16100000, // JS 对象（包括V8引擎内部对象）占用的内存，一定小于 totalJSHeapSize
    totalJSHeapSize: 35100000, // 可使用的内存
    jsHeapSizeLimit: 793000000, // 内存大小限制
  },

  //  页面来源
  navigation: {
    redirectCount: 0, // 如果有重定向的话，页面通过几次重定向跳转而来
    type: 0,          // 0   即 TYPE_NAVIGATENEXT 正常进入的页面（非刷新、非重定向等）
                      // 1   即 TYPE_RELOAD       通过 window.location.reload() 刷新的页面
                      // 2   即 TYPE_BACK_FORWARD 通过浏览器的前进后退按钮进入的页面（历史记录）
                      // 255 即 TYPE_UNDEFINED    非以上方式进入的页面
  },

  timing: {
    // 在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等
    navigationStart: 1591112691935,

    // 前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0
    unloadEventStart: 0,

    // 和 unloadEventStart 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳
    unloadEventEnd: 0,

    // 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
    redirectStart: 0,

    // 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0
    redirectEnd: 0,

    // 浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前
    fetchStart: 1591112692155,

    // DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
    domainLookupStart: 1591112692155,

    // DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
    domainLookupEnd: 1591112692155,

    // HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等
    // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
    connectStart: 1591112692155,

    // HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等
    // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间
    // 注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
    connectEnd: 1591112692155,

    // HTTPS 连接开始的时间，如果不是安全连接，则值为 0
    secureConnectionStart: 0,

    // HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存
    // 连接错误重连时，这里显示的也是新建立连接的时间
    requestStart: 1591112692158,

    // HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
    responseStart: 1591112692686,

    // HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
    responseEnd: 1591112692687,

    // 开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件
    domLoading: 1591112692690,

    // 完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件
    // 注意只是 DOM 树解析完成，这时候并没有开始加载网页内的资源
    domInteractive: 1591112693093,

    // DOM 解析完成后，网页内资源加载开始的时间
    // 在 DOMContentLoaded 事件抛出前发生
    domContentLoadedEventStart: 1591112693093,

    // DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕）
    domContentLoadedEventEnd: 1591112693101,

    // DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件
    domComplete: 1591112693214,

    // load 事件发送给文档，也即 load 回调函数开始执行的时间
    // 注意如果没有绑定 load 事件，值为 0
    loadEventStart: 1591112693214,

    // load 事件的回调函数执行完毕的时间
    loadEventEnd: 1591112693215,
  },
};
```

## Web API

### Web Worker

Web Worker 作为浏览器多线程技术, 在页面内容不断丰富, 功能日趋复杂的当下, 成为缓解页面卡顿, 提升应用性能的可选方案.

### Service Worker

### Fullscreen API

`Fullscreen API` 让我们能够在 `Web app` 中启用全屏模式。它使你可以选择要在全屏模式下查看的元素。在 `Android` 手机中，它将删除浏览器窗口和 `Android` 顶部状态栏（显示网络状态，电池状态等的地方）。


[Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API)
[Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)
[Web Worker 文献综述](https://mp.weixin.qq.com/s/MyRRIbn-UoruVD1dpvD-QQ)
[参考网站](https://juejin.im/post/5ee8c60ef265da76ed486e20?utm_source=gold_browser_extension#heading-1)

