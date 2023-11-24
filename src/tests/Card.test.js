import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../components/Card'
import OneClickResult from '../components/OneClickResult'
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

  test('clicking the "Get a Star" button displays an image', () => {
    render(<Card />);
  
    const button = screen.getByRole('button', { name: /get a star/i });
    fireEvent.click(button);
  
    const image = screen.getByAltText('Star');
  
    expect(image).toBeInTheDocument();
  });


  test('clicking the button triggers the handleShowImage function', () => {
    const handleShowImageMock = jest.fn();
  
    render(<Card />);
  
    const button = screen.getByRole('button', { name: /get a star/i });
    button.onclick = handleShowImageMock;
    fireEvent.click(button);
  
    expect(handleShowImageMock).toHaveBeenCalled();
  });
  
  test('OneClickResult is rendered within Card', () => {
    render(
      <Card>
        <OneClickResult />
      </Card>
    );

    const oneClickResultElement = screen.getByTestId('oneclickresult');
    const cardElement = screen.getByTestId('card');

    expect(cardElement).toContainElement(oneClickResultElement);
  });

  
})
