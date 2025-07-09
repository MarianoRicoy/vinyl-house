import React from 'react';
import { products } from '@/helpers/products';
import { routes } from '@/routes';
import { redirect } from 'next/navigation';

export default async function Page({
  params,
  //searchParams,
}: {
  params: Params<{ slug: string[] }>;
  searchParams: SearchParams;
}) {
  const { slug } = await params;
  const id = slug[0];

  console.log('slug', slug);

  //simulamos llaada al back y consultamos por id el detalle del producto,para simular hacemos un find con el array harcodeado de productos q tenemos en el home
  const product = products.find((p) => p.id === Number(id));

  //si en la busqueda no existe ningun prod. con ese id redirecciona al usuario a una pag NotFound
  if (!product) {
    return redirect(routes.notFound);
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-8" style={{ backgroundImage: "url('/fondoVinilo.jpg')" }}>
      <div className="bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Imagen del producto */}
        <div className="md:w-1/2 w-full">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-sm uppercase text-gray-400 mb-4 tracking-wide">Categoría: {product.categoryId}</p>
            <p className="text-gray-300 text-base mb-6">{product.description}</p>

            {/* Precio y stock */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-semibold text-green-400">${product.price}</span>
              <span className={`text-sm px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}>{product.stock > 0 ? 'En stock' : 'Agotado'}</span>
            </div>
          </div>

          {/* Botón */}
          <button disabled={product.stock === 0} className={`mt-4 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${product.stock > 0 ? 'bg-gray-100 text-black hover:bg-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>
            {product.stock > 0 ? 'Agregar al carrito' : 'No disponible'}
          </button>
        </div>
      </div>
    </div>
  );
}

//si todo esta ok, y si encontro un producto va a renderizar o devolver la ui del producto con los datos
/*return (
    <div style={{ maxWidth: 600, margin: "2em auto", padding: "2rem", border: "1px solid #eee", borderRadius: 8 }}>
      <h1 style={{ marginBottom: 16 }}>{product.name}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 8, marginBottom: 16 }}
        />
      )}
      <p style={{ fontSize: 18, marginBottom: 8 }}><strong>Precio:</strong> ${product.price}</p>
      <p style={{ color: "#555", marginBottom: 16 }}>{product.description}</p>
      <button
        style={{
          padding: "0.75rem 2rem",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};*/
