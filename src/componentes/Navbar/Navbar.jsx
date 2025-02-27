import './Navbar.css'; 

import { Link } from 'react-router-dom';

export function Navbar () {
  return (
    <nav className='navbar'>
      <div className="navbarLogo">
        <img src="/Logo.png " alt="Logo" className= "logo" />
      </div>
      <ul className="navbarLinks">
        <li>
          <Link to="/" className='link'>Inicio</Link>
        </li>
        <li>
          <Link to="/servicios" className="link">Servicios</Link>
        </li>
        <li>
          <Link to="/registrate" className="link-Registrate">Registrate</Link>
        </li>
      </ul>
    </nav>
  );
};