import axios from "./axios"

export const crearTareaRequest = async (Tarea) => {await axios.post("/tareas", tarea);}

export const obtenerTareasResquest = async () => {axios.get}