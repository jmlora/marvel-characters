import React from 'react'
import styles from './headers.module.scss'

interface PProps {
  /**
   * Content
   */
  children: React.ReactNode,

  /**
   * Variants: italic
   */
   italic?: boolean
}

/**
 * Primary UI component for user interaction
 */
const P = ({
  children,
  italic
  }: PProps) => {
    return (
      <p className={`${styles.p} ${italic ? styles.italic : ''}`}>{children}</p>
    );
  };
  
export default P