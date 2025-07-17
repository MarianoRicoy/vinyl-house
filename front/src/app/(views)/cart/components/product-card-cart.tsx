"use client";
import { useCartContext } from "@/context/cartContext";
import React from "react";

const ProductCartCard = (product: Partial<IProduct>) => {
  const { removeFromCart } = useCartContext();

  return (
    <li
      //key={product.id}
      className="flex gap-4 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg mr-4"
      />
      <div className="flex-1">
        <h3 className="m-0">{product.name}</h3>
        <span className="font-bold text-gray-900">${product.price}</span>
        <button
          className="ml-4 bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600"
          onClick={() => removeFromCart(product.id || 0)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};

export default ProductCartCard;
