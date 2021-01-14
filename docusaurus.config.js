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
          label: 'Docs / Features',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
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
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
          showReadingTime: true,
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
