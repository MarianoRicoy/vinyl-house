import React from 'react';
import { routes } from '@/routes';
import { redirect } from 'next/navigation';
import { getProductById } from '@/services/products';
import AddCartButton from '@/components/ui/product-card/add-cart-button';

export default async function Page({
  params,
}: {
  params: Params<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const id = slug[0];

  //simulamos llaada al back y consultamos por id el detalle del producto,para simular hacemos un find con el array harcodeado de productos q tenemos en el home
  //const product = products.find((p) => p.id === Number(id));
  const product = await getProductById(id)

  //si en la busqueda no existe ningun prod. con ese id redirecciona al usuario a una pag NotFound
  if (!product) {
    return redirect(routes.notFound);
  }

  return (
<div
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{ backgroundImage: "url('')" }}
>
  <div className="bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
    {/* Imagen del producto */}
    <div className="md:w-1/2 w-full">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
    </div>


        {/* Detalles del producto */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-sm uppercase text-gray-400 mb-4 tracking-wide">Categoría: {product.categoryId}</p>
            <p className="text-gray-300 text-base mb-6">{product.description}</p>

            {/* Precio y stock */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-semibold text-gray-400">${product.price}</span>
              <span className={`text-sm px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-gray-700 text-white' : 'bg-red-700 text-white'}`}>{product.stock > 0 ? 'En stock' : 'Agotado'}</span>
            </div>
          </div>

          {/* Botón */}
<AddCartButton/>
        </div>
      </div>
    </div>
  );
}

