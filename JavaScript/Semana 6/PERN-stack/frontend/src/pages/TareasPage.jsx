import React, { useEffect, useState } from 'react';
import { obtenerTareasResquest } from '../api/tareas.api';
import {Card} from "../components/ui";

function TareasPage() {
  const [tareas, setTareas] = useState([])

  useEffect(() => {
    listarTareasResquest()
      .then((response) => {
       setTareas(response.data)
      console.log(response.data) 
      });
  return (
    <div>
      {
        tareas.map((tarea, i) => (
          <Card key = {tarea.id}>
            <h3>{tarea.titulo}</h3>
            <p>{tarea.descripcion}</p>
          </Card>
        ))
      }
    </div>
  )
}

export default TareasPage