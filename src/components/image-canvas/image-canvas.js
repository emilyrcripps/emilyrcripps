import React from 'react'
import * as styles from './image-canvas.module.scss'

const ImageCanvas = ({ height, children }) => {
  return (
    <div className={styles.imageCanvas} style={{ height: height }}>
        {children}
    </div>
  )
}

export default ImageCanvas