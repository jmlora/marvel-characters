import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import styles from './App.module.scss'
import { SearchInput } from './components/inputs/SearchInput'
import { CardList } from './components/cards/CardList'
import { CardProps } from './components/cards/Card/Card'
import { Loader } from './components/loaders/Loader'
import H3 from './components/headers/HeaderH3'
import { debounce } from 'lodash'

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

const charactersFetch = ({queryKey}: {queryKey: string[]}) => {
  const [_key, search] = queryKey

  return fetch(url + (search ? `&name=${search}` : ''))
    .then(res => res.json())
    .then(res => res)
}

function App() {
  const [searchString, setSearchString] = useState('')

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = debounce((event):void =>setSearchString(event.target.value) as any, 600)

  const { isLoading, isError, data, error } = useQuery([character_list_key, searchString], charactersFetch, {
    select: data => data.data.results.map((character:ServerCharacterProps):CardProps => {
        return {
          id: character.id,
          title: character.name,
          description: character.description,
          imageSrc: `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`,
          href: character.urls.find(url => url.type == 'detail')?.url as string
        }
      })
    })

  if (isError) return <div>ERROR</div>

  return (
      <div className={styles.layout}>
        { isLoading && <Loader /> }
        <div className={styles.header}>
          <H3>Search your character</H3>
        </div>
        <div className={styles.container}>
          <div className={styles.search_container}>
            <SearchInput onChange={handleChange} />
          </div>
          <CardList cards={data} />
        </div>
      </div>
  )
}

export default App
