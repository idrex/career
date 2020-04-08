---
title: 运维体系图
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
    <Timeline.Item><a href='/fontend/javasrcipt/basic'>基础中的基础</a></Timeline.Item>
    <Timeline.Item color="green">
      <Button type="primary">我是 antd 的按钮</Button>
    </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">
      <Card title="Default size card" bodyStyle={{textAlign: 'left'}}>
        <Timeline mode="alternate">
          <Timeline.Item><Button type="primary" onClick={() => window.open('/fontend/javasrcipt/basic')}>基础中的基础</Button></Timeline.Item>
          <Timeline.Item color="green">
            <Button type="primary">我是 antd 的按钮</Button>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
        </Timeline>
      </Card>
    </Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
      asjdlkfasdf
    </Timeline.Item>
  </Timeline>
);
```
