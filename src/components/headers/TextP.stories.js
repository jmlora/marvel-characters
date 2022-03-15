import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { P } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Headers/P',
  component: P,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
      description: 'Any children',
    }
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div><P {...args} /></div>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'The night is dark and full of terrors, old man, but the fire burns them all away.'
}
