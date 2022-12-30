import styles from './styles.module.scss'
import clipboard from '../../assets/icons/clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard icon" />
      <p>You don't have any tasks yet</p>
      <p>Add new tasks and organize your to-do items</p>
    </div>
  )
}