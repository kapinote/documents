import { defineConfig } from 'vitepress'
import pkg from '../../../package.json'

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
      { text: 'Chrome 線上應用程式商店', link: 'https://chromewebstore.google.com/detail/kapi-note/mipkdcafgifjojpkonphdmcepnbgddif' },
      { text: '快速開始', link: '/zh/getting-started' },
      {
        text: `v${pkg['chrome-app-version']}`,
        items: [{ text: '更新日誌', link: '/zh/versions' }]
      }
    ],

    sidebar: [{
      text: '簡介',
      collapsed: false,
      items: [
        { text: 'KapiNote 是什麼？', link: '/zh/overview' },
        { text: '快速開始', link: '/zh/getting-started' },
      ]
    }, {
      text: '教學文件',
      collapsed: false,
      items: [
        { text: '基本功能', link: '/zh/basic' },
        { text: '翻譯功能', link: '/zh/translate' },
        { text: '網頁截圖', link: '/zh/screenshot' },
      ]
    }, {
      text: '版本紀錄',
      link: '/zh/versions'
    }, {
      text: '隱私權政策',
      link: '/zh/privacy_policy'
    }],

    footer: {
      copyright: `© KapiNote. ${copyrightYear} All rights reserved.`,
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    docFooter: {
      prev: '上一頁', next: '下一頁'
    },
    outline: { label: '頁面導覽' },
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多語言',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式'
  }
})
