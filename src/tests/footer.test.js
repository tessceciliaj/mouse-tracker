import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('renders footer text', () => {
  render(<Footer />)

  const label = screen.getByText('Mouse Tracker - © 2023', { exact: true })

  expect(label).toBeInTheDocument()
})
