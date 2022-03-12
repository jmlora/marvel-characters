import React from 'react'
import style from './Image.module.scss'

interface ImageProps {
  src: string
}

const Image = ({
  src
}: ImageProps) =>
    <img src={src} className={style.image}/>

export default Image