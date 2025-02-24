import './Navbar.css'; // Archivo de estilos para la navbar

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbarLogo">
        <img src="/logo.png" alt="Logo" className= "logo" />
      </div>
      <ul className="navbarLinks">
        <li>
          <Link to="/" className='link'>Inicio</Link>
        </li>
        <li>
          <Link to="/servicios" className="link">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto" className="link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;