import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Images/Image',
  component: Image,
  argTypes: {
      src: {
          name: 'src',
          type: 'string',
          description: 'Image URL'
      }
  }
} as ComponentMeta<typeof Image>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args}/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    src: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg'
}