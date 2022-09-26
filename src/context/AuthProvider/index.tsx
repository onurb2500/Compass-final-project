import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate (email:string, password: string) {
        // const response = await LoginRequest(email, password);

        // const payload = { token: response.token, email };
        const main ={
            email: "brunosjaques@gmail.com",
            password: "123456"
        }
        
        const input ={
            email: email,
            password: password
        }

        if ( main !== input) {
            setUser(input);
            setUserLocalStorage(input);
        }
        console.log(user);
        
    }

    async function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}