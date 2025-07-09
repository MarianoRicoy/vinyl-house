'use client';
import React, { FC } from 'react';
import LabelStock from './label-stock/label-stock';
import Button from './button';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';

const ProductCard: FC<Partial<IProduct>> = ({ description, id, image, name, price, stock }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${routes.product_detail}/${id}/${name}`);
  };

  return (
    <div
      className="w-full max-w-sm
     bg-white border
      border-gray-200
       rounded-lg shadow-sm
        dark:bg-gray-800
         dark:border-gray-700"
      onClick={handleClick}
    >
      <img className="p-8 rounded-t-lg" src={image || 'https://via.placeholder.com/150'} alt={name || 'Product Image'} />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name || 'Product Name'}</h5>
        </a>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description || 'Product Description'}</p>

        <LabelStock stock={stock} />

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price || '00.0'}</span>
          <Button label="Agregar al Carrito" variant="tertiary" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
