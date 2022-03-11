import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  className?: string,
  type?: string,
  placeholder?: string
  onChange?: React.ChangeEventHandler
}

const Input = ({
  className,
  type = 'text',
  placeholder = 'Input text',
  onChange,
}:InputProps) =>
    <input className={`${className} ${styles.input}`} type={type} onChange={onChange} placeholder={placeholder} />

export default Input