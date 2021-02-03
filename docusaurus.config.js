module.exports = {
  title: 'Terrain Nodes',
  tagline: 'GPU Accelerated Add-on for Blender 3D',
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
          href: 'https://www.youtube.com/watch?v=bOu9OoP-V5k',
          label: 'Features Demo',
          position: 'left',
        },
        {
          href: 'https://discord.gg/qQ2cYHQ',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://www.youtube.com/channel/UCKAek-EiaHKlQRrn55n66Lg',
          label: 'YouTube',
          position: 'right',
        },
        {
          href: 'https://blenderartists.org/t/terrain-nodes-add-on-for-nvidia-gpus/1282105',
          label: 'Blender Artists',
          position: 'right',
        },
        {
          href: 'https://twitter.com/ValeraBarashkov',
          label: 'Twitter',
          position: 'right',
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
              to: 'docs/',
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
              label: 'Discord',
              href: 'https://discord.gg/qQ2cYHQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ValeraBarashkov',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCKAek-EiaHKlQRrn55n66Lg',
            },
            {
            href: 'https://blenderartists.org/t/terrain-nodes-add-on-for-nvidia-gpus/1282105',
            label: 'Blender Artists Forum',
            }
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
