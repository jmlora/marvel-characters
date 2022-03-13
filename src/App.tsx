import React, { useState } from 'react'
import './App.scss'
import { SearchInput } from './components/inputs/SearchInput'
import { CardList } from './components/cards/CardList'
import { CardProps } from './components/cards/CardList/CardList'

function App() {
  const cards:Array<CardProps> = []

  return (
    <div className="App">
      <div className="container">
        <SearchInput />
        <CardList cards={cards} />
      </div>
    </div>
  );
}

export default App;
