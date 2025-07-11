'use client'
import React from 'react'
import { Formik } from 'formik';
import Input from '@/components/ui/input';
import * as Yup from 'yup';
import Button from '@/components/ui/button';
import { EyeIcon, EyeOff } from 'lucide-react';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
  password: Yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Campo requerido'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), ""], 'Las contraseñas deben coincidir')
    .required('Campo requerido'),
  phone: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
  name: Yup.string().required('Campo requerido'),
});

const registerForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        name: ''
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Formulario enviado con los siguientes valores:', values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <Input
              label='Nombre'
              id='name'
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name ? errors.name : ""}
            />

            <Input
              label='Email'
              id='email'
              type='text'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email ? errors.email : ""}
            />

            <Input
              label='Contraseña'
              id='password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password ? errors.password : ""}
            >
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <EyeIcon />}
              </div>
            </Input>

            <Input
              label='Confirmar contraseña'
              id='confirmPassword'
              type={showPassword ? 'text' : 'password'}
              name='confirmPassword'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ""}
            >
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <EyeIcon />}
              </div>
            </Input>

            <Input
              label='Teléfono'
              id='phone'
              type='text'
              name='phone'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={errors.phone && touched.phone ? errors.phone : ""}
            />

            <Input
              label='Dirección'
              id='address'
              type='text'
              name='address'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              error={errors.address && touched.address ? errors.address : ""}
            />

          </div>

          <Button
            label='Registrarse'
            type='submit'
            disabled={isSubmitting}
            className='w-full mt-4'
          />
        </form>
      )}
    </Formik>
  )
}

export default registerForm;
