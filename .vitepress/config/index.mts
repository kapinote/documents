import { defineConfig } from 'vitepress'
import { en, zhTW } from './locales'

const title = 'KapiNote Documentation'

export default defineConfig({
  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#7F00FF' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['meta', { name: "apple-mobile-web-app-capable", content: "yes" }],
    ['meta', { name: "apple-touch-fullscreen", content: "yes" }],
    ['meta', { name: "apple-mobile-web-app-title", content: title }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:site_name', content: title }],
    ['meta', { property: 'og:image', content: '/og.png' }],
    ['meta', { property: 'og:url', content: 'https://docs.kapinote.co/' }],

    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:url', content: 'https://docs.kapinote.co/' }],
    ['meta', { property: 'twitter:image', content: '/og.png' }],

    // alternate
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "x-default" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "en" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "en-us" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh-TW" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh-CN" }],

    // google analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-W6E72ZZ5XN' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-W6E72ZZ5XN');
    `]
  ],

  transformPageData(pageData) {
    pageData.frontmatter.head ??= []

    const title = 'KapiNote Documentation'
    const content = pageData.frontmatter.layout === 'home' ? title : `${pageData.title} | ${title}`
    pageData.frontmatter.head.push(['meta', { name: 'og:title', content } ])
    pageData.frontmatter.head.push(['meta', { name: 'twitter:title', content } ])
  },

  sitemap: {
    hostname: 'https://docs.kapinote.co',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  locales: {
    root: { label: 'English', lang: 'en', link: '/', ...en },
    zh: { label: '中文', lang: 'zh', link: '/zh/', ...zhTW },
  },

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
  }
})
