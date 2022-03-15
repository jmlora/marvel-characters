import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders components', () => {
  const queryClient = new QueryClient({})

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
  expect(screen.getByText(/search/i)).toBeInTheDocument()
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})
