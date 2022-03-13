import React from 'react'
import styles from './CardList.module.scss'
import { Card } from '../Card'
import { CardProps } from '../Card/Card'
import { H4 } from '../../headers'

export interface CardListProps {
  cards: Array<CardProps> | undefined
}

const CardList = ({
  cards
}: CardListProps) =>
  <div className={styles.list_container}>
    {cards?.map((card, index) => <div className={styles.card_list_item} key={index}><Card {...card} /></div>)}
    {(!cards || cards.length == 0) && <div className={styles.no_result}><H4>No results</H4></div>}
  </div>

export default CardList