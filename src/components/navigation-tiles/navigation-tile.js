import { useStaticQuery, graphql, Link } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './navigation-tiles.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavigationTile = ({ title, linkPage, imagePath, imageAlt, target }) => {
  
  const data = useStaticQuery(graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    `);
    
  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => imagePath === node.relativePath)
  ), [ data, imagePath ]);

  let image = getImage(match.node.childImageSharp);

  if (!target) {
      target = "_self";
  }

  return (
    <div className="col-12 col-md-4">
        <div className={styles.navigationTile}>
            <AniLink paintDrip to={linkPage} hex="#5fc0c5" duration={0.6} target={target}>
                <GatsbyImage image={image} alt={imageAlt} />
                <span>{title}</span>
            </AniLink>
        </div>
    </div>
  )
}

export default NavigationTile