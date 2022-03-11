import React from 'react'
import styles from './ArrowedButton.module.scss'
import { IconArrow } from '../../icons'
import { Button } from '../Button'

interface ButtonProps {
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
const ArrowedButton = ({
    children,
    onClick,
  }: ButtonProps) => <Button className={styles.arrowed_button} onClick={onClick}>{children}<IconArrow size={20}/></Button>
  
export default ArrowedButton