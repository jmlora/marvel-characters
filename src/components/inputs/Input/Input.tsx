import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  className?: string,
  type?: string,
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  name?: string
}

const Input = ({
  className,
  type = 'text',
  placeholder = 'Input text',
  onChange,
  name
}:InputProps) =>
    <input className={`${className ? className : ''} ${styles.input}`} type={type} onChange={onChange} placeholder={placeholder} name={name} />

export default Input