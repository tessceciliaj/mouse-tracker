import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import OneClickResult from '../components/OneClickResult'
import App from '../App'

describe('result for oneClick renders as expected', () => {
  test('result renders in card element', () => {
    render(<Card />)

    const oneClickResultEl = screen.getByTestId('oneclickresult')
    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toContainElement(oneClickResultEl)
  })

  test('oneClick button renders', ()=> {
    render(<OneClickResult />)

    const button = screen.getByRole('button', {name: 'one click'})
    

    expect(button).toBeInTheDocument()
  })

  test('result has defualt value on initialization', () => {
    render(<OneClickResult />)

    const initialValue = screen.getByText(/click once to find out what happens/i)

    expect(initialValue).toBeInTheDocument()
  })

  // test('result updates after single click event', () => {
  //   render(<App />)

  //   const elements = screen.getAllByRole('generic')
  //   const randomEl = elements[Math.floor(Math.random() * elements.length)]

  //   fireEvent.click(randomEl)

  //   const initialValue = screen.getByText(/click once on the screen/i)
  //   const clickValue = !initialValue

  //   expect(clickValue).toBeInTheDocument()
  // })
})
