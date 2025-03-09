import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Admin Dashboard', link: 'https://admin.company.thinkmars.cn' },
      { text: 'Web', link: 'https://wantchat.company.thinkmars.cn' },
      { text: 'More Platforms', link: 'https://app.company.thinkmars.cn' },
    ],
    sidebar: {
      'product': [
        {
          text: 'Introduction',
          items: [{ text: 'What is it', link: '/products/introduction' }],
        },
        {
          text: 'Frontend',
          items: [
            { text: 'Page Metrics Monitoring', link: '/products/web-metrics' },
            { text: 'WantChat', link: '/products/want-chat' },
            // { text: 'Free Theme Configuration', link: '/products/free-theme-ball' },
            { text: 'CMS Admin Dashboard', link: '/products/management' },
          ],
        },
        {
          text: 'Backend',
          items: [
            { text: 'Service Design', link: '/products/services' },
            { text: 'CICD', link: '/products/CICD' },
            { text: 'Load Balancing', link: '/products/nginx' },
            { text: 'Containerization', link: '/products/docker' },
            { text: 'API Gateway', link: '/products/gateway' },
          ],
        },
      ],
      'others': [
        {
          text: 'Others',
          items: [
          ],
        },
      ],
    },
    footer: {
      message:
        'Released under <a href="https://github.com/ThinkMars/company/blob/main/LICENSE" target="_blank">MIT License</a>',
      copyright:
        `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/ThinkMars" target="_blank">ThinkMars</a>`,
    },
  },
})
