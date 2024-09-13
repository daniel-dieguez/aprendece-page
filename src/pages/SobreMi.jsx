import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../style/info.module.css'


export default function SobreMi() {
  return (
    <div className={Style.div}>
      <div>
  <h2>Psicólogo con más de 30 Años de experiencia</h2>
  <p>
    <strong>Luis Diéguez</strong> es un profesional con más de 30 años de experiencia en el campo de la psicología,
     habiendo ayudado a más de 1,000 pacientes a lo largo de su carrera. Graduado de la prestigiosa Universidad Rafael 
     Landívar de Guatemala ha construido una sólida trayectoria en la atención emocional y el desarrollo personal.

  </p>
  <p>
  A lo largo de su carrera ha ampliado su experiencia no solo en el ámbito clínico, 
  sino también en el coaching empresarial brindando apoyo a compañías en la mejora del 
  bienestar laboral y emocional de sus empleados.  Su enfoque integral le permite acompañar 
  tanto en lo individual como a grupos en la búsqueda de un equilibrio emocional y mental.

  </p>
  <p>
  Su propósito central es proporcionar un acompañamiento personalizado a 
  todas aquellas personas que necesiten apoyo en su salud emocional, con el firme 
  compromiso de guiarlas hacia una vida más equilibrada y plena.
  </p>
</div>

      <Link to='/'>
      <button>Regresar</button>
      </Link>
    </div>
  )
}
