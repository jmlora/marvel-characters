import React from 'react'
import styles from './CardList.module.scss'
import { Card } from '../Card'
import { CardProps } from '../Card/Card'
import { P } from '../../headers'

export interface CardListProps {
  cards: Array<CardProps> | undefined
}

const CardList = ({
  cards
}: CardListProps) =>
  <div className={styles.list_container}>
    {cards?.map((card, index) => <div className={styles.card_list_item} key={index}><Card {...card} /></div>)}
    {(!cards || cards.length == 0) && <div className={styles.no_result}><P>No results :(</P></div>}
  </div>

export default CardList