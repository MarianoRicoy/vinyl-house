'use client'
import { products } from '@/helpers/products';
import React from 'react';
import { useCartContext } from '@/context/cartContext';
import Link from 'next/link';

const PageLanding = () => {
    const cart = products.slice(0, 4);
    const { addToCart } = useCartContext();

    return (
        <div
            className="min-h-screen bg-zinc-950 text-white px-6 py-12 bg-cover bg-center"
            style={{
                backgroundImage: "url('/fondoVinilo.jpg')",
            }}
        >
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Hero section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Vinilos que cambiaron la historia
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Ediciones originales de dos álbumes legendarios. Piezas de colección.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                    >
                        Compralos ahora
                    </Link>
                </section>

                {/* Productos */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold">{product.name}</h2>
                                    <p className="text-gray-400 text-sm">{product.description}</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-white">
                                        ${product.price}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="text-sm bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                                    >
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Botones de navegación */}
                <section className="text-center space-x-4 mt-12">
                    <Link
                        href="/cart"
                        className="inline-block bg-white text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                    >
                        🛒 Ir al carrito
                    </Link>
                    <Link
                        href="/"
                        className="inline-block bg-white text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                    >
                        🏠 Volver a la home
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default PageLanding;
