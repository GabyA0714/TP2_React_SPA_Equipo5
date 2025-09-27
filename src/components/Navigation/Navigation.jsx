import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
      <nav>
        <ul className={styles.list}>
          <li><NavLink to="/">Portada</NavLink></li>
          <li><NavLink to="/bitacora">Bitácora</NavLink></li>
          <li><NavLink to="/integrantes">Integrantes</NavLink></li>
          <li><NavLink to="/datos-locales">Datos JSON</NavLink></li>
          <li><NavLink to="/datos-api">Datos API</NavLink></li>
        </ul>
      </nav>
  )
}
