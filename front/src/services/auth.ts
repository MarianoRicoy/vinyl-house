"use server";
import axios from "axios";
console.log("BaseURL Axios:", process.env.NEXT_PUBLIC_API_URL);

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, //http://localhost:3002
});

export const postRegister = async (data: RegisterUserDto) => {
  try{
    const res = await axiosApiBack.post("/users/register", data);

    if(!res.data) {
      console.warn("Imvalid post register data format", res.data );
      return {
        message: "Error al registrar el usuario",
        errors: res.data,
      };
    };
    return {
      message: "Usuario registrado correctamente",
    };
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.warn("Error fetching post register", e?.message);
    }
    return {
      message: "Error al registrar el usuario",
      errors: (e as Error).message || "Error desconocido",
    };
  };
};

export const postLogin = async (data: LoginUserDto) => {
  try{
    const res = await axiosApiBack.post("/users/login", data);

    if(!res.data) {
      console.warn("Imvalid post login data format", res.data );
      return {
        message: "Error al iniciar sesion",
        errors: res.data,
      };
    };
    return {
      message: "Usuario inicio sesion correctamente",
      data: res.data,
    };
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.warn("Error fetching post login", e?.message);
    }
    return {
      message: "Error al intentar iniciar sesion",
      errors: (e as Error).message || "Error desconocido",
    };
  };
};

