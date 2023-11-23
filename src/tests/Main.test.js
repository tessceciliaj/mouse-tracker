import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders content in main', () => {
  render(<App />)

  const content = screen.queryByRole('main')

  expect(content).toBeInTheDocument()
})
