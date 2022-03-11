import React from 'react'
import styles from './headers.module.scss'

interface PProps {
  /**
   * Content
   */
  children: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
const P = ({
  children,
  }: PProps) => {
    return (
      <p className={styles.p}>{children}</p>
    );
  };
  
export default P