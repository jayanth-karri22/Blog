module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152949168-1",
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
  siteMetadata: {
    title: `Jayanth Karri`,
    author: `Jayanth Karri`,
    description: "Personal Blog",
    siteUrl: "https://anybodycancode.dev/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/kj4_Smiley",
      },
      {
        name: "github",
        url: "https://github.com/smileyKJ",
      },
    ],
  },
}
