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
  ],
  themeConfig: {
    logo: {
      src: '/company.png',
      width: 24,
      height: 24,
    },
    nav: [],
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
          text: '作品列表',
          items: [
            { text: '页面指标监控', link: '/products/web-metrics' },
            { text: '聊天GPT', link: '/products/want-chat' },
            { text: '自由主题配置球', link: '/products/free-theme-ball' },
          ],
        },
      ],
    },
    footer: {
      message:
        '<a href="https://github.com/ThinkMars/company/blob/main/LICENSE" target="_blank">MIT License</a>',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/ThinkMars" target="_blank">ThinkMars</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThinkMars/company' },
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
  },
})
