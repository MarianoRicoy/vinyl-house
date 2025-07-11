import React from "react";
import LoginForm from "./components/login-form";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-thin text-neutral-400 text-center my-2">
        Iniciar Sesion
      </h2>
      <LoginForm />
      <p className="text-center text-sm text-neutral-400 mt-3">
        ¿No tienes cuenta? {""}
        <Link href="/register" className="text-primary-500 hover:underline">
        Registrate
        </Link>
      </p>
    </div>
  );
};

export default page