import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../components/Header'
import App from '../App'

describe('All header elements are rendered properly', () => {
  test('Header is rendered', () => {
    render(<App />);

    const header = screen.getByText('Mouse Tracker');

    expect(header).toBeInTheDocument();
  })

  test('Count is rendered.', () => {
    render(<Header initialCount={0} />)

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent('0')
  })

  test('Page title is rendered', () => {
    render(<Header />)

    const pageTitle = screen.getByRole('heading', { level: 1 })

    expect(pageTitle).toBeInTheDocument()
  })

  test('Subtitle is rendered', () => {
    render(<Header title='Let the clickathon begin!' />)

    const subTitle = screen.getByRole('heading', { level: 2 })

    expect(subTitle).toBeInTheDocument()
  })

  // integration test
  test('Count displays how many star images are displayed', () => {
    render(<App />)

    const counter = screen.getByTestId('count')
    const starBtn = screen.getByRole('button', { name: 'Get a Star' })

    expect(counter).toHaveTextContent('0')

    fireEvent.click(starBtn)

    expect(counter).toHaveTextContent('1')
  })
})
