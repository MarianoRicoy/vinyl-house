import React from 'react';

const PageProfile = () => {
  const user = {
    id: 1,
    name: 'Mariano Ricoy',
    email: 'nano@example.com',
    address: 'Calle 123, Miramar, Buenos Aires',
    phone: '+54 9 223 4567890',
    role: 'user',
  };

  const orders = [
    {
      id: 2,
      status: 'approved',
      date: '2025-07-05T18:14:17.172Z',
      products: [
        {
          id: 2,
          name: 'Kendrick Lamar – To Pimp a Butterfly',
          description: 'Un viaje musical revolucionario que fusiona jazz, funk y rap, con letras profundas y políticas.',
          price: 40,
          stock: 10,
          image: 'https://ik.imagekit.io/oqtavryhy/kendrick.webp?updatedAt=1751737324917',
          categoryId: 1,
        },
        {
          id: 4,
          name: 'The Notorious B.I.G. – Ready to Die',
          description: 'Un retrato crudo y honesto de la vida en Brooklyn, con beats icónicos y flow legendario.',
          price: 38,
          stock: 8,
          image: 'https://ik.imagekit.io/oqtavryhy/biggie.webp?updatedAt=1751737131881',
          categoryId: 1,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Imagen decorativa a la izquierda */}
        <div className="lg:w-1/2 w-full">
          <img src="/fondoViniloIII.jpg" alt="FOTO" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
        </div>

        {/* Perfil + órdenes */}
        <div className="lg:w-1/2 w-full flex flex-col gap-10">
          {/* Perfil */}
          <div className="bg-zinc-900 rounded-2xl shadow-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold border-b border-zinc-700 pb-2">Perfil de Usuario</h2>
            <p>
              <strong>Nombre:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Dirección:</strong> {user.address}
            </p>
            <p>
              <strong>Teléfono:</strong> {user.phone}
            </p>
            <p>
              <strong>Rol:</strong> {user.role}
            </p>
          </div>

          {/* Órdenes */}
          <div className="bg-zinc-900 rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-4">Órdenes</h3>
            <ul className="space-y-4">
              {orders.map((order) => (
                <li key={order.id} className="bg-zinc-800 rounded-xl p-4 shadow-sm hover:shadow-md transition space-y-4">
                  <div>
                    <p>
                      <strong>ID:</strong> {order.id}
                    </p>
                    <p>
                      <strong>Estado:</strong> {order.status}
                    </p>
                    <p>
                      <strong>Fecha:</strong> {new Date(order.date).toLocaleString('es-AR')}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase text-gray-400 mb-2 tracking-widest">Productos:</p>
                    <ul className="space-y-4">
                      {order.products.map((product) => (
                        <li key={product.id} className="flex items-start gap-4 bg-zinc-900 rounded-lg p-4 shadow-inner">
                          <img src={product.image} alt={product.name} className="w-20 h-28 object-cover rounded-md border border-zinc-700" />
                          <div className="flex-1 space-y-1 text-sm">
                            <p>
                              <strong>Nombre:</strong> {product.name}
                            </p>
                            <p>
                              <strong>Descripción:</strong> {product.description}
                            </p>
                            <p>
                              <strong>Precio:</strong> ${product.price}
                            </p>
                            <p>
                              <strong>Stock:</strong> {product.stock}
                            </p>
                            <p>
                              <strong>ID Categoría:</strong> {product.categoryId}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProfile;
