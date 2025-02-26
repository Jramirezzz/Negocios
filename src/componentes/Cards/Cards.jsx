import "./Cards.css";

export function Cards ({title, description, img}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={img} alt="imagen" />
    </div>
  )
}