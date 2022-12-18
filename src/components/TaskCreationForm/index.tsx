import plus from '../../assets/icons/plus.svg'
import styles from './styles.module.scss'

export function TaskCreationForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name="create-task"
        placeholder="Add a new task"
      />
      <button type="submit">
        Add
        <img src={plus} alt="Plus icon" />
      </button>
    </form>
  )
}