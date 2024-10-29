import axios from "./axios"

export const crearTareaRequest = async (Tarea) =>  axios.post("/tareas", tarea);

export const listarTareasResquest = () => axios.get("/tareas")

export const eliminarTareaRequest = (id) => axios.delete(`/tareas/${id}`)