import { CardServices} from "../../componentes/CardServices/card-services"
import {ComprarCursos} from "../../componentes/ComprarCurso/comprar-curso"
import {Cursos} from "../../componentes/Cursos/cursos"

import "./Servicios.css"

export function Servicios () {

  const listaCursos = [
    "Cómo hacer un presupuesto sin fallar en el intento",
    "Estrategias de ahorro que realmente funcionan",
    "Métodos para evitar gastos innecesarios",
    "Cómo dividir tu salario de manera inteligente"
  ];

  return (
    <section className="Container">
      <div>
        <CardServices 
          title="¡Aprende a administrar tu salario como un experto!" 
          description="Ahorrar dinero no significa dejar de disfrutar, sino aprender a gestionar mejor tus ingresos. En este curso descubrirás cómo transformar tus hábitos financieros para construir un futuro estable y sin preocupaciones. Te ayudaremos a tomar el control de tu dinero, optimizar tus recursos y desarrollar una mentalidad financiera inteligente que te permitirá alcanzar tus metas sin sentir que sacrificas tu día a día." 
          img="/src/assets/Empresario.png"
        />
      </div>
      <div>
        <ComprarCursos
          title="Toma el control de tu salario y construye tu futuro financiero"
          button="COMPRAR EL CURSO"
        />
      </div>

      <div>
        <Cursos
          title="En este curso aprenderas:"
          lista={listaCursos}
          button="Ver temerario"
          img="/src/assets/Video.png"
        />
      </div>
    
    </section>
    
  )


}