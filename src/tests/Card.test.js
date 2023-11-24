import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import ClickyButton from '../components/ClickyButton'
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

    expect(title).toBeInTheDocument()
  })

  test('card has information text', () => {
    render(<Card />)

    const infoEl = screen.getByTestId('infotext')

    expect(infoEl).toHaveTextContent(/[a-z]/i)
  })

  test('card display result', () => {
    render(<Card />)

    const resultEl = screen.queryByTestId('resultbox')

    expect(resultEl).toBeInTheDocument()
  })

  test('handleShowImage is called when the button is clicked', () => {
    const setCountMock = jest.fn();
    render(<Card setCount={setCountMock} />);
  
    const button = screen.getByText('Get a Star');
    fireEvent.click(button);
  
    expect(setCountMock).toHaveBeenCalled();
  });

  test('Get a Star button is rendered correctly.', () => {
    render(<Card />)

    const starButton = screen.getByRole('button', {name: 'Get a Star'})

    expect(starButton).toBeInTheDocument()
  })

  // integration test
  test('ClickyButton is rendered within Card', () => {
    render(
      <Card>
        <ClickyButton />
      </Card>
    );

    const oneClickResultElement = screen.getByTestId('clickybutton');
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toContainElement(oneClickResultElement);
  });

  
})
