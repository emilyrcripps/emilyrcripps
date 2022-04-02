import { useStaticQuery, graphql } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './feature-banner.module.scss'
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FeatureBanner = ({ title, linkPage, imagePath, imageAlt, target }) => {
  
  const data = useStaticQuery(graphql`
    query {
      imageDesktop: file(relativePath: { eq: "home/feature-banner/desktop/image.jpeg" }) {
        childImageSharp {
          fixed(height: 450, width: 1296, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      imageMobile: file(relativePath: { eq: "home/feature-banner/mobile/image.jpeg" }) {
        childImageSharp {
          fixed(height: 450, width: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `);

  const sources = [
    {
      ...data.imageMobile.childImageSharp.fixed,
      media: `(max-width: 767px)`,
    },
    {
      ...data.imageDesktop.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    }
  ]

  if (!target) {
      target = "_self";
  }

  return (
    <div className={`container ${styles.componentContainer}`}>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className={styles.featureBannerContainer}>
              <Img
                fixed={sources}
                alt="Giraffe About Town"
              />
              <AniLink paintDrip to='/portfolio/competitions/giraffe-about-town' hex="#5fc0c5" duration={0.6} target={target}>
                      
                      <span>{title}</span>
                      <div className={styles.featureBannerHeader}>Giraffe About Town</div>
                      <div className={styles.featureBannerCopy}>Emily's giraffe design wins sponsor for Edinburgh's 'Giraffe About Town'.
                      <br/>Follow along on Instagram to keep up with progress.
                      </div>
                      <div className={styles.featureBannerLink}>
                        <span>Read More...</span>
                      </div>
                      <div className={styles.featureBannerTint}>&nbsp;</div>
              </AniLink>
             
            </div>
          </div>
      </div>
    </div>
  )
}

export default FeatureBanner