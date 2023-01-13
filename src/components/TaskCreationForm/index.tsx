import { ChangeEvent, FormEvent, useState } from 'react'
import plus from '../../assets/icons/plus.svg'
import styles from './styles.module.scss'

export function TaskCreationForm({onAddNewTask}: TaskCreationForm.Props) {
  const [newTask, setNewTask] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (newTask !== '') {
      onAddNewTask(newTask)
      setNewTask('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="create-task"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleChange}
      />
      <button type="submit">
        Add
        <img src={plus} alt="Plus icon" />
      </button>
    </form>
  )
}

namespace TaskCreationForm {
  export interface Props {
    onAddNewTask: (newTask: string) => void
  }
}