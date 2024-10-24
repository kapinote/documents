import { defineConfig } from 'vitepress'
import { en, zhTW } from './locales'

export default defineConfig({
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['link', { href: '/assets/images/logo/logo@2x.png', rel: 'icon', type: 'image/x-icon' }],
    ['link', { href: '/assets/images/logo/logo@2x.png', rel: 'apple-touch-icon-precomposed' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['meta', { name: "apple-mobile-web-app-capable", content: "yes" }],
    ['meta', { name: "apple-touch-fullscreen", content: "yes" }],
    ['meta', { name: "apple-mobile-web-app-title", content: "KapiNote Documentation" }],

    // Open Graph / Facebook
    ['meta', { property: 'og:url', content: 'https://docs.kapinote.co/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:image', content: 'https://opengraph.neya.io/neya?v=TkVP7MfZrusKXdpaBUT-FvQ3hkj2SEf9MLgiAXRfgauU1VMmn3r6HLOjeFHDdAAf' }],

    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:url', content: 'https://docs.kapinote.co/' }],
    // ['meta', { property: 'twitter:image', content: 'https://opengraph.neya.io/neya?v=TkVP7MfZrusKXdpaBUT-FvQ3hkj2SEf9MLgiAXRfgauU1VMmn3r6HLOjeFHDdAAf' }],

    // alternate
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "x-default" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "en" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/", hreflang: "en-us" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh-TW" }],
    ['link', { rel: "alternate", href: "https://docs.kapinote.co/zh/", hreflang: "zh-CN" }],

    // google analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9BCQLRZ5XC' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9BCQLRZ5XC');
    `]
  ],

  transformPageData(pageData) {
    pageData.frontmatter.head ??= []

    const title = 'KapiNote Documentation'
    const content = pageData.frontmatter.layout === 'home' ? title : `${pageData.title} | ${title}`
    pageData.frontmatter.head.push(['meta', { name: 'og:title', content } ])
    pageData.frontmatter.head.push(['meta', { name: 'twitter:title', content } ])
  },

  locales: {
    root: { label: 'English', lang: 'en', link: '/en/', ...en },
    zh: { label: '中文', lang: 'zh', link: '/zh/', ...zhTW },
  }
})
