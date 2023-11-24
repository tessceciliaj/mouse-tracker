import { render, screen, fireEvent } from '@testing-library/react'
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

  test('Header renders in application', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    const app = screen.getByTestId('app')

    expect(app).toContainElement(header)
  })

  test('Application renders two buttons', () => {
    render(<App />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(2)
  })

  test('Footer renders correctly in application', () => {
    render(<App />)

    const footer = screen.getByTestId('footer')
    const app = screen.getByTestId('app')

    expect(app).toContainElement(footer)
  })

  test('Card component renders in main', () => {
    render(<App />)

    const cardEl = screen.getByTestId('card')
    const content = screen.queryByRole('main')

    expect(content).toContainElement(cardEl)
  })

  //integration test
  test('image is displayed when "Get a Star" button is clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', {name: "Get a Star"})
    
    fireEvent.click(button)

    const image = screen.getByAltText('Star')

    expect(image).toBeInTheDocument()
  })
})
