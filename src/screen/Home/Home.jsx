import { Button,List,Cards,Footer} from "../../componentes/index";
export function Home() {
  return (
    <div>
        <section>
            <h1>FINTEACH</h1>
            <h3>Domina tus finanzas,transforma tu futuro</h3>
       </section>

       <section>
            <h3>
                Crece con nosotros y alcanza tus metas.
            </h3>

            <p>
                Toma el control de tus finanzas con la guia de nuestros expertos. Te ayudamos a administrar tu dinero de forma inteligente para que alcances tus metas y tomes decisiones financieras con confianza.
            </p>

            <img src="./vite.svg"/>

            <Button text ="saber mas"/>
       </section>
       <section>
            <h2>
                Más de 900,000 personas enfrentan problemas financieros por una mala administración.
            </h2>

            <h3>    
                Somos tu guía hacia la libertad financiera.
            </h3>
            <List/>

       </section>
       <section>
        <h2>
            Obten Concomientos Sobre
        </h2>
            <Cards title="Domina Tu Portafolio Bancario" description="Tipos de cuentas,tarjetas y productos financieros que necesitas" img="./vite.svg"/>
            <Cards title="Declaración De Renta Para Principiantes" description="Aprende a declarar sin miedo y optimizar tus impuestos" img="./vite.svg"/>
            <Cards title="Gestionar Tu Salario Como Un Experto" description="Presupuestos,gastos y planificacion financiera" img="./vite.svg"/>
       </section>

       <section>
        <img src="./vite.svg" alt="" />
        <h2>
            El Dinero No Viene Con Manual... Pero Nosotros Te Damos Uno.
        </h2>
        <p>
            Suscribete Y aprende a ahorrar, invertir y tomar decisiones financieras inteligentes.
        </p>
       </section>
         <Footer/>

    </div>
  )
}

