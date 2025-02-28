import { logEvent } from "firebase/analytics";
import { analytics } from "../../Firebase/firebase";
import "./comprar-curso.css";

export function ComprarCursos({ title, button }) {
  const handleClickComprarCurso = () => {
    console.log("Clic en 'comprar curso'");
    logEvent(analytics, "click", { button: "comprar_curso" });
  };

  return (
    <div className="comprar-curso-card">
      <h2>{title}</h2>
      <button onClick={handleClickComprarCurso} className="comprar-curso-button">{button}</button>
    </div>
  );
}