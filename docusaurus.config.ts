import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lahna',
  tagline: 'Enterprise Application Platform',
  favicon: 'img/favicon.ico',

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  future: {
    v4: true,
  },

  url: 'https://your-lahna-docs.example.com',
  baseUrl: '/',

  organizationName: 'hauki-tech',
  projectName: 'lahna',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Lahna',
      logo: {
        alt: 'Lahna',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Hauki Tech sp. z o. o.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
