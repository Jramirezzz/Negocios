import { Routes, Route } from 'react-router-dom';
import {Navbar,Footer} from '../componentes/index';
import {Servicios, Registrate} from '../screen/index';

const AppRouter = () => {
  return (
    <>
      <Navbar/>    
      <Routes>
 
        <Route path="/" element={<Servicios />} />
        <Route path="/registrate" element={<Registrate />} />
      </Routes>
      <Footer/>
      
      </>
  );
};

export default AppRouter;