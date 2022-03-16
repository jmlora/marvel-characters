import { createReducer } from '@reduxjs/toolkit'
import { resetCharactersAction, setCharactersAction } from './charactersActions'

const charactersReducer = createReducer([], (builder) => {
  builder
    .addCase(setCharactersAction, (state, {payload}) => {
      const characters = payload.data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
        image: `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`,
        url: character.urls.find(url => url.type === 'detail')?.url
      }))

      state.push(...characters)
    })
    .addCase(resetCharactersAction, () => {
      return []
    })
})

export default charactersReducer