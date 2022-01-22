import React, { useState } from 'react'
import * as styles from './footer.module.scss'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className={styles.erdFooter}>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <span>Copyright &copy; Emily-Rose Cripps {(new Date().getFullYear())}</span>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer