# 监控体系

在线上项目中,需要统计产品中用户行为和使用情况，从而可以从用户和产品的角度去了解用户群体，从而升级和迭代产品，使其更加贴近用户。用户行为数据可以通过前端数据监控的方式获得，除此之外，前端还需要实现性能监控和异常监控。性能监控包括首屏加载时间、白屏时间、http请求时间和http响应时间。异常监控包括前端脚本执行报错等。
实现前端监控有三个步骤：前端埋点和上报、数据处理和数据分析。

1. 数据监控
  - PV/UV:PV(page view)，即页面浏览量或点击量。UV:指访问某个站点或点击某条新闻的不同IP地址的人数
  - 用户在每一个页面的停留时间
  - 用户通过什么入口来访问该网页
  - 用户在相应的页面中触发的行为
2. 性能监控
  - 不同用户，不同机型和不同系统下的首屏加载时间
  - 白屏时间
  - http等请求的响应时间
  - 静态资源整体下载时间
  - 页面渲染时间
  - 页面交互动画完成时间
3. 异常监控
  - Javascript的异常监控
  - 样式丢失的异常监控

## 前端异常

### try...catch 可疑区监控

`try...catch` 只能捕获到同步的运行时错误，对于语法和异步错误无能为力，捕获不到。

### window.onerror

当`JS`运行时错误发生时，`window` 会触发一个 `ErrorEvent` 接口的 `error` 事件，并执行 `window.onerror()` 。

- 函数只有在返回 `true` 的时候，异常才不会向上抛出（浏览器接收后报红），否则即使是知道异常的发生控制台还是会显示 `Uncaught Error: xxxxx`
- 最好写在所有 `JS` 脚本的前面，否则有可能捕获不到错误
- 无法捕获语法错误

### window.addEventListener

当一项资源（如图片和脚本加载失败），加载资源的元素会触发一个`Event`接口的`error`事件，并执行该元素上的`onerror`处理函数。这些`error`事件不会向上冒泡到`window`， 不过（至少在 `Chrome` 中）能被单一的`window.addEventListener` 捕获。

对于全局的错误捕获，在现代浏览器中，倾向于只使用`window.addEventListener('error')`，`window.addEventListener('unhandledrejection')`就行了。如果需要考虑兼容性，需要加上`window.onerror`，三者同时使用，`window.addEventListener('error')`专门用来捕获资源加载错误。

### Promise Catch

我们知道，在 `promise` 中使用 `catch` 可以非常方便的捕获到异步 `error` 。

为了防止有漏掉的 `promise` 异常，建议在全局增加一个对 `unhandledrejection` 的监听，用来全局监听 `Uncaught Promise Error`。

### iframe 异常

对于 `iframe` 的异常捕获，我们还得借力 `window.onerror`

### Script error

一般情况，如果出现 `Script error` 这样的错误，基本上可以确定是跨域问题。这时候，是不会有其他太多辅助信息的，但是解决思路无非如下：跨源资源共享机制( `CORS` )：我们为 `script` 标签添加 `crossOrigin` 属性。

### 网页崩溃

1. 利用 `window` 对象的 `load` 和 `beforeunload` 事件实现了网页崩溃的监控。
2. 利用 `Service Worker` 有自己独立的工作线程，生命周期一般要比网页还要长，与网页区分开，网页崩溃了，`Service Worker` 一般情况下不会崩溃,可以通过 `navigator.serviceWorker.controller.postMessage API` 向掌管自己的 `SW` 发送消息

## 监控方案

### 数据上报

1. 通过 Ajax 发送数据


### 异常定位

参考：

[谈谈前端异常捕获](https://www.cnblogs.com/chenwenhao/p/12184733.html)

[前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)

[前端监控和前端埋点方案设计](https://segmentfault.com/a/1190000015864670)

[撸一个前端监控系统](https://segmentfault.com/a/1190000021663211)

[Webfunny 开源监控](http://www.webfunny.cn/home.html)

[web-monitoring](https://github.com/kisslove/web-monitoring)
