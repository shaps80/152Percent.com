"use strict"

module.exports = {
  siteMetadata: {
    title: "Shaps Better Blog",
    description: "Blog posts created by Shaps, covering tech, music, and random thoughts",
    siteUrl: "https://shaps.me",
    author: {
      name: "Shaps",
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
        name: "Shaps Better Blog",
        short_name: "Shaps",
        start_url: "/",
        background_color: "#fcfcfc",
        theme_color: "#fcfcfc",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
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
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*.js": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
          "/*.css": [
            "Cache-Control: public, max-age=31536000, immutable",
          ]
        },
      },
    },
    "gatsby-plugin-netlify-cache",
  ],
}
