import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '.'

describe('Input', () => {
  it('renders appropriately', () => {
    render(<Input name="test" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    userEvent.type(screen.getByRole("textbox"), "hello")
    expect(screen.getByRole("textbox")).toHaveValue("hello");
  })
})


describe('Input functionality', () => {
  const WrapperComponent = () => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event) => setValue(event.target.value)

    return (
      <div>
        <div>
          <span data-testid="result">{value}</span>
        </div>
        <div>
          <Input name="test" onChange={handleChange} />
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