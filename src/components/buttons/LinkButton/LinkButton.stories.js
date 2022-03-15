import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LinkButton } from '.'

export default {
  title: 'Example/Buttons/LinkButton',
  component: LinkButton,
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
      description: 'Any children',
    },
    href: {
      name: 'href',
      type: 'string',
      description: 'Link URL',
    },
    target: {
      name: 'target',
      type: 'string',
      description: 'Link target (_blank|_self|_parent|_top)',
    }
  },
}

const Template = (args) => <LinkButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Read more',
}

export const MarvelButton = Template.bind({})

MarvelButton.args = {
  children: 'Read more',
  marvelMode: true,
}