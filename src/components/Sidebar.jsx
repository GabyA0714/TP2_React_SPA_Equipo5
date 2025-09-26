
import { NavLink } from 'react-router-dom'
import logo from '/logo.jpg'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo Equipo 5" />
        <h1>Equipo 5</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Portada</NavLink></li>
          <li><NavLink to="/bitacora">Bitácora</NavLink></li>
          <li><NavLink to="/integrantes">Integrantes</NavLink></li>
          <li><NavLink to="/datos-locales">Datos JSON</NavLink></li>
          <li><NavLink to="/datos-api">Datos API</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}
