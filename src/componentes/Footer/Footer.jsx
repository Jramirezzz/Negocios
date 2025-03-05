import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerLogo">
        <img src="/public/logo-footer.png" alt="Logo" className="footer-logo-img" />
      </div>

      <div className="footer-content">
        <div className="footer-section contact-section">
          <h3>Contáctanos</h3>
          <div className="contact-info">
            <div className="contact-item">
              <img src="/public/Contactos.png" alt="Teléfono" className="contact-icon" />
              <p>3177043737 - 3152444960<br />Lunes a viernes de 8am a 5pm</p>
            </div>
            <div className="contact-item">
              <img src="/public/tracking.png" alt="Correo" className="tracking-icon" />
              <p>Finteach@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Acerca de nosotros</h3>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Términos y condiciones</li>
            <li>Políticas de tratamiento de datos</li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="footer-social"> 
          <h3>Planes y servicios</h3>
          <ul>
            <li>Detalles de los planes disponibles</li>
            <li>Docentes</li>
            <li>Blog Financiero</li>
            <li>Herramientas y recursos</li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}