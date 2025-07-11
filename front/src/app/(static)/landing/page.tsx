import { products } from '@/helpers/products';
import React from 'react';

const PageLanding = () => {
    const cart = products.slice(0, 4);

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
        <a
            href="/cart"
            className="inline-block bg-white text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
            Compralos ahora
        </a>
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
                <a
                    href="/cart"
                    className="text-sm bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                    Añadir al carrito
                </a>
                </div>
            </div>
            </div>
        ))}
        </section>

        {/* CTA final */}
        <section className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">
            Ediciones limitadas. 
        </h3>
        <a
            href="/cart"
            className="bg-white text-zinc-950 font-semibold px-8 py-4 rounded-md hover:bg-gray-200 transition"
        >
            Ir al carrito y finalizar compra →
        </a>
        </section>
    </div>
    </div>
);
};

export default PageLanding;
