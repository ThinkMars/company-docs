import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '管理后台', link: 'https://admin.company.thinkmars.cn' },
      { text: 'Web', link: 'https://wantchat.company.thinkmars.cn' },
      { text: '更多平台', link: 'https://app.company.thinkmars.cn' },
    ],
    docFooter: {
      prev: '上一个',
      next: '下一个',
    },
    sidebar: {
      '/zh/products': [
        {
          text: '介绍',
          items: [{ text: '是什么', link: '/zh/products/introduction' }],
        },
        {
          text: '前端',
          items: [
            { text: '页面指标监控', link: '/zh/products/web-metrics' },
            { text: '聊天GPT', link: '/zh/products/want-chat' },
            { text: '自由主题配置球', link: '/zh/products/free-theme-ball' },
            { text: 'CMS管理后台', link: '/zh/products/management' },
          ],
        },
        {
          text: '后端',
          items: [
            { text: '服务设计', link: '/zh/products/services' },
            { text: 'CICD', link: '/zh/products/CICD' },
            { text: '负载均衡', link: '/zh/products/nginx' },
            { text: '容器化', link: '/zh/products/docker' },
            { text: 'API网关', link: '/zh/products/gateway' },

          ],
        },
      ],
      '/zh/others/': [
        {
          text: '其他',
          items: [

          ],
        },
      ],
    },
    footer: {
      message:
        '基于 <a href="https://github.com/ThinkMars/company/blob/main/LICENSE" target="_blank">MIT License</a> ',
      copyright:
        `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/ThinkMars" target="_blank">ThinkMars</a>`,
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到明亮主题',
    darkModeSwitchTitle: '切换到暗黑主题',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
  },
})

export const zhSearch: DefaultTheme.LocalSearchOptions['locales'] = {
  zh: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换'
        }
      }
    }
  }
}
