import { logEvent } from "firebase/analytics";
import { analytics } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./comprar-curso.css";

export function ComprarCursos({ title, button }) {

  const navigate = useNavigate();

  const handleClickComprarCurso = () => {
    console.log("Clic en 'comprar curso'");
    logEvent(analytics, "Comprar Curso", { button: "comprar_curso" });
    navigate("/registrate");
  };

  return (
    <div className="comprar-curso-card">
      <h2 className="toma-control">{title}</h2>
      <button onClick={handleClickComprarCurso} className="comprar-curso-button">{button}</button>
    </div>
  );
}