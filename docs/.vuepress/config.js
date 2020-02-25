const { JSGuide } = require("./sidebar/guide");

module.exports = ctx => ({
  base: "/docs/",
  dest: "dist",
  define: {
    SDK_URL: ctx.isProd
      ? "https://res-odx.op-mobile.opera.com/adsbyopera.js"
      : "http://127.0.0.1:10001/index.bundle.js"
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Opera Adx",
      description: "Opera Adx SDK documentations."
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Opera Adx",
      description: "Opera Adx 文档。"
    }
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        nav: require("./nav/en"),
        sidebar: {
          "/js/guide/": JSGuide("Guide")
        }
      },
      "/zh-CN/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        nav: require("./nav/zh-CN"),
        sidebar: {
          "/zh-CN/js/guide/": JSGuide("指南")
        }
      }
    }
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // All options of ts-loader
        }
      }
    ]
  ],
  extraWatchFiles: [
    ".vuepress/nav/en.js",
    ".vuepress/nav/zh.js",
    ".vuepress/examples/*"
  ]
});
