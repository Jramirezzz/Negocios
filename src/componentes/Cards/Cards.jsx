export function Cards ({title, description, img}) {
  return (
    <div className="card">
      <img src={img} alt="imagen" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}