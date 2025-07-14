'use client';
import { LoginResponse } from "@/services/types";
import { createContext, JSX, useContext, useEffect, useState } from "react";

type AuthContextType = {
  // state to manage authentication
  isAuth: boolean | null;
  user: IUser | null;
  token: string | null;

// actions to manage authentication
  saveUserData: (data: any) => void;
  resetUserData: () => void;
};

const AUTH_KEY = "authData"; // Key for localStorage

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  //Actions

  const saveUserData = (data: LoginResponse) => {
    setUser(data.user);
    setToken(data.token);
    setIsAuth(true);

    // guardar los datos del contexto en el localstorage
    localStorage.setItem(
      AUTH_KEY, // "authData" key
      JSON.stringify(data)
    );
  };
  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false); 

localStorage.removeItem(AUTH_KEY); // remove auth data from localStorage
  };

  //restaurar los datos del contexto desde el localstorage

useEffect(() => {
  const storage = JSON.parse(localStorage.getItem
  (AUTH_KEY) || "{}");
  
  console.log("storage", storage);

//en caso de que estuviera logueado y borrara por a o b el local storage
  if (storage === undefined || !Object.keys(storage)?.
  length) {
    setIsAuth(false);
    return
  }
  
  const storageType = storage as any;
  
  setUser(storage?.user);
  setIsAuth(storage?.login);
  setToken(storageType?.token);
  }, []); // vamos a obtener el objeto js guardado en el localStorage

  return (
    <AuthContext.Provider value={{ isAuth, user, token, saveUserData, resetUserData }}>
      {children}
    </AuthContext.Provider>
  );
}


//custom hook

export const UseAuthContext = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error("UseAuthContext must be used within an AuthProvider");
  } 
  return context;
};