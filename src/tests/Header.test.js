import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('All header elements are rendered properly', () => {
  test('Page title, subtitle, and count are rendered.', () => {
    render(<Header title='Let the clickathon begin!' initialCount={0} />)

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent('0')
  })

  test('Page title are rendered.', () => {
    render(<Header title='Let the clickathon begin!' initialCount={0} />)

    const pageTitle = screen.getByRole('heading', { level: 1 })

    expect(pageTitle).toBeInTheDocument()
  })

  test('Subtitle are rendered.', () => {
    render(<Header title='Let the clickathon begin!' initialCount={0} />)

    const subTitle = screen.getByRole('heading', { level: 2 })

    expect(subTitle).toBeInTheDocument()
  })
})
