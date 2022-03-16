import React from 'react'
import styles from './Card.module.scss'
import { H5, P } from '../../headers'
import { ArrowedLinkButton } from '../../buttons'
import { Image } from '../../images'

const defaultDescription = '(No description available)'

const Card = ({
  image,
  name,
  description,
  url,
  target = '_blank',
  buttonText = 'Read more',
}) =>
  <div className={styles.container}>
    <div className={styles.image_container}>
      <Image src={image} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>
        <H5>{name}</H5>
      </div>
      <div className={styles.description}>
        {description && <P>{description.length > 95 ? description.substring(0, 95) + '...' : description}</P>}
        {!description && <P italic>{defaultDescription}</P>}
      </div>
    </div>
    <div className={styles.button_container}>
      <ArrowedLinkButton href={url} target={target}>{buttonText}</ArrowedLinkButton>
    </div>
  </div>

export default Card