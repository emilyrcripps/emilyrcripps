import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './full-image.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FullImage = ({ imagePath, imageAlt, width }) => {
  
  const data = useStaticQuery(graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
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
    <div className={`container ${styles.componentContainer}`}>
      <div className="row">
        <div className="col-12">
          { width != undefined &&
            <GatsbyImage image={image} alt={imageAlt} width={width} />
          }
          { width == undefined &&
            <GatsbyImage image={image} alt={imageAlt} />
          }
        </div>
      </div>
    </div>
  )
}

export default FullImage