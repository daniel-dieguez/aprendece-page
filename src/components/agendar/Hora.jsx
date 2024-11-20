import React, { useState } from "react";
import style from "../../style/hora.module.css";

const HorasDisponibles = ({ onHoraSeleccionada }) => {
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const horas = [];
  for (let i = 8; i <= 18; i++) {
    horas.push(`${i.toString().padStart(2, "0")}:00`);
  }

  const handleChange = (e) => {
    const hora = e.target.value;
    setHoraSeleccionada(hora);
    if (onHoraSeleccionada) {
      onHoraSeleccionada(hora); // Notifica al componente padre
    } else {
      console.error("La función onHoraSeleccionada no está definida.");
    }
  };

  return (
    <div className={style.horasContainer}>
      <label htmlFor="hora" className={style.label}>
        Horas disponibles:
      </label>
      <select
        id="hora"
        name="hora"
        value={horaSeleccionada}
        onChange={handleChange}
        className={style.select}
      >
        <option value="" disabled>
          Seleccione una hora
        </option>
        {horas.map((hora) => (
          <option key={hora} value={hora}>
            {hora}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HorasDisponibles;
