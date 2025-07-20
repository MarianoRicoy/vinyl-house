'use client';
import React, { FC } from 'react';
import Button from '../button';
import { routes } from '@/routes';
import { UseAuthContext } from '@/context/authContext';
import { useCartContext } from '@/context/cartContext';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const AddCartButton: FC<{ product: Partial<IProduct> }> = ({ product }) => {
  const { isAuth } = UseAuthContext();
  const { addToCart, isProductInCart } = useCartContext();
  const router = useRouter();

  const isOnCart =
    product && product.id !== undefined ? isProductInCart(product.id) : false;

  const handleAddTocart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addToCart(product);
    return toast.success('Producto añadido al carrito', {
      autoClose: 1500,
    });
  };

  if (isAuth == null) {
    return <Loader />;
  }

  if (isAuth == false) {
    return (
      <div>
        <p>
          Por favor,{' '}
          <span
            onClick={(e) => {
              e.stopPropagation(); // ✅ evita que se dispare el click del padre
              router.push(routes.login); // ✅ lleva al login
            }}
            className="text-primary-500 underline hover:font-medium cursor-pointer"
          >
            inicia sesión
          </span>{' '}
          para agregar productos al carrito.
        </p>
      </div>
    );
  }

  return (
    <Button
      label={isOnCart ? 'Producto agregado' : 'Agregar al carrito'}
      className="w-full"
      onClick={isOnCart ? () => null : handleAddTocart}
      //disabled={isOnCart}
    />
  );
};

export default AddCartButton;
