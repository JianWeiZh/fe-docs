module.exports = {
  base: '/fe-docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FE-docs',
      description: '🛠️ 前端文档管理'
    },
    '/en/': {
      lang: 'en-US',
      title: 'FE-docs',
      description: 'FE-docs'
    }
  },
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    // '@vuepress/pwa': {
    //   serviceWorker: true,
    //   updatePopup: {
    //     '/': {
    //       message: "发现新内容可用",
    //       buttonText: "刷新"
    //     },
    //     '/en/': {
    //       message: "New content is available.",
    //       buttonText: "Refresh"
    //     }
    //   }
    // }
  },
  theme: '@vuepress/theme-vue',
  themeConfig: {
    repo: 'ChineseEngineer/fe-docs',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    sidebarDepth: 4,
    sidebar: 'auto',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次编辑时间',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            items: [
              { text: '介绍', link: '/guide/' },
              { text: '新人指南', link: '/guide/newcomers.md' }
            ],

          },
          {
            text: '编码规范',
            items: [
              { text: 'HTML 规范', link: '/standard/html.md' },
              { text: 'CSS 规范', link: '/standard/css.md' },
              { text: 'JavaScript 规范', link: '/standard/js.md' },
              { text: 'Vue 规范', link: '/standard/vue.md' },
              { text: 'Comment 规范', link: '/standard/comment.md' },
            ]
          },
          {
            text: '流程规范',
            items: [
              { text: 'Work 规范', link: '/standard/workFlow.md' },
              { text: 'Git 规范', link: '/standard/git.md' },
            ]
          },
          {
            text: '工具使用',
            items: [
              { text: 'WebStorm', link: '/tools/webStorm.md' },
              { text: 'Visual Studio Code', link: '/tools/vscode.md' },
              { text: 'Fiddler', link: '/tools/fiddler.md' },
            ]
          },
          {
            text: '知识库',
            items: [
              { text: 'bug 库', link: '/knowledge/bugs.md' },
              { text: 'CSS 最佳实践', link: '/knowledge/bestCss.md' },
              { text: 'JavaScript 最佳实践', link: '/knowledge/bestJavaScript.md' },
              { text: 'Vue 最佳实践', link: '/knowledge/bestVue.md' },
            ]
          },
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ]
      }
    }
  },
  devServer: {},
}
