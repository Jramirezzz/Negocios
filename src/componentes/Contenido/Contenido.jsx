import React, { useState } from 'react';
import "./Contenido.css";

export function Contenido({ title, subtitle, button, extraButton, img1, img2, img3, img4, lista1 }) {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  const toggleCollapse = (index) => {
    setCollapsedIndex(collapsedIndex === index ? null : index);
  };

  const lists = [
    {
      title: "Entendiendo tu salario",
      subtitle: "3 videos",
      text: "Muchas personas no saben exactamente cuánto dinero reciben realmente ni a dónde va cada peso. Aquí aprenderás a diferenciar entre salario bruto y neto, entender deducciones y beneficios, y tomar decisiones informadas sobre tu dinero",
      items: ["Salario bruto vs neto", "Deducciones", "Beneficios"]
    },
    {
      title: "Presupuesto inteligente",
      subtitle: "3 videos",
      text: "Aprenderás a crear y mantener un presupuesto que te permita controlar tus gastos y ahorrar dinero.",
      items: ["Crear un presupuesto", "Mantener un presupuesto", "Ajustar un presupuesto"]
    },
    {
      title: "Control de gastos",
      subtitle: "3 videos",
      text: "Descubre cómo monitorear y reducir tus gastos para mejorar tu situación financiera.",
      items: ["Monitoreo de gastos", "Reducción de gastos", "Herramientas de control"]
    },
    {
      title: "Estrategias de ahorro",
      subtitle: "3 videos",
      text: "Aprende técnicas efectivas para ahorrar dinero y alcanzar tus metas financieras.",
      items: ["Técnicas de ahorro", "Metas de ahorro", "Planificación de ahorro"]
    },
    {
      title: "Inversión con bajo riesgo",
      subtitle: "3 videos",
      text: "Conoce las opciones de inversión que ofrecen un bajo riesgo y un rendimiento estable.",
      items: ["Opciones de inversión", "Riesgo y rendimiento", "Diversificación"]
    },
    {
      title: "Uso inteligente de cuentas bancarias",
      subtitle: "3 videos",
      text: "Aprende a utilizar tus cuentas bancarias de manera eficiente para maximizar tus beneficios.",
      items: ["Tipos de cuentas", "Beneficios bancarios", "Gestión de cuentas"]
    },
    {
      title: "Planificación financiera a largo plazo",
      subtitle: "3 videos",
      text: "Descubre cómo planificar tu futuro financiero y asegurar tu estabilidad a largo plazo.",
      items: ["Metas financieras", "Estrategias de inversión", "Ahorro para el retiro"]
    },
    {
      title: "Evita errores comunes",
      subtitle: "3 videos",
      text: "Identifica y evita los errores financieros más comunes para mantener tu estabilidad económica.",
      items: ["Errores comunes", "Cómo evitarlos", "Consejos prácticos"]
    }
  ];

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
        {lists.map((list, index) => (
          <div className={`list-item ${collapsedIndex === index ? 'expanded' : 'collapsed'}`} key={index} onClick={() => toggleCollapse(index)}>
            <div className="list-header">
              <img src={img3} alt="icono" className="list-icon" />
              <div className="list-header-text">
                <h4 className="list-title">{list.title}</h4>
                {collapsedIndex === index && <h5 className="list-subtitle">{list.subtitle}</h5>}
              </div>
            </div>
            {collapsedIndex === index && (
              <div className="list-details">
                <div className="left">
                  <p className="list-text">{list.text}</p>
                </div>
                <div className="right">
                  <h6 className="list-title2">Conceptos clave:</h6>
                  <div className="list-content">
                    <ul>
                      {list.items.map((item, idx) => (
                        <li key={idx}>
                          <img className="check-icon" src={img4} alt="check" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}