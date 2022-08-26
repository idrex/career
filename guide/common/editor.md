---
title: 编辑器
order: 2
group:
  title: 通用
  order: 2
---

## 编辑器配置

EditorConfig 有助于为跨各种编辑器和 IDE 处理同一项目的多个开发人员维护一致的编码风格。EditorConfig 项目由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。EditorConfig 文件很容易阅读，并且可以很好地与版本控制系统配合使用。

- indent_style: 设置为制表符或空格分别使用硬制表符或软制表符。
- indent_size: 定义用于每个缩进级别的列数和软制表符的宽度（如果支持）的整数。当设置为 tab 时，tab_width 将使用（如果指定）的值。
- tab_width: 定义用于表示制表符的列数的整数。这默认为 的值，indent_size 通常不需要指定。
- end_of_line: 设置为 lf、cr 或 crlf 以控制换行符的表示方式。
- charset: 设置为 latin1 , utf-8 , utf-8-bom , utf-16be 或 utf-16le 来控制字符集。
- trim_trailing_whitespace: 设置为 true 以删除换行符之前的任何空白字符，设置为 false 以确保它不会。
- insert_final_newline: 设置为 true 以确保文件在保存时以换行符结尾，设置为 false 以确保它没有。
- root: 应在文件顶部任何部分之外指定的特殊属性。设置为 true 以停止.editorconfig 对当前文件的文件搜索。

[EditorConfig 官网](https://editorconfig.org/)

## VS Code

推荐的代码编辑器

### 插件安装

- `EditorConfig for VS Code` 编辑器配置
- `vscode-icons` 各种漂亮图标
- `filesize` 左下角显示文件大小的插件
- `Bracket Pair Colorizer` 成对的彩色括号
- `Indent-Rainbow` 带颜色的缩进
- `Color Highlight` 直观显示在 css/web 中定义的颜色
- `Code Runner` 立刻运行代码
- `Polacode-44886` 代码段生成图片
- `Auto Import` 自动去查找、分析、然后提供代码补全
- `Prettier` 一键美化你的 JavaScript/TypeScript/CSS 代码
- `npm Intellisense` 自动补全 npm 模块名称
- `Color Highlight` 展示定义的颜色
- `Debugger for Chrome` 用 Chrome 来 Debug 你的 JavaScript 代码
- `Trailing Spaces` 高亮那些冗余的空格，可以快速删掉
- `Apollo GraphQL` GraphQL 支持插件
- `JavaScript (ES6) code snippets` ES6 语法中 JavaScript 的代码片段
- `lit-html` html 代码提升工具
- `Markdown Preview Enhanced` Markdown 文档显示
