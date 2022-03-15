import React from 'react'
import style from './Image.module.scss'

const Image = ({
  src,
  alt = 'alt text'
}) => <img src={src} className={style.image} alt={alt}/>

export default Image