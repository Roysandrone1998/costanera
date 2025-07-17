import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Importamos React Router
import Navbar from "./components/Navbar";  // Importamos la Navbar

// Importamos las páginas que vamos a usar
import Home from "./pages/Homex";
import TresC from "./pages/TresC";
import  VinosDeRio from "./pages/VinosDeRio";
import ParanaTuRio from "./pages/ParanaTuRio";
import OpenClub from "./pages/OpenClub";
import GlobalTour from "./pages/GlobalTour";
import Omm from "./pages/Omm";
import Contacto from "./pages/Contacto";
import Temaiken from "./pages/Temaiken";
import MotoTur from './pages/MotoTur';
import Representaciones from './pages/Representaciones';

function App() {
  return (
    <BrowserRouter>  {/* Este es el contenedor principal de rutas */}
      <Navbar />  {/* Aquí mostramos la barra de navegación */}
      
      <Routes>  {/* Aquí se definen las rutas */}
        <Route path="/" element={<Home />} />  {/* Página principal Home */}
        <Route path="/OpenClub" element={<OpenClub />} />  {/* Página OpenClub */}
        <Route path="/omm" element={<Omm />} />  {/* Página Omm */}
        <Route path="/globalTour" element={<GlobalTour />} />  {/* Página GlobalTour */}
        <Route path="/contacto" element={<Contacto />} />  {/* Página Contacto */}
        <Route path="/tresC" element={<TresC />} />  {/* Página tresc */}
        <Route path="/temaiken" element={<Temaiken />} />  {/* Página temaiken */}
        <Route path="/paranaTuRio" element={<ParanaTuRio />} />  {/* Página paranario */}
        <Route path="/vinoDeRio" element={<VinosDeRio />} />  {/* Página tvino*/}
        <Route path='/MotoTur'element={<MotoTur />}/>
        <Route path='/Representaciones'element={<Representaciones />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;