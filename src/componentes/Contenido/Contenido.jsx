import React from 'react';
import "./Contenido.css";

export function Contenido({ title, subtitle, button, extraButton, img1, img2, img3, img4, lista1 }) {
  return (
    <div className="contenido-container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="button-container">
        <button className='main-button'>{button}</button>
        <button className='extra-button'>{extraButton}</button>
      </div>
      
      <div className="imagenes-container">
        <img src={img1} alt="imagen" className="linea-2" />
        <img src={img2} alt="imagen" className="linea-3" />
      </div>
      
      <div className="contenido-lists">
        <div className="list-item">
          <div className="list-header">
            <img src={img3} alt="icono" className="list-icon" />
            <div className="list-header-text">
              <h4 className="list-title">Entendiendo tu salario</h4>
              <h5 className="list-subtitle">3 videos</h5>
            </div>
          </div>
          <div className="list-details">
            <p className="list-text">Muchas personas no saben exactamente cuánto dinero reciben realmente ni a dónde va cada peso. Aquí aprenderás a diferenciar entre salario bruto y neto, entender deducciones y beneficios, y tomar decisiones informadas sobre tu dinero</p>
            <h6 className="list-title2">Conceptos clave:</h6>
            <div className="list-content">
              <ul>
                <li>
                  <img className="check-icon" src={img4} alt="check" /> Salario bruto vs neto
                </li>
                <li>
                  <img className="check-icon" src={img4} alt="check" /> Deducciones
                </li>
                <li>
                  <img className="check-icon" src={img4} alt="check" /> Beneficios
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}