import React, { useEffect, useState } from 'react';
import { listarTareasResquest } from '../api/tareas.api';
import {CardTareas} from "../components/tareas/CardTareas";

function TareasPage() {
  const [tareas, setTareas] = useState([])

  useEffect(() => {
    listarTareasResquest()
      .then((response) => {
       setTareas(response.data)
     
      });
    }, []);

  return (
    <div className='grid grid-cols-3 gap-2'>
      {
        tareas.map((tarea) => (
          <Card key = {tarea.id}>
            <h1 className='text-2xl font-bold'>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
          </Card>
        ))
      }
    </div>
  )
}

export default TareasPage