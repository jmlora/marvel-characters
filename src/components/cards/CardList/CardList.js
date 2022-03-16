import React from 'react'
import { useSelector } from 'react-redux'
import styles from './CardList.module.scss'
import { Card } from '../Card'
import { P } from '../../headers'
import { selectIsFetching } from '../../../store/store/ui/uiSelectors'
import { selectCharacters } from '../../../store/store/characters/charactersSelectors'

const CardList = () => {
  const isFetching = useSelector(selectIsFetching)
  const characters = useSelector(selectCharacters)

  return (
    <div className={styles.list_container}>
      {characters?.map((character) => <div className={styles.card_list_item} key={character.id}><Card {...character} /></div>)}
      {(!characters || characters.length === 0) && !isFetching && <div className={styles.no_result}><P>No results :(</P></div>}
    </div>
  )
}

export default CardList