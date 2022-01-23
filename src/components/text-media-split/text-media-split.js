import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './text-media-split.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TextMediaSplit = ({ imagePath, imageAlt, reverseLayout, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 700
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
    <div className={`container ${styles.componentContainer}`}>
      <div className="row">
        { reverseLayout !== "true" && 
          <div className="col-lg-6">
            <GatsbyImage image={image} alt={imageAlt} />
          </div>
        }
        <div className="col-lg-6">
          {children}
        </div>
        { reverseLayout === "true" && 
          <div className="col-lg-6">
            <GatsbyImage image={image} alt={imageAlt} />
          </div>
        }
      </div>
    </div>
  )
}

export default TextMediaSplit