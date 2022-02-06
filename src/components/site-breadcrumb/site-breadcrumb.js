import React, { useMemo } from 'react'
import * as styles from './site-breadcrumb.module.scss'
import { Link } from 'gatsby'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiteBreadcrumb = ({ crumbs }) => {

    if (!crumbs) {
        crumbs = [];
    }

    return (
        <nav className={styles.siteBreadcrumbs}>
            <ul>
                {crumbs.map((crumbs, index, row) => {
                return (
                    <li>
                        { index + 1 === row.length &&
                            <span>
                                <Link to={crumbs.path} name={crumbs.name}>{crumbs.name}</Link>
                            </span>
                        }
                        { index + 1 !== row.length &&
                            <span>
                                <Link to={crumbs.path} name={crumbs.name}>{crumbs.name}</Link>
                                <small><FontAwesomeIcon icon={faChevronRight} name="Breadcrumb Chevron" /></small>
                            </span>
                        }
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default SiteBreadcrumb