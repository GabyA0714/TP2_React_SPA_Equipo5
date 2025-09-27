
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Portada from './pages/Portada.jsx'
import Bitacora from './pages/Bitacora.jsx'
import Integrantes from './pages/Integrantes.jsx'
import Integrante from './pages/Integrante.jsx'
import DataLocal from './pages/DataLocal.jsx'
import DataAPI from './pages/DataAPI.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Integrante />} />
          <Route path="/datos-locales" element={<DataLocal />} />
          <Route path="/datos-api" element={<DataAPI />} />
          <Route path="/home" element={<Navigate to='/' replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
