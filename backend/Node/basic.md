# Node 基础

## 简介

`Node` 拓展了 `JavaScript` 的边界，使 `JavaScript` 在服务端大放异彩。

### 特点

- 异步 `I/O`: 减少同步调用耗时问题
- 事件和回调函数: 轻量级、松耦合、只关注事务点等优势
- 单线程: 不需要处理多线程状态同步问题，减少线程上下文交换带来的性能开销，缺点：应用的健壮性值得考验
- 跨平台: 通过 `libuv` 实现跨平台

### 应用

- `I/O` 密集型应用: 利用事件循环的处理能力，资源占用极少
- 并行 `I/O`: 采用并行请求，加速 `Web` 渲染速度
- 云计算服务: 底资源占用，高性能的特点带来的开发优势
- 工具类应用: 前端构建打包工具 `Webpack`，`Rollup` 等

## 注意

- `Node` 的单线程指 `JavaScript` 执行在单线程中，内部完成 `I/O` 任务另有线程池

## 模块

### 基本模块

#### fs 文件系统模块

`Node.js` 内置的 `fs` 模块就是文件系统模块，负责读写文件，同时提供了异步和同步的方法。

由于 `Node` 环境执行的 `JavaScript` 代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为 `JavaScript` 只有一个执行线程。

```js
const fs = require("fs");
// 同步读文件
var data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

// 异步读文件
fs.readFile("file.txt", "utf-8", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 写文件
var data = "Hello, Node.js";
fs.writeFile("output.txt", data, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("ok.");
  }
});

// 获取文件或目录的详细信息
fs.stat("file.txt", function(err, stat) {
  if (err) {
    console.log(err);
  } else {
    // 是否是文件:
    console.log("isFile: " + stat.isFile());
    // 是否是目录:
    console.log("isDirectory: " + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log("size: " + stat.size);
      // 创建时间, Date对象:
      console.log("birth time: " + stat.birthtime);
      // 修改时间, Date对象:
      console.log("modified time: " + stat.mtime);
    }
  }
});
```

#### path 路径模块

```js
const path = require("path");

let str = "/root/a/b/index.html";
console.log(path.dirname(str)); // 路径
// /root/a/b
console.log(path.extname(str)); // 后缀名
// .html
console.log(path.basename(str)); // 文件名
// index.html

// path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
let pathOne = path.resolve("rooot/a/b", "../c", "d", "..", "e");

// 一般用来打印绝对路径，就像下面这样，其中 __dirname 指的就是当前目录
let pathTwo = path.resolve(__dirname, "build"); // 这个用法很常见，你应该在 webpack 中有见过

console.log(pathOne, pathTwo, __dirname);
// pathOne  =>  /Users/lgq/Desktop/node/rooot/a/c/e
// pathTwo  =>  /Users/lgq/Desktop/node/build
// __dirname  =>  /Users/lgq/Desktop/node
```

#### url 网址模块

```js
const url = require("url");

let site = "http://www.xr.com/a/b/index.html?a=1&b=2";
let { pathname, query } = url.parse(site, true); // url.parse() 解析网址，true 的意思是把参数解析成对象

console.log(pathname, query);
// /a/b/index.html  { a: '1', b: '2' }
```

#### http 服务模块

```js
const http = require("http");

// 创建http server，并传入回调函数:
const server = http.createServer(function(request, response) {
  // 回调函数接收request和response对象,
  // 获得HTTP请求的method和url:
  console.log(request.method + ": " + request.url);
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  response.writeHead(200, { "Content-Type": "text/html" });
  // 将HTTP响应的HTML内容写入response:
  response.end("<h1>Hello world!</h1>");
});

// 让服务器监听8080端口:
server.listen(8080);

console.log("Server is running at http://127.0.0.1:8080/");
```

#### stream 流模块

流是一种抽象的数据结构，比如从文件读取数据时，可以打开一个文件流，然后从文件流中不断地读取数据。有些流用来写入数据，比如向文件写入数据时，只需要把数据不断地往文件流中写进去就可以了。

在 `Node.js` 中，流也是一个对象，我们只需要响应流的事件就可以了：`data` 事件表示流的数据已经可以读取了，`end` 事件表示这个流已经到末尾了，没有数据可以读取了，`error` 事件表示出错了。

流的类型

- 内置：许多核心模块都实现了流接口，如 fs.createReadStream
- HTTP：处理网络技术的流
- - 解释器：第三方模块 XML、JSON 解释器
- 浏览器：Node 流可以被拓展使用在浏览器
- Audio：流接口的声音模块
- RPC（远程调用）：通过网络发送流是进程间通信的有效方式
- 测试：使用流的测试库

```js
const fs = require("fs");

// 读取流：fs.createReadStream();
// 写入流：fs.createWriteStream();
let rs = fs.createReadStream("file.txt"); // 要读取的文件
let ws = fs.createWriteStream("output.txt"); // 输出的文件

rs.pipe(ws); // 用 pipe 将 rs 和 ws 衔接起来，将读取流的数据传到输出流（就是这么简单的一句话就能搞定）

rs.on("error", (err) => {
  console.log(err);
});
ws.on("finish", () => {
  console.log("成功");
});
```

#### crypto 加解密模块

```js
const crypto = require("crypto");

function aesEncrypt(data, key = "key") {
  const cipher = crypto.createCipher("aes192", key);
  let crypted = cipher.update(data, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function aesDecrypt(encrypted, key = "key") {
  const decipher = crypto.createDecipher("aes192", key);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
```

#### child_process 子进程

- `Node`
  - fork：想将一个 `Node` 进程作为一个独立的进程来运行的时候使用，是的计算处理和文件描述器脱离 `Node` 主进程
- 非 `Node`
  - spawn：处理一些会有很多子进程 `I/O` 时、进程会有大量输出时使用
  - execFile：只需执行一个外部程序的时候使用，执行速度快，处理用户输入相对安全
  - exec：想直接访问线程的 `shell` 命令时使用，一定要注意用户输入
- 3个同步方法：execSync、execFileSync、spawnSync

## 异步编程
