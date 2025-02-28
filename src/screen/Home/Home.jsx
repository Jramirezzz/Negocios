import { logEvent, setAnalyticsCollectionEnabled} from "firebase/analytics";
import { analytics } from "../../Firebase/firebase";
import { useEffect } from "react";
import { Button,List,Cards,Footer} from "../../componentes/index";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Habilitar el modo de depuración
setAnalyticsCollectionEnabled(analytics, true);


export function Home() {
    const navigate = useNavigate();
    
    useEffect(() => {
       
        logEvent(analytics, 'screen_view', {
          firebase_screen: "Home", 
          firebase_screen_class: "HomeScreen", 
        });
      }, []);

      useEffect(() => {
        const startTime = Date.now(); // Registra el tiempo de inicio
    
        return () => {
          const endTime = Date.now(); // Registra el tiempo de salida
          const timeSpent = (endTime - startTime) / 1000; // Calcula el tiempo en segundos
    
          // Rastrea el tiempo de permanencia en la página
          logEvent(analytics, "tiempo_pagina", {
            pagina: "Home",
            tiempo_segundos: timeSpent,
          });
        };
      }, []);
      

      const handleClickSaberMas = () => {
        console.log("Clic en 'saber más'");
        logEvent(analytics, "Saber mas", { button: "saber_mas" });
        navigate("/servicios");
      };
      
      logEvent(analytics, "prueba_evento", {
        mensaje: "Este es un evento de prueba",
      });
      const handleClickRegistrate = () => {
        console.log("Clic en 'Registrate'");
        logEvent(analytics, "Registrate", { button: "registrate" });
        navigate("/registrate");
      };

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

            <p className="aboutDescription-1">
                Toma el control de tus finanzas con la guía de nuestros expertos. Te ayudamos a administrar tu dinero de forma inteligente para que alcances tus metas y tomes decisiones financieras con confianza.
            </p>
            <button onClick={handleClickSaberMas} className="aboutButton">
                saber más
            </button>


            
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
        <h2 className="subtitle-2">
            Obten Concomientos Sobre
        </h2>
            <div className="cards-container">
                <Cards title="Domina Tu Portafolio Bancario" description="Tipos de cuentas,tarjetas y productos financieros que necesitas" img="./Cover1.png"/>
                <Cards title="Declaración De Renta Para Principiantes" description="Aprende a declarar sin miedo y optimizar tus impuestos" img="./Cover2.png"/>
                <Cards title="Gestionar Tu Salario Como Un Experto" description="Presupuestos,gastos y planificacion financiera" img="./Cover3.png"/>
            </div>
       </section>

       <section className="about-3">
    <div className="aboutContent">
        <div className="textContent">
            <h3 className="aboutTitle-3">
                El dinero no viene con manual... pero nosotros te damos uno.
            </h3>

            <p className="aboutDescription-3">
                Suscribete y aprende a ahorrar, invertir y tomar decisiones financieras inteligente.
            </p>

            <button onClick={handleClickRegistrate} className="aboutButton-3">
                Registrate
            </button>

        </div>

        <div className="imageContent-1">
            <img src="./Trading.png" alt="Imagen descriptiva" />
        </div>
    </div>
</section>
    </div>
  )
}