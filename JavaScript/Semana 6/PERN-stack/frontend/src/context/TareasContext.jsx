import { createContext, useContext, useState } from "react";
import { crearTareaRequest, eliminarTareaRequest, listarTareasRequest, listarTareaRequest } from "../api/tareas.api";
import { response } from "express";

const TareasContext = createContext();

export const useTareas = () => {
    const context = useContext(TareasContext);

    if (!context){
        throw new Error("useTareas debe estar dentro del proveedor TareasProvider")
    }
    return context;
}

export const TareasProvider = ({ children }) => {
    const [tareas, setTareas] = useState([]);
    const [errors, setError] = useState([]);

    const cargarTareas = () => {
        const res = await listarTareasResquest()
        setTareas(res.data);
        };

    const cargarTarea = async (id, tarea) =>{
        const res = await listarTareasRequest(id, tarea);
        return res.data;
    };

    const crearTarea = async (tarea) => {
        try{
            const res = await crearTareaRequest(tarea);
            setTareas([...tareas, res.data]);
            return res.data;
        } catch (error){
            if (error.response){
                setError([error.response.dara.message]);
            }
        }
    }
    
    const eliminarTarea = async (id) => {
        const res = await eliminarTareaRequest(id);
        if (res.status === 204){
            setTareas(tareas.filter((tarea) => tarea.id !== id))
        }
        console.log(res);
        };
    };

    return(
        <TareasContext.Provider value={{
            tareas,
            cargarTareas,
            eliminarTarea,
            crearTarea,
            cargarTarea,
            errors,
        }}>
            {children}
        </TareasContext.Provider>
    );
