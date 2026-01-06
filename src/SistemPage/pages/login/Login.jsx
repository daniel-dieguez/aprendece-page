import { useState } from 'react'
import Style from '../../styles/login.module.css'
import aprende from '../../../landingPage/img/log.png'
import { Link } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { login } from '../../Services/authService';

import { toast } from 'react-toastify'
import { OptionsToast } from '../../Globales';
// import Dashboard from '../dashboard/Dashboard';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();



    try {
      const data = await login({
        username: userName,
        password: password
      });

     
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      console.log("Login exitoso:", data);
      toast.success("Login exitoso", OptionsToast);
      navigate("/dashboard")

     
      

    } catch (err) {
      toast.error("Usuario o contraseña incorrectos", OptionsToast);

    } 
  };

  return (
    <div className={Style.container}>
      <div className={Style.loginBox}>
        <img
          src={aprende}
          alt="Logo"
          className={Style.logo}
        />

        <h2 className={Style.title}>Iniciar Sesión</h2>

        <div className={Style.form}>
          <Label htmlFor="username" className={Style.label}>Usuario</Label>
          <Input
            type="text"
            id="username"
            placeholder="Usuario"
            className={Style.input}
            onChange={(e) => {
              const value = e.target.value;
              setUserName(value);
            }}
          />

          <Label htmlFor="password" className={Style.label}>Contraseña</Label>
          <Input
            type="password"
            id="password"
            placeholder="Contraseña"
            className={Style.input}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
            }}
          />

        <button onClick={handleLogin} className={Style.button}>
          Ingresar
        </button>
        
        </div>


        <Link href="#" className={Style.forgotLink}>¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  )
}
