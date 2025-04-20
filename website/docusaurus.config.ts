import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OlavDocs',
  tagline: 'Some guides and maybe a blog?',
  favicon: 'img/favicon.ico',

  // Domain and URL path
  baseUrl: '/', // Set the /<baseUrl>/ pathname under which your site is served. For GitHub pages deployment, it is often '/<projectName>/'
  trailingSlash: false,
  url: 'https://olavrb.no', // Set the production url of your site here

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  deploymentBranch: 'gh-pages',
  organizationName: 'o-l-a-v', // Usually your GitHub org/user name.
  projectName: 'o-l-a-v.github.io', // Usually your repo name.

  // Behavior
  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Use Docusaurus Faster with Rspack etc.
  future: {
    experimental_faster: true
  },

  markdown: {
    format: 'detect'
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true
        },
        blog: {
          onUntruncatedBlogPosts: 'throw',
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Search
    algolia: {
      appId: 'AQMXCZ9XJV',
      apiKey: '84d8109b17b3f20e8efee95f19255e12',
      indexName: 'olavrb',
      contextualSearch: false
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: '🏠',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Doc',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/o-l-a-v/o-l-a-v.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
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
      additionalLanguages: [
        'bash',
        'batch',
        'powershell'
      ],
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
