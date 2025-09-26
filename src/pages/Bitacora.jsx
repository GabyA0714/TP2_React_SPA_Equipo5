
export default function Bitacora() {
  return (
    <section>
      <h2>Bitácora</h2>
      <p>Registro del proceso del TP2. Se ampliará en el TP3.</p>

      <details>
        <summary>Decisiones de diseño</summary>
        <ul>
          <li>Sidebar fijo + rutas declarativas (React Router v6).</li>
          <li>Componentes reutilizables: Card y layouts con grid responsive.</li>
        </ul>
      </details>

      <details>
        <summary>Dificultades y resolución</summary>
        <ul>
          <li>Parámetros de URL en rutas de detalle → uso de <code>useParams</code>.</li>
          <li>Fetch a API pública con manejo de loading y error.</li>
        </ul>
      </details>

      <details>
        <summary>Cambios relevantes</summary>
        <ul>
          <li>Migración de páginas estáticas a SPA con React.</li>
          <li>Centralización de estilos y breakpoints 400 / 900 / 1200.</li>
        </ul>
      </details>
    </section>
  )
}
