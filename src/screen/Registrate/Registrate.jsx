import "./Registrate.css";


export function Registrate() {
  return (
    <section className="formSection">
  <div className="imageHalf">
    <img src="./Register.png" alt="Imagen descriptiva" />
  </div>
  <div className="formHalf">
    <h2>Regístrate</h2>
    <form>
      <div className="formGroup">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="formGroup">
        <label htmlFor="Numero de telefono">Numero de telefono:</label>
        <input type="number" id="number" name="number" required />
      </div>
      <div className="formGroup">
        <label htmlFor="Mensaje">Mensaje:</label>
        <input type="text" id="text" name="text" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</section>
  )
}