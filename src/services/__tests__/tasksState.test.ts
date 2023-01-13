import { describe, it, vi } from 'vitest'
import { getTasksState, postTasksState } from '../tasksState'

const taskStateMock = [
  {
    description: 'Task 1',
    id: '1',
    isComplete: false,
  },
  {
    description: 'Task 2',
    id: '2',
    isComplete: true,
  }
]

describe('Tasks State services', () => {
  afterEach(() => localStorage.clear())

  it('sets task state to local storage as a string', () => {
    vi.spyOn(window.localStorage, 'setItem')
    
    postTasksState(taskStateMock)
    
    expect(localStorage.setItem).toBeCalledTimes(1)
    expect(localStorage.setItem).toBeCalledWith('tasks', JSON.stringify(taskStateMock))
  })
  
  it('gets task state from local storage', () => {
    vi.spyOn(window.localStorage, 'getItem')

    expect(getTasksState()).toStrictEqual([])
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(localStorage.getItem).toBeCalledWith('tasks')

    localStorage.setItem('tasks', JSON.stringify(taskStateMock))

    expect(getTasksState()).toStrictEqual(taskStateMock)
    expect(localStorage.getItem).toBeCalledTimes(2)
  })
})