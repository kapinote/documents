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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is KapiNote?', link: '/en/overview' },
          { text: 'Getting Started', link: '/en/getting-started' },
        ]
      },
      {
        text: 'Tutorial',
        collapsed: false,
        items: [
          { text: 'Basic', link: '/en/basic' },
          { text: 'Translate', link: '/en/translate' },
          { text: 'Web Screenshot', link: '/en/screenshot' },
        ]
      },
      {
        text: 'Versions',
        link: '/en/versions'
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
