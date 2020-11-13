module.exports = {
  title: 'Vue Class Component',
  base:'/vue-class-component/',
  description: 'ECMAScript / TypeScript decorator for class-style Vue components',

  themeConfig: {
    
    repo: 'Kian-404/vue-class-component',
    docsDir: 'docs',
    editLinks: true,
    editLinkText:'在 GitHub 上编辑此页',
    lastUpdated: '最新更新时间',

    nav: [
      {
        text: '指南',
        link: '/'
      },
      {
        text: 'API 参考',
        link: '/api/'
      }
    ],

    sidebar: {
      '/api/': [
        ''
      ],

      '/': [
        '',
        'guide/installation.md',
        {
          title: '通用指南',
          collapsable: false,
          children: [
            'guide/class-component.md',
            'guide/additional-hooks.md',
            'guide/custom-decorators.md',
            'guide/extend-and-mixins.md',
            'guide/caveats.md'
          ]
        },
        {
          title: 'TypeScript 指南',
          collapsable: false,
          children: [
            'guide/props-definition.md',
            'guide/property-type-declaration.md',
            'guide/refs-type-extension.md',
            'guide/hooks-auto-complete.md',
            'guide/annotate-component-type-in-decorator'
          ]
        }
      ]
    }
  }
}