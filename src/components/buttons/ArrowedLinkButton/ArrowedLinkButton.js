import React from 'react'
import styles from './ArrowedLinkButton.module.scss'
import { IconArrow } from '../../icons'
import { LinkButton } from '../LinkButton'

interface ButtonProps {
  /**
   * Content
   */
  children?: React.ReactNode | React.ReactNode[],

  /**
   * href link
   */
  href: string,

  /**
  * target (_blank|_self|_parent|_top)
  */
  target: React.HTMLAttributeAnchorTarget | undefined
}

/**
 * Primary UI component for user interaction
 */
const ArrowedLinkButton = ({
    children,
    href,
    target = '_blank'
  }: ButtonProps) => <LinkButton className={styles.arrowed_button} href={href} target={target}>{children}<IconArrow size={20}/></LinkButton>
  
export default ArrowedLinkButton