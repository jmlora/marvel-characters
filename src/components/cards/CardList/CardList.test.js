import { combineReducers, createStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import { charactersReducer } from '../../../store/store'
import { uiReducer } from '../../../store/store'
import { render, screen } from '@testing-library/react'
import { CardList } from '.'

const initialState = {
  characters: [
    {
      id: 1,
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      name: 'Storm',
      description: 'Description 1',
      url: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    },
    {
      id: 2,
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec/landscape_xlarge.jpg',
      buttonText: 'Read more',
      name: 'A.I.M.',
      description: 'Description 2',
      url: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    }
  ],
  ui: {isFetching: false}
}

const rootMockedReducer = combineReducers({
  characters: charactersReducer,
  ui: uiReducer
})

const mockedStore = createStore(
  rootMockedReducer,
  initialState
)

const MockedProvider = ({children}) => (
  <Provider
    store={mockedStore}
  >
    {children}
  </Provider>
)

describe('CardList', () => {
  it('renders appropriately', () => {

    render(<MockedProvider><CardList /></MockedProvider>)

    initialState.characters.forEach(character => {
      expect(screen.getByText(character.name)).toBeInTheDocument()
      expect(screen.getByText(character.description)).toBeInTheDocument()

    })
    // expect(screen.getByText('Read more')).toBeInTheDocument()
    // expect(screen.getByRole('img')).toBeInTheDocument()
  })
})