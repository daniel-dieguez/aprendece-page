import React from 'react'
import LicenciadoImg from '../img/licenciado3.1.jpg'
import Style from '../style/components.module.css'


export default function Perfil() {
  return (
    <div className={Style.contenedor}>
        <img src={LicenciadoImg} className={Style.foto}alt="" />
        <h4>Aprendece</h4>
        <div className={Style.letras}>
        <h1>PSICÓLOGO</h1>
        <h3>LUIS DIEGUEZ</h3>
        </div>

    </div>
  )
}
