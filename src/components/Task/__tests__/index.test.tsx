import { describe, expect, it, vi } from 'vitest'
import { Task } from '..'
import { render, screen, userEvent, waitFor } from '../../../utils/test-utils'

const taskMock = {
  description: 'Task',
  id: '1',
  isComplete: false,
}

describe('Task component', () => {
  it('renders as unchecked when task is incomplete', () => {
    const {container} = render(
      <Task 
        task={taskMock}
        onCheckClick={vi.fn()}
        onDeleteTask={vi.fn()}
      />
    )
    
    expect(screen.getByText(taskMock.description)).toBeInTheDocument()
    expect(screen.getByAltText('Unchecked item icon')).toBeInTheDocument()
    expect(container.querySelector('div')!.getAttribute('class')).not.toMatch(/complete/gi)
  })

  it('renders as checked when task is complete', () => {
    const {container} = render(
      <Task 
        task={{...taskMock, isComplete: true}}
        onCheckClick={vi.fn()}
        onDeleteTask={vi.fn()}
      />
    )
    
    expect(screen.getByText(taskMock.description)).toBeInTheDocument()
    expect(screen.getByAltText('Checked item icon')).toBeInTheDocument()
    expect(container.querySelector('div')!.getAttribute('class')).toMatch(/complete/gi)
  })

  it('calls provided function with task id when user clicks on delete button', async() => {
    const onDeleteTaskMock = vi.fn()

    render(
      <Task 
        task={taskMock}
        onCheckClick={vi.fn()}
        onDeleteTask={onDeleteTaskMock}
      />
    )

    userEvent.click(screen.getByTitle('Delete task'))
    
    await waitFor(() => expect(onDeleteTaskMock).toBeCalledTimes(1))
    expect(onDeleteTaskMock).toBeCalledWith(taskMock.id)
  })

  it('calls provided function with task id when user marks task as done', async() => {
    const onCheckClickMock = vi.fn()

    render(
      <Task 
        task={taskMock}
        onCheckClick={onCheckClickMock}
        onDeleteTask={vi.fn()}
      />
    )

    userEvent.click(screen.getByAltText('Unchecked item icon'))
    
    await waitFor(() => expect(onCheckClickMock).toBeCalledTimes(1))
    expect(onCheckClickMock).toBeCalledWith(taskMock.id)
  })
})