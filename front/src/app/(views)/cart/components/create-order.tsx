'use client';

import Modal from '@/components/layout/modal';
import { UseAuthContext } from '@/context/authContext';
import { useCartContext } from '@/context/cartContext';
import { routes } from '@/routes';
import { postOrders } from '@/services/orders';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';


const CreateOrder = () => {
  const router = useRouter();
  const { token, user } = UseAuthContext();
  const { cart, resetCart } = useCartContext();


  // logicas del modal y boton
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

const handleOrder = async () => {
  try {
    if (!user || !user.id) return;

    const payload: CreateOrderDto = {
      products: cart?.map((product) => product.id!) || [],
      userId: user.id,
    };


      const res = await postOrders(token || "", payload)

      if (!res || res?.error) {
        return toast.error("Ocurrio un error al generar la orden");
      }

      toast.success(`Orden. #${res?.id}: Creada con exito`)
      
      setTimeout(() => {
        resetCart();
      }, 1980);

      setTimeout(() => {
        router.push(routes.profile);
      }, 2000);
    } catch (e) {
      console.warn("Error create order", (e as Error)?.message)
      toast.error("Ocurrio un error al generar la orden");
    }
  };



  return (
    <>
      <button
        onClick={onOpen}
        className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md hover:bg-zinc-700 transition"
      >
        Crear orden
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="space-y-4">
          <div className="text-lg">¿Estás seguro que deseas crear una orden?</div>

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="border border-zinc-500 text-zinc-700 px-4 py-2 rounded-md hover:bg-zinc-100 transition"
            >
              Cancelar
            </button>

            <button
              onClick={handleOrder}
              className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md hover:bg-zinc-700 transition"
            >
              Crear orden
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateOrder;
