import type { GatsbyConfig } from "gatsby"

require('dotenv').config({
  path: `.env.${process.env.TREEHOLE_ENV ?? process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `treehole-web`,
    siteUrl: `https://web.treehole.space`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-use-query-params`,
  ],
}

export default config
