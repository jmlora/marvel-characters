import React from 'react'
import styles from './headers.module.scss'

/**
 * Primary UI component for user interaction
 */
const H4 = ({
    children,
  }) => {
    return (
        <h4 className={styles.h4}>{children}</h4>
    )
  }
  
export default H4