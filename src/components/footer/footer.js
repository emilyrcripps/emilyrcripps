import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './footer.module.scss'
import { faTwitter, faLinkedin, faInstagram, faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagramUrl
          twitterUrl
          linkedInUrl
          wordpressUrl
        }
      }
    }
  `)

  return (
    <footer className={styles.erdFooter}>
      <div className={`d-none d-md-block ${styles.thornsDesktopLeft}`}></div>
      <div className={styles.footerContent}>
        <ul>
          <li><a href={data.site.siteMetadata.instagramUrl} target="_blank" name="Instagram"><FontAwesomeIcon icon={faInstagram}/></a></li>
          <li><a href={data.site.siteMetadata.twitterUrl} target="_blank" name="Twitter"><FontAwesomeIcon icon={faTwitter}/></a></li>
          <li><a href={data.site.siteMetadata.linkedInUrl} target="_blank" name="LinkedIn"><FontAwesomeIcon icon={faLinkedin}/></a></li>
          <li><a href={data.site.siteMetadata.wordpressUrl} target="_blank" name="Blog"><FontAwesomeIcon icon={faWordpressSimple}/></a></li>
        </ul>
        <span>&copy; Emily-Rose Cripps {(new Date().getFullYear())}</span><br/>
        <span><a href="/privacy-policy">Privacy Policy</a></span>
      </div>
      <div className={`d-none d-md-block ${styles.thornsDesktopRight}`}></div>
    </footer>
  )
}

export default Footer