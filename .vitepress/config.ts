import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Atrvasa Point',
  description: 'The official blog for the Atrvasa project',
  head: [
    ['meta', { name: 'twitter:site', content: '@atrvasa' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://atrvasa.com/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'NYHGSGQV',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ]
})
