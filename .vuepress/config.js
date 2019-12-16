module.exports = {
  title: "Enseada",
  description: "A Cloud native multi-package registry",
  themeConfig: {
    logo: '/enseada-logo.svg',
    nav: [
      { text: 'Users Guide', link: '/users/' },
      { text: 'Developers Guide', link: '/developers/' },
      { text: 'Website', link: 'https://enseada.io', target: '_blank' },
      { text: 'Source code', link: 'https://github.com/enseadaio/enseada', target: '_blank' },
    ],
    displayAllHeaders: true,
    sidebar: {
      '/users/': [
        '',
        'install',
        'authentication',
        'authorization',
        'package-registries',
        'ui',
      ],
      '/developers/': [
        'apis',
      ],
      '/': [
        '',
      ]
    },
    // sidebar: [
    //   {
    //     title: 'Getting Started',
    //     path: '/getting-started',
    //   },
    //   {
    //     title: 'Install and Update',
    //     path: '/install'
    //   },
    //   {
    //     title: 'User Guide',
    //     path: '/users/',
    //     children: [
    //       // 'authentication',
    //       // 'authorization',
    //       // 'package-registries',
    //       // 'ui',
    //     ]
    //   },
    //   {
    //     title: 'Developer Guide',
    //     path: '/developers/',
        
    //     children: [
    //       'apis',
    //     ]
    //   },
    // ]
  }
}