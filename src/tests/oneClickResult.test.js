import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import OneClickResult from '../components/OneClickResult'

describe('result for oneClick renders as expected', () => {
  test('result renders in card element', () => {
    render(<Card />)

    const oneClickResultEl = screen.getByTestId('oneclickresult')
    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toContainElement(oneClickResultEl)
  })

  test('oneClick button renders', () => {
    render(<OneClickResult />)

    const button = screen.getByRole('button', { name: 'clicky button' })

    expect(button).toBeInTheDocument()
  })

  test('result has defualt value on initialization', () => {
    render(<OneClickResult />)

    const initialValue = screen.getByText(/click to find out what happens/i)

    expect(initialValue).toBeInTheDocument()
  })

  test('result updates after button click', () => {
    render(<OneClickResult />)

    const button = screen.getByRole('button', { name: 'clicky button' })
    const initialValue = screen.getByText(/click to find out what happens/i)

    fireEvent.click(button)

    expect(initialValue).not.toHaveTextContent('click to find out what happens')
  })

})
