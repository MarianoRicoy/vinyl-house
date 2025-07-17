'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { UseAuthContext } from '@/context/authContext';
import { routes } from '@/routes';
import { postLogin } from '@/services/auth';
import { EyeIcon, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup'; 

const loginSchema = yup.object({
  email: yup
  .string()
  .email('El correo electronico no es valido')
  .required('El correo electronico es requerido'),
  password: yup
  .string()
  .min(6, 'La contraseña debe tener al menos 6 caracteres')
  .required('La contraseña es requerida'),

});

const LoginForm = () => {
  const {saveUserData} = UseAuthContext();
  const router= useRouter();
  const [formData, setFormData] = React.useState({
    //email: '',
    //password: '',
    email: 'nano4@example.com',
    password: "SuperSecreta123!",
  });
  const [errors, setErrors] = React.useState<Record<string,
  string>>({});
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);


//validaciones
const handleValidation = async () => {
  try {
    await loginSchema.validate(formData, { abortEarly: false });
    console.log('Validación exitosa');
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      console.error('Errores de validación:', error.errors);
      const newErrors: Record<string, string> = {};
      error.inner.forEach((curr) => {
        if (curr.path) {
          newErrors[curr.path] = curr.message;
        }
      });
      setErrors(newErrors);
    }
  }
};
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
};

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  handleValidation();
  e.preventDefault();

try{
setLoading(true);
const res = await postLogin (formData);

if (res.errors) {
  console.log("error",res);
  return toast.error("ocurrio un error al iniciar sesion");
}
console.log("respuesta", res.data);
toast.success("Usuario logueado correctamente");

//guardar datos del usuario
saveUserData(res.data);

//guardar el token en localStorage o cookies

//redireccionar al usuario a la pagina de inicio o dashboard
setTimeout(() => {
  router.push(routes.home);
}, 2000);

}catch (error) {
  console.error("Error al iniciar sesion:", error)
  toast.error(`ocurrio un error al iniciar sesion`);
} finally {
  setTimeout(() => {
    setLoading(false);
  }, 2000);

}
}; 

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <Input
      label="Correo Electronico"
      id="email"
      type="text"
      placeholder="Ingresa tu correo electronico"
      className="mb-4"
      value={formData.email}
      onChange={handleChange}
      error={errors?.email}
    />
<Input
  label="Contraseña"
  id="password"
  type={showPassword ? "text" : "password"}
  placeholder="Ingresa tu contraseña"
  className="mb-4"
  value={formData.password}
  onChange={handleChange}
  error={errors?.password}
>
  <div onClick={handleShowPassword} className="cursor-pointer px-2">
    {showPassword ? <EyeOff size={16} /> : <EyeIcon size={16} />}
  </div>
</Input>


    {errors?.password && <span className="text-red-500 text-sm mb-2">{errors?.password}</span>}
    <Button label="iniciar sesion" type="submit"
    className="mt-3 
    text-slate-400 " disabled={loading} />
    </form>
  );
}
export default LoginForm;