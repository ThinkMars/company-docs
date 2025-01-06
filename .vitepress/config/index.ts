import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh } from './zh'
import { commonConfig } from './common'

export default defineConfig({
  ...commonConfig,
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  }
})