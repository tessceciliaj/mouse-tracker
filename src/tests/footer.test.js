import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'
import App from '../App'

describe('footer is properly renderd', ()=> {
  test('footer is rendered in the application', ()=> {
    render(<App />)

    const footer = screen.getByTestId('footer')
    const app = screen.getByTestId('app')

    expect(app).toContainElement(footer)
  })
  
  test('renders footer text', () => {
    render(<Footer />)
    
    const label = screen.getByText('Mouse Tracker © 2023', { exact: true })
    
    expect(label).toBeInTheDocument()
  })
})
