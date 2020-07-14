---
title: ES6 & ES Next
order: 3
group:
  order: 5
---

## ES6 & ES Next

由于 Babel 的强大和普及，现在 ES6/ES7 基本上已经是现代化开发的必备了。通过新的语法糖，能让代码整体更为简洁和易读。

- 声明 - `let / const`: 块级作用域、不存在变量提升、暂时性死区、不允许重复声明 - `const`: 声明常量，无法修改
- 解构赋值
- `class / extend`: 类声明与继承

- 异步解决方案:

- `Promise`的使用与实现

- `generator`:
  - `yield`: 暂停代码
  - `next()`: 继续执行代码

```js
function* helloWorld() {
  yield "hello";
  yield "world";
  return "ending";
}

const generator = helloWorld();

generator.next(); // { value: 'hello', done: false }

generator.next(); // { value: 'world', done: false }

generator.next(); // { value: 'ending', done: true }

generator.next(); // { value: undefined, done: true }
```

- `await / async`: 是`generator`的语法糖， babel 中是基于`promise`实现。

```js
async function getUserByAsync() {
  let user = await fetchUser();
  return user;
}

const user = await getUserByAsync();
console.log(user);
```

## Set、WeakSet、Map及WeakMap

Set 和 Map 主要的应用场景在于 数据重组 和 数据储存
Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构

### 集合（Set）

## Symbol

## Proxy

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

### 使用

### 模拟

## Class

## Decorator

## Gennrator && Async Await

[参考](https://juejin.im/post/5d2c814c6fb9a07ecd3d8e43)

## Promise 标准

- Promise 规范有很多，如 Promise/A，Promise/B，Promise/D 以及 Promise/A 的升级版 Promise/A+。ES6 中采用了 Promise/A+ 规范。

> 英文版规范: [Promises/A+规范](https://promisesaplus.com/)

> 中文版规范: [Promises/A+规范(中文)](http://link.zhihu.com/?target=http%3A//www.ituring.com.cn/article/66566)

- Promise 标准解读

1.  一个 promise 的当前状态只能是 pending、fulfilled 和 rejected 三种之一。状态改变只能是 pending 到 fulfilled 或者 pending 到 rejected。状态改变不可逆。
2.  promise 的 then 方法接收两个可选参数，表示该 promise 状态改变时的回调(promise.then(onFulfilled, onRejected))。then 方法返回一个 promise。then 方法可以被同一个 promise 调用多次。

---

### 实现 Promise

> Promise 标准仅描述了 then 方法的行为，未对 catch、all、race 方法进行描述，也未规范如何创建一个 Promise 对象。ES6 中 Promise 提供了以下 API。

1. 构造函数

```javascript
function Promise(resolver) {}
```

2. 原型方法

```javascript
Promise.prototype.then = function() {};
Promise.prototype.catch = function() {};
```

3. 静态方法

```javascript
Promise.resolve = function() {};
Promise.reject = function() {};
Promise.all = function() {};
Promise.race = function() {};
```

### 构造函数

- Promise/A+标准并没有指定如何构造一个 Promise 对象，我们以 ES6 原生 Promise 模块里通过构造函数创建 Promise 对象的方式实现 Promise 构造函数。ES6 中通过构造函数创建 Promise 对象的简单用法如下：

```javascript
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
promise.then((a) => alert(a));
promise.then((a) => alert(a + 1));
```

> 构造函数用法总结：

1. 构造函数接收一个 executor 立即执行函数
2. executor 立即执行函数接收一个 resolve 函数
3. promise 对象的 then 方法绑定状态变为 fulfilled 时的回调
4. resolve 函数被调用时会触发 then 方法中的回调

- 构造函数的简单实现

```javascript
function Promise(executor) {
  var self = this;
  self.status = "pending"; //promise当前的状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  //promise状态变为resolve时的回调函数集，可能有多个
  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.data = value;
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value);
      }
    }
  }
  executor(resolve);
}
Promise.prototype.then = function(resolve) {
  this.onResolvedCallback.push(resolve);
};
```

- executor 自执行函数接收的第二个参数为 reject 函数且 reject 函数在 promise 对象状态变为 rejected 时或 executor 抛出异常时触发。

```javascript
function Promise(executor) {
  var self = this;
  self.status = "pending"; //promise当前的状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  //promise状态变为resolve时的回调函数集，可能有多个
  self.onRejectedCallback = [];
  //promise状态变为reject时的回调函数集，可能有多个
  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.data = value;
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value);
      }
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.data = reason;
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason);
      }
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function(onResolve, onReject) {
  this.onResolvedCallback.push(onResolve);
  this.onRejectedCallback.push(onReject);
};
```

> 总结：
> ①executor 函数作为实参在创建 Promise 对象时传入 Promise 构造函数。
> ②resolve 和 reject 函数作为实参传入 executor 函数。
> ③value 作为实参传入 resolve 和 reject 函数。

- 如果 executor 自执行函数中的 resolve 函数立即触发时，发现 Promise 失效，例如：

```javascript
const promise = new Promise((resolve) => {
  resolve(1);
});
promise.then((a) => alert(a));
```

> 解决办法：需要将 promise 的 resolve 和 reject 异步执行。

```javascript
function resolve(value) {
  setTimeout(function() {
    if (self.status === "pending") {
      self.status = "resolved";
      self.data = value;
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value);
      }
    }
  });
}

function reject(reason) {
  setTimeout(function() {
    if (self.status === "pending") {
      self.status = "rejected";
      self.data = reason;
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason);
      }
    }
  });
}
```

### then 方法

- 在构造函数中的示例中，then 方法并没有返回一个 promise 对象，而 Promise/A+ 规范中规定 then 方法用来注册 promise 对象状态改变时的回调，且返回一个新的 promise 对象。
  - then 方法返回一个新的 promise 对象。
  - executor 自执行函数中的 resolve 参数调用时执行 then 方法的第一个回调函数 onResolved。
  - executor 自执行函数中的 reject 参数调用时执行 then 方法的第二个回调函数 onRejected。

```javascript
Promise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var promise2;
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function(value) {
          return value;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(reason) {
          throw reason;
        };
  //promise对象当前状态为resolved
  if (self.status === "resolved") {
    return (promise2 = new Promise(function(resolve, reject) {
      try {
        //调用onResolve回调函数
        var x = onResolved(self.data);
        //如果onResolve回调函数返回值为一个promise对象
        if (x instanceof Promise) {
          //将它的结果作为promise2的结果
          x.then(resolve, reject);
        } else {
          resolve(x); //执行promise2的onResolve回调
        }
      } catch (e) {
        reject(e); //执行promise2的onReject回调
      }
    }));
  }
  //promise对象当前状态为rejected
  if (self.status === "rejected") {
    return (promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        } else {
          resolve(x);
        }
      } catch (e) {
        reject(e);
      }
    }));
  }
  //promise对象当前状态为pending
  //此时并不能确定调用onResolved还是onRejected，需要等当前Promise状态确定。
  //所以需要将callBack放入promise1的回调数组中
  if (self.status === "pending") {
    return (promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};
```

- 参照 Promise/A+标准对 promise 进行改写

```javascript
function resolvePromise(promise2, x, resolve, reject) {
  var then;
  var thenCalledOrThrow = false;

  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise!"));
  }
  if (x instanceof Promise) {
    if (x.status === "pending") {
      //because x could resolved by a Promise Object
      x.then(function(v) {
        resolvePromise(promise2, v, resolve, reject);
      }, reject);
    } else {
      //but if it is resolved, it will never resolved by a Promise Object but a static value;
      x.then(resolve, reject);
    }
    return;
  }

  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      then = x.then; //because x.then could be a getter
      if (typeof then === "function") {
        then.call(
          x,
          function rs(y) {
            if (thenCalledOrThrow) return;
            thenCalledOrThrow = true;
            return resolvePromise(promise2, y, resolve, reject);
          },
          function rj(r) {
            if (thenCalledOrThrow) return;
            thenCalledOrThrow = true;
            return reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (thenCalledOrThrow) return;
      thenCalledOrThrow = true;
      return reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var promise2;
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function(v) {
          return v;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(r) {
          throw r;
        };

  if (self.status === "resolved") {
    return (promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        // 异步执行onResolved
        try {
          var x = onResolved(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.status === "rejected") {
    return (promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        // 异步执行onRejected
        try {
          var x = onRejected(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.status === "pending") {
    // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
    return (promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });
    }));
  }
};
```

### 完整代码

```javascript
var Promise = (function() {
  function Promise(resolver) {
    if (typeof resolver !== "function") {
      //resolver必须是函数
      throw new TypeError(
        "Promise resolver " + resolver + " is not a function"
      );
    }
    if (!(this instanceof Promise)) return new Promise(resolver);

    var self = this; //保存this
    self.callbacks = []; //保存onResolve和onReject函数集合
    self.status = "pending"; //当前状态

    function resolve(value) {
      setTimeout(function() {
        //异步调用
        if (self.status !== "pending") {
          return;
        }
        self.status = "resolved"; //修改状态
        self.data = value;

        for (var i = 0; i < self.callbacks.length; i++) {
          self.callbacks[i].onResolved(value);
        }
      });
    }

    function reject(reason) {
      setTimeout(function() {
        //异步调用
        if (self.status !== "pending") {
          return;
        }
        self.status = "rejected"; //修改状态
        self.data = reason;

        for (var i = 0; i < self.callbacks.length; i++) {
          self.callbacks[i].onRejected(reason);
        }
      });
    }

    try {
      resolver(resolve, reject); //执行resolver函数
    } catch (e) {
      reject(e);
    }
  }

  function resolvePromise(promise, x, resolve, reject) {
    var then;
    var thenCalledOrThrow = false;

    if (promise === x) {
      return reject(new TypeError("Chaining cycle detected for promise!"));
    }

    if (x !== null && (typeof x === "object" || typeof x === "function")) {
      try {
        then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            function rs(y) {
              if (thenCalledOrThrow) return;
              thenCalledOrThrow = true;
              return resolvePromise(promise, y, resolve, reject);
            },
            function rj(r) {
              if (thenCalledOrThrow) return;
              thenCalledOrThrow = true;
              return reject(r);
            }
          );
        } else {
          return resolve(x);
        }
      } catch (e) {
        if (thenCalledOrThrow) return;
        thenCalledOrThrow = true;
        return reject(e);
      }
    } else {
      return resolve(x);
    }
  }

  Promise.prototype.then = function(onResolved, onRejected) {
    //健壮性处理，处理点击穿透
    onResolved =
      typeof onResolved === "function"
        ? onResolved
        : function(v) {
            return v;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function(r) {
            throw r;
          };
    var self = this;
    var promise2;

    //promise状态为resolved
    if (self.status === "resolved") {
      return (promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
          try {
            //调用then方法的onResolved回调
            var x = onResolved(self.data);
            //根据x的值修改promise2的状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            //promise2状态变为rejected
            return reject(e);
          }
        });
      }));
    }

    //promise状态为rejected
    if (self.status === "rejected") {
      return (promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
          try {
            //调用then方法的onReject回调
            var x = onRejected(self.data);
            //根据x的值修改promise2的状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            //promise2状态变为rejected
            return reject(e);
          }
        });
      }));
    }

    //promise状态为pending
    //需要等待promise的状态改变
    if (self.status === "pending") {
      return (promise2 = new Promise(function(resolve, reject) {
        self.callbacks.push({
          onResolved: function(value) {
            try {
              //调用then方法的onResolved回调
              var x = onResolved(value);
              //根据x的值修改promise2的状态
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              //promise2状态变为rejected
              return reject(e);
            }
          },
          onRejected: function(reason) {
            try {
              //调用then方法的onResolved回调
              var x = onRejected(reason);
              //根据x的值修改promise2的状态
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              //promise2状态变为rejected
              return reject(e);
            }
          },
        });
      }));
    }
  };

  //获取当前Promise传递的值
  Promise.prototype.valueOf = function() {
    return this.data;
  };

  //由then方法实现catch方法
  Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
  };

  //finally方法
  Promise.prototype.finally = function(fn) {
    return this.then(
      function(v) {
        setTimeout(fn);
        return v;
      },
      function(r) {
        setTimeout(fn);
        throw r;
      }
    );
  };

  Promise.prototype.spread = function(fn, onRejected) {
    return this.then(function(values) {
      return fn.apply(null, values);
    }, onRejected);
  };

  Promise.prototype.inject = function(fn, onRejected) {
    return this.then(function(v) {
      return fn.apply(
        null,
        fn
          .toString()
          .match(/\((.*?)\)/)[1]
          .split(",")
          .map(function(key) {
            return v[key];
          })
      );
    }, onRejected);
  };

  Promise.prototype.delay = function(duration) {
    return this.then(
      function(value) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(value);
          }, duration);
        });
      },
      function(reason) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            reject(reason);
          }, duration);
        });
      }
    );
  };

  Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
      var resolvedCounter = 0;
      var promiseNum = promises.length;
      var resolvedValues = new Array(promiseNum);
      for (var i = 0; i < promiseNum; i++) {
        (function(i) {
          Promise.resolve(promises[i]).then(
            function(value) {
              resolvedCounter++;
              resolvedValues[i] = value;
              if (resolvedCounter == promiseNum) {
                return resolve(resolvedValues);
              }
            },
            function(reason) {
              return reject(reason);
            }
          );
        })(i);
      }
    });
  };

  Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
      for (var i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          function(value) {
            return resolve(value);
          },
          function(reason) {
            return reject(reason);
          }
        );
      }
    });
  };

  Promise.resolve = function(value) {
    var promise = new Promise(function(resolve, reject) {
      resolvePromise(promise, value, resolve, reject);
    });
    return promise;
  };

  Promise.reject = function(reason) {
    return new Promise(function(resolve, reject) {
      reject(reason);
    });
  };

  Promise.fcall = function(fn) {
    // 虽然fn可以接收到上一层then里传来的参数，但是其实是undefined，所以跟没有是一样的，因为resolve没参数啊
    return Promise.resolve().then(fn);
  };

  Promise.done = Promise.stop = function() {
    return new Promise(function() {});
  };

  Promise.deferred = Promise.defer = function() {
    var dfd = {};
    dfd.promise = new Promise(function(resolve, reject) {
      dfd.resolve = resolve;
      dfd.reject = reject;
    });
    return dfd;
  };

  try {
    // CommonJS compliance
    module.exports = Promise;
  } catch (e) {}

  return Promise;
})();
```
