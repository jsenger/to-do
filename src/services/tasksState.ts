import { TaskInterface } from "../interfaces/task";

export function postTasksState(tasks: TaskInterface[]) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function getTasksState(): TaskInterface[] {
  const tasksState = window.localStorage.getItem('tasks')

  if (tasksState) {
    return JSON.parse(tasksState)
  } else {
    return []
  }
}