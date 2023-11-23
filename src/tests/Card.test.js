import { render, screen } from '@testing-library/react'
import Card from '../components/Card'
import App from '../App'

describe('card has its expected elements', () => {
  test('card renders in main', () => {
    render(<App />)

    const cardEl = screen.getByTestId('card')
    const content = screen.queryByRole('main')

    expect(content).toContainElement(cardEl)
  })

  test('card has title', () => {
    render(<Card />)

    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toHaveLength(1)
  })

  test('card has information text', () => {
    render(<Card />)

    const infoEl = screen.getAllByTestId('infotext')

    expect(infoEl).toHaveLength(1)
  })

  test('card display result', () => {
    render(<Card />)

    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toBeInTheDocument()
  })
})
