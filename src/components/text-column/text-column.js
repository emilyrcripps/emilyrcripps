import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import React, { useMemo } from 'react'
import * as styles from './text-column.module.scss'

const TextColumn = ({ cols, children, divider, headerAlign, noPadding }) => {
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

  if (divider === "right") {
    dividerClass = styles.colDividerRight;
  } else if (divider === "top") {
    dividerClass = styles.colDividerTop;
  }

  let headerAlignClass = "";

  if (headerAlign === "left") {
    headerAlignClass = styles.headerAlignLeft;
  }

  let noPaddingClass = "";

  if (noPadding === "true") {
    noPaddingClass = styles.columnContentNoPadding;
  }

  return (
    <div className={`${columnClass} ${dividerClass} ${headerAlignClass}`}>
      <div className={`${styles.columnContent} ${noPaddingClass}`}>
        {children}
      </div>
    </div>
  )
}

export default TextColumn