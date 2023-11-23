import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Render App correctly', () => {
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
})
