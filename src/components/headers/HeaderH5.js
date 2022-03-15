import React from 'react'
import styles from './headers.module.scss'

/**
 * Primary UI component for user interaction
 */
const H5 = ({
  children,
  }) => {
    return (
      <h5 className={styles.h5}>{children}</h5>
    )
  }
  
export default H5