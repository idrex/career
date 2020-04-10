---
title: Lint检查
group:
  title: 通用
  order: 2
---


## husky

一个git钩子工具，这里主要用pre-commit钩子。通俗点讲就是husky可以在你commit之前帮你做一些事情。

## prettier

一个很流行的代码格式化工具，你很容易在编辑器找到实现它的各种插件，像vscode,atom,webstom都可以找到。这里用它在代码提交前做代码格式化。

## eslint

代码检查工具。eslint也可以负责一部分代码格式检查的工作，但是prettier已经做的很好了，所以我便没用eslint的代码格式检查，只让其负责代码错误检查。

## lint-staged

在你提交的文件中，执行自定义的指令。don’t let 💩 slip into your codebase. — lint-staged


### 参考 [https://juejin.im/post/5bf36163e51d45360069e0e8]