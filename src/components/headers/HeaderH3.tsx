import React from 'react'
import styles from './headers.module.scss'

interface H3Props {
  /**
   * Content
   */
  children: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
const H3 = ({
    children,
  }: H3Props) => {
    return (
        <h3 className={styles.h3}>{children}</h3>
    )
  }
  
export default H3