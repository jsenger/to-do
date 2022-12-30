import styles from './styles.module.scss'
import unchecked from '../../assets/icons/unchecked.svg'
import {ReactComponent as Trash} from '../../assets/icons/trash.svg'

export function Task() {
  return (
    <div className={styles.container}>
      <img src={unchecked} alt="Unchecked item icon" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title="Delete task">
        <Trash />
      </button>
    </div>
  )
}