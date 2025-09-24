import { render, screen } from '@testing-library/react'
import App from '../App'

describe('smoke', () => {
  it('renders key sections', () => {
    render(<App />)
    expect(screen.getByText(/Привет!/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Обо мне' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Увлечения' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Фотогалерея' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Цели и хотелки' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Цитаты' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Как связаться' })).toBeInTheDocument()
  })
})
