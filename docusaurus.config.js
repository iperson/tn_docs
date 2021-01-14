module.exports = {
  title: 'Terrain Nodes',
  tagline: 'GPU Accelerated Addon for Blender 3D',
  url: 'https://iperson.github.io',
  baseUrl: '/tn_docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iperson', // Usually your GitHub org/user name.
  projectName: 'tn_docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Terrain Nodes',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Gallery',
          position: 'left',
        },
        {
          href: 'https://discord.gg/qQ2cYHQ',
          label: 'Discord',
          position: 'left',
        },
        {
          href: 'https://twitter.com/search?q=%23TerrainNodes&src=hashtag_click',
          label: 'Twitter',
          position: 'left',
        },
        {
          href: 'https://www.youtube.com/channel/UCKAek-EiaHKlQRrn55n66Lg',
          label: 'YouTube',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Tips',
              to: 'docs/quick_tips/',
            },
            {
              label: 'Getting Started',
              to: 'docs/getting_started/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hashtag/TerrainNodes?src=hashtag_click',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/qQ2cYHQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/iperson/tn_docs/edit/master/website/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iperson/tn_docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
