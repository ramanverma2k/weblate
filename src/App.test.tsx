import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App test', () => {
  it('title is visible', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('initial count is 0', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('increments count on click', async () => {
    render(<App />)
    void userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText('count is 1')).toBeInTheDocument()
  })
})
