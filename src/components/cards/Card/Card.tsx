import React from 'react'
import styles from './Card.module.scss'
import { H5, P } from '../../headers'
import { ArrowedButton } from '../../buttons'
import { Image } from '../../images'

interface CardProps {
  imageSrc: string,
  title: string,
  description: string,
  buttonText?: string,
  onClick: React.MouseEventHandler
}

const Card = ({
  imageSrc,
  title,
  description,
  buttonText = 'Read more',
  onClick
}: CardProps) =>
  <div className={styles.container}>
    <div className={styles.image_container}>
      <Image src={imageSrc} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>
        <H5>{title}</H5>
      </div>
      <div className={styles.description}>
        <P>{description}</P>
      </div>
      <div className={styles.button_container}>
        <ArrowedButton onClick={onClick}>{buttonText}</ArrowedButton>
      </div>
    </div>
  </div>

export default Card