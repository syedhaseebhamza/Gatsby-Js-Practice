/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `web-warrior`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: "(max-width: 480px)",
          sm: "(max-width: 768px)",
          md: "(max-width: 1024px)",
          lg: "(max-width: 1280px)",
          xl: "(max-width: 1440px)",
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
