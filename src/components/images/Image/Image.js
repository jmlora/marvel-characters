import React from 'react'
import style from './Image.module.scss'

interface ImageProps {
  src: string,
  alt?: string
}

const Image = ({
  src,
  alt = 'alt text'
}: ImageProps) =>
    <img src={src} className={style.image} alt={alt}/>

export default Image