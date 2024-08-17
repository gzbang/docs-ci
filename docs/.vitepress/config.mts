import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: 'openMind docs',
  description: 'openMind docs',
  cleanUrls: false,
  ignoreDeadLinks: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico?v=2'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  appearance: false,
  titleTemplate: true,
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  }
});
