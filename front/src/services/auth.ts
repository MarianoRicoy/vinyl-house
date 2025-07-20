"use server";
import { LoginServiceResponse } from "./utils/types";
import { axiosApiBack } from "./utils";


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

export const postLogin = async (data: LoginUserDto): Promise<LoginServiceResponse> => {
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



