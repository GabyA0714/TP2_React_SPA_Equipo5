import styles from './Logo.module.css'
import logo from '/logo.jpg'

export default function Logo() {
  return (
    <img src={logo} alt="Logo Equipo 5" className={styles.logo} />
  )
}
