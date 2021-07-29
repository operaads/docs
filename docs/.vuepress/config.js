const { listMarkdowns } = require("./sidebar");

module.exports = () => ({
  base: "/",
  dest: "dist",
  define: {
    SDK_URL: "https://res.adx.opera.com/adx/adsbyopera.js",
  },
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Opera Ads",
      description: "Opera Ads Documentations.",
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
          "/ofs/js/": [
            {
              title: "Guide",
              children: listMarkdowns("./docs/ofs/js/"),
            },
            {
              title: "Examples",
              children: listMarkdowns("./docs/ofs/js/examples/", "examples/"),
            },
          ],
          "/ofs/vast-tag/": [
            {
              title: "Guide",
              children: listMarkdowns("./docs/ofs/vast-tag/"),
            },
          ],
          "/ofs/header-bidding/": [
            {
              title: "Guide",
              children: listMarkdowns("./docs/ofs/header-bidding/"),
            },
            {
              title: "Examples",
              children: listMarkdowns(
                "./docs/ofs/header-bidding/examples",
                "examples/"
              ),
            },
          ],
        },
      },
      "/zh-CN/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        nav: require("./nav/zh-CN"),
        sidebar: {
          "/zh-CN/ofs/js/": [
            {
              title: "指南",
              children: listMarkdowns("./docs/zh-CN/ofs/js/"),
            },
            {
              title: "样例",
              children: listMarkdowns(
                "./docs/zh-CN/ofs/js/examples/",
                "examples/"
              ),
            },
          ],
          "/zh-CN/ofs/vast-tag/": [
            {
              title: "指南",
              children: listMarkdowns("./docs/zh-CN/ofs/vast-tag/"),
            },
          ],
          "/zh-CN/ofs/header-bidding/": [
            {
              title: "Guide",
              children: listMarkdowns("./docs/zh-CN/ofs/header-bidding/"),
            },
          ],
        },
      },
    },
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    ["vuepress-plugin-typescript", {}],
  ],
  extraWatchFiles: [".vuepress/nav/*.js"],
});
