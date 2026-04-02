import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the main heading', () => {
  render(<App />)
  expect(screen.getByText('Hello from the React Application')).toBeInTheDocument()
})

test('renders the button', () => {
  render(<App />)
  expect(screen.getByText('Click Button')).toBeInTheDocument()
})