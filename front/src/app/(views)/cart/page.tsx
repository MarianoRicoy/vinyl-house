import React from 'react';
import { TbVinyl } from 'react-icons/tb';
import CreateOrder from './components/create-order';
import ProductsCartList from './components/products-cart-list';

const PageCart = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300 text-zinc-800">
      
      {/* 🛒 Carrito - lado izquierdo */}
      <div className="w-full md:w-1/2 px-8 py-12 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold"></h1>
        <CreateOrder />
        </div>

        {/* Título */}
        <div className="flex items-center gap-3">
          <TbVinyl className=" h-10 text-primary-500" />
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800">Mi Carrito</h1>
        </div>
        {/* Lista de productos */}
        <ProductsCartList />
        </div>
      {/* Imagen - lado derecho  */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-black/30 z-10 backdrop-blur-sm" />
        <img
          src="/fondoViniloV.jpg"
          alt="Decoración"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
    </div>
  );
};
export default PageCart;
