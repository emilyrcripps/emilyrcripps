import React from 'react'
import * as styles from './navigation-tiles.module.scss'

const NavigationTiles = ({ children }) => {
  
  return (
    <div className={`container ${styles.componentContainer}`}>
        <div className="row">
          {children}
        </div>
    </div>
  )
}

export default NavigationTiles
