'use client'
import Button from '@/components/ui/button';
import { routes } from '@/routes';
import Link from 'next/link';
import React from 'react'
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";


export const AuthNavbar = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  const user = {
    id: 1,
    name: 'Mariano Ricoy',
    email: 'nano@example.com',
    address: 'Calle 123, Miramar, Buenos Aires',
    phone: '+54 9 223 4567890',
    role: 'user',
  };

const logout = () =>{
  console.log("Logout function not implemented yet")
}

// Lo que se muestra si el usuario NO esta autenticado 
  if (!isAuthenticated) {
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
