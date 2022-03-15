import React from 'react'
import styles from './icons.module.scss'
import ArrowSvg from '../../assets/icons/icon-magnifier.svg'

/**
 * Arrow icon
 */
const IconArrow = ({
  color,
  size,
}) =>
      <svg className={styles.icon} fill={color} width={size} height={size}>
        <use xlinkHref={`${ArrowSvg}#icon-magnifier`} />
    </svg>
  
export default IconArrow