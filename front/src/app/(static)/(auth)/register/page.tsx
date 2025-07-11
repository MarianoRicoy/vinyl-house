import Link from "next/link";
import RegisterForm from "./components/register-form";

export default function RegisterPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-600 text-center my-3">
        Crear cuenta
      </h2>
      <RegisterForm />
      <p className="text-center text-sm text-neutral-500 mt-3">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-primary-500 hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
