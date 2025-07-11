'use client';
import { categories } from '@/helpers/categories';
import React, { FC } from 'react';

const ProductCardCart: FC<Partial<IProduct>> = ({ 
  description, 
  id, 
  image, 
  name, 
  price, 
  stock,
  categoryId 
  }) => {
    const currentCategory = categories.find((category) => category.id === categoryId
    );

  return (
    <div className='flex gap-2'>
    <div>
      <img src={image} alt={name}/>  
    </div>
    <div>
      <span>{currentCategory?.name || "Categoria"}</span>
      <h3>{name}</h3>
      <p>{description}</p>
      <p> {(stock || 0) - 1} mas disponibles</p>
      <span>${price}</span>
    </div>
    <div>
      <button label="eliminar"/>
    </div>
  </div>
  );
};

export default ProductCardCart;
