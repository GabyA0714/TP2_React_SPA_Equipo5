
# TP2 – SPA React | Equipo 5

Migración del TP1 (HTML/CSS/JS) a una **Single Page Application** con **React + React Router**.

## Integrantes


## Secciones
- Sidebar (fijo) con logo y menú
- Portada (lista de integrantes)
- Bitácora (decisiones, dificultades y cambios)
- Integrantes (lista) + Integrante (detalle con /:id)
- Datos desde JSON local (20 objetos + buscador)
- Datos desde API pública (Rick & Morty)
- NotFound

## Rutas
- `/` Portada
- `/bitacora` Bitácora
- `/integrantes` Listado
- `/integrantes/:id` Detalle
- `/datos-locales` JSON local
- `/datos-api` API pública

## Estructura
```
/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  ├─ logo.svg
│  └─ diagrams/ (exportar PNG/JPG de los diagramas)
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles/index.css
   ├─ components/
   │  ├─ Sidebar.jsx
   │  └─ Card.jsx
   ├─ data/
   │  ├─ integrantes.json
   │  └─ items.json
   └─ pages/
      ├─ Portada.jsx
      ├─ Bitacora.jsx
      ├─ Integrantes.jsx
      ├─ Integrante.jsx
      ├─ DataLocal.jsx
      ├─ DataAPI.jsx
      └─ NotFound.jsx
```

## Cómo correr
```bash
npm i
npm run dev
# Deploy en Vercel (Vite): build -> npm run build, output -> dist/
```

> Falta actualizar  `src/data/integrantes.json` con datos reales y poner los diagramas en `public/diagrams/`.
