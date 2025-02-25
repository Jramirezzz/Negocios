import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Servicios from './componentes/Servicios';
import Contacto from './componentes/Contacto';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home  " element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;