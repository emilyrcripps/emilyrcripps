import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'

import TextMediaSplit from './text-media-split/text-media-split.js'
import ImageBar from './image-bar/image-bar.js'
import TextArea from './text-area/text-area.js'
import TextColumn from './text-column/text-column.js'
import FullImage from './full-image/full-image.js'

const shortcodes = { TextMediaSplit, ImageBar, TextArea, TextColumn, FullImage }

const Layout = ({ children, pageContext }) => {
  const { pageTitle } = pageContext.frontmatter;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{ pageTitle } | {data.site.siteMetadata.title}</title>
      <main>
        <Header/>
        <div className={styles.mainContainer}>
          <MDXProvider components={ shortcodes } localImages={pageContext.frontmatter.embeddedImagesLocal}>{children}</MDXProvider>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout