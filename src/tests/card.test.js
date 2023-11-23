import { render, screen } from '@testing-library/react'
import Card from '../components/Card'

describe('card has its expected elements', () => {
  test('card has title', () => {
    render(<Card />)

    const title = screen.getAllByText(/title/i)

    expect(title).toHaveLength(1)
  })

  test('card has information text', ()=> {
    render(<Card/>)

    const infoEl = screen.getAllByTestId('infotext')

    expect(infoEl).toHaveLength(1)
  })

  test('card display result', () => {
    render(<Card />)

    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toBeInTheDocument()
  })
})