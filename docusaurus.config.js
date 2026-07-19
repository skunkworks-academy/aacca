const config = {
  title: 'Alberto Adao IDR',
  tagline: 'Digital Operations, Process Optimisation and PropTech Transformation',
  favicon: 'img/favicon.svg',
  url: 'https://skunkworks-academy.github.io',
  baseUrl: '/aacca/',
  organizationName: 'skunkworks-academy',
  projectName: 'aacca',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex, nofollow, noarchive, nosnippet',
      },
    },
    {
      tagName: 'meta',
      attributes: {name: 'referrer', content: 'strict-origin-when-cross-origin'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: 'Alberto Adao Individual Development Roadmap',
        description: 'A 12-month digital operations, process optimisation and PropTech transformation roadmap.',
        educationalLevel: 'Professional development',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Skunkworks Academy',
          url: 'https://www.skunkworksacademy.com/',
        },
        mentor: {
          '@type': 'Person',
          name: 'Raydo Matthee',
        },
        url: 'https://skunkworks-academy.github.io/aacca/',
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'idr',
          editUrl: 'https://github.com/skunkworks-academy/aacca/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        sitemap: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/favicon.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Alberto Adao IDR',
      hideOnScroll: false,
      logo: {
        alt: 'Skunkworks Academy',
        src: 'img/favicon.svg',
        srcDark: 'img/favicon.svg',
        width: 34,
        height: 34,
      },
      items: [
        {to: '/', label: 'Dashboard', position: 'left', exact: true},
        {to: '/idr/intro', label: 'IDR', position: 'left'},
        {to: '/idr/12-week-plan', label: '12-Week Plan', position: 'left'},
        {to: '/idr/credentials', label: '25 Credentials', position: 'left'},
        {
          type: 'dropdown',
          label: 'Learning',
          position: 'left',
          items: [
            {to: '/idr/curriculum', label: 'Course Curriculum'},
            {to: '/idr/labs', label: 'Labs & Tutorials'},
            {to: '/idr/assignments', label: 'Assignments'},
            {to: '/idr/projects', label: 'Portfolio Projects'},
          ],
        },
        {to: '/idr/calendar', label: 'Calendar', position: 'left'},
        {to: '/idr/kpis', label: 'KPIs', position: 'left'},
        {
          to: '/idr/references',
          label: 'Download IDR',
          position: 'right',
          className: 'navbar-download-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Roadmap',
          items: [
            {label: 'Executive Summary', to: '/idr/intro'},
            {label: 'Development Profile', to: '/idr/profile'},
            {label: '12-Week Plan', to: '/idr/12-week-plan'},
            {label: '12-Month Roadmap', to: '/idr/roadmap'},
          ],
        },
        {
          title: 'Execution',
          items: [
            {label: '25 Credentials', to: '/idr/credentials'},
            {label: 'Course Curriculum', to: '/idr/curriculum'},
            {label: 'Labs & Tutorials', to: '/idr/labs'},
            {label: 'Assignments', to: '/idr/assignments'},
            {label: 'Calendar', to: '/idr/calendar'},
          ],
        },
        {
          title: 'Governance',
          items: [
            {label: 'KPIs & Review Gates', to: '/idr/kpis'},
            {label: 'Mentor & Reviews', to: '/idr/mentor'},
            {label: 'Privacy & Governance', to: '/idr/governance'},
            {label: 'References', to: '/idr/references'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Skunkworks Academy. Dream. Design. Deliver.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'python', 'powershell', 'yaml'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {securityLevel: 'strict'},
    },
    metadata: [
      {
        name: 'description',
        content: 'Alberto Adao’s digital operations, process optimisation and PropTech transformation IDR.',
      },
      {name: 'theme-color', content: '#0f62fe'},
      {property: 'og:title', content: 'Alberto Adao — Individual Development Roadmap'},
      {
        property: 'og:description',
        content: 'A structured 12-month development roadmap with a 12-week credential sprint, labs, assignments and KPI tracking.',
      },
      {property: 'og:url', content: 'https://skunkworks-academy.github.io/aacca/'},
    ],
  },
};

module.exports = config;
