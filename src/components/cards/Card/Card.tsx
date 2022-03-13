import React from 'react'
import styles from './Card.module.scss'
import { H5, P } from '../../headers'
import { ArrowedLinkButton } from '../../buttons'
import { Image } from '../../images'

interface CardProps {
  imageSrc: string,
  title: string,
  description: string,
  buttonText?: string,
  href: string,
  /**
   * target (_blank|_self|_parent|_top)
  */
  target: React.HTMLAttributeAnchorTarget | undefined
}

const Card = ({
  imageSrc,
  title,
  description,
  href,
  target = '_blank',
  buttonText = 'Read more',
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
        <ArrowedLinkButton href={href} target={target}>{buttonText}</ArrowedLinkButton>
      </div>
    </div>
  </div>

export default Card