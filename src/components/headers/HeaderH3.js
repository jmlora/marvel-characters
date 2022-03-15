import React from 'react'
import styles from './headers.module.scss'

/**
 * Primary UI component for user interaction
 */
const H3 = ({
    children,
  }) => {
    return (
        <h3 className={styles.h3}>{children}</h3>
    )
  }
  
export default H3