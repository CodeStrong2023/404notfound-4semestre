import React, { useEffect } from 'react';
import {CardTareas} from "../components/tareas/CardTareas";
import { useTareas, cargarTareas } from "../context/TareasContext";


function TareasPage() {
  const {tareas, cargarTareas} = useTareas();
  console.log(tareas);

  useEffect(() => {
      cargarTareas();
    }, []);

    if (tareas.length == 0) {
      return (
        <div className='flex justify-center items-center h-[calc(100vh-10rem)]'>
          <h1 className='text-3xl font-bold'>No hay tareas</h1>
        </div>
      )
    }

  return (
    <div className='grid grid-cols-3 gap-2'>
      {
        tareas.map((tarea) => (
          <CardTareas tarea = {tarea} key={tarea.id}/>
        )
        )
      }
    </div>
  );
}

export default TareasPage