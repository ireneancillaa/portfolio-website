import { render, screen } from '@testing-library/react'
import { Footer } from './components/footer'

test('renders Irene Ancilla in footer', () => {
  render(<Footer />)
  const elements = screen.getAllByText(/Irene Ancilla/i)
  expect(elements.length).toBeGreaterThan(0)
})
