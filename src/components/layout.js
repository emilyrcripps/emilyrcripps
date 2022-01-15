import * as React from 'react'
import { container } from './layout.module.css'
import * as styles from './layout.module.scss'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
    const title = "Emily-Rose Design";

  return (
    <div>
      <title>{pageTitle} | {title}</title>
      <main>
        <Header/>
        <div className={styles.mainContainer}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout