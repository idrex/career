# Lighthouse 网站检测

如果我们曾关注过网络性能，一定对`Lighthouse`不陌生。是的，`Google`推出的这套网页及 WEB 应用评测工具的初衷是为了帮助网页开发人员开发出质量更高的网页。现在它简单易用，即便您是非专业人士也能用`Lighthouse`来评估网站建设质量。

`Lighthouse`全面描述了在网站建设和 WEB 应用领域可能存在的用户体验问题及开发人员可能存在的开发瓶颈。

作为非专业的人士来说，通过`Lighthouse`能够洞察网站存在的不足，而这些不足可能是很难识辨或者根本未曾意识到的。

`Lighthouse`是一个开放源代码的网页及 WEB 程序审核工具，评测涉及几个关键领域：网页性能，可访问性，最佳实践，网页`SEO`能力和渐进式`Web`应用程序。

## 使用

1. `Chrome DevTools` 开发者工具

2. `Chrome` 拓展插件

3. `Node CLI` 命令行工具

- 安装

```bash
npm install -g lighthouse
# or use yarn:
yarn global add lighthouse
```

- 使用

```bash
lighthouse <url>

lighthouse <url> --view                                                   运行完成后，在浏览器中打开HTML报告。
lighthouse <url> --output=json                                            运行完成生成JSON文件
lighthouse <url> --config-path=./myconfig.js                              使用您自己的配置运行Lighthouse：自定义审核，报告生成等。
lighthouse <url> --output=json --output-path=./report.json --save-assets  保存跟踪，devtoolslog和命名的JSON报告。
lighthouse <url> --emulated-form-factor=none                              禁用设备仿真和所有限制。
  --throttling-method=provided
lighthouse <url> --chrome-flags="--window-size=412,660"                   启动具有特定窗口大小的Chrome
lighthouse <url> --quiet --chrome-flags="--headless"                      启动Headless Chrome，关闭日志记录
lighthouse <url> --extra-headers "{\"Cookie\":\"monster=blue\"}"          发送请求的HTTP标头字符串形式的键/值对
lighthouse <url> --extra-headers=./path/to/file.json                      要发送请求的HTTP标头键/值对的JSON文件的路径
lighthouse <url> --only-categories=performance,pwa                        仅运行指定的类别。 可用类别：accessibility, best-practices, performance, pwa, seo.

# 参考 https://github.com/GoogleChrome/lighthouse#cli-options
```

4. `Node` 模块引用

## 分析

### Performance 性能

- `First Contentful Paint` 首个有效 `DOM` 绘制时间 `FP` & `FCP`
- `First Meaningful Paint` 首次有效绘制时间 `FMP` 
- `Speed Index`
- `First CPU Idle`
- `Time to Interactive`
- `Max Potential First Input Delay`

### Accessibility 无障碍设计

### Best Practices 最佳实践

### SEO 网页优化

### Progressive Web App 渐进式Web应用

## 拓展

参考
[基于 Lighthouse 与 eggjs 的性能指标分析系统](https://www.jianshu.com/p/569fe8450e7f)
