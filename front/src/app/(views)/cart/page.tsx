import { products } from '@/helpers/products';
import React from 'react';
import { TbVinyl } from 'react-icons/tb';

const PageCart = () => {
  const cart = products.slice(0, 4);

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300 text-zinc-800">
      
      {/* 🛒 Carrito - lado izquierdo */}
      <div className="w-full md:w-1/2 px-8 py-12 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold"></h1>
          <button className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md hover:bg-zinc-700 transition">
            Crear orden
          </button>
        </div>

        {/* Título */}
        <div className="flex items-center gap-3">
          <TbVinyl className=" h-10 text-primary-500" />
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800">Mi Carrito</h1>
        </div>

        {/* Lista de productos */}
        <ul className="space-y-6">
          {cart.map((product) => (
            <li
              key={product.id}
              className="flex gap-4 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-32 object-cover rounded-md border border-zinc-300"
              />
              <div className="space-y-1 text-sm md:text-base flex-1">
                <p className="font-semibold text-zinc-900">{product.name}</p>
                <p className="text-zinc-500 line-clamp-2">{product.description}</p>
                <p className="text-zinc-700">
                  <strong>Precio:</strong> ${product.price}
                </p>
              </div>
              <button className="absolute top-2 right-2 text-sm text-red-400 hover:text-red-500 transition">
                Borrar
              </button>
            </li>
          ))}
        </ul>

        {/* Total */}
        <div className="flex justify-between items-center border-t border-zinc-200 pt-6 text-xl font-semibold text-zinc-800">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* 🖼️ Imagen - lado derecho sutil */}
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
