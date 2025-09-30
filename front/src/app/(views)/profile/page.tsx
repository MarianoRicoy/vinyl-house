import React from 'react';
import UserData from './components/user-data';
import OrdersList from './components/orders-list';

const PageProfile = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-zinc-950 text-white">
      
      {/* Columna de contenido (Perfil + Órdenes) */}
      <div className="w-full lg:w-[55%] px-6 py-10 bg-zinc-900 min-h-screen flex flex-col gap-10 shadow-xl z-10">
        
        {/* Perfil */}
        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-2xl font-bold mb-4 border-b border-zinc-700 pb-2">Perfil del Usuario</h2>
          <UserData />
        </div>

        {/* Órdenes */}
        <div className="rounded-xl border border-zinc-800 p-6">
          <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2 mb-4">Órdenes</h3>
          <OrdersList />
        </div>
      </div>

      {/* Imagen destacada fija al costado */}
      <div className="hidden lg:block lg:w-[45%] relative h-screen">
        <img
          src="/fondoViniloIII.jpg"
          alt="Imagen de perfil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
    </div>
  );
};

export default PageProfile;
