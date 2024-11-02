import axios from "./axios"

export const crearTareaRequest = async (tarea) =>  axios.post("/tareas", tarea);

export const listarTareasResquest = () => axios.get("/tareas")

export const eliminarTareaRequest = (id) => axios.delete(`/tareas/${id}`)

export const listarTareaResquest = (id) => axios.get(`/tareas/${id}`)

export const actualizarTareaRequest = (id, tarea) => axios.put(`/tareas/${id}`, tarea)