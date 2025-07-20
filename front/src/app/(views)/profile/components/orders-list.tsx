'use client'
import { UseAuthContext } from '@/context/authContext';
import { getUsersOrders } from '@/services/orders';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const OrdersList = () => {
  const [orders, setOrders] = useState<IOrder[] | null>();
  const [loading, setLoading] = useState<boolean | null>(true);

  const { token } = UseAuthContext();

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);

        if(token === null){
          throw Error('Token dont exist')
        }
        return setOrders(await getUsersOrders(token!));
      } catch (e) {
        console.warn("error fetching orders", (e as Error)?.message);
        setOrders([]);
      } finally {
        setLoading(false)
      }
    };

    if (typeof token === 'string') request();

  }, [token]);

  if (loading) {
    return <Loader />
  }

  return (
    <ul className="space-y-4">
      {orders?.map((order) => (
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

              {!Boolean(orders?.length) && <span>No hay ordenes para este usuario</span>}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default OrdersList