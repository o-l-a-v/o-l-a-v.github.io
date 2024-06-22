import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OlavDocs',
  tagline: 'Some guides and maybe a blog?',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://o-l-a-v.github.io', // Set the production url of your site here
  baseUrl: '/', // Set the /<baseUrl>/ pathname under which your site is served. For GitHub pages deployment, it is often '/<projectName>/'
  deploymentBranch: 'gh-pages',
  organizationName: 'o-l-a-v', // Usually your GitHub org/user name.
  projectName: 'o-l-a-v.github.io', // Usually your repo name.
  trailingSlash: false,

  // What to do when broken links are detected
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'md'
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // routeBasePath: '/',
          editUrl:
            'https://github.com/o-l-a-v/docs/tree/main/docs/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/o-l-a-v/docs/tree/main/docs/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-docusaurus.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Doc',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'},
        {
          href: 'https://github.com/o-l-a-v/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Built using',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: 'GitHub Pages',
              href: 'https://pages.github.com/'
            }
          ],
        },
        {
          title: 'About me',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/o-l-a-v',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/olavrb/',
            }
          ],
        },
      ]
    },
    prism: {
      additionalLanguages: ['powershell'],
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
