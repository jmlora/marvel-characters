import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Inputs/Input',
  component: Input,
  decorators: [(Story) => (<div><Story /></div>)],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      name: 'type',
      type: 'string',
      description: 'button type: text, password...'
    },
    onChange: {
      name: 'onChange',
      type: 'function',
      description: 'onChange handler function',
      action: 'changed'
    }
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'text',
};
