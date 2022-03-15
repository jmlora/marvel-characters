import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Loader/Spinner',
  component: Spinner,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Spinner />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
