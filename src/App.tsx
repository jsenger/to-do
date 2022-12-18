import { Header } from './components/Header'
import styles from './App.module.scss'
import './global.scss'
import { TaskCreationForm } from './components/TaskCreationForm'
import { TasksInfo } from './components/TasksInfo'
import { EmptyTaskList } from './components/EmptyTaskList'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <TaskCreationForm />
        <TasksInfo />
        <EmptyTaskList />
      </main>
    </>
  )
}

export default App
