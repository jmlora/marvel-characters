import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card', () => {
  it('renders appropriately', () => {
    const args = {
      title: 'Storm',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      imageSrc: "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg",
      description: "lorem ipsum",
      target: '_blank'
    }

    render(<Card {...args} />)

    expect(screen.getByText(args.title)).toBeInTheDocument()
    expect(screen.getByText(args.description)).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})