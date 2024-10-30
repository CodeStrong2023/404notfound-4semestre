import {Card, Input, Textarea,Label, Button} from ".../components/ui";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { useTareas } from "../context/TareasContext";

function TareaFormPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();
  const [postError, setPostError] = useState([]);
  const {crearTarea} =useTareas();
  const onSubmit = handleSubmit(async (data) => {
    const res = await crearTarea(data);
    if(res){
      navigate("/tareas");
    }
  });
  
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {
          postError.map((error) => (
            <p className="bg-red-500 text-white p-2" key= {i}>{error}</p>
          ))
        }
        <h2 className="text-3xl font-bolt my-4 ">Formulario de Tareas</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="titulo"><Titulo></Titulo></Label>
          <Input 
          type= "text" 
          placeholder= "Titulo"
          autiFocus 
          {...register("titulo", {required: true})}
          />
          {errors.titulo && (
            <p className="text-red-500">El titulo es requerido</p>
          )}

          <Label htmlFor="descripción">Descripción</Label>
          <Textarea type= "text" placeholder = "Descrepción"
          row= {3}
          {...register("descripción")}/>

          <Button>
            Guardar
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default TareaFormPage