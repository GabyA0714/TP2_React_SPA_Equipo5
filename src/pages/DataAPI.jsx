import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'   // 👈 agregamos la extensión explícita

export default function DataAPI() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://rickandmortyapi.com/api/character?page=1')
        if (!res.ok) throw new Error('Error al cargar API')
        const json = await res.json()
        setData(json.results.slice(0, 12))
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p>Cargando datos…</p>
  if (error) return <p>Error: {error}</p>

  return (
    <section>
      <h2>🪐 Datos desde API pública</h2>
      <hr style={{ borderColor: '#22d3ee', marginBottom: '1rem' }} />
      <p>Rick and Morty API (12 resultados)</p>
      <div className="grid">
        {data.map((ch) => (
          <Card key={ch.id} title={ch.name} subtitle={ch.species} img={ch.image}>
            <p>Estado: {ch.status} – Origen: {ch.origin?.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
