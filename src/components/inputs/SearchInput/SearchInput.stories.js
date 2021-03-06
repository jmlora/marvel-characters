import React, {useState} from 'react'
import { SearchInput } from '.'

const WrapperComponent = () => {
  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <div>
      <div style={{padding: '50px'}}>
        <span>Result: </span><span data-testid="result">{value}</span>
      </div>
      <div>
        <SearchInput name="test" onChange={handleChange} />
      </div>
    </div>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Inputs/SearchInput',
  component: WrapperComponent,
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
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <WrapperComponent  />

export const Primary = Template.bind({});

