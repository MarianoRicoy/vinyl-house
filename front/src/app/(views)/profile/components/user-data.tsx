'use client'
import Loader from "@/components/ui/loader/loader";
import { UseAuthContext, } from "@/context/authContext";
import React from "react";

const UserData = () => {
  const { user } = UseAuthContext();

  if (user === null) {
    return <Loader minHeight="35vh"/>
  } // Si no hay usuario, no mostramos nada

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="mb-8 space-y-2">
      <p>
        <span className="font-semibold">Nombre:</span> {user.name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold">Dirección:</span> {user.address}
      </p>
      <p>
        <span className="font-semibold">Teléfono:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold">Rol:</span> {user.role}
      </p>
    </div>
  );
};

export default UserData;
