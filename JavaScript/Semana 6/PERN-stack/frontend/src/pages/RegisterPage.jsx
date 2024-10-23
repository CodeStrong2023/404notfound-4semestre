import { Button, Card, Input } from "../components/ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "axios"
function RegisterPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = handleSubmit(async (data) => {
    
    const res= await axios.post("http://localhost:3000/api/signup", data,{
      withCredentials: true,
    });
      console.log(res);
    
  });

  return (

    <div className="h-[calc(100vh-64px)] flex items-center ustufy-center">
         <Card>
         <h3 className='text-2xl font-bold text-blue-600'>Registro</h3>
            <form onSubmit={onSubmit}>
                <Input placeholder="Ingrese su nombre"
                {...register("name", {required:true})}></Input>

                {
                  errors.name && <p className="text-red-500">Este campo es requerido</p>
                }

                <Input type="email" placeholder="Ingrese su email"
                {...register("email", {required:true})}></Input>

                {
                  errors.email && <p className="text-red-500">Este campo es requerido</p>
                }

                <Input type="password" placeholder="Ingrese su contraseña"
                {...register("password", {required:true})}></Input>

                {
                  errors.password && <p className="text-red-500">Este campo es requerido</p>
                }

                <Button>Registrarse</Button>
            </form>
         </Card>
    </div>
  );
}

export default RegisterPage
