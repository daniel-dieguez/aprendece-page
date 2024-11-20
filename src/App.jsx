import React from 'react'
import Style from '../src/style/inicio.module.css'
import Perfil from './components/Perfil'
import SobreMi from './pages/SobreMi';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Agendar from './pages/Agendar';

export default function App() {
  return (
    <Router>
      <div className={Style.cuerpo}>
        <Routes>
          <Route exact path="/" element={
            <div>
              <div className={Style.perfilInicio}>
                <Perfil></Perfil>
              </div>
              <div className={Style.botones}>
                <a href="https://bit.ly/3LPa0tf">                  
                <button>Contactame</button>
                </a>
                <a href="https://maps.app.goo.gl/UiFujn2LEypDocZD7">                
                <button>Ubicación</button>
                </a>
                <Link to='/sobremi'>
                  <button>Saber más de mí</button>
                </Link>
                <Link to='/agendar'>
                  <button>Agendar cita</button>
                </Link>
              </div>
            </div>
          } />
          <Route exact path='/sobremi' element={<SobreMi />} />
          <Route exact path='/agendar' element={<Agendar />} />
        </Routes>
      </div>
    </Router>
  );
}

