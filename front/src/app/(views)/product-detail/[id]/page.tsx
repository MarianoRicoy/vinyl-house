import React from 'react';

export default async function Page({
  params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const { id } = await params;

  return <div>Pagina Producto - {id}</div>;
}
