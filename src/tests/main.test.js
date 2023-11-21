import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders content in main', () => {
  render(<App />)

  const content = screen.queryByRole('main')

  // render components inside main and check if they render

  expect(content).toBeInTheDocument()
})
