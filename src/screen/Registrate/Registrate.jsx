import "./Registrate.css";
import { logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import { db, analytics } from "../../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export function Registrate() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    logEvent(analytics, "screen_view", {
      firebase_screen: "Registrate",
      firebase_screen_class: "RegistrateScreen",
    });
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const timeSpent = (endTime - startTime) / 1000;

      logEvent(analytics, "tiempo_pagina", {
        pagina: "Registrate",
        tiempo_segundos: timeSpent,
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("name"),
      email: formData.get("email"),
      telefono: formData.get("number"),
      mensaje: formData.get("text"),
    };

    try {
      const docRef = await addDoc(collection(db, "registros"), data);
      console.log("Documento guardado con ID:", docRef.id);
      
      // Vaciar los campos del formulario
      e.target.reset();

      // Mostrar popup
      setShowPopup(true);

      // Cerrar popup después de 5 segundos
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error al guardar el documento:", error);
      alert("Hubo un error al guardar el registro.");
    }
  };

  return (
    <section className="formSection">
      <div className="imageHalf">
        <img src="./Register-image.jpg" alt="Imagen descriptiva" />
      </div>
      <div className="formHalf">
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="number">Número de teléfono:</label>
            <input type="number" id="number" name="number" required />
          </div>
          <div className="formGroup">
            <label htmlFor="text">Mensaje:</label>
            <input type="text" id="text" name="text" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>¡Gracias por registrarte!</h3>
            <p>Estaremos en contacto contigo pronto.</p>
            <button onClick={() => setShowPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
