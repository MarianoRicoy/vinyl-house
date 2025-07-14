'use client'
import React from 'react'
import Link from 'next/link';
import Button from '@/components/ui/button';
import { routes } from '@/routes';
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { UseAuthContext } from '@/context/authContext';
import { usePathname } from 'next/navigation';
import Loader from '@/components/ui/loader/loader';


export const AuthNavbar = () => {
  const { isAuth, resetUserData } = UseAuthContext(); // obtener el estado de autenticacion y la funcion para resetear los datos del usuario

  const pathname = usePathname();

  const user = {
    id: 1,
    name: 'Mariano Ricoy',
    email: 'nano@example.com',
    address: 'Calle 123, Miramar, Buenos Aires',
    phone: '+54 9 223 4567890',
    role: 'user',
  }; 

  const logout = () =>{
  resetUserData();


  if (pathname === routes.home) {

  location.href = routes.login;
    return;
  }
  location.href = routes.home; // 
};
  if(isAuth === null) {
  return <Loader />
  }; // Si isAuth es null, significa que estamos esperando la respuesta de la autenticacion

// Lo que se muestra si el usuario NO esta autenticado 
  if (!isAuth) { //false 
    return (
      <div>
        <Link href={routes.login}>
        <Button
        label="iniciar Sesion"
        className="bg-gray-300 text-white hover:bg-gray-400"
        />
        </Link>
        <Link href={routes.register}>
        <Button
        label='registrarse'
        className='ml-2 bg-gray-500 text-white hover:bg-gray-500'
        />
        </Link>
      </div>
    );
  }

// Lo que se muestra si el usuario SI esta autenticado
  return( 
  <div className='flex items-center space-x-4 rtl:space-x-reverse'>
    <Link href={routes.cart}>
      <PiShoppingCartSimpleDuotone className='h-5 w-5 text-gray-500'/>
    </Link>
    <Link 
    href={routes.profile} 
    className='flex items-center space-x-2 rtl:space-x-reverse'
    >
      <PiUserCircleDuotone className="h-8 w-8 text-gray-500"/>
    <span className='cursor-pointer font-medium'>{user.name}</span>
    </Link>  
  <div onClick={logout} className='cursor-pointer'>
    <MdLogout className='h-5 w-5 text-gray-500'/>
  </div>
  </div>
  );
};  
