module.exports = ctx => ({
  base: "/docs/",
  dest: "dist",
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Opera Adx',
      description: 'Opera Adx documentations.'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Opera Adx',
      description: 'Opera Adx 文档。'
    }
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      "/": {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
      },
      "/zh-CN/": {
        label: "简体中文",
        selectText: '选择语言',
        ariaLabel: '选择语言',
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      },
    ],
  ],
})
