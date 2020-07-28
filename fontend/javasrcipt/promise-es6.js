class MyPromise {
  consrtuctor(task) {
    this.status = 'Pending';// 等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）
    this.resolveData = undefined;// resolve结果
    this.rejectData = undefined;// reject结果
    this.onResolvedList = [];// promise状态变为resolve时的回调函数集，可能有多个
    this.onRejectedList = [];// promise状态变为reject时的回调函数集，可能有多个
    // 执行成功
    this.onResolved = (value) => {
      console.log('onResolved')
      if (this.status === 'Pending') {
        this.status = 'Fulfilled';
        this.resolveData = value;
        this.onResolvedList.forEach(fn => {
          fn(this.resolveData)
        })
      }
    }
    // 执行失败
    this.onRejected = (err) => {
      console.log('onRejected')
      if (this.status === 'Pending') {
        this.status = 'Rejected';
        this.rejectData = err;
        this.onRejectedList.forEach(fn => {
          fn(this.rejectData)
        })
      }
    }
    // promise解析, 根据then 返回数据类型不同封装不同的promise返回，以便实现then的链式调用及Promise的thenable特性 
    this.resolvePromise = (data, resolve, reject) => {
      console.log('resolvePromise')
      if(data instanceof Promise) {
        // then return 的数据是一个promise
        if (data.status === 'Pending') {
          data.then(val => {
            this.resolvePromise(val, resolve, reject)
          }, reject)
        } else if (data.status === 'Fulfilled') {
          resolve(data.resolveData)
        } else {
          reject(data.rejectData)
        }
      } else if (data !== null && data instanceof Object) {
        // then return的是一个对象,若对象具有then方法，则可使用此方法作为新的then
        try {
          let then = data.then;
          if (then instanceof Function) {
            then.call(data, val => {
              this.resolvePromise(val, resolve, reject)
            }, rejce)
          }
        } catch (error) {
          reject(error)
        }
      } else {
        // then return 的是基本数据或undefined
        resolve(data)
      }
    }
    // 执行
    try {
      task(this.onResolved.bind(this), this.onRejected.bind(this))
    } catch (err) {
      this.onRejected(err)
    }
  }
  then(onFulfilled, onRejected) {
    console.log('then')
    let promise;
    if (this.status === 'Pending') {
      // pending状态下将传入then的函数加入promise对应的回调队列
      promise = new MyPromise((resolve, reject) => {
        this.onFulfilledList.push(() => {
          if (!(onFulfilled instanceof Function)) {
            // 传入then的参数不是函数则忽略
            resolve(this.resolveData)
          } else {
            this.resolvePromise(onFulfilled(this.resolveData), resolve, reject)
          }
        });
        this.onRejectedList.push(() => {
          if (!(onRejected instanceof Function)) {
            reject(this.rejectData)
          } else {
            this.resolvePromise(onRejected(this.rejectData), resolve, reject)
          }
        })
      })
    } else if (this.status === 'Fulfilled') {
      // fulfilled状态下以promise的resolveData为参数执行传入then的
      promise = new MyPromise((resolve, reject) => {
        if(!(onFulfilled instanceof Function)) {
          resolve(this.resolveData)
        } else {
          this.resolvePromise(onFulfilled(this.resolveData), resolve, reject)
        }
      })
    } else {
      // rejected状态类似fulfilled状态
      promise = new MyPromise((resolve, reject) => {
        if (!(onRejected instanceof Function)) {
          reject(this.rejectData)
        } else {
          this.resolvePromise(onRejected(this.rejectData), resolve, reject)
        }
      })
    }
    return promise;
  }
  catch(rejectFn) {
    console.log('catch')
    //不是函数直接返回
    if(!(rejectFn instanceof Function)) return;
    if (this.status === 'Pending') {
      // pending状态下将传入catch的函数加入promise对应的回调队列
      this.onRejectedList.push(() => {
        if (this.rejectData !== null) rejectFn(this.rejectData)
      })
    } else if (this.status === 'Rejected') {
      // rejected状态返回报错
      if (this.rejectData !== null) rejectFn(this.rejectData)
    }
  }
  finally(fn) {
    fn()
  }
  static resolve(value) {
    console.log('resolve')
    if(value instanceof MyPromise) {
      return value
    }
    return new MyPromise(resolve => {
      resolve(value)
    })
  }
  static reject() {
    console.log('reject')
    if(value instanceof MyPromise) {
      return value
    }
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }
  // 并发执行，返回全部正确结果，或错误异常
  static all(promiseArray) {
    console.log('all')
    if(!(promiseArray instanceof Array)) {
      throw new TypeError("parameter must be array")
    }
    const result = [];// 结果
    let i = 0;
    return new MyPromise((resolve, reject) => {
      if (promiseArray.length === 0) {
        resolve(result)
      } else {
        promiseArray.forEach((item, index) => {
          if(item instanceof MyPromise) {
            item.then(res => {
              result[index] = res;
              if (promiseArray.length === index + 1) {
                resolve(result)
              }
            }, err => {
              reject(err)
            })
          } else {
            result[index] = item
            if (promiseArray.length === index + 1) {
              resolve(result)
            }
          }
        })
      }
    })
  }
  // 抢占执行，返回优先执行的结果
  static race(promiseArray) {
    console.log('race')
    if(!(promiseArray instanceof Array)) {
      throw new TypeError("parameter must be array")
    }
    let flag = false;
    return new MyPromise((resolve, reject) => {
      if (promiseArray.length === 0) {
        resolve(result)
      } else {
        promiseArray.forEach((item) => {
          if(item instanceof MyPromise) {
            item.then(res => {
              if(!flag) {
                flag = true
                resolve(res)
              }
            }, err => {
              if(!flag) {
                flag = true
                reject(err)
              }
            })
          } else {
            if(!flag) {
              flag = true
              resolve(item)
            }
          }
        })
      }
    })
  }
  // 返回全部结果
  static allSettled() {}
}


const promise = new MyPromise(function(resolve, reject) {
  // 同步调用
  console.log('同步调用');
  resolve();
});
console.log('')

MyPromise.resolve();
MyPromise.resolve('123123');
MyPromise.resolve(promise);

MyPromise.all([promise, '', '123123'])

promise.then(function(value) {
  // success
  console.log('success')
}, function(error) {
  // failure
  console.log('error')
});

// 参考 https://www.jianshu.com/p/1eea8ce8c7a5