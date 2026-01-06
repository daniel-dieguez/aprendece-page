// import api from "../Services/api";

// export const getUsuarios = async () => {
//   const response = await api.get("/usuarios");
//   return response.data;
// };

// export const crearUsuario = async (data) => {
//   const response = await api.post("/usuarios", data);
//   return response.data;
// };


import { get, post } from "../Services/api";

export const getUsuarios = () => get("/usuarios");

export const crearUsuario = (data) =>
  post("/usuarios", data);
