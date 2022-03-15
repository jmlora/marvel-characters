import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cards/Card',
  component: Card,
  decorators: [
    (Story) => (<div style={{width: '350px'}}><Story /></div>)
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageSrc: {
      name: 'imageSrc',
      type: 'string',
      description: 'Image URL for src img property',
    },
    title: {
      name: 'title',
      type: 'string',
      description: 'Card title',
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'Card description',
    },
    buttonText: {
      name: 'buttonText',
      type: 'string',
      description: 'Card button text',
    },
    href: {
      name: 'href',
      type: 'string',
      description: 'URL',
    },
    target: {
      name: 'target',
      type: 'string',
      description: 'Link target (_blank|_self|_parent|_top)'
    }
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
  buttonText: 'Read more',
  title: 'Storm',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...',
  href: 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=2dd3cfe0f7fc018dc11db7e0dd30d9a4&hash=4528110087ecd217614fc61ea2041c86'
};
