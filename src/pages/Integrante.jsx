
import { useParams, Link } from 'react-router-dom'
import integrantes from '../data/integrantes.json'
import Card from '../components/Card/Card'

export default function Integrante() {
  const { id } = useParams()
  const p = integrantes.find(x => String(x.id) === id)

  if (!p) {
    return (
      <section>
        <h2>Integrante no encontrado</h2>
        <Link to="/integrantes">Volver</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>{p.nombre}</h2>
      <div className="grid">
        <Card title="Datos personales" subtitle={p.ubicacion}>
          <ul>
            <li>Edad: {p.edad}</li>
            <li>Habilidades: {p.habilidades.join(', ')}</li>
          </ul>
        </Card>
        <Card title="Películas favoritas">
          <ol>
            {p.peliculas.map((t,i) => <li key={i}>{t}</li>)}
          </ol>
        </Card>
        <Card title="Música favorita">
          <ol>
            {p.musica.map((t,i) => <li key={i}>{t}</li>)}
          </ol>
        </Card>
      </div>
      <Link className="btn" to="/integrantes">← Volver a Integrantes</Link>
    </section>
  )
}
