import { useStaticQuery, graphql, Link } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './navigation-tiles.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NavigationTile = ({ title, linkPage, imagePath, imageAlt }) => {
  
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
                  formats: [AUTO, WEBP, AVIF]
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

  return (
    <div className="col-12 col-md-4">
        <div className={styles.navigationTile}>
            <Link to={linkPage}>
                <GatsbyImage image={image} alt={imageAlt} />
                <span>{title}</span>
            </Link>
        </div>
    </div>
  )
}

export default NavigationTile