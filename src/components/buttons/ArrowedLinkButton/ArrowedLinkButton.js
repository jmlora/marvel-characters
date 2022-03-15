import React from 'react'
import styles from './ArrowedLinkButton.module.scss'
import { IconArrow } from '../../icons'
import { LinkButton } from '../LinkButton'

/**
 * Primary UI component for user interaction
 */
const ArrowedLinkButton = ({
    children,
    href,
    target = '_blank'
  }) => <LinkButton className={styles.arrowed_button} href={href} target={target}>{children}<IconArrow size={20}/></LinkButton>
  
export default ArrowedLinkButton