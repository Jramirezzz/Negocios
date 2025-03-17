import "./cursos.css";
export function Cursos({ title, lista, button, img, extraImg }) {
    return (
        <div className="cursos-container">
          <div className="cursos-text">
            <h3>{title} <span>aprenderas:</span></h3>
            <div className="cursos-content">
              {extraImg && <img src={extraImg} alt="extra imagen" className="extra-image" />}
              <div>
                <ul>
                  {lista && lista.map((item, index) => (
                    <li key={index}>
                      <img className="check-icon" src="./Check.png" alt="check" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="button-container">
              <button>{button}</button>
            </div>
          </div>
          <div className="cursos-image">
            <img src= "./video-image.jpg" alt="imagen" className="image-curso" />
          </div>
        </div>
      );
    }