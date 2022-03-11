import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  /**
   * Classname
   */
  className?: string,

  /**
   * Content
   */
  children: React.ReactNode | React.ReactNode[],

  /**
   * onClick function
   */
  onClick?: React.MouseEventHandler
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
    className,
    children,
    onClick,
  }: ButtonProps) => <button type="button" className={`${className} ${styles.button}`} onClick={onClick}>{children}</button>
  
export default Button