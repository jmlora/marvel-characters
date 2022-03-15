import React from 'react'
import styles from './LinkButton.module.scss'

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
   * href link
   */
  href: string,

  /**
   * target (_blank|_self|_parent|_top)
   */
  target?: React.HTMLAttributeAnchorTarget | undefined,

  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined,
}

/**
 * Primary UI component for user interaction
 */
const LinkButton = ({
    className,
    children,
    href,
    target,
    onClick
  }: ButtonProps) => <a className={`${className ? className : ''} ${styles.button}`} href={href} target={target} onClick={onClick}>{children}</a>
  
export default LinkButton