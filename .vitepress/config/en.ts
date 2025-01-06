import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Admin Dashboard', link: 'https://company-admin.thinkmars.cn' },
      { text: 'Web', link: 'https://company-web.thinkmars.cn' },
      { text: 'More Platforms', link: 'https://company-app.thinkmars.cn' },
    ],
    sidebar: {
      '/en/product': [
        {
          text: 'Introduction',
          items: [{ text: 'What is it', link: '/en/products/introduction' }],
        },
        {
          text: 'Frontend',
          items: [
            { text: 'Page Metrics Monitoring', link: '/en/products/web-metrics' },
            { text: 'Chat GPT', link: '/en/products/want-chat' },
            { text: 'Free Theme Configuration', link: '/en/products/free-theme-ball' },
            { text: 'CMS Admin Dashboard', link: '/en/products/management' },
          ],
        },
        {
          text: 'Backend',
          items: [
            { text: 'Service Design', link: '/en/products/services' },
            { text: 'CICD', link: '/en/products/CICD' },
            { text: 'Load Balancing', link: '/en/products/nginx' },
            { text: 'Containerization', link: '/en/products/docker' },
            { text: 'API Gateway', link: '/en/products/gateway' },
          ],
        },
      ],
      '/en/others/': [
        {
          text: 'Others',
          items: [
          ],
        },
      ],
    },
    footer: {
      message:
        'Released under <a href="https://github.com/ThinkMars/company/blob/main/LICENSE" target="_blank">MIT License</a>. Please contact for removal if any infringement.',
      copyright:
        `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/ThinkMars" target="_blank">ThinkMars</a>`,
    },
  },
})
