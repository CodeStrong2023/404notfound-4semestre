import { createContext, useContext, useState } from "react";

export const Authcontext= createContext();

export const useAuth = () => {
    const context = useContext(Authcontext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
}

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    return <Authcontext.Provider value={{
        user,
        isAuth,
        errors
    }}>
        {children}
    </Authcontext.Provider>
}
