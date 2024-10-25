import { Link, useNavigate } from "react-router-dom"
import {Card, Input, Button, Label} from "../components/ui"
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {register, handleSubmit} = useForm();
  const {signin} = useAuth ();
  const navigate = useNavigate ();
  const onSubmit = handleSubmit(async(data) => {
    await signin(data);
    navigate("/perfil");
    
  });
  
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor='email'>Email</Label>
          <Input type="email" placeholder= "Ingrese su email" {...register("email",{
            required: true,
          })}
          ></Input>
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"{...register("password",{
            required: true,
          })}
          ></Input>
          <Button>Ingresar</Button>
        </form>
        <div className=" flex justify-between my-4">
          <p>¿No tienes cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage