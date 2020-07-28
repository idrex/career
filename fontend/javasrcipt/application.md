---
title: 基础应用
order: 2
group:
  order: 5
---

## 字符串(String)

### 静态方法

- `String.fromCharCode()`: 该方法的参数是一个或多个数值，代表 `Unicode` 码点，返回值是这些码点组成的字符串。

```js
String.fromCharCode(104, 101, 108, 108, 111) // "hello"
```

### 实例属性



## 对象(Object)

## 数组(array)

### 静态方法
- `Array.isArray(obj)`: 接收一个参数，返回一个布尔值，表示参数是否为数组

### 实例方法
- `valueOf()`: `arr.valueOf()` 返回 `arr` 本身
- `toString()`: `arr.toString()` 返回 `arr` 的字符串形式

#### 改变原数组

- `push(obj, [option])`: 末尾推入一个或多个选项，改变原数组， 返回数组长度
- `pop()`: 方法用于删除数组的最后一个元素，并返回该元素
- `unshift`: 头部推入和弹出，改变原数组，返回操作项
- `shift`: 头部推入和弹出，改变原数组，返回操作项

#### 原数组不变

- `map`: 遍历数组，返回回调返回值组成的新数组
- `forEach`: 无法`break`，可以用`try/catch`中`throw new Error`来停止
- `filter`: 过滤
- `some`: 有一项返回`true`，则整体为`true`
- `every`: 有一项返回`false`，则整体为`false`
- `join`: 通过指定连接符生成字符串
- `sort(fn) / reverse`: 排序与反转，改变原数组
- `concat`: 连接数组，不影响原数组， 浅拷贝
- `slice(start, end)`: 返回截断后的新数组，不改变原数组
- `splice(start, number, value...)`: 返回删除元素组成的数组，value 为插入项，改变原数组
- `indexOf / lastIndexOf(value, fromIndex)`: 查找数组项，返回对应的下标
- `reduce / reduceRight(fn(prev, cur)， defaultPrev)`: 两两执行，prev 为上次化简函数的`return`值，cur 为当前值(从第二项开始)

### 数组乱序：

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function() {
  return Math.random() - 0.5;
});
```

### 数组拆解: flat: [1,[2,3]] --> [1, 2, 3]

```js
Array.prototype.flat = function() {
  return this.toString()
    .split(",")
    .map((item) => +item);
};
```

### 数组去重

```js
[...new Set(array)]
Array.from(new Set(array))
```

### 数组扁平化

```js
[[1, 2], 3].flat(number || Infinity)
```

### 数组克隆

```js
arr2 = [...arr1]
arr1.concat(arr2)
Object.assign(arr1, arr2)
```