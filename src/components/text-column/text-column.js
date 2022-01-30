import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './text-column.module.scss'

const TextColumn = ({ cols, children, divider }) => {
  let columnClass = "col-md-12";

  if (cols === "2") {
    columnClass = "col-md-6";
  }

  if (cols === "3") {
    columnClass = "col-md-4";
  }

  if (cols === "4") {
    columnClass = "col-md-3";
  }

  let dividerClass = "";

  if (divider) {
    console.log(styles.colDivider);
    dividerClass = styles.colDivider;
  } else {
    console.log(false);
  }

  return (
    <div className={`${columnClass} ${dividerClass}`}>
      <div className={styles.columnContent}>
        {children}
      </div>
    </div>
  )
}

export default TextColumn