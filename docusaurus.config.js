// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

///** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chorus Software Solutions',
  tagline: 'At Chorus we help people help people, by creating operational efficiency, enabling the ultimate patient and practitioner experience, resulting in highest clinical and revenue outcomes. ',
  url: 'https://docs.chorus.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/choruslogo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chorus', // Usually your GitHub org/user name.
  projectName: 'DynamicsDocs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
     // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
      //  blog: {
       //   showReadingTime: true,
      //    // Please change this to your repo.
      //  },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },

        navbar: {
        //title: 'Chorus',
        logo: {
          alt: 'Chorus Logo',
          src: 'img/choruslogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Overview/Welcome',
           // to: 'docs/Patients/Authorization',
           // activeBasePath: 'docs',
            position: 'left',
            label: 'Chorus Documentation',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
         // {
         //   href: 'https://github.com/facebook/docusaurus',
         //   label: 'GitHub',
         //   position: 'right',
         // },
        ],
      },
      algolia: {
        apiKey: 'bc972bbdd9c718d7473c295e86048b24',
        indexName: 'DynamicsDocs',
        appId: '1U3EFD2Y2W',
      },
      footer: {
        style: 'dark',
        links: [
          {
          //  title: 'Docs',
          //  items: [
           //   {
          //      label: 'Tutorial',
           //     to: '/docs/intro',
           //   },
           // ],
          },
          {
         //   title: 'Community',
         //   items: [
         //     {
         //       label: 'Stack Overflow',
         //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
         //     },
         //     {
          //      label: 'Discord',
         //       href: 'https://discordapp.com/invite/docusaurus',
          //    },
          //    {
          //      label: 'Twitter',
          //      href: 'https://twitter.com/docusaurus',
          //    },
         //   ],
          },
          {
          //  title: 'More',
          //  items: [
           //   {
           //     label: 'Blog',
          //      to: '/blog',
           //   },
           //   {
           //     label: 'GitHub',
           //     href: 'https://github.com/facebook/docusaurus',
           //   },
          //  ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chorus Software Solutions LLC.`,
      },
     // prism: {
     //   theme: lightCodeTheme,
     //   darkTheme: darkCodeTheme,
    //  },
    }),
};

module.exports = config;
