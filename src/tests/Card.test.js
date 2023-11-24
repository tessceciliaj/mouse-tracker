import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import ClickyButton from '../components/ClickyButton'
import App from '../App'

describe('card has its expected elements', () => {
  test('card renders', () => {
    render(<App />)

    const cardElement = screen.getByTestId('card')

    expect(cardElement).toBeInTheDocument()
  })

  test('card has title', () => {
    render(<Card />)

    const title = screen.getAllByRole('heading', { level: 3 })

    expect(title).toHaveLength(1)
  })

  test('card has information text', () => {
    render(<Card />)

    const infoEl = screen.getByTestId('infotext')

    expect(infoEl).toHaveTextContent(/[a-z]/i)
  })

  test('card displays result', () => {
    render(<Card />)

    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toBeInTheDocument()
  })

  test('handleShowImage is called when "Get a Star" button is clicked', () => {
    const setCountMock = jest.fn()
    render(<Card setCount={setCountMock} />)

    const button = screen.getByText('Get a Star')
    fireEvent.click(button)

    expect(setCountMock).toHaveBeenCalled()
  })

  test('Get a Star button is rendered correctly.', () => {
    render(<Card />)

    const starButton = screen.getByRole('button', { name: 'Get a Star' })

    expect(starButton).toBeInTheDocument()
  })

  test('ClickyButton is rendered within Card', () => {
    render(
      <Card>
        <ClickyButton />
      </Card>
    )

    const oneClickResultElement = screen.getByTestId('clickybutton')
    const cardElement = screen.getByTestId('card')

    expect(cardElement).toContainElement(oneClickResultElement)
  })
})
