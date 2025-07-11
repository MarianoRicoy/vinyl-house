'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { EyeIcon, EyeOff } from 'lucide-react';
import React from 'react';
import * as yup from 'yup'; 

let loginSchema = yup.object({
  email: yup.string().email('El correo electronico no es valido').required('El correo electronico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),

});

const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    //email: '',
    //password: '',
        email: 'mfricoy@mail.com',
    password: '123456',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
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

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  handleValidation();
  e.preventDefault();
  // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
  console.log('Formulario enviado:', formData);
} 

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
  <Button label="iniciar sesion" type="submit" className="mt-3 text-slate-400 " />
    </form>
  );
}
export default LoginForm;