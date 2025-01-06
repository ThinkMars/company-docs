---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "一个企业级产品"
  text: ""
  tagline: <span class="tagline">带你更全面地了解企业Web技术架构</span>
  actions:
    - theme: brand
      text: 是什么?
      link: /products/introduction
    - theme: alt
      text: 项目列表
      link: /products/web-metrics

features:
  - title: 🤖 类GPT对话产品
    details: 基于智谱开源GLM大模型，提供类似GPT的文本问答对话功能。
  - title: 🔄 CI-CD
    details: 提供持续集成和持续部署功能，确保代码质量和项目稳定性。
  - title: 📊 页面指标监控
    details: 监控页面性能数据、访问数据、资源加载时间、网络请求时间等。
  - title: 🎨 自由主题色切换
    details: 快速实时切换主题色，实现个性化、辅助设计快速决策。
  - title: ⚙️ CMS管理后台
    details: 管理产品相关配置、用户权限、代码发布运维、指标监控可视化等。
  - title: 📦 npm仓库
    details: 提供代码托管服务，支持私有仓库和团队协作。
  - title: 📱 多端支持
    details: 支持web、APP、小程序。
  - title: 🐳 容器化
    details: 使用Docker、K8s、私有DockerHub等。
  - title: ⚖️ 负载均衡
    details: 使用Nginx实现反向代理与负载均衡。
  - title: 🔧 全栈开发
    details: 使用Node与Java参与后端服务、ORM、日志、消息、数据库等。
  - title: 🧠 AI工具加持
    details: AI编辑器与插件加速产品开发。
  - title: ✨ 更多
    details: 更多功能请许愿。
---

<!-- 全局样式 -->
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #14C9C9, #9254DE);
  --vp-c-brand-3: #9254DE;
  --vp-c-brand-2: rgba(146, 84, 222, 0.8);
  --vp-c-brand-1: #9254DE;
}

.tagline {
  font-family: 'Monaco';
  font-style: italic;
  font-size: 18px;
  color: #909399;
}

body {
  font-family: sans-serif, system-ui, 'Microsoft YaHei';
}
</style>

<!-- 团队 -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/48544820?v=4',
    name: 'ThinkMars',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ThinkMars' },
      { icon: 'juejin', link: 'https://juejin.cn/user/3879490951318654' }
    ]
  },
]
</script>

<h2 align="center">团队</h2>
<p align="center">欢迎加入我们~</p>
<p align="center">
  <VPTeamMembers size="small" :members="members" />
</p>
