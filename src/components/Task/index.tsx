import styles from './styles.module.scss'
import unchecked from '../../assets/icons/unchecked.svg'
import {ReactComponent as Trash} from '../../assets/icons/trash.svg'
import { TaskInterface } from '../../interfaces/task'

export function Task({task}: {task: TaskInterface}) {
  return (
    <div className={styles.container}>
      <img src={unchecked} alt="Unchecked item icon" />
      <p>{task.description}</p>
      <button title="Delete task">
        <Trash />
      </button>
    </div>
  )
}