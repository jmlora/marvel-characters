import React from 'react'
import styles from './icons.module.scss'
import ArrowSvg from '../../assets/icons/icon-arrow.svg'

/**
 * Arrow icon
 */
const IconArrow = ({
  color,
  size = 44,
}) => {
  return (
    <svg className={styles.icon} fill={color} width={size} height={size}>
      <use xlinkHref={`${ArrowSvg}#icon-arrow`} />
  </svg>
  )
}
  
export default IconArrow