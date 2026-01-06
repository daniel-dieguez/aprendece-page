import React, { useContext, useState } from 'react';

import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { ContentContext } from './Context';
// import classnames from 'classnames';
import styles from '../../styles/app.module.css'
import Select from 'react-select';
// import { Row, Col } from 'reactstrap'

export const Header = () => {
  const { control, formState: { errors } } = useForm();
  const { startDate, setStartDate, mes, setMes } = useContext(ContentContext);

  const meses = [
    { label: 'Enero', value: 1 },
    { label: 'Febrero', value: 2 },
    { label: 'Marzo', value: 3 },
    { label: 'Abril', value: 4 },
    { label: 'Mayo', value: 5 },
    { label: 'Junio', value: 6 },
    { label: 'Julio', value: 7 },
    { label: 'Agosto', value: 8 },
    { label: 'Septiembre', value: 9 },
    { label: 'Octubre', value: 10 },
    { label: 'Noviembre', value: 11 },
    { label: 'Diciembre', value: 12 },
  ];

  console.log("seleccionaste el mes de",mes)
  console.log("seleccionaste año de",startDate.getFullYear())

  return (
    <header className={styles.timeHeader}>
      <div className={styles.timeBox}>


        {/* Año */}
        <div className={styles.timeItem}>
          <span className={styles.label}>Año</span>
          <Controller
            name="anio"
            control={control}
            render={() => (
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearPicker
                dateFormat="yyyy"
                yearItemNumber={9}
              />
            )}
          />
        </div>

        {/* Mes */}
        <div className={styles.timeItem}>
          <span className={styles.label}>Mes</span>
          <Controller
            name="mes"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix="react-select"
                options={meses}
                value={meses.find(opt => opt.value === field.value)}
                {...field}
                onChange={(opt) => {
                  field.onChange(opt.value);
                  setMes(opt.value);
                }}
              />
            )}
          />
        </div>

      </div>
    </header>


  );
};

export default Header;
