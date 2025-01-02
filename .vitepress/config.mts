import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Company',
  description: 'collect more enterprise products',
  srcDir: 'src',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    logo: {
      src: '/company.png',
      width: 24,
      height: 24,
    },
    nav: [
      { text: '管理后台', link: '' },
      { text: 'Web', link: '' },
      { text: 'APP', link: '' },
      { text: '小程序', link: '' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
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
      }
    },
    docFooter: {
      prev: '上一个',
      next: '下一个',
    },
    sidebar: {
      '/': [
        {
          text: '介绍',
          items: [{ text: '是什么', link: '/introduction/what' }],
        },
        {
          text: '前端',
          items: [
            { text: '页面指标监控', link: '/products/web-metrics' },
            { text: '聊天GPT', link: '/products/want-chat' },
            { text: '自由主题配置球', link: '/products/free-theme-ball' },
          ],
        },
        {
          text: '后端',
          items: [
            { text: '负载均衡', link: '/products/nginx' },
            { text: '容器化', link: '/products/docker' },
            { text: 'API网关', link: '/products/gateway' },
            { text: '服务设计', link: '/products/services' },
          ],
        },
      ],
    },
    footer: {
      message:
        '基于 <a href="https://github.com/ThinkMars/company/blob/main/LICENSE" target="_blank">MIT License</a> 许可发布，如有侵权，请联系删除',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/ThinkMars" target="_blank">ThinkMars</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThinkMars/company', ariaLabel: 'GitHub' },
    ],
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
    externalLinkIcon: true,
  },
})
