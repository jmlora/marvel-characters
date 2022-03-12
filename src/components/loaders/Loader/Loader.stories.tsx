import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Loader/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
