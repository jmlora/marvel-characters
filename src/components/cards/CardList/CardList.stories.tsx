import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CardList } from '.'
import { CardListProps } from './CardList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cards/CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  cards: [
    {
      id: 1,
      imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      title: 'Storm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    },
    {
      id: 2,
      imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      title: 'Storm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    },
    {
      id: 2,
      imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      title: 'Storm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    },
    {
      id: 3,
      imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      title: 'Storm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    },
    {
      id: 3,
      imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
      buttonText: 'Read more',
      title: 'Storm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
      href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86',
      target: '_blank',
    }
  ]
}
