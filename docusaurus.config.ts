import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Code Docs',
  tagline: '读读代码，写写文档，看看博客',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://daoodao.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'daodao-bot', // Usually your GitHub org/user name.
  projectName: 'code-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/daodao-bot/code-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/daodao-bot/code-docs/tree/main/',
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
    navbar: {
      title: 'Code Docs',
      logo: {
        alt: 'Code Docs Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'codeSidebar',
          position: 'left',
          label: 'Code',
        },
        {
          type: 'docSidebar',
          sidebarId: 'demoSidebar',
          position: 'left',
          label: 'Demo',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right'
        },
        {
          to: '/about',
          label: 'About',
          position: 'right'
        },
        {
          href: 'https://github.com/daodao-bot/code-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://gitee.com/daodao-bot/code-docs',
          label: 'Gitee',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Code',
              to: '/docs/code',
            },
            {
              label: 'Demo',
              to: '/docs/demo',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Helper',
              href: 'https://helper.cool',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/daodao-bot/code-docs',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/daodao-bot/code-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code Docs . Built by DaoDao .`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      // theme: {light: 'neutral', dark: 'forest'},
    }
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
