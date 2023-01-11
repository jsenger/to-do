import { describe, expect, it } from 'vitest'
import { TasksInfo } from '..'
import { getByTextContent, render } from '../../../utils/test-utils'

describe('Task Info component', () => {
  it('displays the number of created and completed tasks', () => {
    const createdTasks = 5
    const completedTasks = 3

    render(
      <TasksInfo
        createdTasks={createdTasks}
        completedTasks={completedTasks}
      />
    )

    expect(getByTextContent(`Created tasks${createdTasks}`)).toBeInTheDocument()
    expect(getByTextContent(`Completed${completedTasks} of ${createdTasks}`)).toBeInTheDocument()
  })
})