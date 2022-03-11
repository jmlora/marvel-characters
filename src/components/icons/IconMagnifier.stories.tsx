import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconMagnifier } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icons/IconMagnifier',
  component: IconMagnifier,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      name: 'color',
      type: 'string',
      description: 'Icon color',
      control: 'color'
    },
    size: {
      name: 'size',
      type: 'number',
      description: 'Icon size',
    }
  },
} as ComponentMeta<typeof IconMagnifier>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconMagnifier> = (args) => <IconMagnifier {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: '#333333',
  size: 50,
}
