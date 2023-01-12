import { describe, expect, it } from 'vitest'
import { Header } from '..'
import { render, screen } from '../../../utils/test-utils'

describe('Header component', () => {
  it('renders with image', () => {
    render(<Header />)

    expect(screen.getByAltText('App logo')).toBeInTheDocument()
  })
})