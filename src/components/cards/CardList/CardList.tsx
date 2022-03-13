import React from 'react'
import styles from './CardList.module.scss'
import { Card } from '../Card'

export interface CardProps {
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

export interface CardListProps {
  cards: Array<CardProps>
}

const CardList = ({
  cards
}: CardListProps) =>
  <div className={styles.list_container}>
    {cards.map(card => <div className={styles.card_list_item}><Card {...card} /></div>)}
  </div>

export default CardList