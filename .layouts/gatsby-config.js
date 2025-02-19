const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Takashi's Digital Garden",
  shortName: "Takashi's Space",
  description:
    "A calm space for all my thoughts and notes!",
  twitterName: "that_takashi",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://thattakashi.me",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/thattakashi/digital-garden",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/that_takashi_",
          },
        ],
        editUrl:
          "https://github.com/thattakashi/digital-garden/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-99CZGYV5XH"],
      },
    },
  ],
};
