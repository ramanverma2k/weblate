import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('Vite + React + Typescript is visible', () => {
    render(<App />)
    expect(screen.getByText('Vite + React + Typescript')).toBeInTheDocument()
  })

  it('Hello Vite + React is not present', () => {
    render(<App />)
    expect(screen.queryByText('Hello Vite + React')).not.toBeInTheDocument()
  })
})
