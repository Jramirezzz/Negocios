import { Routes, Route } from 'react-router-dom';
import {Navbar,Footer} from '../componentes/index';
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
      <Footer/>
      
      </>
  );
};

export default AppRouter;