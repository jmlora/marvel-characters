import React from 'react'
import styles from './Card.module.scss'
import { H5, P } from '../../headers'
import { ArrowedLinkButton } from '../../buttons'
import { Image } from '../../images'

export interface CardProps {
  id: number,
  imageSrc: string,
  title: string,
  description: string,
  buttonText?: string,
  href: string,
  /**
   * target (_blank|_self|_parent|_top)
  */
  target?: React.HTMLAttributeAnchorTarget | undefined
}

const defaultDescription = '(No description available)'

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
        {description && <P>{description.length > 95 ? description.substring(0, 95) + '...' : description}</P>}
        {!description && <P italic>{defaultDescription}</P>}
      </div>
    </div>
    <div className={styles.button_container}>
      <ArrowedLinkButton href={href} target={target}>{buttonText}</ArrowedLinkButton>
    </div>
  </div>

export default Card