import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './image-bar.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { chunk } from 'lodash'
import { SRLWrapper } from "simple-react-lightbox";

const ImageBar = ({ imagesDirectory, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "images/"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 260
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `)

  const images = useMemo(() => (
    data.allFile.edges.filter(({ node }) => node.relativePath.indexOf(imagesDirectory) > -1)
  ), [ data, imagesDirectory ]);

  let imageChunks = chunk(images, 4);

  return (
    <div className="container">
      <SRLWrapper>
      {imageChunks.map((imagesChunk, i) => {
        return (
          <div className={`row ${styles.componentContainer}`}>
            {imagesChunk.map((item, i) => {
              return (
                <div className={`col-6 col-sm-6 col-md-3`}>
                  <a href={item.node.childImageSharp.fluid.src}>
                    <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} />
                  </a>
                </div>)
            })}
        </div>)
      })}
      </SRLWrapper>
    </div>
  )
}

export default ImageBar