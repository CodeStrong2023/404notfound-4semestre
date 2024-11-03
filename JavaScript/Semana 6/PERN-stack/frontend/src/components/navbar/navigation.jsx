import{MdAddTask} from "react-icons/md"
import{BiTask, BiUserCircle} from "react-icons/bi"


export const PublicRoutes = [
{
    name:"about",
    path:"/about"},
{
    name:"login",
    path:"/login"},
{
    name:"registro",
    path:"/register"}
]

export const PrivateRoutes =[
    {
    name:"Home",
    path:"/"
},

{
    name:"perfil",
    path:"/perfil"},
    icon: <BiUserCircle className = "h-5 w-5" />
{
    name:"tareas",
    path:"/tareas",
    icon: <BiTask className = "h-5 w-5" />
},
{
    name:"Agregar",
    path:"/tareas/crear"},
    icon: <MdAddTask className = "h-5 w-5" />

]