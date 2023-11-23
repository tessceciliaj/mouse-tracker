import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import ClickyButton from '../components/ClickyButton'

describe('result for oneClick renders as expected', () => {
  test('result renders in card element', () => {
    render(<Card />)

    const ClickyButtonEl = screen.getByTestId('clickybutton')
    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toContainElement(ClickyButtonEl)
  })

  test('oneClick button renders', () => {
    render(<ClickyButton />)

    const button = screen.getByRole('button', { name: 'clicky button' })

    expect(button).toBeInTheDocument()
  })

  test('result has defualt value on initialization', () => {
    render(<ClickyButton />)

    const initialValue = screen.getByText(/click to find out what happens/i)

    expect(initialValue).toBeInTheDocument()
  })

  test('result updates after button click', () => {
    render(<ClickyButton />)

    const button = screen.getByRole('button', { name: 'clicky button' })
    const initialValue = screen.getByText(/click to find out what happens/i)

    fireEvent.click(button)

    expect(initialValue).not.toHaveTextContent('click to find out what happens')
  })
})
