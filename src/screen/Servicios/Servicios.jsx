import { CardServices } from "../../componentes/CardServices/card-services"
import "./Servicios.css"

export function Servicios () {
  return (
    <section className="servicios">
      <div className="text-content">
        <CardServices 
          title="¡Aprende a administrar tu salario como un experto!" 
          description="Ahorrar dinero no significa dejar de disfrutar, sino aprender a gestionar mejor tus ingresos. En este curso descubrirás cómo transformar tus hábitos financieros para construir un futuro estable y sin preocupaciones. Te ayudaremos a tomar el control de tu dinero, optimizar tus recursos y desarrollar una mentalidad financiera inteligente que te permitirá alcanzar tus metas sin sentir que sacrificas tu día a día." 
          img="/src/assets/Empresario.png"
        />
      </div>
    </section>
  )
}