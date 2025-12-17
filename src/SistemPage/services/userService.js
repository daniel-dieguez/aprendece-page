import api from "./api";

export const getUsuarios = async () => {
  const response = await api.get("/usuarios");
  return response.data;
};

export const crearUsuario = async (data) => {
  const response = await api.post("/usuarios", data);
  return response.data;
};
