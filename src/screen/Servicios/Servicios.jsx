import { logEvent} from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../../Firebase/firebase";
import { CardServices} from "../../componentes/CardServices/card-services"
import {ComprarCursos} from "../../componentes/ComprarCurso/comprar-curso"
import {Cursos} from "../../componentes/Cursos/cursos"
import {Contenido} from "../../componentes/Contenido/Contenido"
import { CardUsers } from "../../componentes/CardsUsers/cards-user"

import "./Servicios.css"

export function Servicios () {
  

  useEffect(() => {
    logEvent(analytics, "pagina_visitada", {
      pagina: "Servicios",
    });
  }, []);

  // Rastrea el tiempo de permanencia en la página
  useEffect(() => {
    const startTime = Date.now(); // Registra el tiempo de inicio

    return () => {
      const endTime = Date.now(); // Registra el tiempo de salida
      const timeSpent = (endTime - startTime) / 1000; // Calcula el tiempo en segundos

      // Rastrea el tiempo de permanencia en la página
      logEvent(analytics, "tiempo_pagina", {
        pagina: "Servicios",
        tiempo_segundos: timeSpent,
      });
    };
  }, []);

  

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



  return (
    <section className="Container">
      <div>
        <CardServices 
          title="¡Aprende a administrar tu salario como un experto!" 
          description="Ahorrar dinero no significa dejar de disfrutar, sino aprender a gestionar mejor tus ingresos. En este curso descubrirás cómo transformar tus hábitos financieros para construir un futuro estable y sin preocupaciones. Te ayudaremos a tomar el control de tu dinero, optimizar tus recursos y desarrollar una mentalidad financiera inteligente que te permitirá alcanzar tus metas sin sentir que sacrificas tu día a día." 
          img="./Empresario.png"
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
          extraImg="./Line.png"
          title="En este curso "
          lista={listaCursos}
          button="Ver temario"
          img="./Video.png"
        />
      </div>

      <div>
        <Contenido
          title="Contenido"
          subtitle="Descubre métodos prácticos para optimizar tus ingresos, reducir gastos innecesarios y construir un futuro financiero estable."
          button="Introducción a tus Finanzas"
          extraButton="Herramientas y recursos"
          img1="./Line 2.png"
          img2="./Line 3.png"
          img3={"./award.png"}
          img4="./book.png"
          lista1={listaContenido1}
        />
      </div>

      <div>
        <CardUsers
          img1="./Line 4.png"
          title="Nuestros profesores son expertos en la industria "
          img2="./Alexandra Murillo.png"
          title2="Alexandra Murillo"
          subtitle="Economia y negocios internacionales"
        />
      </div>


    
    </section>
    
  )


}