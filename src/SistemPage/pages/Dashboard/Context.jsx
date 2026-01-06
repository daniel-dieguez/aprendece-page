import React, { useEffect, useState, createContext, useContext } from 'react'
import { ContentContext as ContentYear } from  "../../Globales/Time/Context"
import { OptionsToast, returnYear } from "../../Globales/index";
import { toast } from 'react-toastify'
import { get } from '../../../SistemPage/Services/api';



export const ContentContext = createContext()

export const ContentProvider = ({ children }) => {

  const { startDate } = useContext(ContentYear);
  const [totalPacientes, setTotalPacientes] = useState(null);


  const pacients = async () => {
    try {
      const response = await get(`/api/personas/totalPacientes/2025`);
      setTotalPacientes(response);
      console.log(response);
      alert(response);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    totalPacientes,
  };

useEffect(() => {
  pacients();
}, []);

  return (
<ContentContext.Provider value={value}>
  {children}
  </ContentContext.Provider>
  )
}

