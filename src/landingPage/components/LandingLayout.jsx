import React from 'react'
import { Outlet } from "react-router-dom";
import Style from "../style/inicio.module.css";

export default function LandingLayout() {
  return (
 <div className={Style.cuerpo}>
      <Outlet />
    </div>
  )
}
