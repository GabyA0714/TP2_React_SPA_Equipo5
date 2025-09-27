
import items from '../data/items.json'
import Card from '../components/Card/Card'
import { useState } from 'react'

export default function DataLocal() {
  const [q, setQ] = useState('')

  const filtered = items.filter(x =>
    x.titulo.toLowerCase().includes(q.toLowerCase()) ||
    x.categoria.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <section>
      <h2>Datos desde JSON local</h2>
      <p>Mostrando {filtered.length} de {items.length} items.</p>
      <input
        className="input"
        placeholder="Buscar por título o categoría…"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <div className="grid">
        {filtered.map((it) => (
          <Card key={it.id} title={it.titulo} subtitle={it.categoria}>
            <p>{it.descripcion}</p>
            <p className="muted">Año: {it.anio}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
