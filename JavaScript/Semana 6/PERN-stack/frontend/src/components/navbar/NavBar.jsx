import {Link,useLocation} from 'react-router-dom' 
import { PrivateRoutes, PublicRoutes } from './navigation';
import {Container} from "../ui/Container"
import { useAuth } from "../../context/AuthContext";
import { twMerge } from 'tailwind-merge';
import {BiLogOut} from 'react-icons/bi';

function Navbar() {
    const location=useLocation();
    const {isAuth, signout,user} = useAuth();
    return (
        <nav className="bg-zinc-950">
            <Container className="flex justify-between items-center py-3">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-white">Proyecto PERN</h1>
                </Link>
                <ul className="flex gap-x-1 items-center justify-center">
                    { isAuth ? 
                        <>
                        {PrivateRoutes.map(({name, path, icon}) => (
                            <li key={name}
                            >
                            <Link to={path} className = {twMerge(
                                "text-slate-300 item-center flex px-3 py-1 gap-x-1 ",
                                location.pathname === path && "bg-sky-500"
                            )}>
                            {icon}
                            <span className ="hidden sm:block ">{name}</span>
                            </Link>
                            </li> 
                        ))}
                            <li
                            className='text-slate-300 item-center flex px-3 py-1 hover:cursor-pointer'
                            onClick={() => signout()}
                            ><BiLogOut className = "h-5 w-5"/>
                            <span className ="hidden sm:block"> 
                            Salir
                            </span>
                            </li>
                            <li className='flex gap-x-2 item-center justify-center '>
                                <img src={user.grabatar} alt="" className="h-5 w-5 rounder-full"/>
                                <span className='front-medium'>
                                    {user.name}
                                </span>
                            </li>
                            </>
                        ) : ( 
                        PublicRouters.map(({name, path}) =>(
                            <li key={name}
                            >
                                <Link to={path} className = {twMerge(
                                "text-slate-300 item-center flex px-3 py-1",
                                location.pathname === path && "bg-sky-500"
                            )}
                            > 
                            {icon} 
                            <span>
                                {name}
                            </span>
                            
                            </Link>
                        </li>
                        ))
                    }
                </ul>
            </Container>
        </nav>  
    )
}

export default Navbar