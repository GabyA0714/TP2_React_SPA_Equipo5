import integrantes from '../data/integrantes.json'
import Card from '../components/Card'
import Button from '../components/Button/Button'

export default function Integrantes() {
  return (
    <section>
      <h2>Integrantes</h2>
      <div className="grid">
        {integrantes.map((p) => (
          <Card key={p.id} title={p.nombre} subtitle={p.ciudad} img={p.avatar}>
            <ul>
              <li>Edad: {p.edad}</li>
              <li>Habilidades: {p.habilidades.join(', ')}</li>
            </ul>
            <Button url={`/integrantes/${p.id}`} text="Ver perfil" />
          </Card>
        ))}
      </div>
    </section>
  )
}
