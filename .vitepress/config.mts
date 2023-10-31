import { defineConfig } from 'vitepress'
import { nav } from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: 'utils',
  description: 'tool library',
  titleTemplate: false,
  lastUpdated: true,
  base: '/wtest/utils/',

  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    }
  },

  rewrites: {
    'src/:wu/(.*)': 'basis/(.*)'
  }
})
