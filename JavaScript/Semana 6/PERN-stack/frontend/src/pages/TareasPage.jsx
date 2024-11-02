import React, { useEffect } from 'react';
import {CardTareas} from "../components/tareas/CardTareas";
import { useTareas, cargarTareas } from "../context/TareasContext";


function TareasPage() {
  const {tareas, cargarTareas} = useTareas();
  console.log(tareas);

  useEffect(() => {
      cargarTareas();
    }, []);

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