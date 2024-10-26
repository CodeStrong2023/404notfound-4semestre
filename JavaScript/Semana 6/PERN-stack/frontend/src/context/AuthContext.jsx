import { createContext, useContext, useState } from "react";
import axios from "axios";

export const Authcontext= createContext();

export const useAuth = () => {
    const context = useContext(Authcontext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);
    const signin = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data ,{
            withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
    };

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data ,{
            withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
    };

    return <Authcontext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        setUser,
        signin, 

    }}>
        {children}
    </Authcontext.Provider>
}
