import "./comprar-curso.css";

export function ComprarCursos ({title, button}) {
  return (
    <div className="comprar-curso-card">
      <h2>{title}</h2>
      <button className="comprar-curso-button">{button}</button>
    </div>
  )
}