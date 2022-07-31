import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('TailwindCSS is visible', () => {
    render(<App />)
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument()
  })

  it('Vite + React + Typescript is visible', () => {
    render(<App />)
    expect(screen.getByText('Vite + React + Typescript')).toBeInTheDocument()
  })
})
