module.exports = {
  siteMetadata: {
    title: 'Drex Wiki',
    description: 'Drex',
    author: 'Drex',
    siteUrl: 'https://drex.wang',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-72788897-5',
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Drex Wiki',
        short_name: 'Drex Wiki Doc',
        display: 'standalone',
        start_url: './?utm_source=homescreen',
        theme_color: '#002140',
        background_color: '#001529',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/docs',
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/blog',
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-header-custom-ids',
          'gatsby-remark-img-warpper-p',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },

    'gatsby-plugin-sitemap',
  ],
};
