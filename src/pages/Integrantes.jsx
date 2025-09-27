
import integrantes from '../data/integrantes.json'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'

export default function Integrantes() {
  return (
    <section>
      <h2>Integrantes</h2>
      <div className="grid">
        {integrantes.map((p) => (
          <Card key={p.id} title={p.nombre} subtitle={p.ubicacion}>
            <ul>
              <li>Edad: {p.edad}</li>
              <li>Habilidades: {p.habilidades.join(', ')}</li>
            </ul>
            <Link className="btn" to={`/integrantes/${p.id}`}>Ver perfil</Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
