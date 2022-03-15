import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from '.'

describe('SearchInput component', () => {
  it('renders appropriately', () => {
    render(<SearchInput name="test" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    userEvent.type(screen.getByRole("textbox"), "hello")
    expect(screen.getByRole("textbox")).toHaveValue("hello")
  })
})

describe('SearchInput functionality', () => {
  const WrapperComponent = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)

    return (
      <div>
        <div>
          <span data-testid="result">{value}</span>
        </div>
        <div>
          <SearchInput name="test" onChange={handleChange} />
        </div>
      </div>
    )
  }

  it('works appropriately', () => {
    
    render(<WrapperComponent />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    userEvent.type(screen.getByRole("textbox"), "hello")
    expect(screen.getByRole("textbox")).toHaveValue("hello")
    expect(screen.getByTestId("result")).toHaveTextContent("hello")
  })
})