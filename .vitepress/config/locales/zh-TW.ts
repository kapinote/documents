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
        collapsed: false,
        items: [
          { text: 'KapiNote 是什麼？', link: '/zh/overview' },
          { text: '快速開始', link: '/zh/getting-started' },
        ]
      },
      {
        text: '教學文件',
        collapsed: false,
        items: [
          { text: '基本功能', link: '/zh/basic' },
          { text: '總結功能', link: '/zh/summarize' },
          { text: '翻譯功能', link: '/zh/translate' },
          { text: '網頁截圖', link: '/zh/web-screenshot' },
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
