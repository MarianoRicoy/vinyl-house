import React from 'react';
import UserData from './components/user-data';
import OrdersList from './components/orders-list';

const PageProfile = () => {
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
          <UserData />

          {/* Órdenes */}
          <div className="bg-zinc-900 rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-4">Órdenes</h3>
          <OrdersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProfile;
