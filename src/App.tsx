import React, { useState } from 'react'
import { useInfinityQuery } from 'react-query'
import styles from './App.module.scss'
import { SearchInput } from './components/inputs/SearchInput'
import { CardList } from './components/cards/CardList'
import { CardProps } from './components/cards/Card/Card'
import { Loader } from './components/loaders/Loader'
import H3 from './components/headers/HeaderH3'
import { debounce } from 'lodash'
import { LinkButton } from './components/buttons'

interface Url {
  type: string,
  url: string
}

interface ServerCharacterProps {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string
  },
  urls: Array<Url>
}

const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86'

const character_list_key = 'CHARACTER_LIST_KEY'

// const charactersFetch = ({pageParam}: {pageParam: (number)}) => {
  const charactersFetch = ({queryKey, pageParam = 0}: {queryKey: (string | number)[], pageParam: number}) => {
  const [_key, search, page, itemsLimit] = queryKey

  return fetch(`${url}&limit=${itemsLimit}&offset=${pageParam}` + (search ? `&name=${search}` : ''))
    .then(res => res.json())
    .then(res => res)
}

function App() {
  const [searchString, setSearchString] = useState('')
  const [page, setPage] = useState(0)
  const itemsLimit = 2

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = debounce((event):void => setSearchString(event.target.value) as any, 600)

  const { isLoading, isError, data, error }  = useInfinityQuery([character_list_key, searchString, page, itemsLimit], charactersFetch, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    select: (data:any) => data?.data?.results.map((character:ServerCharacterProps):CardProps => {
        return {
          id: character.id,
          title: character.name,
          description: character.description,
          imageSrc: `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`,
          href: character.urls.find(url => url.type === 'detail')?.url as string
        }
      })
    })

  const handleClick:React.MouseEventHandler<HTMLAnchorElement> = () => {
    setPage(page => page + 1)
    return false
  }

  if (isError) return <div>ERROR</div>

  return (
      <div className={styles.layout}>
        { isLoading && <Loader /> }
        <div className={styles.header}>
          <H3>Search your character</H3>
        </div>
        <div className={styles.search_container}>
          <SearchInput onChange={handleChange} />
        </div>
        {!isLoading && isError && <div>{error.message}</div>}
        {!isLoading && <CardList cards={data} />}
        {!isLoading && <div className={styles.load_more_container}>
          <LinkButton href="#" onClick={handleClick}>Load more characters</LinkButton>
        </div>}
      </div>
  )
}

export default App
