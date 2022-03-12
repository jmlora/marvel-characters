import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Loader/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
