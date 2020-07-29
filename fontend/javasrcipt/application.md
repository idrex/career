---
title: 基础应用
order: 2
group:
  order: 5
---

## 字符串(String)

### 静态方法

- `String.fromCharCode([number, ...[number]])`: 该方法的参数是一个或多个数值，代表 `Unicode` 码点，返回值是这些码点组成的字符串。

```js
String.fromCharCode(); // ""
String.fromCharCode(97); // "a"
String.fromCharCode(104, 101, 108, 108, 111); // "hello"
```

### 实例属性

- `String.prototype.length`: 字符串实例的 `length` 属性返回字符串的长度。

```js
"abc".length; // 3
```

### 实例方法

- `String.prototype.charAt(number)`: `charAt` 方法返回指定位置的字符，参数是从 0 开始编号的位置。

```js
var s = new String("abc");
s.charAt(1); // "b"
s.charAt(s.length - 1); // "c"
s.charAt(1); // "b"
s[1]; // "b"
s.charAt(-1); // ""
s.charAt(3); // ""
```

- `String.prototype.charCodeAt(number: 0)`: `charCodeAt()` 方法返回字符串指定位置的 `Unicode` 码点（十进制表示），相当于`String.fromCharCode()`的逆操作。

```js
"abc".charCodeAt(); // 97
"abc".charCodeAt(1); // 98
"abc".charCodeAt(-1); // NaN
"abc".charCodeAt(4); // NaN
```

- `String.prototype.concat([string, ...[string]])`: `concat`方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

```js
var s1 = 1;
var s2 = 2;
var s3 = "3";
s1.concat(s2); // "12"
s1; // 1
s1.concat(s2, s3); // "123"
s1 + s2 + s3; // "33"
```

- `String.prototype.slice(start_index[, end_index])`: `slice()` 方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

```js
"JavaScript".slice(0, 4); // "Java"
"JavaScript".slice(4); // "Script"
"JavaScript".slice(-6); // "Script"
"JavaScript".slice(0, -6); // "Java"
"JavaScript".slice(-2, -1); // "p"
"JavaScript".slice(2, 1); // ""
```

- `String.prototype.substring(start_index[, end_index])`: `substring`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

- `String.prototype.substr(start_index[, string_length])`: `substr`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`和`substring`方法的作用相同。

```js
"JavaScript".substring(0, 4); // "Java"
"JavaScript".substring(4); // "Script"
// 如果第一个参数大于第二个参数，substring方法会自动更换两个参数的位置。
"JavaScript".substring(10, 4); // "Script"
// 如果参数是负数，substring方法会自动将负数转为0。
"JavaScript".substring(-3); // "JavaScript"
"JavaScript".substring(4, -3); // "Java"

"JavaScript".substr(4, 6); // "Script"
"JavaScript".substr(4); // "Script"
// 如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。
"JavaScript".substr(-6); // "Script"
"JavaScript".substr(4, -1); // ""
```

- `String.prototype.indexOf(string[, index])`: `indexOf`方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回-1，就表示不匹配。
- `String.prototype.lastIndexOf()`: `lastIndexOf` 从尾部开始匹配，同`indexOf`

```js
"hello world".indexOf("o"); // 4
"JavaScript".indexOf("script"); // -1
"hello world".indexOf("o", 6); // 7
"hello world".lastIndexOf("o"); // 7
"hello world".lastIndexOf("o", 6); // 4
```

- `String.prototype.trim()`: `trim`方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。

```js
"  hello world  ".trim(); // "hello world"
// 该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）。
"\r\nabc \t".trim(); // 'abc'
```

- `String.prototype.toLowerCase()`: `toLowerCase` 方法用于将一个字符串全部转为小写，
- `String.prototype.toUpperCase()`: `toUpperCase` 则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

```js
"Hello World".toLowerCase();
// "hello world"

"Hello World".toUpperCase();
// "HELLO WORLD"
```

- `String.prototype.match()`: `match`方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回`null`。
- `String.prototype.search()`: `search`方法的用法基本等同于`match`，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。

```js
"cat, bat, sat, fat".match("at"); // ["at"]
"cat, bat, sat, fat".match("xt"); // null
var matches = "cat, bat, sat, fat".match("at");
matches.index; // 1
matches.input; // "cat, bat, sat, fat"

"cat, bat, sat, fat".search("at"); // 1
```

- `String.prototype.replace()`: `replace`方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有`g`修饰符的正则表达式）。

```js
"aaa".replace("a", "b"); // "baa"
```

- `String.prototype.split(string[, number])`: `split` 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

```js
"a|b|c".split("|"); // ["a", "b", "c"]
"a|b|c".split(); // ["a|b|c"]
"a||c".split("|"); // ['a', '', 'c']
"|b|c".split("|"); // ["", "b", "c"]
"a|b|".split("|"); // ["a", "b", ""]
// split方法还可以接受第二个参数，限定返回数组的最大成员数。
"a|b|c".split("|", 0); // []
"a|b|c".split("|", 1); // ["a"]
"a|b|c".split("|", 2); // ["a", "b"]
"a|b|c".split("|", 3); // ["a", "b", "c"]
"a|b|c".split("|", 4); // ["a", "b", "c"]
```

- `String.prototype.localeCompare()`: `localeCompare` 方法用于比较两个字符串。它返回一个整数，如果小于 0，表示第一个字符串小于第二个字符串；如果等于 0，表示两者相等；如果大于 0，表示第一个字符串大于第二个字符串。

## 对象(Object)

`JavaScript` 原生提供`Object`对象（注意起首的 O 是大写），本章介绍该对象原生的各种方法。

`JavaScript` 的所有其他对象都继承自`Object`对象，即那些对象都是`Object`的实例。

`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。

### 构造函数

`Object`不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用`new`命令。

### 静态方法

- `Object.keys()`:
- `Object.getOwnPropertyNames()`:

**对象属性模型的相关方法**

- `Object.getOwnPropertyDescriptor()`: 获取某个属性的描述对象。
- `Object.defineProperty()`: 通过描述对象，定义某个属性。
- `Object.defineProperties()`: 通过描述对象，定义多个属性。

**控制对象状态的方法**

- `Object.preventExtensions()`: 防止对象扩展。
- `Object.isExtensible()`: 判断对象是否可扩展。
- `Object.seal()`: 禁止对象配置。
- `Object.isSealed()`: 判断一个对象是否可配置。
- `Object.freeze()`: 冻结一个对象。
- `Object.isFrozen()`: 判断一个对象是否被冻结。

**原型链相关方法**

- `Object.create()`: 该方法可以指定原型对象和属性，返回一个新的对象。
- `Object.getPrototypeOf()`: 获取对象的`Prototype`对象。

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
[...new Set(array)];
Array.from(new Set(array));
```

### 数组扁平化

```js
[[1, 2], 3].flat(number || Infinity);
```

### 数组克隆

```js
arr2 = [...arr1];
arr1.concat(arr2);
Object.assign(arr1, arr2);
```
