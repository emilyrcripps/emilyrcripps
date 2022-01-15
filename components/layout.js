import * as React from 'react'
import { container } from './layout.module.css'
import styles from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
    const title = "Emily-Rose Design";

  return (
    <div className={container}>
      <title>{pageTitle} | {title}</title>
      <header>{title}</header>
      <nav>
        
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout