import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './text-media-split.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TextMediaSplit = ({ imagePath, imageAlt, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `)


  
  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => imagePath === node.relativePath)
  ), [ data, imagePath ])

  console.log(match);

  let image = getImage(match.node.childImageSharp);

  return (
    <div className={`container ${styles.componentContainer}`}>
      <div className="row">
        <div className="col-lg-6">
          <GatsbyImage image={image} alt={imageAlt} />
        </div>
        <div className="col-lg-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextMediaSplit