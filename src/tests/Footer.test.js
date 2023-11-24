import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('footer is properly renderd', () => {
  test('footer is rendered in the application', () => {
    render(<Footer />);
    
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
  })

  test('renders footer text', () => {
    render(<Footer />)

    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toHaveTextContent('Mouse Tracker © 2023', {exact: true})
  })
})
