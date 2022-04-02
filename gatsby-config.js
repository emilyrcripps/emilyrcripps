module.exports = {
    siteMetadata: {
        siteUrl: "https://emilyrcripps.com",
        title: "Emily-Rose Cripps Design",
        instagramUrl: "https://www.instagram.com/emilyrcrippsdesign/",
        twitterUrl: "https://twitter.com/crippsie_design/",
        linkedInUrl: "https://www.linkedin.com/in/emily-rose-cripps-0840b8205/",
        wordpressUrl: "https://emilyrosegraphicsblog.wordpress.com/"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-transition-link",
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
                formats: [`webp`],
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              icon: 'src/images/icon.png',
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
    ]
};