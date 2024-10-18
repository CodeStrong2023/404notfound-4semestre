import {Input} from "../components/ui/input";
import {Card} from "../components/ui/Card";
import {Link} from "../components/ui/Button"
function RegisterPage() {
  return (

    <div className="h-[calc(100vh-64px)] flex items-center ustufy-center">
         <Card>
         <h3 className='text-2xl font-bold text-blue-600'>Registro</h3>
            <form>
                <Input placeholder="Ingrese su nombre"></Input>
                <Input type="email" placeholder="Ingrese su email"></Input>
                <Input type="password" placeholder="Ingrese su contraseña"></Input>

                <Button>Registrarse</Button>
            </form>
         </Card>
    </div>
  );
}

export default RegisterPage
