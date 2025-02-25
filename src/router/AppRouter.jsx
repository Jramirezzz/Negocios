import { Routes, Route } from 'react-router-dom';
import {Navbar} from '../componentes/index';
import {Home, Servicios, Registrate} from '../screen/index';

const AppRouter = () => {
  return (
    <>
      <Navbar/>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/registrate" element={<Registrate />} />
      </Routes>
      </>
  );
};

export default AppRouter;