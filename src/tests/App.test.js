import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Render App correctly', () => {

   // integration test
  test('Coordinates are displayed correctly on mouse movement', () => {
    render(<App />)

    const mockMouseEvent = {
      clientX: 100,
      clientY: 200,
    }
    const coordinateDiv = screen.getByTestId('coor')

    coordinateDiv.dispatchEvent(
      new MouseEvent('mousemove', {
        bubbles: true,
        ...mockMouseEvent,
      }),
    )

    expect(coordinateDiv).toHaveTextContent('Coordinates: 100, 200')
  })

  test('Header renders with correct title', () => {
    render(<App />);

    const headerTitle = screen.getByText('Mouse Tracker');
    expect(headerTitle).toBeInTheDocument();

  });

  test('Application renders two buttons', () => {
    render(<App />)

    const buttons = screen.getAllByRole('button') 

    expect(buttons).toHaveLength(2)
  })


  test('Footer renders correctly', () => {
    render(<App />);
    
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('Card component renders and interacts correctly', () => {
    render(<App />);

    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });
})
