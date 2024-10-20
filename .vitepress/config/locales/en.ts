import { defineConfig } from 'vitepress'

// current year
const year = new Date().getFullYear()

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
        items: [
          { text: 'What is KapiNote?', link: '/overview' },
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
