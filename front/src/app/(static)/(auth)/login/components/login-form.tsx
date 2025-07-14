'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { postLogin } from '@/services/auth';
import { EyeIcon, EyeOff } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup'; 

let loginSchema = yup.object({
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
  const [formData, setFormData] = React.useState({
    //email: '',
    //password: '',
    email: 'nano3@example.com',
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

}catch (error: unknown) {
  toast.error("ocurrio un error al iniciar sesion");
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
      children={
      <div onClick={handleShowPassword}>
        {showPassword ? <EyeOff /> : <EyeIcon />}
        </div>}
    />
    {errors?.password && <span className="text-red-500 text-sm mb-2">{errors?.password}</span>}
    <Button label="iniciar sesion" type="submit"
    className="mt-3 
    text-slate-400 " disabled={loading} />
    </form>
  );
}
export default LoginForm;