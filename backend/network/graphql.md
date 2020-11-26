---
title: GraphQL
group:
  title: 网络基础
  order: 2
---

![graphql](https://graphql.cn/img/logo.svg)

## GraphQl简介

`GraphQL` 是由 `Facebook` 在 `2015` 年创造的用于 `API` 的查询语言。是一个使用基于类型系统来执行查询的服务端运行时（类型系统由你的数据定义）。`GraphQL` 并没有和任何特定数据库或者存储引擎绑定，而是依靠你现有的代码和数据支撑。
一个 `GraphQL` 服务是通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数。


## 与Rest API对比

1. 一次请求多个资源
2. API字段定制化
3. 精确定义返回类型
4. 无需划分版本
5. 类型验证机制
6. 双向通讯

## 基本概念

### 数据类型

GraphQL也有几个基础类型，在GraphQL中他们统称叫标量类型(Scalar Type)

- Int（整型）
- Float（浮点型）
- String（字符串）
- Boolean（布尔型）
- ID（唯一标识符类型）
- 自定义类型 例如：Date类型，只需实现相关的序列化，反序列化和验证的功能即可

### Query

### Mutation

### Subscription

## 实例演示

## 延伸拓展

https://juejin.cn/post/6844904196848762888#heading-4
