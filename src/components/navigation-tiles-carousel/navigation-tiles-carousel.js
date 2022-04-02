import React from 'react'
import * as styles from './navigation-tiles-carousel.module.scss'

const NavigationTilesCarousel = ({ children }) => {
  
  return (
    <div className={`container ${styles.componentContainer}`}>
        <div className="row">
          {children}
        </div>
    </div>
  )
}

export default NavigationTilesCarousel
