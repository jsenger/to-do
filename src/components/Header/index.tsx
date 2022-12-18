
import styles from './styles.module.scss'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do app" />
    </header>
  )
}