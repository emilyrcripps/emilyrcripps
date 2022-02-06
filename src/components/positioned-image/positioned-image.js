import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './positioned-image.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PositionedImage = ({ imagePath, imageAlt, height, width, top, right, transform, zIndex }) => {
  
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

  return (
    <GatsbyImage image={image} className={styles.positionedImage} alt={imageAlt} style={{
      height: height,
      width: width,
      top: top,
      right: right,
      transform: transform,
      zIndex: zIndex
    }}/>
  )
}

export default PositionedImage