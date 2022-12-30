import { Header } from './components/Header'
import styles from './App.module.scss'
import './global.scss'
import { TaskCreationForm } from './components/TaskCreationForm'
import { TasksInfo } from './components/TasksInfo'
import { EmptyTaskList } from './components/EmptyTaskList'
import { Task } from './components/Task'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <TaskCreationForm />
        <TasksInfo />
        <Task />
      </main>
    </>
  )
}

export default App
