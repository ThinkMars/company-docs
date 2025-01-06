# 自由主题配置悬浮球

一个用于动态调整网站主题色的悬浮球，特别适用于 Element Plus 主题定制。可用于快速实时调整主题色验证效果，检测不同页面下主题色应用统一程度。

## 仓库

[free-theme-ball](https://github.com/ThinkMars/company/packages/free-theme-ball)

## 特性

- 🎨 实时预览主题色变化
- 🔄 支持调整色相、饱和度、亮度
- 💫 预制多套主题色预览
- 🎯 目前仅支持 Element Plus

## 安装

```bash
pnpm install free-theme-ball
```

## 使用

### Vue 3

```ts
import { createApp } from "vue";
import { VueThemeBallPlugin } from "free-theme-ball";

import App from "./App.vue";

const app = createApp(App);
app.use(VueThemeBallPlugin);
app.mount("#app");
```

### 浏览器插件

为了减少对代码的侵入，提供了浏览器插件版本，可以下载插件直接使用。

<img src="/free-theme-extension.png" style="border-radius: 8px; border: 1px solid #ddd"></img>

## 示例

1. 预制几套业界认证的主题色。

<img src="/free-theme-ball.png" style="border-radius: 8px; border: 1px solid #ddd"></img>

2. 如果想更自由选择主题色预览，可以手动输入色值、调色板选择色值、吸管吸取别家好看的色值等。

<img src="/free-theme-ball2.png" style="border-radius: 8px; border: 1px solid #ddd"></img>
