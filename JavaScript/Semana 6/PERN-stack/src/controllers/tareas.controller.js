import { pool } from "../db.js";

export const listarTareas = (req, res) => res.send("obteniendo tareas");

export const listarTarea = (req, res) => res.send("obteniendo tarea unica");

export const crearTarea = (req, res, next) => 
{
    const {titulo,descripcion} = req.body;
   

    try {
        throw new Error ('algo salio mal');
        const resultado = pool.query("INSERT INTO tareas (titulo, descripcion)VALUES (1$, 2$)"[titulo,descripcion]);
        console.log(raws);
        res.send("creando tarea");
    } catch (error) {
        if (error.code === '23505'){
            return res.send('ya existe una tarea con ese titulo');
        }
        console.log(error);
        next(error);
    } 
}

export const actualizarTarea = (req, res) => res.send("actualizando tarea unica");

export const eliminarTarea = (req, res) => res.send("eliminando tarea unica");