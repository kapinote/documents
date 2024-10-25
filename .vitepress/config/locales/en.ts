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
  lang: 'en',
  title: 'KapiNote',
  description: 'KapiNote Documentation',
  head: [
    ['meta', { property: 'og:locale', content: 'en' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is KapiNote?', link: '/overview' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Tutorial',
        collapsed: false,
        items: [
          { text: 'Basic', link: '/basic' },
          { text: 'Translate', link: '/translate' },
          { text: 'Web Screenshot', link: '/screenshot' },
        ]
      },
      {
        text: 'Versions',
        link: '/versions'
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
