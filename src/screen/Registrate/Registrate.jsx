import "./Registrate.css";
import { logEvent} from "firebase/analytics";
import { useEffect } from "react";
import { db,analytics } from "../../Firebase/firebase"; // Importa Firestore
import { collection, addDoc } from "firebase/firestore";

export function Registrate() {
  useEffect(() => {
    // Registra un evento de vista de pantalla
    logEvent(analytics, 'screen_view', {
      firebase_screen: "Registrate", // Nombre de la pantalla
      firebase_screen_class: "RegsitrateScreen", // Clase de la pantalla (opcional)
    });
  }, []);

  useEffect(() => {
    const startTime = Date.now(); // Registra el tiempo de inicio

    return () => {
      const endTime = Date.now(); // Registra el tiempo de salida
      const timeSpent = (endTime - startTime) / 1000; // Calcula el tiempo en segundos

      // Rastrea el tiempo de permanencia en la página
      logEvent(analytics, "tiempo_pagina", {
        pagina: "Registrate",
        tiempo_segundos: timeSpent,
      });
    };
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los datos del formulario
    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("name"),
      email: formData.get("email"),
      telefono: formData.get("number"),
      mensaje: formData.get("text"),
    };

    try {
      // Guarda los datos en Firestore
      const docRef = await addDoc(collection(db, "registros"), data);
      console.log("Documento guardado con ID:", docRef.id);
      alert("¡Registro exitoso!");
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
    </section>
  );
}