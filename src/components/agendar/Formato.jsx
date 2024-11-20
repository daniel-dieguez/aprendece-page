import React, { useState } from 'react'
import style from '../../style/formulario.module.css'
import { Link } from 'react-router-dom';
import Hora from '../agendar/Hora'

export default function Formato() {

  const [step, setStep] = useState(1);
  const [fecha, setfecha] = useState('');
  const [hora, setHora] = useState('');
  const [dpiUser, setDipUser] = useState('');
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [edad, setEdad]  = useState('');
  const [correo, setCorreo] = useState('');


  /*manejo de hora*/
  const handleHoraSeleccionada = (horaSeleccionada) => {
    setHora(horaSeleccionada); // Actualiza el estado con la hora seleccionada
    console.log("Hora seleccionada:", horaSeleccionada);
  };
  
  
    // Manejar envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(nombre, edad, numero,edad, correo,fecha,hora);
    };

  
  
    const sendData = () =>{

    }

  return (
    
    <div className={style.container}>
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name" className={style.label}>Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={e =>setNombre(e.target.value)}
        required
        className={style.input}
      />

      <label htmlFor="email" className={style.label}>Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Ingresa tu correo"
        value={correo}
        onChange={e => setCorreo(e.target.value)}
        required
        className={style.input}
      />

      <label htmlFor="phone" className={style.label}>Número de Teléfono:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Ingresa tu número"
        value={numero}
        onChange={e =>setNumero(e.target.value)}
        required
        className={style.input}
      />

      <label htmlFor="age" className={style.label}>Edad:</label>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Ingresa tu edad"
        value={edad}
        onChange={e => setEdad(e.target.value)}
        required
        className={style.input}
      />

      <label htmlFor="date" className={style.label}>Fecha:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={fecha}
        onChange={e => setfecha(e.target.value)}
        required
        className={style.input}
      />
      <Hora onHoraSeleccionada={handleHoraSeleccionada}></Hora>

      <button type="submit" className={`${style.btn} ${style.btnPrimary}`}>
        Enviar
      </button>
      <Link to="/">
      <button>Regresar</button>
      </Link>
    </form>
</div>

    
  )
}
