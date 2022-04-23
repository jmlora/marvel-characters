import React, { useState, useEffect } from 'react'
import styles from './App.module.scss'
import { SearchInput } from './components/inputs/SearchInput'
import { CardList } from './components/cards/CardList'
import { Loader } from './components/loaders/Loader'
import H3 from './components/headers/HeaderH3'
import { debounce } from 'lodash'
import { LinkButton } from './components/buttons'
import { getCharactersAction } from './store/sagas'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsFetching } from './store/store/ui/uiSelectors'
import { selectCharacters } from './store/store/characters/charactersSelectors'


function App() {
  const [searchString, setSearchString] = useState('')
  const [page, setPage] = useState(0)
  const isFetching = useSelector(selectIsFetching)
  const characters = useSelector(selectCharacters)
  const handleChange = debounce((event) => setSearchString(event.target.value), 600)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchNextPage()
  }, [dispatch])

  useEffect(() => {
    if (page !== 0) {
      setPage(0)
    } else {
      dispatch(getCharactersAction({ searchString, page}))
    }
  }, [searchString])

  const fetchNextPage = () => {
    setPage(page + 1)
    return false
  }

  useEffect(() => {
    dispatch(getCharactersAction({ searchString, page}))
  }, [page])


  return (
      <div className={styles.layout}>
        {isFetching && <Loader /> }
        <div className={styles.header}>
          <H3>Search your character</H3>
        </div>
        <div className={styles.search_container}>
          <SearchInput onChange={handleChange} />
        </div>
        {<CardList cards={characters} />}
        {!isFetching &&
          <div className={styles.load_more_container}>
            <LinkButton marvelMode onClick={fetchNextPage}>Load more characters</LinkButton>
          </div>
        }
      </div>
  )
}

export default App
