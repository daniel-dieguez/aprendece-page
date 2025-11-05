import React from 'react'
import Style from '../src/style/inicio.module.css'
import Perfil from './components/Perfil'
import SobreMi from './pages/SobreMi';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Agendar from './pages/Agendar';
import InicioDash from './components/dasboard/InicioDash'

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
                <a href="https://api.whatsapp.com/send?phone=50255162181&text=%C2%A1Hola%20Lic!%20Vi%20su%20perfil%20en%20redes%20sociales%20y%20estoy%20interesado%2Fa%20en%20iniciar%20terapia%20psicol%C3%B3gica%20con%20usted.%0A%0AMi%20nombre%20es%20%5BESCRIBA%20SU%20NOMBRE%5D%2C%0A%20%0ASoy%20de%20%5BESCRIBA%20EL%20PA%C3%8DS%20DE%20DONDE%20SE%20ENCUENTRA%5D%0A%0ATengo%20%5BESCRIBA%20CU%C3%81NTOS%20A%C3%91OS%20TIENE%20ACTUALMENTE%5D%20a%C3%B1os.%20%0A%0AActualmente%2C%20tengo%20estudios%20en%20%5BINDIQUE%20QUE%20ESTUDIOS%20TIENE%20ACTUALMENTE%5D.">                  
                <button>Contactame</button>
                </a>
                <a href="https://maps.app.goo.gl/UiFujn2LEypDocZD7">                
                <button>Ubicación</button>
                </a>
                <Link to='/sobremi'>
                  <button>Saber más de mí</button>
                </Link>
                {/* <Link to='/agendar'>
                  <button>Agendar cita</button>
                </Link> */}
              </div>
            </div>
          } />
          <Route exact path='/sobremi' element={<SobreMi />} />
          <Route exact path='/agendar' element={<Agendar />} />
          <Route exact path='/luis-psicologo-dasboard' element={<InicioDash />}></Route>
          <Route exact path=''></Route>
        </Routes>
      </div>
    </Router>
  );
}

