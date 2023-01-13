import { describe, expect, it } from 'vitest'
import { EmptyTaskList } from '..'
import { render, screen } from '../../../utils/test-utils'

describe('Empty Task List component', () => {
  it('renders correctly', () => {
    render(<EmptyTaskList />)

    expect(screen.getByAltText('Clipboard icon')).toBeInTheDocument()
    expect(screen.getByText('You don\'t have any tasks yet')).toBeInTheDocument()
    expect(screen.getByText('Add new tasks and organize your to-do items')).toBeInTheDocument()
  })
})