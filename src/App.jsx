import React from 'react'
// import Style from '../src/landingPage/style/inicio.module.css'
// import Perfil from './landingPage/pages/Perfil'
import SobreMi from './landingPage/pages/SobreMi';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import WhatsappRedirect from './landingPage/components/whastapp/WhatsappRedirect';
import Home from './landingPage/pages/Home';

// -- Corresponde a system
import Login from './SistemPage/pages/login/Login';
import Dashboard from './SistemPage/pages/Dashboard/Index';
// import styleSistem from './SistemPage/styles/app.module.css'

import SystemLayout from './SistemPage/Components/SystemLayout';
import AuthLayout from './SistemPage/Components/AuthLayout';
import LandingLayout from './landingPage/components/LandingLayout';



export default function App() {
  return (
  
     <Router>
      <Routes>

        {/* LANDING */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/whatsapp" element={<WhatsappRedirect />} />
        </Route>

        {/* SISTEMA */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

        </Route>
        <Route element={<SystemLayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

