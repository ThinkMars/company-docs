---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "A Full-Stack Product"
  text: ""
  tagline: <span class="tagline">A comprehensive guide to enterprise web architecture</span>
  actions:
    - theme: brand
      text: What?
      link: /products/introduction
    - theme: alt
      text: Projects
      link: /products/web-metrics

features:
  - title: 🤖 GPT-like Chat Product
    details: Provides text Q&A chat functionality based on Zhipu's open-source GLM large model.
  - title: 🔄 CI-CD
    details: Provides continuous integration and continuous deployment to ensure code quality and project stability.
  - title: 📊 Page Metrics Monitoring
    details: Monitors page performance data, access data, resource loading time, network request time, etc.
  # - title: 🎨 Free Theme Color Switching
  #   details: Quickly switch theme colors in real-time for personalization and rapid design decisions.
  - title: ⚙️ CMS Management Backend
    details: Manage product configurations, user permissions, code deployment, and metrics visualization.
  - title: 📦 npm Registry
    details: Provides code hosting service, supporting private repositories and team collaboration.
  - title: 📱 Multi-platform Support
    details: Supports web, APP, and mini-programs.
  - title: 🐳 Containerization
    details: Uses Docker, K8s, private DockerHub, etc.
  - title: ⚖️ Load Balancing
    details: Uses Nginx for reverse proxy and load balancing.
  - title: 🔧 Full-stack Development
    details: Uses Node and Java for backend services, ORM, logging, messaging, databases, etc.
  - title: 🧠 AI-powered Tools
    details: AI editors and plugins to accelerate product development.
  - title: ✨ More
    details: Make a wish for more features.
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

<h2 align="center">Team</h2>
<p align="center">Welcome to join us~</p>
<p align="center">
  <VPTeamMembers size="small" :members="members" />
</p>
