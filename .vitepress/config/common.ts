import { defineConfig } from 'vitepress'
import { zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export const commonConfig = defineConfig({
  title: 'Company',
  description: 'Build your enterprise products',
  srcDir: 'src',
  cleanUrls: true,
  // 路径重定向
  rewrites: {
    'zh/:rest*': ':rest*'
  },
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
    externalLinkIcon: true,
    logo: {
      src: '/company.png',
      width: 24,
      height: 24,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThinkMars/company', ariaLabel: 'GitHub' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch
        }
      }
    },
  }
})
