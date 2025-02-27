import { CardServices} from "../../componentes/CardServices/card-services"
import {ComprarCursos} from "../../componentes/ComprarCurso/comprar-curso"
import {Cursos} from "../../componentes/Cursos/cursos"
import {Contenido} from "../../componentes/Contenido/Contenido"
import "./Servicios.css"

export function Servicios () {

  const listaCursos = [
    "Cómo hacer un presupuesto sin fallar en el intento",
    "Estrategias de ahorro que realmente funcionan",
    "Métodos para evitar gastos innecesarios",
    "Cómo dividir tu salario de manera inteligente"
  ];

  const listaContenido1 = [
    "Contenido 1 - Item 1",
    "Contenido 1 - Item 2",
    "Contenido 1 - Item 3"
  ];

  const listaContenido2 = [
    "Contenido 2 - Item 1",
    "Contenido 2 - Item 2",
    "Contenido 2 - Item 3"
  ];

  const listaContenido3 = [
    "Contenido 3 - Item 1",
    "Contenido 3 - Item 2",
    "Contenido 3 - Item 3"
  ];

  const listaContenido4 = [
    "Contenido 4 - Item 1",
    "Contenido 4 - Item 2",
    "Contenido 4 - Item 3"
  ];

  const listaContenido5 = [
    "Contenido 5 - Item 1",
    "Contenido 5 - Item 2",
    "Contenido 5 - Item 3"
  ];

  const listaContenido6 = [
    "Contenido 6 - Item 1",
    "Contenido 6 - Item 2",
    "Contenido 6 - Item 3"
  ];

  const listaContenido7 = [
    "Contenido 7 - Item 1",
    "Contenido 7 - Item 2",
    "Contenido 7 - Item 3"
  ];

  const listaContenido8 = [
    "Contenido 8 - Item 1",
    "Contenido 8 - Item 2",
    "Contenido 8 - Item 3"
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
          extraImg="/src/assets/Line.png"
          title="En este curso "
          lista={listaCursos}
          button="Ver temerario"
          img="/src/assets/Video.png"
        />
      </div>

      <div>
        <Contenido
          title="Contenido"
          subtitle="Descubre métodos prácticos para optimizar tus ingresos, reducir gastos innecesarios y construir un futuro financiero estable."
          button="Introducción a tus Finanzas"
          extraButton="Herramientas y recursos"
          img1="/src/assets/Contenido1.png"
          img2="/src/assets/Contenido2.png"
          lista1={listaContenido1}
          lista2={listaContenido2}
          lista3={listaContenido3}
          lista4={listaContenido4}
          lista5={listaContenido5}
          lista6={listaContenido6}
          lista7={listaContenido7}
          lista8={listaContenido8}
        />
      </div>


    
    </section>
    
  )


}