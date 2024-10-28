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
  lang: 'en',
  title: 'KapiNote',
  description: 'KapiNote Documentation',
  head: [
    ['meta', { property: 'og:locale', content: 'en' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Chrome Web Store', link: 'https://chromewebstore.google.com/detail/kapi-note/mipkdcafgifjojpkonphdmcepnbgddif' },
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: `v${pkg['chrome-app-version']}`,
        items: [{ text: 'Changelog', link: '/versions' }]
      }
    ],

    sidebar: [{
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is KapiNote?', link: '/overview' },
        { text: 'Getting Started', link: '/getting-started' },
      ]
    }, {
      text: 'Tutorial',
      collapsed: false,
      items: [
        { text: 'Basic', link: '/basic' },
        { text: 'Translate', link: '/translate' },
        { text: 'Web Screenshot', link: '/screenshot' },
      ]
    }, {
      text: 'Versions',
      link: '/versions'
    }, {
      text: 'Privacy Policy',
      link: '/privacy_policy'
    }],

    footer: {
      copyright: `© KapiNote. ${copyrightYear} All rights reserved.`,
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
