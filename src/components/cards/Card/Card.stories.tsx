import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cards/Card',
  component: Card,
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
    onClick: {
      name: 'onClick',
      type: 'function',
      description: 'onClick function',
      action: 'clicked'
    }
  },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg',
  buttonText: 'Read more',
  title: 'Storm',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada viverra m...'
};
