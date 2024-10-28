import {Card, Input, Textarea,Label, Button} from ".../components/ui";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { crearTareaRequest } from "../api/tareas.api";
import { useState } from "react";

function TareaFormPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useFrom();
  const navigate = useNavigate();
  const [postError, setPostError] = useState([]);

  const onSubmit = hamdleSubmit(async (data) => {
    try{
      const res = await crearTareaRequest(data);
      navigate("/tareas");
      
    }catch (error) {
      setPostError(error.response.data.message);
    }
  });
  
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {
          postError.map((error) => (
            <p className="bg-red-500 text-white p-2">{error}</p>
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