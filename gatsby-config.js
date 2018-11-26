"use strict"

module.exports = {
  siteMetadata: {
    title: "Joseph Duffy's Blog",
    description: "Blog posts created by Joseph Duffy, covering tech, music, and random thoughts",
    siteUrl: "https://josephduffy.co.uk",
    author: {
      name: "Joseph Duffy",
    },
  },
  plugins: [{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Joseph Duffy's Blog",
        short_name: "Joseph Duffy",
        start_url: "/",
        background_color: "#fcfcfc",
        theme_color: "#fcfcfc",
        display: "minimal-ui",
        // TODO: Add icon
        // icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
  ],
}
