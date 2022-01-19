import * as React from 'react'
import logo from './logo-small.png'
import * as styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.erdHeader}>
      <div className="container">
        <div className={styles.erdLogoContainer}>
            <img
                className={styles.erdLogo}
                alt="Emily-Rose Design"
                src={logo}
            />
            <span className={styles.erdLogoCopyDesktop}>Graphic Design and Illustration</span>
        </div>
      </div>
    </div>
  )
}

export default Header