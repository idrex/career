---
title: 运维体系图
order: 1
nav:
  title: 运维
  order: 3
toc: false
---

## 体系图

```jsx | inline
import React from "react";
import { Button, Timeline, Card } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => (
  <Timeline mode="alternate">
    <Timeline.Item>OS系统</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>网络安全</Timeline.Item>
    <Timeline.Item>云原生</Timeline.Item>
    <Timeline.Item>日志管理</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>监控报警</Timeline.Item>
    <Timeline.Item>Serverless</Timeline.Item>
  </Timeline>
);
```
