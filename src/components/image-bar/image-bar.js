import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './image-bar.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageBar = ({ imageOnePath, imageOneAlt, imageTwoPath, imageTwoAlt, imageThreePath, imageThreeAlt, imageFourPath, imageFourAlt, children }) => {
  
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
    `)

  const matchOne = useMemo(() => (
    data.allFile.edges.find(({ node }) => imageOnePath === node.relativePath)
  ), [ data, imageOnePath ]);

  const matchTwo = useMemo(() => (
    data.allFile.edges.find(({ node }) => imageTwoPath === node.relativePath)
  ), [ data, imageTwoPath ]);

  const matchThree = useMemo(() => (
    data.allFile.edges.find(({ node }) => imageThreePath === node.relativePath)
  ), [ data, imageThreePath ]);

  const matchFour = useMemo(() => (
    data.allFile.edges.find(({ node }) => imageFourPath === node.relativePath)
  ), [ data, imageFourPath ]);

  let imageOne = getImage(matchOne.node.childImageSharp);
  let imageTwo = getImage(matchTwo.node.childImageSharp);
  let imageThree = getImage(matchThree.node.childImageSharp);
  let imageFour = getImage(matchFour.node.childImageSharp);

  return (
    <div className={`row ${styles.componentContainer}`}>
      <div className={`col-md-12 col-lg-6 ${styles.padding0}`}>
        <div className="row">
          <div className={`col-6 col-sm-6 col-md-6 ${styles.padding0}`}>
            <GatsbyImage image={imageOne} alt={imageOneAlt} />
          </div>
          <div className={`col-6 col-sm-6 col-md-6 ${styles.padding0}`}>
            <GatsbyImage image={imageTwo} alt={imageTwoAlt} />
          </div>
        </div>
      </div>
      <div className={`col-md-12 col-lg-6 ${styles.padding0}`}>
        <div className="row">
          <div className={`col-6 col-sm-6 col-md-6 ${styles.padding0}`}>
            <GatsbyImage image={imageThree} alt={imageThreeAlt} />
          </div>
          <div className={`col-6 col-sm-6 col-md-6 ${styles.padding0}`}>
            <GatsbyImage image={imageFour} alt={imageFourAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageBar