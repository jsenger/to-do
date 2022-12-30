import styles from './styles.module.scss'

export function TasksInfo({createdTasks, completedTasks}: TasksInfo.Props) {
  return (
    <section className={styles.container}>
      <span className={styles.createdTasks}>
        Created tasks<span>{createdTasks}</span>
      </span>

      <span className={styles.completedTasks}>
        Completed
        <span>{completedTasks} of {createdTasks}</span>
      </span>
    </section>
  )
}

namespace TasksInfo {
  export interface Props {
    createdTasks: number
    completedTasks: number
  }
}