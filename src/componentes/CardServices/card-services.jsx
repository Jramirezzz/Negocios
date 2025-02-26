import "./card-services.css";

export function CardServices ({title, description, img}) {
  return (
    <div className="card-services">
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-image">
        <img className="custom-image" src={img} alt="imagen" />
      </div>
    </div>
  )
}