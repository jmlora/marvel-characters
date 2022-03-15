import React from 'react'
import styles from './headers.module.scss'

/**
 * Primary UI component for user interaction
 */
const P = ({
  children,
  italic
  }) => {
    return (
      <p className={`${styles.p} ${italic ? styles.italic : ''}`}>{children}</p>
    );
  };
  
export default P