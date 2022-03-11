import React from 'react'
import styles from './headers.module.scss'

interface H4Props {
  /**
   * Content
   */
  children: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
const H4 = ({
    children,
  }: H4Props) => {
    return (
        <h4 className={styles.h4}>{children}</h4>
    )
  }
  
export default H4