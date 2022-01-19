import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.scss'
import Header from './header/header'

import TextMediaSplit from './text-media-split/text-media-split.js'
import ImageBar from './image-bar/image-bar.js'

const shortcodes = { TextMediaSplit, ImageBar }

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
    </div>
  )
}

export default Layout