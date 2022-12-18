import styles from './styles.module.scss'

export function TasksInfo() {
  return (
    <section className={styles.tasksInfo}>
      <span className={styles.createdTasks}>
        Created tasks<span>0</span>
      </span>

      <span className={styles.completedTasks}>
        Completed
        <span>1 de 3</span>
      </span>
    </section>
  )
}