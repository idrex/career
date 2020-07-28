---
title: 前端体系图
nav:
  title: 前端
  order: 1
group:
  order: 1
order: 1
toc: false
---

## 体系图

```jsx | inline
import React from "react";
import { Button, Timeline, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default () => (
  <Timeline mode="alternate">
    <Timeline.Item>浏览器</Timeline.Item>
    <Timeline.Item>Html</Timeline.Item>
    <Timeline.Item color="green">CSS</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      JavaScript
    </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      Web安全
    </Timeline.Item>
    <Timeline.Item color="green">包管理工具</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      构建工具
    </Timeline.Item>
    <Timeline.Item>JS框架</Timeline.Item>
    <Timeline.Item>Web Components</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      测试
    </Timeline.Item>
    <Timeline.Item>类型检查器</Timeline.Item>
    <Timeline.Item>Progressive Web Apps</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      服务端渲染（SSR）
    </Timeline.Item>
    <Timeline.Item>GraphQL</Timeline.Item>
    <Timeline.Item color="green">静态站点生成器</Timeline.Item>
    <Timeline.Item>移动&桌面应用</Timeline.Item>
    <Timeline.Item>数据可视化</Timeline.Item>
    <Timeline.Item>VR/AR/XR/MR</Timeline.Item>
    <Timeline.Item>工程体系</Timeline.Item>
  </Timeline>
);
```

<!-- ## 第一阶段：

HTML+CSS:
HTML 进阶、CSS 进阶、div+css 布局、HTML+css 整站开发、

JavaScript 基础：
Js 基础教程、js 内置对象常用方法、常见 DOM 树操作大全、ECMAscript、DOM、BOM、定时器和焦点图。

JS 基本特效：
常见特效、例如：tab、导航、整页滚动、轮播图、JS 制作幻灯片、弹出层、手风琴菜单、瀑布流布局、滚动事件、滚差视图。

JS 高级特征：
正则表达式、排序算法、递归算法、闭包、函数节流、作用域链、基于距离运动框架、面向对象基础、

JQuery：基础使用
悬着器、DOM 操作、特效和动画、方法链、拖拽、变形、JQueryUI 组件基本使用。

## 第二阶段：HTML5 和移动 Web 开发

CSS3:
CSS3 新选择器、伪元素、脸色表示法、边框、阴影、background 系列属性改变、Transition、动画、景深和深透、3D 效果制作、Velocity.js 框架、元素进场、出场策略、炫酷 CSS3 网页制作。

Bootstrap:
响应式概念、媒体查询、响应式网站制作、删格系统、删格系统原理、Bootstrap 常用模板、LESS 和 SASS。

移动 Web 开发：
跨终端 WEB 和主流设备简介、视口、流式布局、弹性盒子、rem、移动终端 JavaScript 事件、手机中常见 JS 效果制作、Zepto.js、手机聚划算页面、手机滚屏。

## 第三阶段：HTTP 服务和 AJAX 编程

WEB 服务器基础：
服务器基础知识、Apache 服务器和其他 WEB 服务器介绍、Apache 服务器搭建、HTTP 介绍。

PHP 基础：
PHP 基础语法、使用 PHP 处理简单的 GET 或者 POST 请求、

AJAX 上篇：
Ajax 简介和异步的概念、Ajax 框架的封装、XMLHttpRequest 对象详细介绍方法、兼容性处理方法、Ajax 框架的封装、Ajax 中缓存问题、XML 介绍和使用。

AJAX 下篇：
JSON 和 JSON 解析、数据绑定和模板技术、JSONP、跨域技术、图片预读取和 lazy-load 技术、JQuery 框架中的 AjaxAPI、使用 Ajax 实现爆布流案例额。

## 第四阶段：面向对象进阶

面向对象终极篇：
从内存角度到理解 JS 面向对象、基本类型、复杂类型、原型链、ES6 中的面向对象、属性读写权限、设置器、访问器。

面向对象三大特征：
继承性、多态性、封装性、接口。

设计模式：
面向对象编程思维、单例模式、工厂模式、策略模式、观察者模式、模板方法模式、代理模式、装饰者模式、适配器模式、面向切面编程。

## 第五阶段：封装一个属于自己的框架

框架封装基础：
事件流、冒泡、捕获、事件对象、事件框架、选择框架。

框架封装中级：
运动原理、单物体运动框架、多物体运动框架、运动框架面向对象封装。

框架封装高级和补充：
JQuery 框架雏形、可扩展性、模块化、封装属于传智自己的框架。

## 第六阶段：模块化组件开发

面向组件编程：
面向组件编程的方式、面向组件编程的实现原理、面向组件编程实战、基于组件化思想开发网站应用程序。

面向模块编程：
AMD 设计规范、CMD 设计规范、RequireJS，LoadJS、淘宝的 SeaJS。

## 第七阶段：主流的流行框架

Web 开发工作流：
GIT/SVN、Yeoman 脚手架、NPM/Bower 依赖管理工具、Grunt/Gulp/Webpack。

MVC/MVVM/MVW 框架：
Angular.js、Backbone.js、Knockout/Ember。

常用库：
React.js、Vue.js、Zepto.js。

## 第八阶段：HTML5 原生移动应用开发

Cordova：
WebApp/NativeApp/HybirdApp 简介、Cordova 简介、与 PhoneGap 之间的关系、开发环境搭建、Cordova 实战（创建项目，配置，编译，调试，部署发布）。

Ionic：
Ionic 简介和同类对比、模板项目解析、常见组件及使用、结合 Angular 构建 APP、常见效果（下拉刷新，上拉加载，侧滑导航，选项卡）。

React Native：
React Native 简介、React Native 环境配置、创建项目，配置，编译，调试，部署发布、原生模块和 UI 组件、原生常用 API。

HTML5+：
HTML5+中国产业联盟、HTML5 Plus Runtime 环境、HBuilder 开发工具、MUI 框架、H5+开发和部署。

## 第九阶段： Node.js 全栈开发：

快速入门：
Node.js 发展、生态圈、Io.js、Linux/Windows/OS X 环境配置、REPL 环境和控制台程序、异步编程，非阻塞 I/O、模块概念，模块管理工具、开发流程，调试，测试。

核心模块和对象：
全局对象 global，process，console，util、事件驱动，事件发射器、加密解密，路径操作，序列化和反序列化、文件流操作、HTTP 服务端与客户端、Socket.IO。

Web 开发基础：
HTTP 协议，请求响应处理过程、关系型数据库操作和数据访问、非关系型数据库操作和数据访问、原生的 Node.js 开发 Web 应用程序、Web 开发工作流、Node.js 开发 Blog 案例。

快速开发框架：
Express 简介+MVC 简介、Express 常用 API、Express 路由模块、Jade/Ejs 模板引擎、使用 Express 重构 Blog 案例、Koa 等其他常见 MVC 框架。

Node.js 开发电子商务实战：
需求与设计、账户模块注册登录、会员中心模块、前台展示模块、购物车，订单结算、在线客服即时通讯模块。

## 一、HTML 核心技巧（前端核心知识）

HTML 语义化
HTML5 表单
音频和视频
离线和本地存储
LocalStorage 扩容
SVG
Web Socket
Canvas
埋点、监控、日志分析
跨域问题解决方案
漏洞攻防

## 二、CSS 核心技巧（前端核心知识）

CSS 经典布局
CSS 高级绘制
CSS 分层理论
CSS 3D 在前端的应用
CSS 魔术师 Houdini
CSS 矩阵与高性能渲染
CSS WorkFlow
CSS 深度实践
10+个布局模式的实现
Js in Css & Css in Js
现代化 CSS 方法论实践与方案
CSS3 结合数学知识的高级应用

## 三、JavaScript 核心技巧（前端核心知识）

### JavaScript 语言精髓

基本数据类型、变量提升
函数与对象、构造函数
闭包、this 和作用域
Call、apply、bind
继承
语句与表达式
高阶函数
JavaScript 典型错误分析
原型链与原型对象
递归与尾递归

### JavaScript 函数式编程

范畴论、函数式编程基础理论
纯函数、柯里化、函数组合
高阶函数、尾调用优化、闭包
范畴与容器、函子、AP 因子、IO

### ES5 核心技术

深入 this 解析
作用域与闭包
值传递与引用传递分析
深入分析原型与原型链
微任务、宏任务、同步队列、异步队列
暂时性死区
GC
执行堆栈

### ES6 核心知识

const、let、解构、字符串、数组、对象、函数
yield 与遍历
class、Set、Map
export/import 与 Module
异步
修饰
Symbol 新特性详解
ES6 在企业中的应用

### ES7 ～ ES10 实践应用

### jQuery 经典源码解读

重写与多态实现分析
链式调用
二进制运算的性能提升
Hook 应用
参数映射分析
ready 实现分析

### 快速上手 TypeScript

数据类型
枚举
接口
类
函数
泛型
类型断言与类型守卫、类型兼容性
高级类型之交叉类型、联合类型、类型别名
装饰器、Reflect Metadata
赋值断言、is 关键字、可调用类型注解和类型推导
高级类型索引类型、映射类型、条件类型、强大的 infer 关键字
模块与命名空间、声明文件编写
常用工具类型

### TypeScript 深入实践

TypeScript 与工程化
TypeScript 与 React 实践
TypeScript 与 Vue 实践
TypeScript 与企业级服务实践
TypeScript 的编译原理
编写 TypeScript Transformer Plugin

## 四、前端必会的服务器与后端知识（必会基础）

### Linux 入门与精通

Linux 环境安装与配置
Web 程序员必会的 Linux 命令
Linux 深入
文件管理
用户管理
网络管理
进程管理
Linux 安全加固

### Linux 与 web 服务器

nginx
Apache #代理与反向代理服务器
反向代理实战 #后端开发
PHP + MySQL
PHP 基础：文件引入、全局变量、数组、session、数据读取与提交、报头设置、错误处理、常见关键字
面向对象：设计模式、常用函数
核心知识：PDO、构造方法、析构方法、封装、继承、多态、抽象与接口
MySql 建表、SQL 语句、数据操作、条件查询
深入实践
京程图书管理系统实战

## 五、Node.JS 与大前端开发（大前端的根基）

### Node.js 基础

非堵塞 IO
EventLoop
模块、第三方模块、自定义模块
Get/Post
全局对象、常用工具
Net、FS、Stream、Buffer
Http
核心 API、回调函数、路由
进程与线程
Promise、Async/Await
#Node.js 技能进阶
Node 框架应用
Koa、Express、Egg、Hapi
路由、参数、中间件、模板引擎、静态文件、重定向、cookie、session
数据库应用
MySql、MongoDB、Redis
中间件原理
Restful API 设计
Cookie、Token、鉴权
Node.js 与后端框架核心思想
Linux 下的 Node.js 服务管理
PM2 应用
Node.js 异步 IO 原理及优化
内存管理机制及优化
大规模 Node.js 站点结构原理分析
Node.js 编码规范
规避 Node.js 内存泄漏及相关工具
Node 集群管理
线上部署与压力测试
BFF 架构

### Node.js 源码深入

Node.js 源码解析
手写 Koa2 源码
手写中间件机制
手写 MVC 开发框架

### Node.js 深度实践

6 个深度实战项目
腾讯地图 H5 Node.js 架构搭建复盘
Express 实战之模板引擎、日志记录、路由跳转、错误处理综合应用
Express+PHP 实战之数据库设置、路由配置、数据操作、容错机制、错误处理综合应用
Koa2 实战之 web 应用构建
爬虫实战之 Roboot 协议、环境配置、代码编写
数据推送之 Comet、WebSocket、SSE 实际应用
3 个大型实战项目
实现一套大厂全栈开发模式

Koa2 搭建 Node.js 后端、编写 Koa2 中间件
编写合理的目录结构
全局异常监控、错误日志上报与保存
swig 模板完成传统 SSR
webpack 前端打包与优化
webpack plugin 编写
gulp 后端 Node.js 项目打包
bigpipe、quicklink 等前端页面性能优化手段
CI、CD
图书管理系统项目再升级

根据 SOLID 设计原则升级 NodeJS 技术解决⽅案 （基于 TypeScript）
从搬砖向前端架构迈出第⼀步
从 OO 思想切到 AO
依赖注入 DI、控制反转 IOC、面向切面 APO
前后端 BFF 架构代码实战

前后端分离
BFF 架构详解
PHP 后端代码
前端代码重构
BFF 与微服务

## 六、前端程序员必会的网络协议（必会基础）

### HTTP 协议系列

HTTP 协议详解
HTTP 缓存机制详解
HTTPS 协议分析
HTTP2 协议分析
HTTP3 协议分析

### TCP/IP 协议栈

三次握手与四次挥手
拥塞控制(慢开始，快速重传)
流量控制(滑动窗口)

### DNS 协议与 CDN 技术

### WebSocket

## 七、前端工程化、构建与测试（升职加薪利器）

### 常见构建工具

Webpack
Webpack4 核心原理与开发优化
webpack5 尝鲜
深度实践
sourceMap、代码压缩、dll、codeSpliting 等性能优化
多核、缓存等构建效率提升
手写 loader 与 plugin
同步文件异步文件打包方案
持久化缓存、更好的打包优化
源码深入
loader 原理深入，聪明的编写 Entry
webpack plugin 通知机制及钩子函数详解
AST 静态语法树深入分析
webpack 核心流程 Compiler、Compilation、Chunk、Template 剖析
Gulp、Rollup、Grunt、Bower、Yeoman、Browserify、Parcel 快速上手 #版本控制
SVN
git

### CI/CD

持续集成方案及流程
持续集成构建工具
手把手安装配置使用 jenkins
手把手安装配置使用 travis
手把手安装配置使用 drone

### 代码质量管理

ESLint/Lint
手把手安装配置使用 Sonar

### 自动化测试

1.单元测试、性能测试、压力测试、安全测试、功能测试具体分析以及实际应用 2.常用测试框架介绍、安装与使用
单元测试：Karma、Mocha、Jasmine、Jest
NodeJS 测试：supertest
E2E 测试：rize、puppeteer

### 深入实践

从 0 构建适合团队的 CLI 工具
实现简版 Webpack
综合实战课
前端工程化企业级部署

## 八、前端性能优化（升职加薪利器）

### 高级前端性能调试

断点捕捉事件绑定
Performance 性能面板
Timeline 掌握帧渲染模式
profiles 具体问题分析

### 前端性能优化深入

Web 高性能 CSS 与浏览器渲染原理
高性能动画
loading、rendering、paint
webkit 渲染流程
硬件加速
完美的 Animation
Layout、Paint、Composite Layer
浏览器与 HTTP 层
雅虎军规
面向切面编程
服务器端优化方案
首屏性能提升方案
SSR、骨架屏、离线化、前端缓存、异步加载、分块加载
HTTP 缓存机制
Node.js 内存泄漏分析与解决方案
React 性能优化常见策略
Vue 性能优化常见策略

### 性能优化实战场

网红平台性能优化实战
Google AMP 代码实战
百度地图极致 WebApp 性能优化
精通 FCP/FMP 等于 CSR、SSR
Vue SSR、React SSR 代码实战
前端性能监控平台搭建

## 九、前端架构师启蒙系列（升职加薪利器)

#前端架构师大型综合实战
集成 Spring 版本 Node.js
深度优化 Webpack
持续集成工具的搭建
前端微服务+Node 微服务
SPA 与 MPA 种种实践

## 十、前端框架与全家桶（高效搬砖）

### React 全家桶快速上手

React
JSX 模板语法、虚拟 DOM、Props、State、生命周期、组件、事件和 This 绑定、CLI 脚手架实战、虚拟 DOM 概念、组件化思想、表单处理、Fiber 架构、Hook 实战
最佳实践指导
Flux、Redux 架构剖析
性能调优
ReactRouter 构建应用
版本差异，Router 组件、Route 组件、Switch 组件、Link 组件、NavLink 组件、Redirect 组件、withRouter 组件，编程式导航，动态路由，嵌套路由
Redux 数据管理
使用场景、三大核心之 Action、Reducer、Store、中间件的使用
React SSR 实战
客户端渲染理论、服务端渲染理论、SSR 同构理论
webpack 搭建 React 环境
前后端同构项目工程化搭建
SSR Node 后端搭建、路由搭建、Redux 搭建、Css 样式编写
TypeScript 在 React 中的应用

### Vue 全家桶快速上手

vue
组件化思维、CLI 脚手架实战、组件化实战、组件话通信方案、内容分发、模板语法、计算属性、表单处理、事件处理、动画
MVVM 设计模式
VueRouter 实现页面切换
实现原理、路由管理、动态路由、嵌套路由、编程式导航、命名路由、路由懒加载、路由守卫、路由传参
Vuex 数据管理
使用场景、核心概念之 State、核心概念之 Getter、核心概念之 Mutation、核心概念之 Action、核心概念之 Module
原理与架构剖析
Vue SSR 实战
构建 SPA 项目架构
webpack 配置从零到一
SSR Node 后端
SSR 要点总结
TypeScript 在 Vue 中的应用

## 十一、前端框架框架源码深入（升职加薪利器）

### Vue2 源码解析

vue2 架构概览及 MVVM 实现演变的讲解
双向数据绑定和 setState 原理
vue2 virtual-dom 讲解及对比讲解 react 的 virtual-dom 的不同
dom diff 原理及算法实现
vue2 整体解析流程
vue 运行时的优化
前端框架选型

### Vue 周边原理剖析

vue 数组双向绑定的处理及原理讲解
\$set 的原理讲解及 vue.use 原理讲解
vue-router 的使用及手写 vue-router
vuex 如何使用及原理剖析
vue-cli 的使用及实现一个 vue-cli 的对应工具
vue ssr 结合 node 层实现 BFF 架构与服务端渲染
vue ssr 的原理及 node 的 VM 结合 ssr 的实现讲解
#Vue3 使用及源码讲解
vue3 对比 vue2 的优缺点分析
proxy 及 reflect 等元编程特性的讲解
proxy 与 definePrototype 深度对比
vue3 的 effect、reactive、ref 等特性讲解
vue3 整体源码讲解及深度剖析双向绑定的新实现
vue3 源码单元测试的讲解及辅助如何学习源码
结合 vue3 的模板解析深度学习 AST 构建的整个过程，词法分析、语法分析的如何实现
vue2 和 vue3 动态构建的深度对比

### Reac16.8 新特性讲解

react 项目搭建及正确使用的讲解
react 新版本更新所有特性的讲解
纯组件、纯函数、高阶函数、组件插槽的使用讲解
suspend 及 lazy 的使用及原理剖析，实现一个 suspend
memo、context 使用及内部原理深入学习
结合内部架构的变更侧面讲解 react 生命周期的变更及使用
新特性各个 hooks 源码的讲解及使用
实验性的调度层级的优化讲解
内部部分 api 的替换促使性能提升的剖析

### flux 思想及 Redux 使用

flux 思想的剖析讲解，store、dispatcher 等关系梳理
redux 基于 flux 思想实现的演变及差别对比
redux 对应函数式范畴论的容器、函子等各种比较
redux 的 state、action、dispatch、reducer 等作用及协同关系的讲解
redux 在服务端渲染管理数据的架构模式及使用
结合 react 使用 redux 的实战演练

### Redux 源码实现

redux 源码架构的分析
redux 各个方法及特性的作用讲解
redux 与 react 结合使用的原理剖析
手写 redux 源码的演变及诞生的过程，基于原因寻找答案。
middleware 中间件的实现及异步处理过程中间件的作用讲解
结合设计模式剖析 redux 实现的优缺点

### React16.8 源码深入

createElement 源码浅析
什么是 ContentPool
Fiber 架构主流程分析
Fiber 是如何实现中断任务，恢复任务的
Fiber 的任务优先级系统是如何工作的
renderRoot 源码讲解
commitRoot 源码讲解
Fiber 架构对生命周期的影响
BatchUpdate
unBatchUpdate
setState 到底是同步还是异步？如何控制
妙用 MessageChannel
react 如何对帧速率优化
常用 React hooks 简单实现
useState 源码浅析
useEffect 源码浅析
React hooks 和 Fiber 调度的关系

## 十二、前端跨界技术（实用技术，开阔眼界）

### 跨界移动应用（iOS、Android）

Crodova
开发经验与技巧
Cordova 性能分析
Cordova 优化关键点解读
核心原理分析
ReactNative
框架解读及开发入门
性能分析与优化
发布流程
开发技巧
核心原理分析
Flutter 入门到实战（精品全系列课）

Flutter 必备 Dart 基础：变量与类型、函数、类和对象、继承与多态、抽象类与接口、Dart 编程技巧
Flutter 基础实战：项目网络模块、应用框架、包管理、资源管理、路由管理、调试及异常捕获
Flutter 进阶提升玩转组件：布局组件、容器类组件、滚动组件、功能性组件、事件处理、手势识别、动画、自定义组件、文件操作、网络请求、数据转化
Flutter 进阶提升完整应用开发：代码规范、App 框架、风格多样性
项目实战：豆瓣网 App
微信小程序入门到实战（精品全系列课)

手把手带你过一遍小程序基础知识，构建一个完整的小程序
小程序起步：开发环境搭建，基础配置，wxml、wxss、flex 机制、生命周期、数据绑定、ES6 语法应用，开发一个自己的小程序
进阶实践：组件化开发、用 api 唤醒微信的强大功能、画布、云存储、云数据库、云函数
项目实战：完整小程序上线
Uniapp 入门到实战

项目创建、部署、目录结构
样式布局、配置文件、生命周期、模板语法与数据绑定、class 与 style、事件处理与事件绑定
基础组件、表单组件、导航组件、媒体组件、地图组件
网络请求、文件上传下载、数据缓存、设备相关、交互反馈、刷新
第三方登录、项目打包、自定义组件
项目实战：开发一个多端应用
PWA

Service worker、App shell、缓存、Https 代理服务器、Workbox
工程化实践
业界成熟方案

### 跨 PC 应用

NW.js
Electron--新增
VR #物联网时代的大前端（IoT）
从软件到硬件
硬件基础
CPU 与内存
操作系统深度解读
JavaScript 硬件开发
Node 串行端口
Firmata 协议
Ruff 初体验 #面向未来——人工智能时代的大前端（AI）
TensorFlow.js
BrainJS

### WebAssemble （精品实践课）

Go 语言入门
Emscripten
WASM API
WASM 实战

## 十三、前端程序员成神之路（面试神器）

### 深入 Node.js

讲给前端的 C 语言与内存管理机制
CPU 与内存工作原理
机器语言与汇编语言
C 与 C++语言
指针与内存管理机制
内存动态分配
Node.js 源码分析
源码编译
纯 JavaScript 编写的核心模块
带 NativeBindingde 的 JavaScript 模块
c++文件
V8 引擎与 webkit 源码探秘
渲染引擎与 Webkit 体系结构
JavaScript 引擎工作流程
V8 与 JavaScript Core
Node.js 中的 V8
V8 源码分析：工作过程、数据表示、类型、内存管理、绑定机制与扩展机制、字节码与 JIT
事件循环与 Libuv 源码分析
Node.js 与 V8 引擎结构
Linux 底层异步通知机制
Linux 的 I/O 模型
epoll 机制
iocp 机制
libuv 库

### 数据结构与算法

数据结构与算法导论
基本数据结构
常用排序、搜索算法
前端数据结构与算法 JS 实践
列表、栈、队列、链表、哈希表、二叉树
高能算法面试题
手写 Dom diff
JavaScript ECS、Stack
带你刷 LeetCode 算法真题

### 前端中的设计模式与代码实战

单一职责原则
开闭原则
里氏转换原则
迪米特法则
接口分离原则
依赖倒转原则

### 前端与黑客安全

前端加密技术
密码学基础
常见加密算法
SSL/TLS 协议
前端安全策略
前端 XSS
前端 CSRF
前端 Cookies
HTTPS 窃听
前端点击劫持问题
上传漏洞与中国菜刀
社会工程学和信息泄露 DDOS
OWASP
前端靶机环境与渗透平台

## 十四、前端图形学与 H5 游戏（热门技术方向）

### 游戏中的数学和物理与图形绘制

计算机图形学
canvas 2D 图形绘制
图形学知识扫盲
数学知识与图形学
物理知识与图形学

### Three.js 入门到实战

涵盖 Three.js 核心技术，通过系统学习与实战演示，最快速掌上手 webGL 开发
Three.js 课程基础：基础代码创建、绘制三维对象、添加材质和灯光、添加动画效果、创建场景、几何和网络对象、相机
Three.js 课程进阶提升：涵盖光源、材质核心知识
Three.js 课程进阶提升：涵盖几何体、动画、控件核心知识
大型 3D 项目实战:智慧工厂

### WebGL 快速上手

涵盖 WebGL 核心技术，通过系统学习与实战演示，快速上手 webGL 开发
WebGL 课程上：图形学入门、着色器、Attrbuteuniform、缓冲区对象、基本图形绘制、平移变换、缩放变换、矩阵变换
WebGL 课程中：高级变换、动画、非坐标数据传入着色器、vertexAttriPonitner 的步进和偏移参数、变量、三角形绘制、图形表面贴上对象
WebGL 课程下：OpenGLES 着色器语言、三维世界、视点与视线、长方体可视空间、金字塔可视空间、正确处理前后关系、立方体

### Cocos2D-JS 与 Phaser 核心物理引擎

Cocos2D--JS 快速入门
开发环境搭建
数学基础知识、笛卡尔坐标、三角函数、向量
引擎
显示对象、动作、Action、场景动画
事件管理器、事件类型、自定义事件
对象缓冲池、基础控件、常用开发工具
Phaser 手把手代码实战

### 数据可视化

DataV 原理与大数据可视化

## 十五、云时代前端核心技术（架构师之路）

### 容器与虚拟化技术

K8s、Docker 与虚拟机
环境搭建

### Serverless 与 RPC

云计算技术发展及特点
架构思想与落地方案
阿里函数计算开发案例

### 前端与微服务

设计思想与落地方案案例
权限控制与服务治理
监控、分析与日志
扩容、熔断、服务降级与限流

### 微前端

架构思想与落地方案案例
Single-SPA
模块加载、消息总线、路由分发
静态数据共享技术方案
构建与部署

## 十六、面试指导（扶你上马，再送一程）

### JavaScript 高频面试题精讲 #大厂面试指南 #前端职业发展指导 #数据结构与算法面试指导 #小册子串讲

高频考题
一线技术
精髓总结
JavaScript 执行过程大总结 #赠送课程·面向未来——人工智能实践课（面向未来，未雨绸缪）

### Python 语言

Python 语言核心技术
Python 与爬虫
Python 与自动化 #数据科学与数据分析
Python 中的统计学
Numpy 实践
Pandas 实践

### 深度学习与神经网络

TensorFlow 实践
Pytorch 实践

6 个大型实战项目

## 前端架构师综合实战

集成 Spring 版本 NodeJS
深度优化 Webpack
持续集成工具搭建
前端微服务+Node 微服务
SPA 与 MPA 种种实践 #手把手搭建大厂全栈开发架构
Koa2 搭建 Node.js 后端、编写 Koa2 中间件
编写合理的目录结构
全局异常监控、错误日志上报与保存
swig 模板完成传统 SSR
webpack 前端打包与优化
webpack plugin 编写
gulp 后端 Node.js 项目打包
bigpipe、quicklink 等前端页面性能优化手段
CI、CD #图书管理系统再升级
根据 SOLID 设计原则升级 NodeJS 技术解决⽅案 （基于 TypeScript）
从搬砖向前端架构迈出第⼀步
从 OO 思想切到 AO
依赖注入 DI、控制反转 IOC、面向切面 APO #前后端 BFF 架构代码实战
前后端分离
BFF 架构详解
PHP 后端代码
前端代码重构
BFF 与微服务
#Flutter 实战豆瓣 APP
基础实战：项目网络模块、应用框架、包管理、资源管理、路由管理、调试及异常捕获
玩转组件：布局组件、容器类组件、滚动组件、功能性组件、事件处理、手势识别、动画、自定义组件、文件操作、网络请求、数据转化
完整应用开发：代码规范、App 框架、风格多样性、打包发布 #前端图形学启蒙系列实战
3D 开发引擎实践与调优
数学在前端应用中的应用实战
细数物理引擎
3D 智慧工厂大型项目实战
#30+小型项目实战
#PHP 版图书数据管理系统
使用 PHP+MySql 让不熟悉后端的同学快速入门后端开发
为学习 NodeJS 和 ES9 做准备 #图书数据库管理系统前后端分离
搭建自自定义 NodeJS MVC 架构
使用 ES9 开发前端应用
PHP 提供纯粹 API 为大家学习前后端分离和 Node 打下基础 #搭建图书数据管理系统整体前端架构
使用 CI 自动化工具自动编译部署前端项目
线上负载均衡内容实战
反向代理实战 #完善图书数据管理系统性能优化+自动化集成测试
使用性能优化技术让系统性能达到极致
走进 Travis CI
#CSS 深入应用
图书管理系统中对 CSS WorkFlow 进行完整实战
#Nginx 反向代理与负载均衡实战
Nginx 负载均衡详细配置
HTTP Upsstram 模块
ip_hash、server、upstream
Nginx.conf 文件 #腾讯地图 H5 Node.js 架构搭建复盘
项目分析
架构升级
开发问题与方案
预备上线
服务器集群部署
#Node.js 线上部署
Nginx 配置
PM2 应用配置
三条盖世绝学
#Express 框架实战
项目搭建
模板引擎
日志记录
路由跳转
错误处理
#Koa2 框架实战
项目搭建
中间件
模板引擎
错误处理
路由跳转
#Express+PHP 实战
数据库设置
路由配置
数据操作
容错机制
#NodeJS 爬虫实战
Roboot 协议
环境配置
代码实战 #数据推送实战
Comet
WebSocket
SSE #手撸 Koa2 #手写 Koa 中间件 #手写 MVC 开发框架 #手撸 vue-router #自动化测试综合实战
Karma
Jasmine
Mocha
Rize
Jest
SuperTest
Puppeteer #持续集成实战
手把手配置使用 Jenkins #代码质量管理实战
手把手配置使用 Sonar #从零构建适合团队的 CLI 工具
有命令、有交互、有动态
自定义命令行
提供模板选择
根据输入创建对应模板 #实现简版 Webpack
Compiler
Compilation
Chunk
Template #前端工程化企业级部署
Nginx 配置
Drone 构建部署前端应用
Drone CLI Promote 指定环境
基于 Drone API 的运维系统开发
#WebComponent 实战
custom-element 创建自定义标签
html-template 创建模板
shadow-dom 隔离其它模板 #网红平台性能优化实战复盘
实时聊天直播平台实现方案
Http 问题
长列表优化
性能调优
数据传送
WebSocket
Redis 发布、订阅模式
Nginx 负载均衡 #前端性能监控平台搭建
掌握错误捕获方法和上报方式
bug 可追溯还原
分析商业性能监控产品 #性能优化实战场
带你从头实现性能监控 SDK
涵盖 DNS 解析时间
TCP 建立时间
白屏时间
dom 渲染完成时间
页面 onload 时间
页面准备时间
页面重定向时间
unload 时间
request 请求耗时
页面解析 dom 耗时
错误拦截
#Google AMP 代码实战
AMP page:Image、Video、Iframe、Audio、Css、动态列表、轮播、遮罩、第三方播放
AMP 限制
AMP 原则
成本、性能、可维护性 #手撸 Vue SSR
构建 SPA 项目架构
webpack 配置从零到一
SSR Node 后端
SSR 要点总结 #手撸 React SSR
客户端渲染理论、服务端渲染理论、SSR 同构理论
webpack 搭建 React 环境
前后端同构项目工程化搭建
SSR Node 后端搭建、路由搭建、Redux 搭建、Css 样式编写
#webpack 从零到一配置与优化实战
entry、output、loaders、plugins 基础配置
sourceMap、resolve、模块热替换、代码压缩、dll、codeSpliting 等性能优化
express 与 webpack compiler 的融合
多核、缓存等构建效率提升
同步文件异步文件打包方案
持久化缓存、更好的打包优化
手写 Plugin、Loader #手把手实现一个 Python 壁纸爬虫
HTTP 组件：urllib
json 解析
文件操作
生成时间戳 #手把手实现一个钉钉机器人
Http 组件：urllib
Python 面向对象
封装自定义 Python 库 #微信小程序实战
开发环境搭建、基础配置、Flex 布局、数据绑定、ES6 语法应用
组件化开发、Api 唤醒微信强大功能、画布、云开发
上线完整小程序
#Uniapp 实战
项目创建、部署
样式布局、配置文件、模板、数据绑定、事件
基础组件、表单组件、导航组件、媒体组件、地图组件
网络请求、文件上传下载、数据缓存、设备相关、交互反馈、刷新
第三方登录、项目打包、自定义组件
上线完整多端应用
#PWA 实战
Service worker、App shell、缓存、Https 代理服务器、Workbox
工程化实践
业界成熟方案 #跨界 PC 实战
NW.js 构建简单桌面应用
Electron 构建简单桌面应用 #容器化与虚拟技术实战
环境搭建
K8s、Docker 与虚拟机实践 #前端与微服务
设计思想与落地方案案例
权限控制与服务治理
监控、分析与日志
扩容、熔断、服务降级与限流 #微前端
架构思想与落地方案案例
Single-SPA
模块加载、消息总线、路由分发
静态数据共享技术方案
构建与部署 #数据科学与数据分析
Numpy 实践
Pandas 实践 #深度学习与神经网络
TensorFlow 实践
Pytorch 实践 -->
