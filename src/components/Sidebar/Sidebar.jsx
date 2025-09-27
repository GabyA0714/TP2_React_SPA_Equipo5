import styles from './Sidebar.module.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Logo />
        <h1 className={styles.title}>Equipo 5</h1>
      </div>
      <Navigation />
    </aside>
  )
}
