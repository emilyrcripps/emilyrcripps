import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './footer.module.scss'
import { faTwitter, faLinkedin, faInstagram, faWordpressSimple, faEtsy } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagramUrl
          twitterUrl
          linkedInUrl
          wordpressUrl,
          etsyUrl
        }
      }
    }
  `)

  return (
    <footer className={styles.erdFooter}>
      <div className={`d-none d-md-block ${styles.thornsDesktopLeft}`}></div>
      <div className={styles.footerContent}>
        <ul>
          <li><a href={data.site.siteMetadata.instagramUrl} target="_blank" rel="noreferrer" name="Instagram"><FontAwesomeIcon icon={faInstagram} name="Instagram"/></a></li>
          <li><a href={data.site.siteMetadata.twitterUrl} target="_blank" rel="noreferrer" name="Twitter"><FontAwesomeIcon icon={faTwitter} name="Twitter"/></a></li>
          <li><a href={data.site.siteMetadata.linkedInUrl} target="_blank" rel="noreferrer" name="LinkedIn"><FontAwesomeIcon icon={faLinkedin} name="LinkedIn"/></a></li>
          <li><a href={data.site.siteMetadata.wordpressUrl} target="_blank" rel="noreferrer" name="Blog"><FontAwesomeIcon icon={faWordpressSimple} name="Wordpress"/></a></li>
          <li><a href={data.site.siteMetadata.etsyUrl} target="_blank" rel="noreferrer" name="Etsy"><FontAwesomeIcon icon={faEtsy} name="Etsy"/></a></li>
        </ul>
        <span>&copy; Emily-Rose Cripps {(new Date().getFullYear())}</span><br/>
        <span><a href="/privacy-policy">Privacy Policy</a></span>
      </div>
      <div className={`d-none d-md-block ${styles.thornsDesktopRight}`}></div>
    </footer>
  )
}

export default Footer