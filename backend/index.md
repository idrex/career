---
title: 后端体系图
order: 1
nav:
  title: 后端
  order: 2
toc: false
---

## 体系图

```jsx | inline
import React from "react";
import { Button, Timeline, Card } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => (
  <Timeline mode="alternate">
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>网络基础</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>OS系统</Timeline.Item>
    <Timeline.Item>语言选择</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>数据库</Timeline.Item>
    <Timeline.Item>接口服务</Timeline.Item>
    <Timeline.Item>缓存</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>网络安全</Timeline.Item>
    <Timeline.Item>测试</Timeline.Item>
    <Timeline.Item>CI/CD构建</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>设计模式</Timeline.Item>
    <Timeline.Item>搜索引擎</Timeline.Item>
    <Timeline.Item>消息队列</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>容器虚拟机</Timeline.Item>
    <Timeline.Item>GraphQL</Timeline.Item>
    <Timeline.Item>Web服务器</Timeline.Item>
    <Timeline.Item>大数据</Timeline.Item>
    <Timeline.Item>人工智能</Timeline.Item>
    <Timeline.Item>物联网</Timeline.Item>
    <Timeline.Item>区块链</Timeline.Item>
  </Timeline>
);
```
