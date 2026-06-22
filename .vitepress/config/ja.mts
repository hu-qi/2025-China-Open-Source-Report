import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const ja = defineConfig({
  lang: 'ja-JP',
  title: '2025 中国オープンソース年次報告書',
  description: '2025 中国オープンソース年次報告書',

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja' },
      { text: '過去の年次報告書', link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd', target: '_blank' }
    ],

    sidebar: [
      {
        items: [
          { text: '巻頭言', link: '/ja/preface' },
          { text: 'アンケート編', link: '/ja/questionnaire' },
          { text: 'データ編', link: '/ja/data' },
          { text: '商業化編', link: '/ja/commercialization' },
          { text: 'オープンソースAI編', link: '/ja/ossAI' },
          { text: 'オープンソースフィジカルAI編', link: '/ja/embodied-intelligence' },
          { text: 'Web3.0編', link: '/ja/web3' },
          { text: 'オープンソース大事記', link: '/ja/open-source-milestones' },
        ]
      }
    ],

    footer: {
      message: 'Released under the CC BY-SA 4.0 License.',
      copyright: 'Copyright © 2014-present KAIYUANSHE'
    },

    editLink: {
      pattern: 'https://github.com/kaiyuanshe/2025-China-Open-Source-Report/edit/main/:path',
      text: 'GitHub でこのページを編集'
    },

    lastUpdated: {
      text: '最終更新',
    },

    docFooter: {
      prev: '前へ',
      next: '次へ'
    },
  },
})
