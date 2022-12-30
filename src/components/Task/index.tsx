import styles from './styles.module.scss'
import unchecked from '../../assets/icons/unchecked.svg'
import {ReactComponent as Trash} from '../../assets/icons/trash.svg'
import { TaskInterface } from '../../interfaces/task'

export function Task({task, onDeleteTask}: Task.Props) {
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.container}>
      <img src={unchecked} alt="Unchecked item icon" />
      <p>{task.description}</p>
      <button title="Delete task" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}

namespace Task {
  export interface Props {
    task: TaskInterface
    onDeleteTask: (taskId: string) => void
  }
}