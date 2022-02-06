import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './image-bar.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { chunk } from 'lodash'
import { SRLWrapper } from "simple-react-lightbox";

import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageBar = ({ imagesDirectory, featureImage, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "images/"}}, sort: {fields: name}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 260
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
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

  let colClass = "col-6 col-sm-6 col-md-3";
  let containerClass = "container";

  if (featureImage === "true") {
    colClass = "";
    containerClass = styles.featuredContainer;
  }

  // Search from element up to parent
  function upTo(el, tagName) {
    tagName = tagName.toLowerCase();

    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
    }

    return null;
  }

  function viewClick(e) {
    e.stopPropagation();
    e.preventDefault();
    var clickEl = upTo(e.target, 'a').querySelector('picture').querySelector('img');
    
    if (clickEl) {
      clickEl.click();
    }
  }

  return (
    <div className={`${containerClass}`}>
      <SRLWrapper>
      {imageChunks.map((imagesChunk, chunkIndex) => {
        return (
          <div className={`row ${styles.componentContainer}`}>
            {imagesChunk.map((item, imageIndex) => {
              let altText = ((chunkIndex * 4) + imageIndex + 1).toString();
              return (
                <div className={`${styles.thumbnail} ${colClass}`}>
                  <a href={item.node.childImageSharp.fluid.src}>
                    <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt={`Image ${(altText)}`}/>
                    <span onClick={viewClick} className={styles.viewContainer}><span onClick={viewClick} className={styles.viewCopy}>View</span><FontAwesomeIcon icon={faExpand}/></span>
                  </a>
                </div>
                )
            })}
        </div>)
      })}
      </SRLWrapper>
    </div>
  )
}

export default ImageBar