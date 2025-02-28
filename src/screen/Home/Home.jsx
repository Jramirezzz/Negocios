import { Button,List,Cards,Footer} from "../../componentes/index";
import "./Home.css";
export function Home() {
  return (
    <div>
        <section className="header">
            <h1 className="title">FINTEACH</h1>
            <h3 className="slogan">Domina tus finanzas,transforma tu futuro</h3>
       </section>

       <section className="about">
    <div className="aboutContent">
        <div className="textContent">
            <h3 className="aboutTitle">
                Crece con nosotros y alcanza tus metas.
            </h3>

            <p className="aboutDescription">
                Toma el control de tus finanzas con la guía de nuestros expertos. Te ayudamos a administrar tu dinero de forma inteligente para que alcances tus metas y tomes decisiones financieras con confianza.
            </p>

            <Button text="saber más" />
        </div>

        <div className="imageContent-1">
            <img src="./About-image.png" alt="Imagen descriptiva" />
        </div>
    </div>
</section>

            <h2 className="subtitle">
                <span className="first-part">
                    Más de 900,000 personas   
                </span>
                <span className="second-part">
                    enfrentan problemas financieros por una mala administración.
                </span>
            </h2>

<section className="financialSection-2">
    <div className="financialContent-2">
        <div className="textContent-2">
            
            <h3>
                <span className="first-part-2">
                    Somos tu guía
                </span>
                <span className="second-part-2">
                    hacia la libertad financiera.
                </span>
                 
            </h3>
            <List /> 
        </div>
        <div className="imageContent-2">
            <img src="./Barras-img.png" alt="Imagen de finanzas" />
        </div>
    </div>
</section>

       <section>
        <h2>
            Obten Concomientos Sobre
        </h2>
            <div className="cards-container">
                <Cards title="Domina Tu Portafolio Bancario" description="Tipos de cuentas,tarjetas y productos financieros que necesitas" img="./Cover1.png"/>
                <Cards title="Declaración De Renta Para Principiantes" description="Aprende a declarar sin miedo y optimizar tus impuestos" img="./Cover2.png"/>
                <Cards title="Gestionar Tu Salario Como Un Experto" description="Presupuestos,gastos y planificacion financiera" img="./Cover3.png"/>
            </div>
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

