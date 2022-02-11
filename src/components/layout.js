import * as React from 'react'

import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'
import { Helmet } from "react-helmet"
import SimpleReactLightbox from 'simple-react-lightbox'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextMediaSplit from './text-media-split/text-media-split.js'
import ImageBar from './image-bar/image-bar.js'
import TextArea from './text-area/text-area.js'
import TextColumn from './text-column/text-column.js'
import FullImage from './full-image/full-image.js'
import NavigationTiles from './navigation-tiles/navigation-tiles.js'
import NavigationTile from './navigation-tiles/navigation-tile.js'
import ImageCanvas from './image-canvas/image-canvas.js'
import PositionedImage from './positioned-image/positioned-image.js'
import ContactForm from './contact-form/contact-form.js'
import SiteBreadcrumb from './site-breadcrumb/site-breadcrumb.js'

import Icon from '../images/icon.png'
import SocialBanner from '../images/social-banner.jpg'

library.add(fab);

const shortcodes = { 
  TextMediaSplit, 
  ImageBar, 
  TextArea, 
  TextColumn, 
  FullImage, 
  NavigationTiles, 
  NavigationTile, 
  ImageCanvas, 
  PositionedImage, 
  ContactForm,
  FontAwesomeIcon
 }

const Layout = ({ children, pageContext }) => {
  const { pageTitle, metaDescription, crumbs } = pageContext.frontmatter;
  
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
    <SimpleReactLightbox>
      <div>
        <Helmet htmlAttributes={{
          lang: 'en',
        }}>
          <meta charSet="utf-8" />
          <title>{ pageTitle } | {data.site.siteMetadata.title}</title>
          <meta name="description" content={metaDescription}/>
          <meta name="google-site-verification" content="hwsgmF197T_61w_j9Xw8Hd0TdRPdAXCR-MoLOP1FsbI" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Vidaloka&display=swap" rel="stylesheet" />

          <meta property="og:title" content={`${pageTitle} | ${data.site.siteMetadata.title}`} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={ SocialBanner } />

          <meta name="icon" content={ Icon } />
        </Helmet>
        <main>
          <Header/>
          <div className={styles.mainContainer}>
            <SiteBreadcrumb crumbs={crumbs}/>
            <MDXProvider components={ shortcodes }>{children}</MDXProvider>
            <SiteBreadcrumb crumbs={crumbs}/>
          </div>
        </main>
        <Footer/>
      </div>
    </SimpleReactLightbox>
  )
}

export default Layout