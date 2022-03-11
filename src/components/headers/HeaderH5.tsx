import React from 'react'
import styles from './headers.module.scss'

interface H5Props {
  /**
   * Content
   */
  children: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
const H5 = ({
  children,
  }: H5Props) => {
    return (
      <h5 className={styles.h5}>{children}</h5>
    )
  }
  
export default H5