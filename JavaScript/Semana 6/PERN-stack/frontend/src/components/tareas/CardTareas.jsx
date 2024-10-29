import {Card, Button} from "../ui";
import { eliminarTareaRequest } from "../../api/tareas.api";

export function CardTareas({tarea}){
    return (
        <Card key = {tarea.id} className="py-4 px-7">
        <div className="flex justify-between items-center">
            <h1 className='text-2xl font-bold'>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
        </div>
        <div className="flex justify-end gap-x-2">
            <Button>Editar</Button>
            <Button className="bg-red-500 hover:bg-red-600"
            onClick={async () => {
                if (window.confirm("Estas seguro de eliminar esta tarea?")){
                const res = await eliminarTareaRequest(tarea.id)
                console.log(res);
                }
            }}
            >Eliminar</Button>
        </div>
        </Card>
    );
}

export default CardTareas