import styles from './styles.module.scss'
import clipboard from '../../assets/icons/clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard icon" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}