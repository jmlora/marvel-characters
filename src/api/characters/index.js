const fetchCharacters = ({searchString, page}) => {
  const limit = 18
  const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86'

  return fetch(`${url}&limit=${limit}&offset=${page * limit}` + (searchString ? `&name=${searchString}` : ''))
    .then(res => res.json())
    .then(res => res)
}

export default fetchCharacters