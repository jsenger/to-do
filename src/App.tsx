import { Header } from './components/Header'
import styles from './App.module.scss'
import './global.scss'
import { TaskCreationForm } from './components/TaskCreationForm'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <TaskCreationForm />
      </main>
    </>
  )
}

export default App
