'use client'
import React, { FC } from 'react'
import Button from '../button'
import Link from 'next/link';
import { routes } from '@/routes';
import { UseAuthContext } from '@/context/authContext';
import { useCartContext } from '@/context/cartContext';
import Loader from '../loader/loader';

const AddCartButton:FC<{product:Partial<IProduct>}> = ({product}) => {
  const {isAuth} = UseAuthContext();
  const {addToCart, isProductInCart}= useCartContext();
  const isOnCart = product && product.id !== undefined ? isProductInCart(product.id) : false;


  const handleAddTocart = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.stopPropagation();
    return addToCart(product);
  };
  if (isAuth == null) {
    return <Loader />
  }

if (isAuth == false) {
  return (
    <div>
      <p>
        Por favor,{" "}
        <Link
          href={routes.login}
          className=" text-primary-500 underline hover:font-medium "
        >
          inicia sesión
        </Link>{" "}
        para agregar productos al carrito.
      </p>
    </div>
  );
}

return (
  <Button
    label={isOnCart ? "Producto agregado" : "Agregar al carrito"}
    className="w-full"
    onClick={isOnCart ? () => null : handleAddTocart}
    //disabled={isOnCart}
  />
);
};
export default AddCartButton;

