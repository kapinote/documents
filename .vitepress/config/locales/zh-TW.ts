import { defineConfig } from 'vitepress'

// current year
let copyrightYear = '2024'
const year = new Date().getFullYear()
if (copyrightYear === year.toString()) {
  copyrightYear = year.toString()
} else {
  copyrightYear = `${copyrightYear}-${year}`
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: 'KapiNote',
  description: 'KapiNote 說明文件',
  head: [
    ['meta', { property: 'og:locale', content: 'zh-TW' }],
  ],
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
          { text: '翻譯功能', link: '/zh/translate' },
          { text: '網頁截圖', link: '/zh/screenshot' },
        ]
      },
      {
        text: '版本紀錄',
        link: '/zh/versions'
      }
    ],

    footer: {
      copyright: `© KapiNote. ${copyrightYear} All rights reserved.`,
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
