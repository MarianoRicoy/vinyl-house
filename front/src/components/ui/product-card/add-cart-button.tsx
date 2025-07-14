'use client'
import React from 'react'
import Button from '../button'
import Link from 'next/link';
import { routes } from '@/routes';

const AddCartButton = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div>
        <p>
        por favor, <Link href={routes.login}
        className='text-gray-500 underline
        hover:font-medium'>inicia sesion</Link> para agregar productos al carrito</p>
      </div>
    )
  }
  // If the user is authenticated, show the button
  return (
  <Button label="Agregar al Carrito" variant="tertiary" className='w-full'/>
  )
}

export default AddCartButton