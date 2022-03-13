import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArrowedLinkButton } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Buttons/ArrowedLinkButton',
  component: ArrowedLinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
      description: 'Any children',
    },
    onClick: {
      name: 'onClick',
      type: 'function',
      description: 'onClick function',
      action: 'clicked'
    }
  },
} as ComponentMeta<typeof ArrowedLinkButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArrowedLinkButton> = (args) => <ArrowedLinkButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Read more',
};
