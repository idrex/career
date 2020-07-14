# JS 相关方法实现

## JS 相关方法实现

### 组转化为树状数据结构

```js
// 入参格式参考：
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 },
];

/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
function buildTree(arr) {
  /**
   * 此处写代码逻辑
   */
  if (!Array.isArray(arr)) {
    return [];
  }
  const res = [];
  const map = {};
  arr.forEach((item) => {
    map[item.id] = item;
  });
  arr.forEach((item) => {
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      if (item.parentId) {
        console.log(item.id + "is error");
      } else {
        return res.push(item);
      }
    }
  });
}
```

### 时间和工作调度

// [ > … ] 表示调用函数后的打印内容

// arrange('William');
// > William is notified

// arrange('William').wait(5).do('commit');
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push');
// 等待 5 秒
// > Start to push
// > William is notified

```js
class Task {
  constructor(name) {
    this.list = [`> ${name} is notified`];
    this.isWait = false;
    setTimeout(() => {
      !this.isWait && this.printTask(this.list);
    }, 0);
  }
  wait(time) {
    this.isWait = true;
    this.list.push(`等待  ${time}  秒`);
    setTimeout(() => {
      this.printTask(this.list);
    }, time);
    return this;
  }
  waitFirst(time) {
    this.isWait = true;
    setTimeout(() => {
      this.list.push(`等待  ${time}  秒`);
      this.printTask(this.list.reverse());
    }, time);
    return this;
  }
  printTask(list) {
    list.forEach((item) => {
      console.log(item);
    });
  }
  do(event) {
    this.list.push(`> Start  to ${event}`);
  }
}

function arrange(name) {
  const task = new Task(name);
  return task;
}
```

### 对 url 中的 query 部分做拆解

```js
// 入参格式参考：
const url = "http://drex.wang/?a=1&b=2&c=xx&d#hash";
// 出参格式参考：
const result = { a: "1", b: "2", c: "xx", d: "" };

export function querySearch(url) {
  /**
   * 此处写代码逻辑
   */
  let result = {};
  if (url.indexOf("?") !== -1) {
    let arr = url.split("?");
    let querys = arr[1].split("#")[0].split("&");
    for (let i = 0; i < querys.length; i++) {
      let query = querys[i].split("=");
      result[query[0]] = query[1] ? query[1] : "";
    }
    return result;
  } else {
    return result;
  }
}
```

### 实现 findFibonacci 函数

```js
// 斐波那契数列：一个递增的正整数数列，从第三位起，每个数字都是前两位数字之和，不一定要从 1 开始
// 入参格式参考：
const inputArr = [13, 9, 3, 8, 5, 25, 31, 11, 21];

// 出参格式参考：
const sequence = [3, 5, 8, 13, 21];
var findFibonacci = function(A) {
  let Amap = new Map();
  let n = A.length;
  // 先进行排序
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    Amap.set(A[i], i);
  }

  // from 是为了后面找出最大长度数组做的备忘录
  let helper = new Array(A.length).fill(0).map((item) =>
    new Array(A.length).fill(0).map(() => ({
      len: 2,
      from: [0, 0],
      value: 0,
    }))
  );
  let max = 0;
  let finalPath = [0, 0];
  let finalValue = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = A[j] - A[i];
      if (Amap.has(diff) && Amap.get(diff) < i) {
        // 动态规划条件
        if (helper[Amap.get(diff)][i].len + 1 > helper[i][j].len) {
          helper[i][j].len = helper[Amap.get(diff)][i].len + 1;
          helper[i][j].from = [Amap.get(diff), i];
          helper[i][j].value = A[j];
        } else {
          helper[i][j].len = helper[i][j].len;
          helper[i][j].value = A[j];
        }
      }
      if (helper[i][j].len > max) {
        max = helper[i][j].len;
        // 历史记录 从哪里过来
        finalPath = helper[i][j].from;
        // 最大长度节点的最终值
        finalValue = A[j];
      }
    }
  }
  console.log(max, finalPath);
  let result = [];
  // 寻找历史数据
  result.unshift(finalValue);
  while (finalPath[0] !== 0 || finalPath[1] !== 0) {
    result.unshift(A[finalPath[1]]);
    finalPath = helper[finalPath[0]][finalPath[1]].from;
  }
  result.unshift(result[1] - result[0]);
  return result;

  return max > 2 ? max : 0;
};
```

### MVVM 中双向绑定实现

实现一个简单的 DOM-JS数据绑定方案，要求在 JS 中改变变量数据后 DOM 视图会自动更新

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>DOM-JS数据绑定方案</title>
</head>
<body>
  <div id="app">
    <h1 v-text="title"></h1>
    <p>当前时间：<span v-text="time"></span></p>
  </div>
  <script>
    function ViewBind({ el = 'body', data = {}} = {}) {
      // TODO，请在此书写代码
    }

    /**
     * step: 1
     * 调用方式类似 Vue 初始化，
     * el 代表根元素，data 中的字段会自动和 DOM 中 v-text 属性对应元素内容绑定
     **/
    const app = new ViewBind({
      el: '#app',
      data: {
        title: '这是标题',
        time: +new Date()
      }
    })
    /**
     * step: 2
     * 初始化之后页面#app显示效果如下：
      <div id="app">
        <h1 v-text="title">这是标题</h1>
        <p>当前时间戳：<span v-text="time">1522070099060</span></p>
      </div>
     * 类似于 Vue，初始化之后 app 内部有一个 data 对象，
     * 通过修改 data 对象的属性来间接修改 DOM 中挂载了对应 v-text 属性的元素内容
     **/
    setInterval(() => {
      // 定时修改页面上<span v-text="time">元素中的内容
      app.data.time = +new Date()
    }, 1000)

    /**
     * step3: 请实现上述 ViewBind 方法
     * 提示：可参考 Vue 中响应式数据绑定和指令的实现原理
     **/
  </script>
</body>
</html>
```
