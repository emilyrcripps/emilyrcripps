module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Emily-Rose Design"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/layout.js")
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src/pages`,
              path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src/images`,
              path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              defaults: {
                formats: [`auto`, `webp`],
                placeholder: `dominantColor`,
                breakpoints: [576, 768, 992, 1200, 1400],
                backgroundColor: `transparent`,
                tracedSVGOptions: {},
                blurredOptions: {},
                jpgOptions: {},
                pngOptions: {},
                webpOptions: {},
                avifOptions: {},
              },
            },
          },
    ]
};