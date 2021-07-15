const { JSGuide } = require("./sidebar/guide");

module.exports = (ctx) => ({
  base: "/",
  dest: "dist",
  define: {
    SDK_URL: ctx.isProd
      ? "https://res.adx.opera.com/adx/adsbyopera.js"
      : "http://127.0.0.1:10001/adsbyopera.js",
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Opera Ads",
      description: "Opera Ads SDK documentations.",
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Opera Ads",
      description: "Opera Ads 文档。",
    },
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
          "/js/guide/": JSGuide("Guide", "./docs/js/guide/"),
          "/vasttag/guide/": JSGuide("Guide", "./docs/vasttag/guide/"),
        },
      },
      "/zh-CN/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        nav: require("./nav/zh-CN"),
        sidebar: {
          "/zh-CN/js/guide/": JSGuide("指南", "./docs/zh-CN/js/guide/"),
          "/zh-CN/vasttag/guide/": JSGuide("指南", "./docs/zh-CN/vasttag/guide/"),
        },
      },
    },
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    ["vuepress-plugin-typescript", {}],
  ],
  extraWatchFiles: [
    ".vuepress/nav/en.js",
    ".vuepress/nav/zh.js",
    ".vuepress/examples/*",
  ],
});
