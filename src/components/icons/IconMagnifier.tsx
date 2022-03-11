import React from 'react'
import styles from './icons.module.scss'
import ArrowSvg from '../../assets/icons/icon-magnifier.svg'

interface IconMagnifierInterface {
  color?: string,
  size: number
}
/**
 * Arrow icon
 */
const IconArrow = ({
  color,
  size,
}: IconMagnifierInterface) => {
    return (
      <svg className={styles.icon} fill={color} width={size} height={size}>
        <use xlinkHref={`${ArrowSvg}#icon-magnifier`} />
    </svg>
    )
  }
  
export default IconArrow