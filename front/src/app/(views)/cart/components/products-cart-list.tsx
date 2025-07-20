'use client'
import { useCartContext } from '@/context/cartContext';
import React from 'react'
import ProductCartCard from './product-card-cart';

const ProductsCartList = () => {
  const { cart, } = useCartContext();
  const total = cart?.reduce((sum, product) => sum + (product.price || 0), 0) || 0;
  return (
    <>
        <ul className="space-y-6">
          {cart?.map((product) => (
          <ProductCartCard key={product.id} {...product} />
          ))}
        </ul>
          <div className="flex justify-between items-center border-t border-zinc-200 pt-6 text-xl font-semibold text-zinc-800">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
    </>
  )
}

export default ProductsCartList