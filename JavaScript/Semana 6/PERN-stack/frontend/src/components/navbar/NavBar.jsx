import {Link,useLocation} from 'react-router-dom' 
import { PrivateRoutes, PublicRoutes } from './navigation';
import {Container} from "../ui/Container"
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const location=useLocation();
    const {isAuth, signout} = useAuth();
    return (
        <nav className="bg-zinc-950">
            <Container className="flex justify-between items-center py-3">
            <Link to="/">
                <h1 className="text-2xl font-bold text-white">Proyecto PERN</h1>
            </Link>
            <ul className="flex gap-x-2">

                { isAuth ?
                    <>
                     PrivateRoutes.map(({name, path}) => (
                        <Li 
                        className = {`text-slate-300 ${
                            location.pathname === path && "bg-sky-500 py-1"
                        }}'}
                        key={name}
                        >
                        <Link to={path}>{name}</Link>
                        </li> 
                    ))}
                        <li onClick={() => signout()}>salir</li>
                        </>
                    ) : ( 
                     PublicRouters.map(({name, path}) =>(
                        <li
                        className={'text-slate-300 ${
                            location.pathname === path && "bg-sky-500 px-3 py-1"
                        }}`}
                        key={name}
                    >
                        <Link to={path}>{namr}</Link>
                    </Li>
                    ))
                }
                </ul>
            </Container>
        </nav>  
    )
}

export default Navbar