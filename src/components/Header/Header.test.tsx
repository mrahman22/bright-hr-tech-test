import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the page title', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: 'User Documents' })).toBeInTheDocument()
  })
})
