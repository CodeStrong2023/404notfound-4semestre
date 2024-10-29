
import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoute = ({redirecTo,isAllwed,children}) =>{
    if(!isAllwed)return <Navigate to={redirecTo} replace/>

    return children ? children :<Outlet />;
}