import { defineConfig } from 'vitepress'

// current year
const year = new Date().getFullYear()

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'zh-TW',
  title: 'KapiNote',
  description: 'KapiNote 說明文件',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/zh/' }
    ],

    sidebar: [
      {
        text: '簡介',
        items: [
          { text: 'KapiNote 是什麼？', link: '/zh/overview' },
        ]
      }
    ],

    footer: {
      copyright: `© KapiNote. ${year} All rights reserved.`,
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
