import { render, screen } from '@testing-library/react'
import { CardList } from '.'
import CardListProps from './CardList'

describe('CardList', () => {
  it('renders appropriately', () => {
    const args = {
      cards: {
        pages: [
          {
            data: {
              results: [
                {
                  id: 1,
                  imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
                  buttonText: 'Read more',
                  title: 'Storm',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
                  href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
                  target: '_blank',
                  thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
                    extension: 'jpg'
                  },
                  urls: [{
                    type: 'detail',
                    url: 'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=2dd3cfe0f7fc018dc11db7e0dd30d9a4'
                  }]
                }
              ]
            }
          }
        ]
      }
    }

    render(<CardList {...args} />)

    // expect(screen.getByText(args.title)).toBeInTheDocument()
    // expect(screen.getByText(args.description)).toBeInTheDocument()
    // expect(screen.getByText('Read more')).toBeInTheDocument()
    // expect(screen.getByRole('img')).toBeInTheDocument()
  })
})