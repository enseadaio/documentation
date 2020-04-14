module.exports = {
  title: "Enseada",
  description: "A Cloud native multi-package registry",
  themeConfig: {
    logo: '/enseada-logo.svg',
    nav: [
      { text: 'Users Guide', link: '/users/' },
      { text: 'Developers Guide', link: '/developers/' },
      { text: 'Website', link: 'https://enseada.io', target: '_blank' },
    ],
    repo: 'enseadaio/enseada',
    repoLabel: 'Source Code',
    docsRepo: 'enseadaio/documentation',
    editLinks: true,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    sidebar: {
      '/users/': [
        '',
        'getting-started',
        'install',
        'configuration',
        'users',
        'authorization',
        'package-registries',
        'storage',
        'ui',
      ],
      '/developers/': [
        '',
        {
          title: 'API Reference',
          path: 'https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/enseadaio/enseada/develop/docs/openapi.yml',
        },
      ],
      '/': [
        '',
      ]
    },
  },
  plugins: ['@vuepress/register-components'],
}