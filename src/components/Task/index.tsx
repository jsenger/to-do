import styles from './styles.module.scss'
import checked from '../../assets/icons/checked.svg'
import unchecked from '../../assets/icons/unchecked.svg'
import {ReactComponent as Trash} from '../../assets/icons/trash.svg'
import { TaskInterface } from '../../interfaces/task'

export function Task({task, onDeleteTask, onCheckClick}: Task.Props) {
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleCheckClick() {
    onCheckClick(task.id)
  }

  return (
    <div className={`${styles.container} ${task.isComplete && styles.completed}`}>
      <img
        src={task.isComplete ? checked : unchecked}
        alt={`${task.isComplete ? 'Checked' : 'Unchecked'} item icon`}onClick={handleCheckClick}
      />
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
    onCheckClick: (taskId: string) => void
  }
}