# Free Theme Configuration Float Ball

A floating ball for dynamically adjusting website theme colors, especially suitable for Element Plus theme customization. Can be used to quickly adjust and verify theme colors in real-time, checking theme color consistency across different pages.

## Repository

[free-theme-ball](https://github.com/ThinkMars/company/packages/free-theme-ball)

## Features

- 🎨 Real-time preview of theme color changes
- 🔄 Support for adjusting hue, saturation, and brightness
- 💫 Pre-built theme color preview sets
- 🎯 Currently only supports Element Plus

## Installation

```bash
pnpm install free-theme-ball
```

## Usage

### Vue 3

```ts
import { createApp } from "vue";
import { VueThemeBallPlugin } from "free-theme-ball";

import App from "./App.vue";

const app = createApp(App);
app.use(VueThemeBallPlugin);
app.mount("#app");
```

### Browser Extension

To reduce code intrusion, a browser extension version is provided, which can be downloaded and used directly.

<img src="/free-theme-extension.png" style="border-radius: 8px; border: 1px solid #ddd"></img>

## Examples

1. Pre-built sets of industry-certified theme colors.

<img src="/free-theme-ball.png" style="border-radius: 8px; border: 1px solid #ddd"></img>

2. For more freedom in choosing theme colors, you can manually input color values, select colors from a palette, or use an eyedropper to pick colors from other sources.

<img src="/free-theme-ball2.png" style="border-radius: 8px; border: 1px solid #ddd"></img>
