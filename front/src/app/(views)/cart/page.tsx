import { products } from '@/helpers/products';
import React from 'react';
import { FaCompactDisc } from 'react-icons/fa';

const PageCart = () => {
  const cart = products.slice(0, 4); // ejemplo harcodeado

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
    <div className="flex justify-between w-full">
      <h1>Mi Carrito</h1>
      <button className="bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition">
      Crear orden  
      </button> 
    
    </div>
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Título con ícono */}
        <div className="flex items-center gap-3">
          <FaCompactDisc className="text-gray-300 text-3xl" />
          <h1 className="text-3xl font-bold tracking-tight">Mi Carrito</h1>
        </div>

        {/* Lista de productos */}
        <ul className="space-y-6">
          {cart.map((product) => (
            <li
  key={product.id}
  className="flex gap-4 bg-zinc-900 rounded-xl p-4 shadow-md relative"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-24 h-32 object-cover rounded-md border border-zinc-700"
  />
  <div className="flex-1 space-y-1 text-sm">
    <p className="text-lg font-semibold">{product.name}</p>
    <p className="text-gray-400">{product.description}</p>
    <p className="text-gray-300">
      <strong>Precio:</strong> ${product.price}
    </p>
  </div>

  {/* Botón eliminar */}
  <button
    className="absolute top-2 right-2 text-sm text-red-400 hover:text-red-500 transition"
  
  >
    ✕
  </button>
</li>
          ))}
        </ul>

        {/* Total */}
        <div className="flex justify-between items-center border-t border-zinc-700 pt-6 text-xl font-semibold">
          <span>Total:</span>
          <span className="text-gray-400">${total.toFixed(2)}</span>
        </div>

        {/* Imagen arriba del Footer */}
        <div className="w-full mt-12">
          <img
            src="/fondoViniloV.jpg" // 
            alt="Decoración"
            className="w-full max-h-72 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </>
);
};

export default PageCart;


