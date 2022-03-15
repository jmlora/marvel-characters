import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import styles from './App.module.scss'
import { SearchInput } from './components/inputs/SearchInput'
import { CardList } from './components/cards/CardList'
import { Loader } from './components/loaders/Loader'
import H3 from './components/headers/HeaderH3'
import { debounce } from 'lodash'
import { LinkButton } from './components/buttons'

const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86'

const character_list_key = 'CHARACTER_LIST_KEY'
const limit = 2

const charactersFetch = ({queryKey, pageParam = 0}) => {
  const [_key, search] = queryKey

  return fetch(`${url}&limit=${limit}&offset=${pageParam}` + (search ? `&name=${search}` : ''))
    .then(res => res.json())
    .then(res => res)
}

function App() {
  const [searchString, setSearchString] = useState('')

  const handleChange = debounce((event) => setSearchString(event.target.value), 600)

  const { data, error, isFetching, isFetchingNextPage, fetchNextPage, status } = useInfiniteQuery([character_list_key, searchString], charactersFetch, {
    getNextPageParam: (lastPage) => lastPage ? lastPage.data.offset + lastPage.data.limit : 0,
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams
    })
  })

  return (
      <div className={styles.layout}>
        { isFetchingNextPage && <Loader /> }
        <div className={styles.header}>
          <H3>Search your character</H3>
        </div>
        <div className={styles.search_container}>
          <SearchInput onChange={handleChange} />
        </div>
        {!isFetching && status === 'error' && <div>{error.message}</div>}
        {<CardList cards={data} />}
        {!isFetchingNextPage &&
          <div className={styles.load_more_container}>
            <LinkButton href="#" marvelMode onClick={fetchNextPage}>Load more characters</LinkButton>
          </div>
        }
      </div>
  )
}

export default App
