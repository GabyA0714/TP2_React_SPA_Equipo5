import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Portada.css";

export default function Portada() {
  const [showPortal, setShowPortal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Efecto de apertura del portal
    const portalTimer = setTimeout(() => setShowPortal(true), 500);

    // Muestra el botón luego del portal (2.5s después)
    const buttonTimer = setTimeout(() => setShowButton(true), 3000);

    return () => {
      clearTimeout(portalTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="portada">
      {/* ✨ Partículas cósmicas */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="particles"></div>

      {/* 🌀 Portal */}
      <div className={`portal-container ${showPortal ? "activo" : ""}`}>
        <div className="portal-circle"></div>
        <h1 className="portal-text">EQUIPO 17</h1>
      </div>

      <p className="portal-subtext">
        “Atravesando dimensiones de código con estilo Rick y Morty 🌀”
      </p>

      {/* 🌌 Botón con aparición retardada */}
      {showButton && (
        <Link to="/bitacora" className="btn-multiverso">
          🚀 Ingresar al Multiverso
        </Link>
      )}
    </section>
  );
}
