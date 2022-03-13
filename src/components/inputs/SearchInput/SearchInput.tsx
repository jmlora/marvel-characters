import React from 'react'
import styles from './SearchInput.module.scss'
import { Input } from '../Input'
import { IconMagnifier } from '../../icons'

interface SearchInputProps {
  type?: string,
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  name?: string
}

const SearchInput = ({
  placeholder = 'Search string',
  onChange,
  name
}:SearchInputProps) =>
    <div className={styles.container}>
      <Input className={styles.search_input} type="text" onChange={onChange} placeholder={placeholder} name={name}/>
      <div className={styles.icon_box}>
        <IconMagnifier size={18} />
      </div>
    </div>

export default SearchInput