import React from 'react'
import styles from './Input.module.scss'

const Input = ({
  className,
  type = 'text',
  placeholder = 'Input text',
  onChange,
  name
}) => <input className={`${className ? className : ''} ${styles.input}`} type={type} onChange={onChange} placeholder={placeholder} name={name} />

export default Input