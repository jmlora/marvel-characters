import React, {useEffect, useState} from 'react'
import styles from './CardList.module.scss'
import { Card } from '../Card'
import { P } from '../../headers'

const CardList = ({
  cards,
}) => 
    <div className={styles.list_container}>
      {cards?.pages.map((page) => 
        <>
          {page?.data.results.map((character, index) => {
            let card = {
              id: character.id,
              title: character.name,
              description: character.description,
              imageSrc: `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`,
              href: character.urls.find(url => url.type === 'detail')?.url
            }
            
            return (<div className={styles.card_list_item} key={card.id}><Card {...card} /></div>)
          })
        }
        </>
      )}
      {(!cards || cards.pages[0].data.total === 0) && <div className={styles.no_result}><P>No results :(</P></div>}
    </div>

export default CardList