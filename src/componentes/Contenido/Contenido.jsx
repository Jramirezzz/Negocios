import React from 'react';
import "./Contenido.css";

export function Contenido({ title, subtitle, button, extraButton, img1, img2, lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8 }) {
  return (
    <div className="contenido-container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="button-container">
      <button className='main-button'>{button}</button>
      <button className='extra-button'>{extraButton}</button>
      </div>
      <img src={img1} alt="imagen" className="body-image" />
      <img src={img2} alt="imagen" className="body-image" />
      <div className="contenido-lists">
        <ul>
          {lista1 && lista1.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista2 && lista2.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista3 && lista3.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista4 && lista4.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista5 && lista5.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista6 && lista6.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista7 && lista7.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <ul>
          {lista8 && lista8.map((item, index) => (
            <li key={index}>
              <img className="check-icon" src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}