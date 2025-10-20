import { useParams } from 'react-router-dom'
import integrantes from '../data/integrantes.json'
import Card from '../components/Card'
import Button from '../components/Button/Button'

export default function Integrante() {
  const { id } = useParams()
  const p = integrantes.find(x => String(x.id) === id)

  if (!p) {
    return (
      <section>
        <h2>Integrante no encontrado</h2>
        <Button url="/integrantes" text="Volver" />
      </section>
    )
  }

  return (
    <section>
      <img src={p.avatar} alt={`Foto de ${p.nombre}`} className="avatar" />
      <h2>{p.nombre}</h2>
      <div className="grid">
        <Card title="Datos personales" subtitle={p.ciudad}>
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
      <Button url="/integrantes" text="← Volver a Integrantes" />
    </section>
  )
}
