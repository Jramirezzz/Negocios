import React from 'react';
import "./cards-users.css";

export function CardUsers({ img1, title, img2, title2, subtitle }) {
  return (
    <div className="card-users-container">
      <div className="card-users-text">
        <img src={img1} alt="imagen" className="img1" />
        <h3>{title}</h3>
      </div>
      <div className="card-users-cards-container">
        <div className="card-users-card">
          <img src={img2} alt="imagen" className="img2" />
          <h3 className="title2">{title2}</h3>
          <h3 className="subtitle">{subtitle}</h3>
        </div>
        <div className="card-users-card">
          <img src="./James Acosta.png" alt="imagen" className="img2" />
          <h3 className="title2">James Acosta</h3>
          <h3 className="subtitle">Finanzas y Negocios Internacionales</h3>
        </div>
        <div className="card-users-card">
          <img src="./Andres Vargas.png" alt="imagen" className="img2" />
          <h3 className="title2">Andres Vargas</h3>
          <h3 className="subtitle">Ciencias Políticas y Economía</h3>
        </div>
      </div>
    </div>
  );
}