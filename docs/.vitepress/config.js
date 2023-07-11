export default {
  title: "Technical Secrets",
  description: "Inside Vue and React implementation",

  themeConfig: {
    logo: "/logo.svg",
    sidebar: [
      {
        text: "Why&What",
        items: [
          {
            text: "概述",
            link: "/guide/00-introduction",
          },
          {
            text: "为什么要从文档开始",
            link: "/guide/01-start-with-documentation",
          },
          {
            text: "阅读、学习底层的意义",
            link: "/guide/02-underlying-meaning",
          },
        ],
      },
      {
        text: "初识 Vue",
        items: [
          {
            text: "编写第一个 Vue 组件",
            link: "/guide/vue/write-first-VueComponents",
          },
        ],
      },
      {
        text: "初识 React",
        items: [
          {
            text: "编写第一个 React 组件",
            link: "/guide/react/write-first-ReactComponents",
          },
        ],
      },
    ],
  },
};
