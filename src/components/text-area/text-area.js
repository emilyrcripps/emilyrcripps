import React from 'react'
import * as styles from './text-area.module.scss'

const TextArea = ({ children }) => {
  return (
    <div className={`container ${styles.componentContainer}`}>
      <div className="row">
          {children}
      </div>
    </div>
  )
}

export default TextArea