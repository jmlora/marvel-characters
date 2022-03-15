import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LinkButton } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Buttons/LinkButton',
  component: LinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LinkButton {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Read more',
};
