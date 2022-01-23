import React, { useState } from 'react'
import * as styles from './footer.module.scss'
import { Link } from 'gatsby'

import InstagramIcon from './images/instagram-icon.png'
import TwitterIcon from './images/twitter-icon.png'
import LinkedInIcon from './images/linkedin-icon.png'

const Footer = () => {
  return (
    <footer className={styles.erdFooter}>
      <div className={`d-none d-md-block ${styles.thornsDesktopLeft}`}></div>
      <div className={styles.footerContent}>
        <ul>
          <li><a href="#"><img style={{height:50, width:50}} src={InstagramIcon}></img></a></li>
          <li><a href="#"><img style={{height:40.5, width:50}} src={TwitterIcon}></img></a></li>
          <li><a href="#"><img style={{height:50, width:50}} src={LinkedInIcon}></img></a></li>
        </ul>
        <span>Copyright &copy; Emily-Rose Cripps {(new Date().getFullYear())}</span>
      </div>
      <div className={`d-none d-md-block ${styles.thornsDesktopRight}`}></div>
    </footer>
  )
}

export default Footer