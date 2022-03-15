import React from 'react'
import styles from './LinkButton.module.scss'

/**
 * Primary UI component for user interaction
 */
const LinkButton = ({
    className,
    children,
    href,
    target,
    onClick,
    marvelMode,
  }) => <a className={`${className ? className : ''} ${marvelMode ? styles.marvelMode : ''} ${styles.button}`} href={href} target={target} onClick={onClick}>{children}</a>
  
export default LinkButton