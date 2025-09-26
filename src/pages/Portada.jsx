
import integrantes from '../data/integrantes.json'
import { Link } from 'react-router-dom'

export default function Portada() {
  return (
    <section>
      <h2>TP2 – SPA en React</h2>
      <p>
        Migración del TP1 a una Single Page Application (SPA) con React y React Router.
        Componentes reutilizables, datos dinámicos y estilos responsive.
      </p>

      <h3>Integrantes</h3>
      <ul className="list">
        {integrantes.map((p) => (
          <li key={p.id}>
            <Link to={`/integrantes/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
