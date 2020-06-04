# Node 事件循环

## Node 中事件循环阶段解析

下面是事件循环不同阶段的示意图：

```bash
   ┌───────────────────────┐
┌─>│        timers         │<————— 执行 setTimeout()、setInterval() 的回调
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     pending callbacks │<————— 执行由上一个 Tick 延迟下来的 I/O 回调（待完善，可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     idle, prepare     │<————— 内部调用（可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|             |                   ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │ - (执行几乎所有的回调，除了 close callbacks 以及 timers 调度的回调和 setImmediate() 调度的回调，在恰当的时机将会阻塞在此阶段)
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│             |                   |               |
|             |                   └───────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|  ┌──────────┴────────────┐
│  │        check          │<————— setImmediate() 的回调将会在这个阶段执行
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
└──┤    close callbacks    │<————— socket.on('close', ...)
   └───────────────────────┘
```

对比浏览器
想理解整个 loop 的过程，我们可以参照浏览器的 event loop，因为浏览器的比较简单，如下：

```bash
   ┌───────────────────────┐
┌─>│        timers         │<————— 执行一个 MacroTask Queue 的回调
│  └──────────┬────────────┘
|             |<-- 执行所有 MicroTask Queue 的回调
| ────────────┘
```

其实 nodejs 与浏览器的区别，就是 nodejs 的 MacroTask 分好几种，而这好几种又有不同的 task queue，而不同的 task queue 又有顺序区别，而 MicroTask 是穿插在每一种【注意不是每一个！】MacroTask 之间的。

其实图中已经画的很明白：
- setTimeout/setInterval 属于 timers 类型；
- setImmediate 属于 check 类型；
- socket 的 close 事件属于 close callbacks 类型；
- 其他 MacroTask 都属于 poll 类型。
- process.nextTick 本质上属于 MicroTask，但是它先于所有其他 MicroTask 执行；
- 所有 MicroTask 的执行时机，是不同类型 MacroTask 切换的时候。
- idle/prepare 仅供内部调用，我们可以忽略。
- pending callbacks 不太常见，我们也可以忽略。

所以我们可以按照浏览器的经验得出一个结论：

> 先执行所有类型为 timers 的 MacroTask，然后执行所有的 MicroTask（注意 NextTick 要优先哦）；
> 进入 poll 阶段，执行几乎所有 MacroTask，然后执行所有的 MicroTask；
> 再执行所有类型为 check 的 MacroTask，然后执行所有的 MicroTask；
> 再执行所有类型为 close callbacks 的 MacroTask，然后执行所有的 MicroTask；
> 至此，完成一个 Tick，回到 timers 阶段；
> ……
> 如此反复，无穷无尽……

## 关于 setTimeout 和 setImmediate

代码重现，我们会发现 setTimeout 和 setImmediate 在 Node 环境下执行是靠“随缘法则”的。

比如说下面这段代码：

```js
setTimeout(() => {
  console.log("setTimeout");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});

// 执行的结果是这样子的：
setImmediate
setTimeout
// 再次执行
setTimeout
setImmediate
```

为什么会这样子呢？

这里我们要根据前面的那个事件循环不同阶段的图解来说明一下：

首先进入的是 `timers` 阶段，如果我们的机器性能一般，那么进入 `timers` 阶段，一毫秒已经过去了（`setTimeout(fn, 0)` 等价于 `setTimeout(fn, 1)`），那么 setTimeout 的回调会首先执行。

如果没有到一毫秒，那么在 timers 阶段的时候，下限时间没到，setTimeout 回调不执行，事件循环来到了 poll 阶段，这个时候队列为空，此时有代码被 setImmediate()，于是先执行了 setImmediate()的回调函数，之后在下一个事件循环再执行 setTimemout 的回调函数。

而我们在执行代码的时候，进入 timers 的时间延迟其实是随机的，并不是确定的，所以会出现两个函数执行顺序随机的情况。

那我们再来看一段代码：

```js
var fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
```

这里我们就会发现，setImmediate 永远先于 setTimeout 执行。

原因如下：

fs.readFile 的回调是在 poll 阶段执行的，当其回调执行完毕之后，poll 队列为空，而 setTimeout 入了 timers 的队列，此时有代码被 setImmediate()，于是事件循环先进入 check 阶段执行回调，之后在下一个事件循环再在 timers 阶段中执行有效回调。

同样的，这段代码也是一样的道理：

```js
setTimeout(() => {
  setImmediate(() => {
    console.log("setImmediate");
  });
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
}, 0);
```

以上的代码在 timers 阶段执行外部的 setTimeout 回调后，内层的 setTimeout 和 setImmediate 入队，之后事件循环继续往后面的阶段走，走到 poll 阶段的时候发现队列为空，此时有代码被 setImmedate()，所以直接进入 check 阶段执行响应回调（注意这里没有去检测 timers 队列中是否有成员到达下限事件，因为 setImmediate()优先）。之后在第二个事件循环的 timers 阶段中再去执行相应的回调。

综上，我们可以总结：

> 如果两者都在主模块中调用，那么执行先后取决于进程性能，也就是随机。
> 如果两者都不在主模块调用（被一个异步操作包裹），那么 setImmediate 的回调永远先执行。

## process.nextTick() and Promise

对于这两个，我们可以把它们理解成一个微任务。也就是说，它其实不属于事件循环的一部分。

那么他们是在什么时候执行呢？

不管在什么地方调用，他们都会在其所处的事件循环最后，事件循环进入下一个循环的阶段前执行。

举个?：

```js
setTimeout(() => {
  console.log("timeout0");
  process.nextTick(() => {
    console.log("nextTick1");
    process.nextTick(() => {
      console.log("nextTick2");
    });
  });
  process.nextTick(() => {
    console.log("nextTick3");
  });
  console.log("sync");
  setTimeout(() => {
    console.log("timeout2");
  }, 0);
}, 0);
```

结果是：

再解释一下：

timers 阶段执行外层 setTimeout 的回调，遇到同步代码先执行，也就有 timeout0、sync 的输出。遇到 process.nextTick 后入微任务队列，依次 nextTick1、nextTick3、nextTick2 入队后出队输出。之后，在下一个事件循环的 timers 阶段，执行 setTimeout 回调输出 timeout2。

最后
下面给出两段代码，如果能够理解其执行顺序说明你已经理解透彻。

代码 1：

```js
setImmediate(function() {
  console.log("setImmediate");
  setImmediate(function() {
    console.log("嵌套setImmediate");
  });
  process.nextTick(function() {
    console.log("nextTick");
  });
});

// setImmediate
// nextTick
// 嵌套setImmediate
```

解析：事件循环 check 阶段执行回调函数输出 setImmediate，之后输出 nextTick。嵌套的 setImmediate 在下一个事件循环的 check 阶段执行回调输出嵌套的 setImmediate。

代码 2：

```js
var fs = require("fs");

function someAsyncOperation(callback) {
  // 假设这个任务要消耗 95ms
  fs.readFile("/path/to/file", callback);
}

var timeoutScheduled = Date.now();

setTimeout(function() {
  var delay = Date.now() - timeoutScheduled;

  console.log(delay + "ms have passed since I was scheduled");
}, 100);

// someAsyncOperation要消耗 95 ms 才能完成
someAsyncOperation(function() {
  var startCallback = Date.now();

  // 消耗 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

解析：事件循环进入 poll 阶段发现队列为空，并且没有代码被 setImmediate()。于是在 poll 阶段等待 timers 下限时间到达。当等到 95ms 时，fs.readFile 首先执行了，它的回调被添加进 poll 队列并同步执行，耗时 10ms。此时总共时间累积 105ms。等到 poll 队列为空的时候，事件循环会查看最近到达的 timer 的下限时间，发现已经到达，再回到 timers 阶段，执行 timer 的回调。


## poll 阶段
poll 阶段主要有两个功能：

- 获取新的 I/O 事件，并执行这些 I/O 的回调，之后适当的条件下 node 将阻塞在这里
- 当有 immediate 或已超时的 timers，执行它们的回调

poll 阶段用于获取并执行几乎所有 I/O 事件回调，是使得 node event loop 得以无限循环下去的重要阶段。所以它的首要任务就是同步执行所有 poll queue 中的所有 callbacks 直到 queue 被清空或者已执行的 callbacks 达到一定上限，然后结束 poll 阶段，接下来会有几种情况：

1. setImmediate 的 queue 不为空，则进入 check 阶段，然后是 close callbacks 阶段……
2. setImmediate 的 queue 为空，但是 timers 的 queue 不为空，则直接进入 timers 阶段，然后又来到 poll 阶段……
3. setImmediate 的 queue 为空，timers 的 queue 也为空，此时会阻塞在这里，因为无事可做，也确实没有循环下去的必要


参考 [nodejs中的event loop](https://www.jianshu.com/p/deedcbf68880)
参考 [Node的事件循环机制](https://segmentfault.com/a/1190000013102056?utm_source=tag-newest)