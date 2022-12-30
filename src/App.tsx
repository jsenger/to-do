import { Header } from './components/Header'
import styles from './App.module.scss'
import './global.scss'
import { TaskCreationForm } from './components/TaskCreationForm'
import { TasksInfo } from './components/TasksInfo'
import { EmptyTaskList } from './components/EmptyTaskList'
import { Task } from './components/Task'
import { useState } from 'react'
import { TaskInterface } from './interfaces/task'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([] as TaskInterface[])

  function onAddNewTask(newTask: string) {
    setTasks([
      {
        id: uuidv4(),
        isComplete: false,
        description: newTask
      },
      ...tasks
    ])
  }

  function onDeleteTask(taskId: string) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function onCheckClick(taskId: string) {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isComplete: !task.isComplete} : task))
  }

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <TaskCreationForm onAddNewTask={onAddNewTask} />
        <TasksInfo
          createdTasks={tasks.length}
        />
        {tasks.length === 0 ? (
          <EmptyTaskList />
        ) : tasks.map(task => (
          <Task 
            key={task.id} 
            task={task}
            onDeleteTask={onDeleteTask}
            onCheckClick={onCheckClick}
          />
        ))}
      </main>
    </>
  )
}

export default App
